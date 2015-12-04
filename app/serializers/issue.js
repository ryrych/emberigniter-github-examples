export default DS.JSONSerializer.extend({

  normalizeCreateRecordResponse(store, type, payload) {
    return {
      title: payload.title,
      body: payload.body
    }
  }

});
