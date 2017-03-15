/**
 * Sport.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  	sportTitle: {type: 'string', size: 255},
  	sportDescription: {type: 'string', size: 500},
  	sportYear: {type: 'integer', size: 4},

  	members: {collection: 'Student', via: 'sports'},

  	captain: { model: 'Student', via: 'sports' },
  	viceCaptain: { model: 'Student', via: 'sports' },

  }
};

