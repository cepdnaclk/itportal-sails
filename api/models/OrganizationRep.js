/**
 * OrganizationRep.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	userDetails: {model: 'User', via: 'organizationRepDetails'},
  	userEducationalInstitute: { model: 'EducationalInstitute', via: 'students'},
  	userOngoingProjects: {type: 'OrganizationProject', via: 'projectMembers'},

  	organization: {model: 'Organization', via: 'organizationReps'},
  	organizationRole: {type: 'string'},
	organizationSkills: { collection: 'OrganizationSkill', via: 'organizationReps' },

  }
};

