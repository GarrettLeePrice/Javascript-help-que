import Ember from 'ember';

export default Ember.Component.extend({
  timeElapsed: Ember.computed('ticket.when', function() {
    var elapsed = (new Date() - this.get('ticket.when'))/60000;
    return Math.floor(elapsed);
  }),
});
