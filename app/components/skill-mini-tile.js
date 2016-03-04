import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    removeSkill(skill) {
      return this.sendAction('removeSkill', skill);
    }
  }
});
