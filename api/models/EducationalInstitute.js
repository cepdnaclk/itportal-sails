/**
 * EducationalInstitute.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	instituteName: {type: 'string'},
  	instituteFoundedYear: {type: 'string'},
  	instituteLogo: {type: 'string'},
  	instituteAddress: {type: 'string'},
  	instituteWebpage: {type: 'string'},
  	instituteStudents: {collection: 'OrganizationRep', via: 'userEducationalInstitute'},

  }
};

