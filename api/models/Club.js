/**
 * Club.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	clubTitle: {type: 'string', size: 255},
  	clubDescription: {type: 'string', size: 500},
  	clubYear: {type: 'integer', size: 4},

  	members: {collection: 'Student', via: 'clubs'},

  	president: { model: 'Student', via: 'club_president' },
  	secretary: { model: 'Student', via: 'club_secretary' },
  	vicePresident: { model: 'Student', via: 'club_vicePresident' },
  	viceSecretary: { model: 'Student', via: 'club_viceSecretary' },
    juniorTreasurer: { model: 'Student', via: 'club_juniorTreasurer' },
    committee: { collection: 'Student', via: 'club_committee'},

    seniorTreasurer: { model: 'Staff', via: 'clubsSeniorTreasurer' },
  	advisor: { model: 'Staff', via: 'clubsAdvising' }
  }
};

