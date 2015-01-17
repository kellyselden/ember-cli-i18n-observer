import Ember from 'ember';

var i18n = {};

function setLocale(locale) {
  Ember.set(i18n, 'locale', locale);
}

export function initialize(container, application) {
  application.register('utils:i18n', i18n, { instantiate: false });
  application.inject('route', 'i18n', 'utils:i18n');
  application.inject('model', 'i18n', 'utils:i18n');
  application.inject('component', 'i18n', 'utils:i18n');
  application.inject('controller', 'i18n', 'utils:i18n');

  setLocale(application.defaultLocale);

  application.localeStream.subscribe(function(stream) {
    setLocale(stream.value());
  });
}

export default {
  name: 'i18n',
  after: 't',
  initialize: initialize
};
