import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  firstName: attr(),
  lastName: attr(),
  username: attr(),
  language: attr(),
  avatar: attr(),
  gravatar: attr(),
  email: attr(),
  password: attr(),
  dob: attr(),
  dateCreated: attr(),
  lastLogin: attr(),
});
