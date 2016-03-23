import Ember from 'ember';

export default Ember.Component.extend({
  selectedSkills: Ember.inject.service(),
  length: Ember.computed.alias('selectedSkills.skills.length'),
  showAllProjects: false,

  sortProperty: ['featured:desc'],
  sortedProjects: Ember.computed.sort('model.projects', 'sortProperty')
});
