const { RD } = require("../lib/middleware");

const INITIAL_STATE = {
  lastStateChange: new Date()
};

/**
 * @param {Object} state - Default application state
 * @param {Object} action - Action from action creator
 * @returns {Object} New state
 */
const reducer = (state = INITIAL_STATE, action) => {
  const { payload, meta } = action;

  if (action.type.startsWith(RD)) {
    const { client } = meta;
    switch (action.type.substring(RD.length + 1)) {
      case "message": {
        if (payload.author.id !== client.user.id) {
          payload.reply("hello there");
        }
      }
    }
    return {
      ...state,
      lastStateChange: action.meta.ts
    };
  }
  return state;
};
module.exports = reducer;
