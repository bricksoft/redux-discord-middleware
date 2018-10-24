const Discord = require("discord.js");

const createClient = (secret = "YOUR_TOKEN") => {
  const client = new Discord.Client();
  client.login(secret);
  return client;
};

module.exports = createClient;
