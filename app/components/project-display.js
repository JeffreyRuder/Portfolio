import Ember from 'ember';

export default Ember.Component.extend({
  selectedSkills: Ember.inject.service(),
  length: Ember.computed.alias('selectedSkills.skills.length'),
  showAllProjects: false,

  lengthObserver: Ember.observer("length", function() {
    if (this.get("length") > 0 ) {
      this.set("showAllProjects", false);
    }
  }),

  sortProperty: ['featured:desc'],
  sortedProjects: Ember.computed.sort('model.projects', 'sortProperty')
});
