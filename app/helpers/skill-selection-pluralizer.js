import Ember from 'ember';

export function skillSelectionPluralizer(params) {
  var word = params[0];
  var quantity = params[1];

  var inflector = new Ember.Inflector(Ember.Inflector.defaultRules);
  inflector.irregular('this', 'these');

  if (quantity > 1) {
    return inflector.pluralize(word);
  } else {
    return word;
  }
}

export default Ember.Helper.helper(skillSelectionPluralizer);
