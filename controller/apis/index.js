
const jwt = require("jsonwebtoken");

const User = require("../../models/User");

module.exports.loginController = async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    try {
        const user = await User.findOne({email: email, password: password}).exec();
        if (!user) {
            return res.status(200).json({error: "No Such User"});
        } else {
            const webtoken = jwt.sign(user.toJSON(), process.env.SECRET_KEY, { expiresIn: 60 * 10 });
            return res.status(200).json({token: webtoken});
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: "Server Error"});
    }
}

module.exports.signUpController = async function(req, res) {

    const email = req.body.email;
    const password = req.body.password;

    console.log(req.body);
    try {
        const user = await User.findOne({email: email, password: password}).exec();
        if (user) {
            return res.status(200).json({error: "User Exists"});
        } else {
            User.create({email: email, password: password})
                .then((newUser) => res.status(200).json({success: "User created"}))
                .catch((err) => res.status(500).json({error: "Server Error"}));
        }
    } catch(err) {
        console.log(err);
        return res.status(500).json({error: "Server Error"});
    }
}