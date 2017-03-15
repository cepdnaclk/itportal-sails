/**
 * OrganizationPositions.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

	name: {type: 'string'},
	responsibilities: {type: 'string'},
	skills: {collection: 'OrganizationSkill', via: 'organizationPositions'},
	organizations: {collection: 'Organization', via: 'internsPositionsAvailable'},
	salary: {type: 'float'},
  }
};

