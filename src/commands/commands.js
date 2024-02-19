const { REST, Routes } = require('discord.js');
const Discord = require("discord.js")
require('dotenv').config();

const commands = [
  {
    name: 'price',
    description: 'Bảng giá sản phẩm LegitVN',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async (async) => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID , process.env.GUILD_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();
