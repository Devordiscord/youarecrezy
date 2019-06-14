const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-";



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on("message", message => {
 
            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {//حقوق دايموند كودز
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`);
 message.delete();
};    
});

client.on('guildMemberAdd', member => {

    const channel = member.guild.channels.find('name', 'welcome');
  
    const millis = new Date().getTime() - member.user.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;




  
    const embed = new Discord.RichEmbed()
    
    .setColor("black")
    .setDescription(`**تاريخ دخولك للدسكورد منذ ${createdAt.toFixed(0)} يوم**`)
    .setAuthor(member.user.tag, member.user.avatarURL);
    channel.sendEmbed(embed);

  
});

client.on('message', message => {
  let command = message.content.split(" ")[0].slice(prefix.length);
  let args = message.content.split(" ").slice(1);

  if(!message.content.toLowerCase().startsWith(prefix)) return;
  if(command == "suggest") {
    if(!args.join(" ")) return message.channel.send(`**يرجي كتابة الاقتراح **`);
    let channel = message.guild.channels.find(c => c.name == "suggestions");
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setTitle(``)
    .setFooter(`Select a reaction below to vote on suggestion`)
    .setDescription(args.join(" "));
    channel.send(embed).then(msg => {
      msg.react("✅").then(() => msg.react("❌"));
      message.delete()
      message.channel.send(`**يرجي كتابة اقتراح لكي يتم ارساله الي روم الاقتراحات ❎ **`);
    });
  }
});
 
 client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members"));
    }); //Toxic Codes

 client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('#bc')){
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
}); //Toxic Codes
 
 client.on('message', message=>{ //Toxic Codes    //  PremiumBot
    if(message.author.bot) return; //Toxic Codes    //  PremiumBot
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix+'setlog')) { //Toxic Codes    //  PremiumBot
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("``` ADMINISTRATOR لا يتوفر لديك رتبه```");
    let log = message.guild.channels.find("name", "log") //Toxic Codes    //  PremiumBot
    if(log) return message.reply("**يوجد بالفعل روم اللوق**")  //Toxic Codes    //  PremiumBot
    if(!log) {  //Toxic Codes    //  PremiumBot
    message.guild.createChannel("log", "text").then(c=> { //Toxic Codes    //  PremiumBot
        c.overwritePermissions(message.guild.id, { //Toxic Codes    //  PremiumBot
            SEND_MESSAGES: false
    })
})
message.channel.send("``تم انشاء روم اللوق بنجــاح``")
    }
    } //Toxic Codes    //  PremiumBot
     })
client.on('error', console.error);
 
client.on('messageDelete', message => { //Toxic Codes    //  PremiumBot
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return; //Toxic Codes    //  PremiumBot
    if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return; //Toxic Codes    //  PremiumBot
    if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return; //Toxic Codes    //  PremiumBot
 
    var logChannel = message.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    let messageDelete = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
    .setTitle('**[MESSAGE DELETE]**') //Toxic Codes    //  PremiumBot
    .setColor('RED') //Toxic Codes    //  PremiumBot
    .setThumbnail(message.author.avatarURL) //Toxic Codes    //  PremiumBot
    .setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
    .setTimestamp() //Toxic Codes    //  PremiumBot
    .setFooter(message.guild.name, message.guild.iconURL) //Toxic Codes    //  PremiumBot
 
    logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => { //Toxic Codes    //  PremiumBot
 
    if(oldMessage.author.bot) return;
    if(!oldMessage.channel.type === 'dm') return;
    if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
 
    var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldMessage.content.startsWith('https://')) return; //Toxic Codes    //  PremiumBot
 
    let messageUpdate = new Discord.RichEmbed()
    .setTitle('**[MESSAGE EDIT]**')
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor('BLUE')
    .setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
 
    logChannel.send(messageUpdate);
});
 
 
// Roles Logs //Toxic Codes    //  PremiumBot
client.on('roleCreate', role => {
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleCreate = new Discord.RichEmbed()
        .setTitle('**[ROLE CREATE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(role.guild.name, role.guild.iconURL) //Toxic Codes    //  PremiumBot
  //Toxic Codes    //  PremiumBot
        logChannel.send(roleCreate);
    })
});
client.on('roleDelete', role => { //Toxic Codes    //  PremiumBot
 
    if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = role.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    role.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let roleDelete = new Discord.RichEmbed()
        .setTitle('**[ROLE DELETE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp() //Toxic Codes    //  PremiumBot
        .setFooter(role.guild.name, role.guild.iconURL)
 
        logChannel.send(roleDelete); //Toxic Codes    //  PremiumBot
    })
});
client.on('roleUpdate', (oldRole, newRole) => {
 
    if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
  //Toxic Codes    //  PremiumBot
    oldRole.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        if(oldRole.name !== newRole.name) {
            let roleUpdateName = new Discord.RichEmbed()
            .setTitle('**[ROLE NAME UPDATE]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
 
            logChannel.send(roleUpdateName); //Toxic Codes    //  PremiumBot
        }
        if(oldRole.hexColor !== newRole.hexColor) { //Toxic Codes    //  PremiumBot
            if(oldRole.hexColor === '#000000') { //Toxic Codes    //  PremiumBot
                var oldColor = '`Default`'; //Toxic Codes    //  PremiumBot
            }else {
                var oldColor = oldRole.hexColor;
            } //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
            if(newRole.hexColor === '#000000') { //Toxic Codes    //  PremiumBot
                var newColor = '`Default`'; //Toxic Codes    //  PremiumBot
            }else {
                var newColor = newRole.hexColor; //Toxic Codes    //  PremiumBot
            } //Toxic Codes    //  PremiumBot
            let roleUpdateColor = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[ROLE COLOR UPDATE]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE') //Toxic Codes    //  PremiumBot
            .setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() //Toxic Codes    //  PremiumBot
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
  //Toxic Codes    //  PremiumBot
            logChannel.send(roleUpdateColor);
        }
        if(oldRole.permissions !== newRole.permissions) { //Toxic Codes    //  PremiumBot
            let roleUpdate = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[UPDATE ROLE PERMISSIONS]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
            .setColor('BLUE')
            .setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldRole.guild.name, oldRole.guild.iconURL)
           
            logChannel.send(roleUpdate) //Toxic Codes    //  PremiumBot
        }
    })
});
 
 
// Channels Log
client.on('channelCreate', channel => { //Toxic Codes    //  PremiumBot
  //Toxic Codes    //  PremiumBot //Toxic Codes    //  PremiumBot
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(channel.type === 'text') { //Toxic Codes    //  PremiumBot
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { //Toxic Codes    //  PremiumBot
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { //Toxic Codes    //  PremiumBot
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => { //Toxic Codes    //  PremiumBot
        var userID = logs.entries.first().executor.id; //Toxic Codes    //  PremiumBot
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        let channelCreate = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
        .setTitle('**[CHANNEL CREATE]**') //Toxic Codes    //  PremiumBot
        .setThumbnail(userAvatar)
        .setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelCreate);
    })
}); //Toxic Codes    //  PremiumBot
client.on('channelDelete', channel => { //Toxic Codes    //  PremiumBot
    if(!channel.guild) return;
    if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = channel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    if(channel.type === 'text') { //Toxic Codes    //  PremiumBot
        var roomType = 'Text';
    }else
    if(channel.type === 'voice') { //Toxic Codes    //  PremiumBot
        var roomType = 'Voice';
    }else
    if(channel.type === 'category') { //Toxic Codes    //  PremiumBot
        var roomType = 'Category';
    }
 
    channel.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let channelDelete = new Discord.RichEmbed()
        .setTitle('**[CHANNEL DELETE]**')
        .setThumbnail(userAvatar) //Toxic Codes    //  PremiumBot
        .setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setColor('RED')
        .setTimestamp()
        .setFooter(channel.guild.name, channel.guild.iconURL)
 
        logChannel.send(channelDelete); //Toxic Codes    //  PremiumBot
    })
});
client.on('channelUpdate', (oldChannel, newChannel) => {
    if(!oldChannel.guild) return;
 
    var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    if(oldChannel.type === 'text') {
        var channelType = 'Text';
    }else
    if(oldChannel.type === 'voice') {
        var channelType = 'Voice';
    }else
    if(oldChannel.type === 'category') {
        var channelType = 'Category';
    }
   
    oldChannel.guild.fetchAuditLogs().then(logs => { //Toxic Codes    //  PremiumBot
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
  //Toxic Codes    //  PremiumBot
        if(oldChannel.name !== newChannel.name) {
            let newName = new Discord.RichEmbed()
            .setTitle('**[CHANNEL EDIT]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp() //Toxic Codes    //  PremiumBot
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) //Toxic Codes    //  PremiumBot
 
            logChannel.send(newName); //Toxic Codes    //  PremiumBot
        }
        if(oldChannel.topic !== newChannel.topic) { //Toxic Codes    //  PremiumBot
            let newTopic = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[CHANNEL EDIT]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
 
            logChannel.send(newTopic);
        }
    })
});
 
 
// Guild Logs
client.on('guildBanAdd', (guild, user) => {
 
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        if(userID === client.user.id) return;
 
        let banInfo = new Discord.RichEmbed()
        .setTitle('**[BANNED]**')
        .setThumbnail(userAvatar)
        .setColor('DARK_RED')
        .setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(banInfo);
    })
});
client.on('guildBanRemove', (guild, user) => {
    if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; //Toxic Codes    //  PremiumBot
    if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return;
 
    guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
        let unBanInfo = new Discord.RichEmbed()
        .setTitle('**[UNBANNED]**')
        .setThumbnail(userAvatar)
        .setColor('GREEN')
        .setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
        .setTimestamp()
        .setFooter(guild.name, guild.iconURL)
 
        logChannel.send(unBanInfo);
    })
});
client.on('guildMemberUpdate', (oldMember, newMember) => { //Toxic Codes    //  PremiumBot
    var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
    if(!logChannel) return;
 
    oldMember.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id; //Toxic Codes    //  PremiumBot
        var userAvatar = logs.entries.first().executor.avatarURL;
        var userTag = logs.entries.first().executor.tag;
 
        if(oldMember.nickname !== newMember.nickname) {
            if(oldMember.nickname === null) {
                var oldNM = '\`\`اسمه الاصلي\`\`';
            }else {
                var oldNM = oldMember.nickname;
            }
            if(newMember.nickname === null) {
                var newNM = '\`\`اسمه الاصلي\`\`'; //Toxic Codes    //  PremiumBot
            }else {
                var newNM = newMember.nickname;
            }
 
            let updateNickname = new Discord.RichEmbed()
            .setTitle('**[UPDATE MEMBER NICKNAME]**')
            .setThumbnail(userAvatar)
            .setColor('BLUE')
            .setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
  //Toxic Codes    //  PremiumBot
            logChannel.send(updateNickname);
        }
        if(oldMember.roles.size < newMember.roles.size) {
            let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
 
            let roleAdded = new Discord.RichEmbed()
            .setTitle('**[ADDED ROLE TO MEMBER]**') //Toxic Codes    //  PremiumBot
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('GREEN')
            .setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) //Toxic Codes    //  PremiumBot
 
            logChannel.send(roleAdded);
        }
        if(oldMember.roles.size > newMember.roles.size) {
            let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
 
            let roleRemoved = new Discord.RichEmbed()
            .setTitle('**[REMOVED ROLE FROM MEMBER]**')
            .setThumbnail(oldMember.guild.iconURL)
            .setColor('RED')
            .setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar) //Toxic Codes    //  PremiumBot
 
            logChannel.send(roleRemoved);
        }
    })
    if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
        let newOwner = new Discord.RichEmbed()
        .setTitle('**[UPDATE GUILD OWNER]**')
        .setThumbnail(oldMember.guild.iconURL)
        .setColor('GREEN')
        .setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL)
 
        logChannel.send(newOwner);
    }
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
  if(!logChannel) return;
  //Toxic Codes    //  PremiumBot
  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**') //Toxic Codes    //  PremiumBot
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)
 
  logChannel.send(newMember);
});
function Days(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " day" : " days") + " ago";
} //Toxic Codes    //  PremiumBot
client.on('guildMemberRemove', member => { //Toxic Codes    //  PremiumBot
  var logChannel = member.guild.channels.find(c => c.name === 'log'); //Toxic Codes    //  PremiumBot
  if(!logChannel) return; //Toxic Codes    //  PremiumBot
 
  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`) //Toxic Codes    //  PremiumBot
  .setTimestamp() //Toxic Codes    //  PremiumBot
  .setFooter(member.user.tag, member.user.avatarURL)
  //Toxic Codes    //  PremiumBot
  logChannel.send(leaveMember);
});
 
 
// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
 
    if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
    if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
 
    var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
    if(!logChannel) return;
 
    voiceOld.guild.fetchAuditLogs().then(logs => {
        var userID = logs.entries.first().executor.id;
        var userTag = logs.entries.first().executor.tag;
        var userAvatar = logs.entries.first().executor.avatarURL;
 
// Server Muted Voice
        if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
            let serverMutev = new Discord.RichEmbed()
            .setTitle('**[VOICE MUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverMutev);
        }
// Server UnMuted Voice
        if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
            let serverUnmutev = new Discord.RichEmbed()
            .setTitle('**[VOICE UNMUTE]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUnmutev);
        }
// Server Deafen Voice
        if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
            let serverDeafv = new Discord.RichEmbed()
            .setTitle('**[VOICE DEAFEN]**')
            .setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
            .setColor('RED')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverDeafv);
        }
// Server UnDeafen Voice
        if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
            let serverUndeafv = new Discord.RichEmbed() //Toxic Codes    //  PremiumBot
            .setTitle('**[VOICE UNDEAFEN]**')
            .setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
            .setColor('GREEN')
            .setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
            .setTimestamp()
            .setFooter(userTag, userAvatar)
 
            logChannel.send(serverUndeafv); //Toxic Codes    //  PremiumBot
        }
    })

// Changed Voice Channel
    if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
        let voiceLeave = new Discord.RichEmbed()
        .setTitle('**[CHANGED VOICE ROOM]**')
        .setColor('GREEN')
        .setThumbnail(voiceOld.user.avatarURL)
        .setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
        .setTimestamp()
        .setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
 
        logChannel.send(voiceLeave);
    } //Toxic Codes    //  PremiumBot
}); 


var config = {
  events: [
    {type: "CHANNEL_CREATE", logType: "CHANNEL_CREATE", limit: 5 , delay: 3000},
    {type: "CHANNEL_DELETE", logType: "CHANNEL_DELETE", limit: 4, delay: 3000},
    {type: "GUILD_MEMBER_REMOVE", logType: "MEMBER_KICK", limit: 3, delay: 3000},
    {type: "GUILD_BAN_ADD", logType: "MEMBER_BAN_ADD", limit: 2, delay: 3000}
  ]
}
client.on("raw", (packet)=> {
  let {t, d} = packet, type = t, {guild_id} = data = d || {};
  if (type === "READY") {
    client.startedTimestamp = new Date().getTime();
    client.captures = [];
  }
  let event = config.events.find(anEvent => anEvent.type === type);
  if (!event) return;
  let guild = client.guilds.get(guild_id);
  if (!guild) return;
  guild.fetchAuditLogs({limit : 1, type: event.logType})
    .then(eventAudit => {
      let eventLog = eventAudit.entries.first();
      if (!eventLog) return;
      let executor = eventLog.executor;
      guild.fetchAuditLogs({type: event.logType, user: executor})
        .then((userAudit, index) => {
          let uses = 0;
          userAudit.entries.map(entry => {
            if (entry.createdTimestamp > client.startedTimestamp && !client.captures.includes(entry.id)) uses += 1;
          });
          setTimeout(() => {
            client.captures.push(index);
          }, event.delay || 2000)
          if (uses >= event.limit) {
            client.emit("reachLimit", {
              user: userAudit.entries.first().executor,
              member: guild.members.get(executor.id),
              guild: guild,
              type: event.type,
            })
          }
        }).catch(console.error)
    }).catch(console.error)
});
client.on("reachLimit", (limit)=> {
  let log = limit.guild.channels.find( channel => channel.name === "log");
  log.send("<@"+limit.user.id+"> |  @here    حاول العبث بالسيرفر");
  limit.guild.owner.send(limit.user.username+" حاول العبث بالسيرفر ")
  limit.member.roles.map(role => {
    limit.member.removeRole(role.id)
    .catch(log.send)
  });
});

 client.on('message', message => {
    if (message.content === ('-server')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
        .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
        .setColor('RANDOM')
            .addField('Owner',`${message.guild.owner}`)
        .addField('Region',`${message.guild.region}`)
            .addField('Text Channels',` ${message.guild.channels.filter(chan => chan.type === 'text').size}`)
            .addField('Voice Channels',`${message.guild.channels.filter(chan => chan.type ==='voice').size}`)
            .addField('Members',`${message.guild.memberCount}`)
            .addField('Humans',`${message.guild.memberCount}`, true)
        .addField('Bots',`${message.guild.members.filter(m => m.user.bot).size}`)
        .addField('Roles',`${message.guild.roles.size}`)
    })
}
});
 
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.toLowerCase().startsWith(prefix + `lorans`)) {
    const embed = new Discord.RichEmbed()
    .setTitle(`:mailbox_with_mail: Vulnix Help`)
    .setColor(0xCF40FA)
    .setDescription(`Hello! I'm Vulnix, the Discord bot for super cool support ticket stuff and more! Here are my commands:`)
    .addField(`Tickets`, `[${prefix}new]() > Opens up a new ticket and tags the Support Team\n[${prefix}close]() > Closes a ticket that has been resolved or been opened by accident`)
    message.channel.send({ embed: embed });
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `ping`)) {
    message.channel.send(`Hoold on!`).then(m => {
    m.edit(`:ping_pong: Wew, made it over the ~waves~ ! **Pong!**\nMessage edit time is ` + (m.createdTimestamp - message.createdTimestamp) + `ms, Discord API heartbeat is ` + Math.round(client.ping) + `ms.`);
    });
}
 
if (message.content.toLowerCase().startsWith(prefix + `new`)) {
    const reason = message.content.split(" ").slice(1).join(" ");
    if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
    if (message.guild.channels.exists("name", "ticket-" + message.author.id)) return message.channel.send(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.id}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Support Team");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Team** will be here soon to help.`)
        .setTimestamp();
        c.send({ embed: embed });
    }).catch(console.error);
}
if (message.content.toLowerCase().startsWith(prefix + `close`)) {
    if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
    message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '-confirm', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
        .catch(() => {
          m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
              m2.delete();
          }, 3000);
        });
    });
}
 
}); 
 
 client.on('message', async xkiller => {
 
    if(xkiller.content.startsWith("تقديم")) {
   
      let lang = '';
   
      let time = '';
   
      let expe = '';
   
         let expe2 = '';
		 
      let fillter = m => m.author.id === xkiller.author.id
   
      await xkiller.channel.send("**اسمك الحقيقي**").then(e => {
   
        xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })
   
     .then(co => {
   
       lang = co.first().content;
   
        co.first().delete();
   
   
       e.edit(`**متي تعلمت البرمجه**`)
   
  xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })
   
       .then(col => {
   
         time = col.first().content;
   
          col.first().delete();
   
   
            e.edit(`**لماذا اخترت سرفرنا**`)
   
  xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })
      
       .then(col => {
   
         time = col.first().content;
   
          col.first().delete();
   
   
            e.edit(`**هل تعرف كتابه اكواد وحدك**`)
   
  xkiller.channel.awaitMessages(fillter, { time: 60000, max: 1 })
  
  .then(coll => {

              expe = coll.first().content;
   
               coll.first().delete();
   
   
               e.edit(`**جري جمع البينات**`)
   
              let xkilleryt = xkiller.guild.channels.find("name","طلب-رتبه-باع")
   
              setTimeout(() => {
   
                e.edit("**يتم مرجعت الطلب من الاداره**")
   
              }, 3000)
   
              xkilleryt.send(`**
الاسم : **${lang}**
متي تعلم  : **${time}**
لماذا اختار السرفر  : **${expe}**
هل يعرف يكتب اكواد   : **${expe2}**
الشخص : ${xkiller.author} 
@everyone  | @here **`).then(xkilleryt => {
   
    xkilleryt.react(":CheckMark:")
   
    xkilleryt.react(":WrongMark:")
   
                })
   
            })
   
       })
   
     })
   
   })
   
    }
   
  })
   })
   
   
   
   client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
  // -say
    if (command === "say") {
            message.delete()
      message.channel.sendMessage(args.join(" ")).catch(console.error);
    }
    
   
  
  if (command == "embed") {
      let say = new Discord.RichEmbed()
      .setDescription(args.join("  "))
      .setColor(REDA)
      message.channel.sendEmbed(say);
      message.delete();
    }
  
  
  });
   
   
client.login(process.env.BOT_TOKEN);