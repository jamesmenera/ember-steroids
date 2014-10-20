import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  
  this.route('user', { path: 'user' }, function() {
    this.route('forgot-password');
    this.route('new');
  });
});

export default Router;
