import Ember from 'ember';

var { set } = Ember;

export default Ember.Component.extend({
  classNames: ['draggableDropzone'],
  classNameBindings: ['dragClass'],
  dragclass: 'deactivated',

  dragLeave(event) {
    event.preventDefault();
    set(this, 'dragClass', 'deactivated');
  },

  dragOver(event) {
    event.preventDefault();
    set(this, 'dragClass', 'activated');
  },

  drop(event) {
    var data = event.dataTransfer.getData('text/data');
    this.sendAction('selectSkill', data);
    set(this, 'dragClass', 'deactivated');
  },

  actions: {
    removeSkill(skill) {
      this.sendAction('removeSkill', skill);
    }
  }
});
