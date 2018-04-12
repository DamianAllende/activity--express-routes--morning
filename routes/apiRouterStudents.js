const Router = require('express').Router
const apiRouterStudents = Router()


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


apiRouterStudents.get('/students', (req, res) => {
	res.json(students)

})

apiRouterStudents.post('/students', (req, res) => {
	res.json(students)

})



apiRouterStudents.delete('/students/:id', (req, res) => {
	const studentId = parseInt(req.params.id)
	const newList = students.filter(function(students) {
		return students.id === studentId
	})

	res.json(newList)
}) 

apiRouterStudents.get('/students/:id', (req, res) => {
	const studentId = parseInt(req.params.id)
	const newList = students.filter(function(students) {
		return students.id === studentId
	})

	res.json(newList)
	
})





module.exports = apiRouterStudents
