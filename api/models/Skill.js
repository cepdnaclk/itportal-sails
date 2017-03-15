/**
 * Skill.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	skillType: {
  		type: 'string', 
  		enum: [
  			'developmentEnvironment',
  			'languages',
  			'frameworks',
  			'software',
  			'hardware',
  			'theoreticalKnowledge',
  			'softSkills',
  			]
  	},
  	skillName: { type: 'string', unique: true },
  	students: { collection: 'Student', via: 'skills'},
  }

};

// Admin may change the fields