import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Authorization: "token foobarbar"
  },

  createRecord: function(store, type, snapshot) {
    var data = this.serialize(snapshot, { includeId: true });
    const url = `${this.host}/repos/frank06/ember-github-adapter/issues`;
    return this.ajax(url, "POST", { data: data });
  },
});
