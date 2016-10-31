import Ember from 'ember';

export default Ember.Component.extend({
  showTicketForm: false,
  actions: {
    displayTicketForm() {
      this.set('showTicketForm', true);
    },
    hideTicketForm() {
      this.set('showTicketForm', false);
    },
    saveTicket() {
      var params = {
        who: this.get('who') ? this.get('who') : "",
        what: this.get('what') ? this.get('what') : "",
        when: new Date(),
        where: this.get('where') ? this.get('where') : "",
      };
      this.sendAction('saveTicket', params);
      this.set('showTicketForm', false);
    }
  }
});
