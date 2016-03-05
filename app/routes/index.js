import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      skills: this.store.findAll('skill'),
      projects: this.store.findAll('project')
    });
  },
});
