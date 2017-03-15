/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	courseId: {type: 'string', size: 5, unique: true},
  	courseName: {type: 'string'},
  	students: { collection: 'Student', via: 'coursesFollowed'},
  	teachers: { collection: 'Staff', via: 'courses'}
  }
};

