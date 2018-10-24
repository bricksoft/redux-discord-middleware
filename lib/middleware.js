const wrapStore = require("./wrapper");
const { RD } = require("./constants");

const discordMiddleware = (client, debug = false) => _store => {
  const store = wrapStore(_store, client, debug);
  return next => action => next(action);
};

module.exports = { discordMiddleware, RD };
