import Ember from 'ember';

export function initialize(container, application) {
  var i18n = {};

  application.register('utils:i18n', i18n, { instantiate: false });
  application.inject('route', 'i18n', 'utils:i18n');
  application.inject('model', 'i18n', 'utils:i18n');
  application.inject('component', 'i18n', 'utils:i18n');
  application.inject('controller', 'i18n', 'utils:i18n');

  application.localeStream.subscribe(function(stream) {
    Ember.set(i18n, 'locale', stream.value());
  });
}

export default {
  name: 'i18n',
  after: 't',
  initialize: initialize
};
