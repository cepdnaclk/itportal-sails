function redirectToLogin(req, res) {
    req.templateData.userInformation.isAuthenticated = false;
    return res.redirect('/auth/login');
}

module.exports = function(req, res, next) {

    if (req.isAuthenticated()) {
        req.templateData.userInformation.isAuthenticated = true;
        req.templateData.userInformation.user = req.user;

         if (_.isEqual(req.user.isStudent, true)) {
                req.isWhichUser = 'student';
                return next();
        } else if (_.isEqual(req.user.isAdmin, true)) {
                req.isWhichUser = 'admin';
                return next();
        } else if (_.isEqual(req.user.isOrganizationRep, true)) {
                req.isWhichUser = 'organizationRep';
                return next();
        }
        redirectToLogin(req, res);
    } else {
        redirectToLogin(req, res);
    }
};