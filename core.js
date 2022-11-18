const discord = require('discord.js');

const client = new discord.Client({
  'intents': ['GuildMessageReactions','GuildMembers','GuildIntegrations','GuildMessageTyping','GuildMessages','GuildVoiceStates','Guilds','MessageContent','DirectMessages'],
  'partials': ['Channel', 'GuildMember', 'GuildScheduledEvent', 'ThreadMember', 'User', 'Message', 'Reaction']
});

client.on("messageCreate", (m) => {
  m.reply({'content': "Happy new year!"});
});

client.login(env.TOKEN).then(() => {
  console.log("Happy winter is coming!");
});