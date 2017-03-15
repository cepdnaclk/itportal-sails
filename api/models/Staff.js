/**
 * Staff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	fullName: {type: 'string'},
  	courses: { collection: 'Course', via: 'teachers' },
  	clubsSeniorTreasurer: { collection: 'Club', via: 'seniorTreasurer' },
  	clubsAdvising: { collection: 'Club', via: 'advisor' },
  	
  	project_Mentor: { collection: 'Project', via: 'teamMentor'},
	competitions_Mentor: { collection: 'Competition', via: 'teamMentor'},
  }
};

