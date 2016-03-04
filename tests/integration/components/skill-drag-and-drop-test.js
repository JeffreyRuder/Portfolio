import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('skill-drag-and-drop', 'Integration | Component | skill drag and drop', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{skill-drag-and-drop}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#skill-drag-and-drop}}
      template block text
    {{/skill-drag-and-drop}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
