export function initialize(container, application) {
  application.inject('route', 'fireBaseService', 'service:fire-base');
  application.inject('controller', 'fireBaseService', 'service:fire-base');
  application.inject('view', 'fireBaseService', 'service:fire-base');
};

export default {
  name: 'fire-base-service',
  initialize: initialize
};
