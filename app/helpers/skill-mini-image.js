import Ember from 'ember';

export function skillMiniImage(params) {
  var skill = params[0];
  return Ember.String.htmlSafe("<img src='assets/images/" + skill.get('image') + "' class='skill-mini-image' alt='" + skill.get('name') + "'>");
}

export default Ember.Helper.helper(skillMiniImage);
