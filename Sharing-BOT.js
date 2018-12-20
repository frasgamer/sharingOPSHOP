const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
~~
OP SHOP يرحب بكم :dove:
~~
ممكن صدفة تخلق صحبة
تنورنا يالغالي بسيرفرك 
السيرفر عبارة عن شوب وانا امنيتي انجح 
لإااتمنى تدخل ياقلبي :heart:
                               [ رابط السيرفر ] 
الدعووة خاصة لك ياقلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);

//A7MD.login('التوكين حقك');