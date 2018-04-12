const express = require('express')
const app = express()

const apiRouter = require('./routes/apiRouter')
app.use('/api', apiRouter)

// const studentsRouter = require('./routes/apiRouterStudents')
// app.use('/api', studentsRouter)

// const instructorRouter = require('./routes/apiRouterInstructors')
// app.use('/api', instructorRouter)



app.listen(3000, () => {
	console.log('App running...')
})