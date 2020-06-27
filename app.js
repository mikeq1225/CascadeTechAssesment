const express = require("express")
const app = express()
const usersRoutes = require("./routes/users")
const eventRoutes = require("./routes/event")

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/users", usersRoutes)
app.use("/event", eventRoutes)

app.use((req, res, next) => {
	const error = new Error("Not Found")
	error.status = 404
	next(error)
})

app.use((error, req, res, next) => {
	res.status(error.status || 500)
	res.json({
		error: {
			message: error.message,
		},
	})
})

module.exports = app
