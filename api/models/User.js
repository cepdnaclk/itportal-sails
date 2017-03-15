var bcrypt = require('bcryptjs');

module.exports = {
    attributes: {
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        phone: { type: 'string', defaultsTo: '000-000-0000' },
        birthDay: { type: 'date' },
        birthYear: { type: 'integer', size: 4},

        photo: {type: 'string'},

        linksFacebook: {type: 'string'},
        linksLinkedin: {type: 'string'},
        linksStackoverflow: {type: 'string'},
        linksGithub: {type: 'string'},
        linksPortfolio: {type: 'string'},

        isStudent: { type: 'boolean', defaultsTo: false },
        isAdmin: { type: 'boolean', defaultsTo: false },
        isOrganizationRep: { type: 'boolean', defaultsTo: false },

        studentDetails: { model: 'Student', via: 'userDetails' },
        organizationRepDetails: { model: 'OrganizationRep', via: 'userDetails' },

        autoId: {
            type: 'integer',
            autoIncrement: true,
        },

        getFullName: function (){
            return this.firstName + ' ' + this.lastName;
        },
        
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};