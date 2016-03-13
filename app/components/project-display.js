import Ember from 'ember';

export default Ember.Component.extend({
  selectedSkills: Ember.inject.service(),
  length: Ember.computed.alias('selectedSkills.skills.length'),
  showAllProjects: false
});
