import Ember from 'ember';

export default Ember.Controller.extend({
  links:[
    {
      name:'Home',
      location:'index',
      icon:'home'
    },
    {
      name:'Books',
      location:'books',
      icon:'book'
    }
  ],
  actions:{
    goToRoute(value) {
      this.transitionToRoute(value);
    }
  }
});
