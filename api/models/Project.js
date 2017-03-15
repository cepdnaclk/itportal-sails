/**
 * Project.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	projectType: {
  		type: 'string', 
  		enum: [
  			'academic', 
  			'technical',
  			'work',
  			'other',
  			]
  	},
  	projectTitle: {type: 'string', size: 255},
  	projectDescription: {type: 'string', size: 500},
  	projectDateStarted: {type:'date'},
  	projectDateEnded: {type:'date'},

  	// roles
    teamMembers: {collection: 'Student', via: 'project_Member'},
    teamLeaders: {collection: 'Student', via: 'project_Leader'},
    teamBackendDeveloper: {collection: 'Student', via: 'project_BackendDeveloper'},
    teamFrontEndDeveloper: {collection: 'Student', via: 'project_FrontEndDeveloper'},
    teamAnalyst: {collection: 'Student', via: 'project_Analyst'},
    teamDocumentor: {collection: 'Student', via: 'project_Documentor'},
    teamMentor: {collection: 'Staff', via: 'project_Mentor'},



  }
};

