const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// MODELS
const User = require("../models/User");

// POST | Register User | Public
router.post(
	"/register",
	[
		check("username", "Please provide a Username")
			.not()
			.isEmpty(),
		check("email", "Please provide a valid Email").isEmail(),
		check(
			"password",
			"Please provide a password with atleast 6 characters"
		).isLength({ min: 6 })
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });

		const { username, email, password } = req.body;

		User.findOne({ email }).then(user => {
			if (user) {
				errors.email = "User already exist";
				return res.status(400).json({ errors });
			}
		});

		const newUser = new User({ username, password, email });

		bcrypt.genSalt(10).then(salt => {
			bcrypt.hash(newUser.password, salt).then(hash => {
				newUser.password = hash;
				const payload = {
					user: {
						id: newUser.id,
						email: newUser.email
					}
				};
				jwt.sign(
					payload,
					config.get("jwtSecret"),
					{ expiresIn: 36000 },
					(err, token) => {
						if (err) throw err;
						newUser
							.save()
							.then(user => {
								res.status(200).json({ user, token });
							})
							.catch(err => {
								console.log(err.message);
							});
					}
				);
			});
		});
	}
);

module.exports = router;
