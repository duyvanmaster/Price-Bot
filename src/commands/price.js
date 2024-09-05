const { Client, GatewayIntentBits, EmbedBuilder, StringSelectMenuBuilder, ActionRowBuilder, Component} = require ('discord.js');
const Discord = require('discord.js')
const client = new Client({ intents: 
    [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

console.log('./price.js')

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'price') {
      const row = new ActionRowBuilder()
        .addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('select_menu')
            .setPlaceholder('Xem giá sản phẩm')
            .addOptions([
              {
                label: 'Regedit',
                description: 'Nhấn vào đây để xem bảng giá Regedit',
                value: 'regeditprice',
                emoji: '1066225725574742126'
              },
              {
                label: 'Tối Ưu',
                description: 'Nhấn vào đây để xem bảng giá Tối Ưu',
                value: 'optimizeprice',
                emoji:'1066226152798167080'
              },
              {
                label: 'Fixrecoil',
                description: 'Nhấn vào đây để xem bảng giá Fixrecoil',
                value: 'fixrecoilprice',
                emoji:'1203229939436879872'
              },
            ]),
        );
  
      await interaction.reply({
        embeds:
        [
          new EmbedBuilder()
          .setTitle('<a:moneyprice:1203214243105607740> Bảng giá LegitVN')
          .setDescription('<a:dot_red:1202952521757499462> Lựa chọn sản phẩm dưới menu để biết chi tiết về giá')
          .setImage('https://cdn.discordapp.com/attachments/1161271813460996126/1204309215582232616/gamesensepricehigh.gif?ex=65d4435b&is=65c1ce5b&hm=95bc8e4397e6bd297079ce6b9609de640364e42ed8246e19cf79e5ca26fef84d&') // Thêm hình ảnh
          .setColor('#d8427f')
          .setTimestamp()
          .setFooter({ text: 'LegitVN | The best or nothing'})
        ],
        components: [row]
      });
    }
  });
  
  // Regedit select menu
  
  client.on('interactionCreate', async interaction => {
      if (!interaction.isStringSelectMenu()) return;
      if (interaction.values == 'regeditprice') {
        const newRow = new ActionRowBuilder()
        .addComponents(
          new StringSelectMenuBuilder()
          .setCustomId('regedit_select_menu')
          .setPlaceholder('Chi tiết về sản phẩm')
          .addOptions([
            {
              label: 'Regedit Limited',
              value: 'regeditlmt',
              emoji: '1066225725574742126'
            },
            {
              label: 'Regedit Config',
              value: 'regeditcfg',
              emoji: '1066225725574742126'
            },
          ])
      );
        await interaction.reply({
          embeds: [      
            new EmbedBuilder()
            .setTitle('Bảng giá Regedit <:regedit:1066225725574742126>')
            .setDescription('**<a:dot_red:1202952521757499462> Regedit Limited: ~~600.000đ~~ ```yaml\n300.000đ```\n<a:dot_red:1202952521757499462> Regedit Config: ```yaml\n800.000đ```**')
            .setColor('#42e3ff')
            .setTimestamp()
            .setFooter({ text: 'LegitVN | The best or nothing'})],
          components: [newRow],
          ephemeral : true
      });
    }
  
    //Tối ưu select menu
  
    else if (interaction.values == 'optimizeprice') {
      const newRow = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('optimize_select_menu')
          .setPlaceholder('Chi tiết về sản phẩm')
          .addOptions([
            {
              label: 'Tối Ưu + Setup All Emulator V1.2.1 (Recommend)',
              value: 'optimize121',
              emoji: '1066226152798167080'
            },
          ])
      );
      await interaction.reply({
        embeds: [      
          new EmbedBuilder()
          .setTitle('Bảng giá Tối Ưu <:batch:1066226152798167080>')
          .setDescription('<a:dot_red:1202952521757499462> **Tối Ưu + Setup All Emulator V1.2.1: ~~300.000đ~~```yaml\n150.000đ```\n**')
          .setColor('#ffffff')
          .setTimestamp()
          .setFooter({ text: 'LegitVN | The best or nothing'})],
        components: [newRow],
        ephemeral : true
    });
  }
  
    // Fixrecoil select menu
    
      else if (interaction.values == 'fixrecoilprice') {
      const newRow = new ActionRowBuilder()
      .addComponents(
        new StringSelectMenuBuilder()
          .setCustomId('fixrecoil_select_menu')
          .setPlaceholder('Chi tiết về sản phẩm')
          .addOptions([
            {
              label: 'FixRecoil V4',
              value: 'frv4',
              emoji: '1203229939436879872'
            },
            {
              label: 'Headlock',
              value: 'headlock',
              emoji: '1203229939436879872'
            },
          ])
      );
      await interaction.reply({
        embeds: [      
          new EmbedBuilder()
          .setTitle('Bảng giá FixRecoil <:terminal:1203229939436879872>')
          .setDescription('**<a:dot_red:1202952521757499462> FixRecoil V4:```yaml\n300.000đ```\n<a:dot_red:1202952521757499462> Headlock:```yaml\n300.000đ```**')
          .setColor('#000000')
          .setTimestamp()
          .setFooter({ text: 'LegitVN | The best or nothing'})],
        components: [newRow],
        ephemeral : true
    });
  }
  
      // Regedit optinons
      if(interaction.values == "regeditlmt") {
        interaction.reply({
          content:"## Regedit Limited <:regedit:1066225725574742126>\n\n## Tính năng\n- Hỗ trợ Windows 10 và 11\n- Tương thích với giả lập Bluestacks và MsiPlayer\n- Loại bỏ các config cũ trong Registry\n- Cài đặt và cập nhật các thành phần Registry cần thiết của file\n- Tích hợp tất cả giá trị Regisry đã tùy chỉnh thông số tối ưu cho trải nghiệm\n- Tùy chỉnh sâu các thông số Mouse thông qua Control Panel\n- Tinh chỉnh Tweaks của giả lập để tăng độ ổn định\n## Tác dụng\n- Tối ưu hóa những config của giả lập\n- Thay đổi các thông số về sense để phù hợp\n- Hỗ trợ kéo tâm mượt mà, tạo cảm giác tay tốt hơn\n- Và còn mang lại nhiều cải thiện nhỏ liên quan đến Registry\n## Lưu Ý\n- Regedit Limited chỉ hỗ trợ kéo tâm ổn định hơn và không phải là Aimbot (Cheat).\n\n> **Hỗ trợ cài đặt và tư vấn nhiệt tình tại** <#1069964275046682705>",
          ephemeral : true})
      }
      else if(interaction.values == "regeditcfg") {
        interaction.reply({
          content:"## Regedit Config <:regedit:1066225725574742126>\n\n## Tính Năng\n- Tất cả tính năng của Regedit Limited\n- Hiệu suất cao hơn\n- Tùy chỉnh nâng cao\n- Tính ổn định cao\n## Tác Dụng\n- Tất cả tác dụng của Regedit Limited với hiệu suất cao, mượt mà hơn\n- Nâng cao tốc độ phản hồi và giảm thiểu độ trễ\n- Đã tích hợp gamesense phù hợp với nhiều cài đặt độ nhạy\n## Lưu Ý\n- Regedit Config chỉ hỗ trợ kéo tâm ổn định hơn và không phải là Aimbot (Cheat).\n\n> **Hỗ trợ cài đặt và tư vấn nhiệt tình tại** <#1069964275046682705>",
          ephemeral : true})
      }
  
      // Tối ưu options
      else if(interaction.values == "optimize121") {
        interaction.reply({embeds: 
          [
            new EmbedBuilder()
            .setTitle('<:batch:1066226152798167080> **Tối Ưu + Setup All Emulator (Recommend) V1.2.1**')
            .setDescription('<a:dot_red:1202952521757499462> **Giá: ~~300.000đ~~ > __150.000đ__**\n\n<a:dot_red:1202952521757499462> Tạo <#1069964275046682705> để được hỗ trợ chi tiết thêm về sản phẩm.')
            .setImage('https://cdn.discordapp.com/attachments/1111966282343002172/1185451368077598760/ofe.png') // Thêm hình ảnh
            .setColor('#ffffff')
            .setTimestamp()
            .setFooter({ text: 'LegitVN | The best or nothing'})
          ],
          ephemeral : true})
      }

  
      // Fixreocil options
      else if(interaction.values == "frv4") {
        interaction.reply({
          content:"**<:terminal:1203229939436879872>  FixRecoil V4**\n- Giá: __300.000đ__\n- Support 2 giả lập phổ biến và tốt nhất: Bluestacks, MsiPlayer\n- Hỗ trợ cài đặt và tư vấn nhiệt tình tại <#1069964275046682705>",
          ephemeral : true})
      }
      else if(interaction.values == "headlock") {
        interaction.reply({
          content:"**<:terminal:1203229939436879872>  Headlock**\n- Giá: __300.000đ__\n- Support 2 giả lập phổ biến và tốt nhất: Bluestacks, MsiPlayer\n- Hỗ trợ cài đặt và tư vấn nhiệt tình tại <#1069964275046682705>",
          ephemeral : true})
      }
    })
  
  client.login(process.env.TOKEN);
