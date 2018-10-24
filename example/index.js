const { createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("remote-redux-devtools");
const { discordMiddleware } = require("../lib/middleware");
const discord = require("./client");
const reducer = require("./reducer");

const debug = true;

// initialize discord client
const client = discord(
  // if env has no DISCORD_TOKEN read package.json and try to get it from there
  process.env.DISCORD_TOKEN || require("./package.json").settings.discord_token // read env || read package.json
);

// compose with redux remote devtools
const composeEnhancers = composeWithDevTools({
  realtime: true
});

// your middleware(s)
const middleware = [
  // init discord middleware with client
  discordMiddleware(client, debug)
];

// create store
const store = createStore(
  reducer,
  // or applyMiddleware(discordMiddleware(client))
  composeEnhancers(applyMiddleware(...middleware))
);

// this keeps script running after initialization
let time = 0;
setTimeout(() => {
  // NO OP
  console.log("script running for %s seconds", (time += 60));
}, 60000);
