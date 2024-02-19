const { Client, GatewayIntentBits} = require ('discord.js');
const Discord = require("discord.js")
const keep_alive = require ('./keep_alive')
const client = new Client({ intents:
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

require('dotenv').config();
require('./commands/commands')
require('./commands/price')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity({
    name: '.gg/legitvn',
  });
});

client.login(process.env.TOKEN);