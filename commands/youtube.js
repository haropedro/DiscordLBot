module.exports = {
  name: 'youtube',
  description: "Send to the youtube link!",
  execute(message, args){
    message.channel.send('https://www.youtube.com/');

  }
}
