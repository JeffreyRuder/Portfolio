import Ember from 'ember';

export function cleanCSS(params) {
  return new Ember.Handlebars.SafeString("background: url(assets/images/" + params + ") no-repeat top left;background-size:fill;");
}

export default Ember.Helper.helper(cleanCSS);
