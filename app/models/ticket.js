import DS from 'ember-data';

export default DS.Model.extend({
  who: DS.attr(),
  what: DS.attr(),
  when: DS.attr('date'),
  where: DS.attr()

});
