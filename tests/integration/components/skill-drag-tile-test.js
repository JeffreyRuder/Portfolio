import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('skill-drag-tile', 'Integration | Component | skill drag tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{skill-drag-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#skill-drag-tile}}
      template block text
    {{/skill-drag-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
