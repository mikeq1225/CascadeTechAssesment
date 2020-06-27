const express = require("express")
const router = express.Router()

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Get Users",
		// users: users,
		// -- would be the users from the database
	})
})

router.post("/", (req, res, next) => {
	if (req.body.email === "") {
		res.status(406).json({
			message: "Please enter an email address",
		})
		if (req.body.phone === "") {
			res.status(406).json({
				message: "Please enter a phone number",
			})
			if (req.body.password === "") {
				res.status(406).json({
					message: "Please enter a password",
				})
			}
		}
	} else {
		const email = req.body.email
		const phone = req.body.phone
		const password = req.body.password

		res.status(201).json({
			email: email,
			phone: phone,
			pass: password,
		})
	}

	// -- this would be used to check if the email is already in the database then add a new user
	// const checkSQL1 = "SELECT count(1) as count FROM user WHERE email = ?"

	// conn.query(checkSQL1, [email], (err1, results1, fields1) => {
	// 	if (results1[0].count > 0) {
	// 		res.status(409).json({
	// 			message: "email already exists",
	// 		})
	// 	} else {
	// 		const sql2 = `INSERT INTO user (email, phone, password) VALUES (?, ?, ?)`

	// 		conn.query(
	// 			sql2,
	// 			[email, phone, password],
	// 			(err2, results2, fields2) => {
	// 				res.json({
	// 					message: "user added successfully",
	// 				})
	// 			}
	// 		)
	// 	}
	// })
})

module.exports = router
