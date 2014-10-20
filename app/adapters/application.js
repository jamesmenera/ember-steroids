import DS from 'ember-data';
import ENV from 'ember-steroids/config/environment';

/* globals Firebase */

export default DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://' + ENV.firebase_instance + '.firebaseio.com')
});
