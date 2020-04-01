const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
	const token = req.header("x-auth-token");
	if (!token) {
		return res.status(401).send("No token, Unauthorized!");
	}
	jwt.verify(token, config.get("jwtSecret"), (err, decoded) => {
		if (err) {
			return res.status(401).send(err.message);
		}
		req.user = decoded.user;
		next();
	});
};
