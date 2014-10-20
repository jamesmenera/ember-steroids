import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    logMeIn: function(model){
      console.log('this:', this);
      console.log('model:', model);
      
      model.authWithPassword({
        email: model.get('email'),
        password: model.get('password')
      }, function(error, authData) {
        if (error === null) {
          // user authenticated with Firebase
          console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
        } else {
          console.log("Error authenticating user:", error);
        }
        });
    }
  }
});
