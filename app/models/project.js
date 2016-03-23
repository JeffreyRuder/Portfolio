import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  image: DS.attr(),
  skills: DS.hasMany('skill'),
  github_url: DS.attr(),
  deployment_url: DS.attr(),
  description: DS.attr(),
  featured: DS.attr()
});
