import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('ticket', params.ticket_id);
  }
});
