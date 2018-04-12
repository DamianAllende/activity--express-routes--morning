const Router = require('express').Router
const apiRouter = Router()


const courses = [{
				  id: 1,
				  name: "Introduction to JavaScript",
				  length: "15 hours"
				}, {
				  id: 2,
				  name: "React.js Fundamentals",
				  length: "25 hours"
				}]



apiRouter.get('/courses', (req, res) => {
	res.json(courses)

})

apiRouter.post('/courses', (req, res) => {
	res.json(courses)

})


apiRouter.get('/courses/:id', (req, res) => {
	const courseId = parseInt(req.params.id)
	const newList = courses.filter(function(course) {
		return course.id === courseId
	})

	res.json(newList)
	
})

apiRouter.delete('/courses/:id', (req, res) => {
	const courseId = parseInt(req.params.id)
	const newList = courses.filter(function(course) {
		return course.id === courseId
	})

	res.json(newList)
}) 

apiRouter.put('/courses/:id', (req, res) => {
	const courseId = parseInt(req.params.id)
	const newList = courses.filter(function(course) {
		return course.id === courseId
	})

	res.json(newList)
}) 



// Instrutors

const instructors = [{
				  id: 1,
				  name: "Mr R"
				}, {
				  id: 2,
				  name: "Tyler"
				}, {
				  id: 3,
				  name: "John Die"
				}]



apiRouter.get('/instructors', (req, res) => {
	res.json(instructors)

})

apiRouter.post('/instructors', (req, res) => {
	res.json(instructors)

})


apiRouter.get('/instructors/:id', (req, res) => {
	const instructorsId = parseInt(req.params.id)
	const newList = instructors.filter(function(instructor) {
		return instructor.id === instructorsId
	})

	res.json(newList)
	
})


//students

const students = [{
				  id: 1,
				  name: "Damian Allende"
				}, {
				  id: 2,
				  name: "Cesar Hernandez"
				}, {
				  id: 3,
				  name: "Ingrid Garcia"
				}, {
				  id: 4,
				  name: "Maribel Navia"
				}]


apiRouter.get('/students', (req, res) => {
	res.json(students)

})

apiRouter.post('/students', (req, res) => {
	res.json(students)

})



apiRouter.delete('/students/:id', (req, res) => {
	const studentId = parseInt(req.params.id)
	const newList = students.filter(function(students) {
		return students.id === studentId
	})

	res.json(newList)
}) 

apiRouter.get('/students/:id', (req, res) => {
	const studentId = parseInt(req.params.id)
	const newList = students.filter(function(students) {
		return students.id === studentId
	})

	res.json(newList)
	
})



module.exports = apiRouter
