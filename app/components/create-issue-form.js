import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
    this.set('newIssue', Ember.Object.create());
  },

  actions: {
    createIssue() {
      this.sendAction('onSubmit', this.get('newIssue'));
    }
  },
});
