const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const router = express.Router();

// MODELS
const User = require("../models/User");

// POST | Login User | Public
router.post(
	"/login",
	[
		check("email", "Please enter your valid email").isEmail(),
		check("password", "Please enter your correct password").exists({
			checkFalsy: true
		})
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) return res.status(400).json({ errors });

		const { email, password } = req.body;

		User.findOne({ email }).then(user => {
			if (!user) {
				errors.email = "User does not exist";
				return res.status(400).json({ errors });
			}
			bcrypt.compare(password, user.password).then(isMatch => {
				if (!isMatch) {
					errors.password = "Password incorrect";
					return res.status(400).json({ errors });
				}

				const payload = {
					user: {
						id: user.id,
						email: user.id
					}
				};
				jwt.sign(
					payload,
					config.get("jwtSecret"),
					{ expiresIn: 36000 },
					(err, token) => {
						if (err) throw err;
						res.status(200).json({ token });
					}
				);
			});
		});
	}
);

// GET | User auth | Private
router.get("/", auth, (req, res) => {
	User.findById(req.user.id)
		.select("-password")
		.then(user => {
			if (!user) {
				return res.status(401).send("Invalid signature");
			}
			res.status(200).json({ user });
		})
		.catch(err => {
			console.log(err.message);
			res.status(401).send("Server Error");
		});
});

module.exports = router;
