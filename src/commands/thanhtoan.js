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
    try {
      // Generate QR code
      const qrCodeData = await vietQR.genQRCodeBase64({
        bank: '970415',
        accountName: 'QUY VAC XIN PHONG CHONG COVID',
        accountNumber: '113366668888',
        amount: '79000',
        memo: 'Ung Ho Quy Vac Xin',
        template: 'qr_only',
      });

      // Send the QR code as an image
      interaction.reply({
        content: 'Here is your QR code:',
        files: [
          { name: 'qrcode.png', content: qrCodeData },
        ],
      });
    } catch (error) {
      console.error(error);
      interaction.reply('Error generating QR code.');
    }
  }
});

// Replace 'YOUR_DISCORD_TOKEN' with your actual Discord bot token
client.login('MTAyNjA0MTgyNjMyODcxOTM3MQ.GK2ncK.tHSCMAR-baKXAnd545LmhD8uZtz4ys-x3njjIU');
