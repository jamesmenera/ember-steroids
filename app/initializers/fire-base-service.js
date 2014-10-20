export function initialize(container, application) {
  var firebase = new Firebase('https://' + ENV.firebase_instance + '.firebaseio.com');
  application.register('firebase:main', firebase, {instantiate: false, singleton: true});
  application.inject('adapter', 'firebase', 'firebase:main');
  application.inject('route', 'firebase', 'firebase:main');
  application.inject('controller', 'firebase', 'firebase:main');
  application.inject('view', 'firebase', 'firebase:main');
};

export default {
  name: 'fire-base-instance',
  initialize: initialize
};
