import Ember from 'ember';

export default Ember.Component.extend({
  selectedSkills: Ember.inject.service(),

  availableSkills: Ember.computed.setDiff('skills', 'selectedSkills.skills'),

  actions: {
    selectSkill(skillId) {
      var selectedSkills = this.get('selectedSkills.skills');
      var skill = this.get('skills').objectAt(skillId);
      if (!selectedSkills.contains(skill)) {
        return this.get('selectedSkills').add(skill);
      }
    },
    
    removeSkill(skill) {
      return this.get('selectedSkills.skills').removeObject(skill);
    }
  }
});
