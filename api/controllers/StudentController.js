/**
 * StudentController
 *
 * @description :: Server-side logic for managing Students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	all: function(req, res){
		req.templateData.activePage = 'students_all';
		res.view('listings/students', req.templateData)
	}
};

