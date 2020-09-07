const Discord = require('discord.js');


const client = new Discord.Client();


const prefix = '-';

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
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === 'ping'){
      client.commands.get('ping').execute(message, args);
  } else if (command == 'youtube'){
    client.commands.get('youtube').execute(message, args);
  } else if (command == 'google'){
    client.commands.get('google').execute(message, args);
  }else if (command == 'image'){
    image(message);
  }

});

function image(message){

}







client.login('NzUwNzcyODY3OTU1OTQ5NTY4.X0_ZuA.BrdrQJScBTPUydUHp3xmwQddYW4');
