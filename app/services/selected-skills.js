import Ember from 'ember';

export default Ember.Service.extend({
  skills: [],

  add(skill) {
    this.get('skills').pushObject(skill);
  }
});
