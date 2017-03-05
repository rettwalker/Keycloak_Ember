import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    goToRoute() {
      this.transitionToRoute('books');
    }
  }
});
