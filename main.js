


const Discord = require('discord.js');


const client = new Discord.Client();
const config = require("./config.json");

var age = 30;






const cheerio = require('cheerio');

const request = require('request');

const fs = require('fs');
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles){
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}


client.once('ready', () => {
  console.log('DiscordBotL is online!');
});

client.on('message', message => {
  if(!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
  } else if (command == 'youtube'){
    client.commands.get('youtube').execute(message, args);
  } else if (command == 'google'){
    client.commands.get('google').execute(message, args);
  } else if (command == 'asl'){
    let age = args[0]; // Remember arrays are 0-based!.
    let sex = args[1];
    let location = args[2];
    age = 28;
    sex = "male";
    location = "Oakland";
    message.reply(`Hello ${message.author.username}, I see you're a ${age} year old, ${sex} from ${location}. Wanna date?`);
  }

});





client.login(config.token);
