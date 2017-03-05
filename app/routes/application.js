import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('keycloak-session'),
  init: function () {
    this._super(...arguments);

      var session = this.get('session');

      // Keycloak constructor arguments as described in the keycloak documentation.
      var options = {
        "realm": "ember-test",
        "realm-public-key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiCE0VakCKf8JhjvOUCoPiobq/ZWfPvMiH3YPjrg6W+8QZtPtRsaQAI0FxOR91TINtKfI/P+q/sZDlPBA78/tcCNOnp2tvHOftDA6lo1CjtNlciPCQqdihmq+r3nSoxRfJUynq7Q2OPJeDCc7BCZZXCGkaKS8vV/nRGe9dIQRedOWQb99Odg0xXSoWi7ZZODjjl6jPM4ZjGUcS3rEkisK/pNyo9KkJRUuW+XgE6JSg47IRv35UBnEEI531G9NKg0kkkY0IV0A026bUsJWa1vO/ctd7CbdSspPGkJKU+iTN4SrVm4nXRnmO+IWwheQOm6OaTx2o3IQmdWQn8rsk5Ig2wIDAQAB",
        "url": "http://localhost:8080/auth/",
        "ssl-required": "none",
        "clientId": "ember-web",
        "credentials" : {
          "secret" : "ce9665dd-5f7d-4d98-8853-308abca7337f"
        }
      };

      // this will result in a newly constructed keycloak object
      session.installKeycloak(options);

      // set any keycloak init parameters where defaults need to be overidden
      session.set('responseMode', 'fragment');
      session.set('minValidity', 0);

      // finally init the service
      //session.initKeycloak();bo

  }
});
