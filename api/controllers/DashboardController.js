/**
 * DashboardController
 *
 * @description :: Server-side logic for managing dashboards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `DashboardController.v1()`
   */
  v1: function (req, res) {
    return res.view('dashboards/' + req.isWhichUser, req.templateData);
  },

};

