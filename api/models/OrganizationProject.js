/**
 * OrganizationProject.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	projectTitle: {type: 'string', size: 255},
  	projectDescription: {type: 'string', size: 500},
  	projectDateStarted: {type:'date'},
  	projectOrganization: {model: 'Organization', via: 'ongoingProjects'},
  	projectMembers: {collections: 'OrganizationRep', via: 'userOngoingProjects'}
  }
};

