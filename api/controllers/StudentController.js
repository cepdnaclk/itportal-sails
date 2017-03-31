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
	},
	dashboard: function(req, res){
        res.redirect('/dashboard/v1');
	},

	company_preference: function(req, res){

		req.templateData.activePage = 'students_company_preference';
		res.view('student/company_preference.ejs', req.templateData)
	},
	view_interview_status: function(req, res){

		req.templateData.activePage = 'students_view_interview_status';
		res.view('student/view_interview_status.ejs', req.templateData)
	},
	sample: function(req, res){

		req.templateData.activePage = 'students_sample';
		res.view('student/sample.ejs', req.templateData)
	},

};

