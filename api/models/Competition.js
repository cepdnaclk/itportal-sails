/**
 * Competition.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	competitionType: {
  		type: 'string',
  		enum: [
  			'hackathon',
  			'competitiveProgramming'
  		]
  	},

  	competitionTitle: {type: 'string', size: 255},
  	competitionDescription: {type: 'string', size: 500},
  	competitionDateStarted: {type: 'date'},
  	competitionDateEnded: {type: 'date'},


    // roles
  	teamMembers: {collection: 'Student', via: 'competitions_Member'},
  	teamLeaders: {collection: 'Student', via: 'competitions_Leader'},
  	teamBackendDeveloper: {collection: 'Student', via: 'competitions_BackendDeveloper'},
  	teamFrontEndDeveloper: {collection: 'Student', via: 'competitions_FrontEndDeveloper'},
  	teamAnalyst: {collection: 'Student', via: 'competitions_Analyst'},
  	teamDocumentor: {collection: 'Student', via: 'competitions_Documentor'},
    
  	teamMentor: {collection: 'Staff', via: 'competitions_Mentor'},


  }
};

