const express = require("express")
const router = express.Router()
const moment = require("moment")

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Get Events",
		// events: events,
		// -- would be the events from the database
	})
})

router.post("/", (req, res, next) => {
	const timestamp = moment()
	if (req.body.type === "") {
		res.status(406).json({
			message: "Please enter an event",
		})
	} else {
		const type = req.body.type

		res.status(200).json({
			type: type,
			created: timestamp,
		})
	}
})

module.exports = router
