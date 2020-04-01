const express = require("express");
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");

const router = express.Router();

// MODELS
const Note = require("../models/Note");

// GET | Get user's note | Private
router.get("/", auth, (req, res) => {
	Note.find({ user: req.user.id })
		.then(notes => {
			res.status(200).json(notes);
		})
		.catch(err => {
			res.status(500).send("Server Error");
		});
});

// GET | Get note by id | Private
router.get("/:id", auth, (req, res) => {
	const { id } = req.params;

	Note.findById(id)
		.then(note => {
			if (note.user.toString() !== req.user.id) {
				return res.status(401).send("Invalid User");
			}
			res.status(200).json(note);
		})
		.catch(err => {
			console.log(err.message);
			res.status(500).send("Server Error");
		});
});

// POST | Create user's note | Pirvate
router.post(
	"/",
	[
		auth,
		[
			check("title", "Please enter a title")
				.not()
				.isEmpty()
		]
	],
	(req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty())
			return res.status(400).json({ errors: errors.array() });

		const { title, body } = req.body;

		Note.findOne({ title }).then(note => {
			if (note) {
				errors.title = "Note already exist";
				return res.status(400).json({ errors });
			}
			const newNote = new Note({
				title,
				body,
				user: req.user.id
			});
			newNote.save().then(note => {
				res.status(200).json(note);
			});
		});
	}
);

// DELETE | Delete user's note by id | Private
router.delete("/:id", auth, (req, res) => {
	const { id } = req.params;

	Note.findById(id)
		.then(note => {
			if (!note)
				return res.status(400).json({ errors: { msg: "No data found" } });
			if (note.user.toString() !== req.user.id) {
				return res.status(401).send("Invalid User");
			}
			Note.findByIdAndRemove(note.id)
				.then(note => {
					res.status(200).json(note);
				})
				.catch(err => {
					console.log(err.message);
					res.status(500).send("Server Error");
				});
		})
		.catch(err => {
			res.status(400).json({ errors: { msg: "No data found" } });
		});
});

// PUT | Edit user's note | Private
router.put("/:id", auth, (req, res) => {
	const { id } = req.params;
	const { title, body, updatedAt } = req.body;
	const errors = {};

	const noteFields = {};
	if (title) noteFields.title = title;
	if (body) noteFields.body = body;
	if (updatedAt) noteFields.updatedAt = updatedAt;

	Note.findById(id).then(note => {
		if (note.user.toString() !== req.user.id) {
			return res.status(401).send("Invalid User");
		}
		Note.findOne({ title }).then(existingNote => {
			if (existingNote && existingNote.title !== note.title) {
				errors.title = "Note already exists";
				return res.status(400).json({ errors });
			}
			Note.findByIdAndUpdate(id, { $set: noteFields }, { new: true }).then(note => {
        res.status(200).json(note)
      })
		});
	});
});

module.exports = router;
