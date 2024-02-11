const Discord = require('discord.js');
const { VietQR } = require('vietqr');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const vietQR = new VietQR({
  clientID: 'de8a0804-a76d-41e5-8ad6-31503ce7d5f4',
  apiKey: '17c29f09-4ea2-4417-b9c2-7f020d35de42',
});

client.on('ready', () => {
  console.log(`Logged in as thanhtoan.js!`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'thanhtoan') {
    vietQR.getBanks().then((banks)=>{console.log(banks)})
    .catch((err)=>{});
  }
});

// Replace 'YOUR_DISCORD_TOKEN' with your actual Discord bot token
client.login('MTIwMjIzMDg5MDg1NjcxNDMyMA.GJnzNP.KAwX0fxIk8UH7cdzMSjfdc7bqg2XLzsWpBsmvg');
