/**
 * OrganizationController
 *
 * @description :: Server-side logic for managing Organizations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	all: function(req, res){
		res.view('listings/organizations', req.templateData)
	}
};

