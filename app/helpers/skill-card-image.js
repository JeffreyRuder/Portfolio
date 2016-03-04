import Ember from 'ember';

export function skillCardImage(params) {
  var skill = params[0];
  return Ember.String.htmlSafe("<img src='assets/images/" + skill.get('image') + "' class='skill-card-image' alt='" + skill.get('name') + "'>");
}

export default Ember.Helper.helper(skillCardImage);
