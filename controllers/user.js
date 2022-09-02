const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const randomTokenSecret = require('../config/randomTokenSecret')


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => { res.status(201).json({message: 'Utilisateur créé !'})})
                .catch((error) => { res.status(400).json({ error })})
        })
        .catch(error => {res.status(400).json({ error })})
}

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(401).json({ message: 'Mot de passe ou email incorrecte'})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ message: 'Mot de passe ou email incorrecte'})
                    }
                    //create a token
                    const accessToken = jwt.sign(
                        { userId: user._id },
                        randomTokenSecret,
                        { expiresIn: '24h' } 
                    )
                    //return cookie with access_token
                    res.cookie('access_token',
                    accessToken, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 24 * 60 * 60
                    })
                    //return userId + xsrfToken
                    res.status(200).json({
                        userId: user._id,
                        xsrfToken: accessToken
                    });
                })
                .catch(error => res.status(500).json({ error }))
        })
        .catch(error => res.status(500).json({ error }))
};