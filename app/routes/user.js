export default Ember.Route.extend({
  model() {
    return this.store.findRecord('user', 'ryrych');
  },
  actions: {
    star(repo) {
      repo.save();
    },

    createIssue(params) {
      let newIssue = this.store.createRecord('issue', {
        title: params.title,
        body: params.description,
      });

      newIssue.save();
    },
  }
});

