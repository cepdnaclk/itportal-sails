module.exports = function(req, res, next) {

   if (req.isAuthenticated()) {
        req.templateData.userInformation.isAuthenticated = true;
        req.templateData.userInformation.user = req.user;
        return next();
    }
    else{
        req.templateData.userInformation.isAuthenticated = false;
        return res.redirect('/auth/login');
    }
};