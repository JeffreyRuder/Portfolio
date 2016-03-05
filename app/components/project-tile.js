import Ember from 'ember';

export default Ember.Component.extend({
  selectedSkills: Ember.inject.service(),
  selected: Ember.computed.alias('selectedSkills.skills'),
  skillsInCommon: Ember.computed.intersect('selected', 'project.skills'),
});
