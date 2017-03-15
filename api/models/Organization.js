/**
 * Organization.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	organizationName: {type: 'string'},
  	organizationReps: {collection: 'OrganizationRep', via: 'organization'},
  	organizationlogo: {type: 'string'},
  	organizationDescription: {type: 'string'},
  	organizationFoundedYear: {type: 'integer', size: 4},
	organizationSkills: { collection: 'OrganizationSkill', via: 'organizations' },

	organizationAddress: {type: 'string'},
	organizationPhone: {type: 'string'},
	organizationEmail: {type: 'email'},

	linksFacebook: {type: 'string'},
	linksLinkedin: {type: 'string'},
	linksGithub: {type: 'string'},
	linksWebpage: {type: 'string'},

	ongoingProjects: { collection: 'OrganizationProject', via: 'projectOrganization'},

	internsNeeded: {type: 'integer'},
	internsPositionsAvailable: {collection: 'OrganizationInternPosition', via: 'organizations'},

	internsApplied: {collection: 'Student', via: 'organizationsApplied'},
	internsInterviewed: {collection: 'Student', via: 'organizationsInterviewed'},
	internsAccepted: {collection: 'Student', via: 'organizationsAccepted'},
	internsJoined: {collection: 'Student', via: 'organizationsJoined'},

  }
};

