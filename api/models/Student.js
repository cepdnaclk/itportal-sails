/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	userDetails: {model: 'User', via: 'studentDetail'},
  	
  	registrationNumber: {type: 'string', defaultsTo: 'E/XX/XXX'},
  	GPA: {type: 'float', defaultsTo: 0.0},
  	coursesFollowed: { collection: 'Course', via: 'students' },

	skills: { collection: 'Skill', via: 'students' },

	project_Leader: { collection: 'Project', via: 'teamLeaders'},
	project_BackendDeveloper: { collection: 'Project', via: 'teamBackendDeveloper'},
	project_FrontEndDeveloper: { collection: 'Project', via: 'teamFrontEndDeveloper'},
	project_Analyst: { collection: 'Project', via: 'teamAnalyst'},
	project_Documentor: { collection: 'Project', via: 'teamDocumentor'},
	project_Member: { collection: 'Project', via: 'teamMembers'},

	competitions_Leader: { collection: 'Competition', via: 'teamLeaders'},
	competitions_BackendDeveloper: { collection: 'Competition', via: 'teamBackendDeveloper'},
	competitions_FrontEndDeveloper: { collection: 'Competition', via: 'teamFrontEndDeveloper'},
	competitions_Analyst: { collection: 'Competition', via: 'teamAnalyst'},
	competitions_Documentor: { collection: 'Competition', via: 'teamDocumentor'},
	competitions_Member: { collection: 'Competition', via: 'teamMembers'},

	clubs: { collection: 'Club', via: 'members'},
	club_president: {collection: 'Club', via: 'president'},
	club_secretary: {collection: 'Club', via: 'secretary'},
	club_vicePresident: {collection: 'Club', via: 'vicePresident'},
	club_viceSecretary: {collection: 'Club', via: 'viceSecretary'},
	club_juniorTreasurer: {collection: 'Club', via: 'juniorTreasurer'},
	club_committee: {collection: 'Club', via: 'committee'},
	sports: { collection: 'Sport', via: 'members'},

	organizationsApplied: {collection: 'Organization', via: 'internsApplied'},
	organizationsInterviewed: {collection: 'Organization', via: 'internsInterviewed'},
	organizationsAccepted: {collection: 'Organization', via: 'internsAccepted'},
	organizationsJoined: {collection: 'Organization', via: 'internsJoined'},

  },	

  // followCourse: function (options, cb) {

  //   User.findOne(options.id).exec(function (err, theUser) {
  //     if (err) return cb(err);
  //     if (!theUser) return cb(new Error('User not found.'));
  //     theUser.coursesFollowed.add(options.courses);
  //     theUser.save(cb);
  //   });
  // }
};

