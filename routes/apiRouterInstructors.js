const Router = require('express').Router
const apiRouterInstructors = Router()


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



apiRouterInstructors.get('/instructors', (req, res) => {
	res.json(instructors)

})

apiRouterInstructors.post('/instructors', (req, res) => {
	res.json(instructors)

})


apiRouterInstructors.get('/instructors/:id', (req, res) => {
	const instructorsId = parseInt(req.params.id)
	const newList = instructors.filter(function(instructor) {
		return instructor.id === instructorsId
	})

	res.json(newList)
	
})


module.exports = apiRouterInstructors
