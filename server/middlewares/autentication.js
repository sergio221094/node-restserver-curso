const jwt = require('jsonwebtoken');

//===================================
// Check Token
//===================================

let checkToken = (req, res, next) => {

    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err
            })
        }
        req.usuario = decoded.usuario;
        next();
    });

};

module.exports = {
    checkToken
}