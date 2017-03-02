import Ember from 'ember';

export default Ember.Controller.extend({
  leftSideBarLockedOpen:true,
  leftSideBarOpen2:false,
  actions:{
    toggle(value) {
      this.set('leftSideBarLockedOpen',!this.get('leftSideBarLockedOpen'));
    }
  }
});
