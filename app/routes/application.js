import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('keycloak-session'),

  init: function () {
    this._super(...arguments);

      var session = this.get('session');

      // Keycloak constructor arguments as described in the keycloak documentation.
      var options = {
        "realm": "ember-test",
        "realm-public-key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApTKl5pUZNCTz3aRh/Us672PHVu3TSVpPpduAnvtmJgMzN6eagS5ypMKHR54i4ahS6eg+jFr9UBMzDCMgtTx+ti0+olHXD63OoQk0M6rqwujLXWHQFNQTdxN3nnN/QFHDOx8K/JI7Ef2QT0YfK+nqeq7yifVbdJ4SU2I/veTe8HVJae+1BF2NSYfDzfzG+r634Er9d2m7kBeYfJ+iJ5fUbezSSikyT+sdKRH4rGmd44m5T+yGaacUUmYI/kVvMM9N8k9LEc0nqXqtuax1T4dLgz/YL8bKZnXyNPhdoClGygUniyeGc4TwI4lvb0cv5n4481Gd8LHpY2hV5yBx5+6btwIDAQAB",
        "url": "http://localhost:8080/auth/",
        "ssl-required": "none",
        "clientId": "ember-web",
        "credentials" : {
          "secret" : "0bf19ca0-5b2e-442b-930b-503d808df399"
        }
      };

      // this will result in a newly constructed keycloak object
      session.installKeycloak(options);

      // set any keycloak init parameters where defaults need to be overidden
      session.set('responseMode', 'fragment');
      session.set('minValidity', 0);

      // finally init the service
      session.initKeycloak();

  }
});
