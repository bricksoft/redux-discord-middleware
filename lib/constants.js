const RD = "@@redux-discord-middleware";
const EVENTS = [
  "debug",
  "channelCreate",
  "channelDelete",
  "channelPinsUpdate",
  "channelUpdate",
  "clientUserGuildSettingsUpdate",
  "clientUserSettingsUpdate",
  "disconnect",
  "emojiCreate",
  "emojiDelete",
  "emojiUpdate",
  "error",
  "guildBanAdd",
  "guildBanRemove",
  "guildCreate",
  "guildDelete",
  "guildMemberAdd",
  "guildMemberAvailable",
  "guildMemberRemove",
  "guildMembersChunk",
  "guildMemberSpeaking",
  "guildMemberUpdate",
  "guildUnavailable",
  "guildUpdate",
  "message",
  "messageDelete",
  "messageDeleteBulk",
  "messageReactionAdd",
  "messageReactionRemove",
  "messageReactionRemoveAll",
  "messageUpdate",
  "presenceUpdate",
  "rateLimit",
  "ready",
  "reconnecting",
  "resume",
  "roleCreate",
  "roleDelete",
  "roleUpdate",
  "typingStart",
  "typingStop",
  "userNoteUpdate",
  "userUpdate",
  "voiceStateUpdate",
  "warn"
];

module.exports = { RD, EVENTS };