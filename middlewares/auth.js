const jwt = require('jsonwebtoken');
const randomTokenSecret = require('../config/randomTokenSecret')


module.exports = (req, res, next) => {
    try {
        const accessToken = cookies.access_token;
        const xsrfToken = headers['x-xsrf-token'];
        const decodedToken = jwt.verify(accessToken, randomTokenSecret);
        if (xsrfToken !== decodedToken.xsrfToken) {
            return res.status(401).json({ message: 'Bad xsrf token' });
          }
        else {
            const userId = decodedToken.userId;
            req.auth = {
                userId: userId
            }
        }
    next()
    } catch (error) { 
        res.status(401).json({ error })
    }
}