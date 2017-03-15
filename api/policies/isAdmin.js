function redirectToLogin(req, res) {
    req.templateData.userInformation.isAuthenticated = false;
    return res.redirect('/auth/login');
}

module.exports = function(req, res, next) {

    if (req.isAuthenticated()) {
        req.templateData.userInformation.isAuthenticated = true;
        req.templateData.userInformation.user = req.user;

        var _isAdmin = req.user.isAdmin;

        if (_.isBoolean(_isAdmin)) {
            if (_.isEqual(_isAdmin, true)) {
                return next();
            } else {

                redirectToLogin(req, res);
            }
        }

        redirectToLogin(req, res);
    } else {
        redirectToLogin(req, res);
    }
};