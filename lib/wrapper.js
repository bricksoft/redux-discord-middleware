const { RD, EVENTS } = require("./constants");

const dispatch = (store, client) => type => payload =>
  store.dispatch({
    type: RD + "/" + type,
    payload,
    meta: {
      client,
      ts: new Date()
    }
  });

const wrapStore = (store, client, debug = false) => {
  const dispatcher = dispatch(store, client);
  // if debug is true debug events are emitted, else only events after debug are emitted
  const events = debug ? EVENTS : EVENTS.slice(1);

  events.forEach(event => client.on(event, dispatcher(event)));

  return store;
};

module.exports = wrapStore;
