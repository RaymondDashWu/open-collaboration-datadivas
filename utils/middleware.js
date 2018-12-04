const jwt = require('jsonwebtoken');

// check token for every request
const verifyAuthentication = async (req, res, next) => {
    if (req.path.substring(0, 7) === '/public') {
        return next()
    }

    if (req.get('Authorization') === undefined) {
        return res.status(403).json({
            msg: 'forbidden'
        })
    }

    const authToken = req.get('Authorization').split(' ')[1]

    try {
        const verifiedToken = await jwt.verify(authToken, process.env.SECRETKEY);
        req.token = verifiedToken;
        req.userId = verifiedToken._id;
        return next();
    } catch (error) {
        console.log(err.message)
    }
}

module.exports = {
    verifyAuthentication
}