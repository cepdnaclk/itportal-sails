module.exports = function(req, res, next) {

    req.templateData = {
        title: '',
        description: '',
        userInformation: {},
        activePage: '',
    };
    return next();
};