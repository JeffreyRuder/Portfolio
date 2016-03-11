import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  isLanguage: DS.attr(),
  isTesting: DS.attr(),
  isFramework: DS.attr(),
  isBuildTool: DS.attr(),
  isDatabase: DS.attr(),
  projects: DS.hasMany('project')
});
