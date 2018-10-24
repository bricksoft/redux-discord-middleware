# Redux Discord Middleware

## What it does

This middleware dispatches all events of the `discord.js` client to the redux store.

Every event captured by the client will be dispatched as redux action in form of

```
{
    type: "@@redux-discord-middleware/EVENTNAME",
    payload     // event data
    meta: {
        client, // the client itself
        ts      // timestamp of event
    }

}
```

## How to use

To use this middleware we apply it in `createStore`

```
[...]

const store = createStore(
  reducer,
  applyMiddleware(discordMiddleware(client))
);
```

You can also see an example of how to use it [here](/example/README.MD)

## API

### _Middleware_

#### `discordMiddleware(client, [debug = false])`

- `debug`: whether to dispatch `debug` events of discord client, defaults to `false`
- returns redux middleware

#### `RD`

- namespace of redux-discord-middleware
- every `action type` is prefixed with it
- value: `@@redux-discord-middleware`

### _Actions_

#### type

String of `RD` + `eventName`

#### payload

Object of `Client.on` event

#### meta

Object of

- `client` - the client itself
- `ts` - timestamp (Date) of event
