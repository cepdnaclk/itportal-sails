/**
 * OrganizationRepController
 *
 * @description :: Server-side logic for managing Organizationrepresentatives
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	dashboard: function(req, res){
        res.redirect('/dashboard/v1');
	},
	sample: function(req, res){
		req.templateData.activePage = 'sample';
		res.view('organization_rep/sample', req.templateData)
	}
};

