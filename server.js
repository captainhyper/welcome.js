const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

require('events').EventEmitter.prototype._maxListeners = 100;

var Discord = require('discord.js');

const client = new Discord.Client();

var prefix = "-"

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10);
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
}

client.on('message', message => {
   if(message.content.startsWith("-uptime")) {
    var time = process.uptime();
    var uptime = (time + "").toHHMMSS();
    message.channel.send(`Hello my uptime is: ${uptime}`);
}
});

client.on('guildMemberAdd', (guildMember, channel, message) => {
    let embed = new Discord.RichEmbed()
        .setAuthor("WELCOME", `${guildMember.user.displayAvatarURL}`)
        .setDescription('**Welcome To Trivia Home ! Its nice to have you here !Enjoy your winnings here! Be sure to enjoy your stay here!!!** :wink: ' + guildMember.user.username + '**' + " **has joined this server.**")
        .setColor("RANDOM")
        .setFooter("Made ❤️ By MR.~ARMAN§#1033")
     client.channels.get('527755523223846915').send(embed);
});

client.on('guildMemberRemove', (guildMember, channel, message) => {
    let embed = new Discord.RichEmbed()
        .setAuthor("Trivia Home Bot", `${guildMember.user.displayAvatarURL}`)
        .setDescription('**' + guildMember.user.username + '**' + " has left this server.")
        .setColor("#9442FF")
        .setFooter("Left User")
        .setTimestamp();
    client.channels.get('601576399861710850').send(embed);
});

client.on('guildMemberAdd', member => {
   member.send("Hello and welcome to our server **Trivia Home**, we are giving daily loco 10/10 accuracy with fast answer. also we are giving best brain baazi answer. all will get you only this at Rs.20 only. if you have any problems contact OWNER VARUN SINGHAL");
});

client.on('ready', () => {
  setInterval(function() {
    var  time = process.uptime();
var uptime = (time + "").toHHMMSS();
var oyun = [
    `${client.users.size} Users`, 
  `${client.users.size} Users`,
  ` Welcoming Users `];

  var random = Math.floor(Math.random()*(oyun.length - 1) + 1);

  client.user.setActivity(oyun[random], { type: "STREAMING", url: "https://www.twitch.tv/voidexploits" });
  }, 5000);
});


client.on('ready', () => {
  console.log(`Bot is running!`);
});

//end of command handler
client.login(process.env.TOKEN);