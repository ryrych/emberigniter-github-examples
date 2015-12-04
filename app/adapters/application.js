export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  headers: {
    Authorization: "token foobarfoobar"
  },

  updateRecord(store, type, snapshot) {
    const url = `${this.host}/user/starred/${snapshot.attr('fullName')}`;
    return this.ajax(url, "PUT", {});
  }
});
