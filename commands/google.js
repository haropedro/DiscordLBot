module.exports = {
  name: 'google',
  description: "Send to the google link!",
  execute(message, args){
    message.channel.send('https://www.google.com/');

  }
}
