const jwt = require('jsonwebtoken');
const randomTokenSecret = require('../config/randomTokenSecret')

module.exports = (req, res, next) => {
    try {  
        const xsrfToken = req.headers['x-xsrf-token'];
        const decodedToken = jwt.verify(xsrfToken, randomTokenSecret);
        const userId = decodedToken.userId;
            req.auth = {
                userId: userId
            }
    next()
    } catch (error) { 
        res.status(401).json({ error })
    }
}