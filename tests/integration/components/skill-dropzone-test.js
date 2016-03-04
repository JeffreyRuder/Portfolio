import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('skill-dropzone', 'Integration | Component | skill dropzone', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{skill-dropzone}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#skill-dropzone}}
      template block text
    {{/skill-dropzone}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
