import Ember from 'ember';

export default Ember.Component.extend({
  selectedSkills: Ember.inject.service(),

  actions: {
    selectSkill(skillId) {
      console.log(skillId)
      var selectedSkills = this.get('selectedSkills.skills');
      var skill = this.get('skills').objectAt(skillId);
      console.log(skill);

      if (!selectedSkills.contains(skill)) {
        console.log('adding');
        console.log(skill);
        this.get('selectedSkills').add(skill);
        return console.log(this.get('selectedSkills'));
      }
    },

    removeSkill(skill) {
      return this.get('selectedSkills.skills').removeObject(skill);
    }
  }
});
