module.exports = {
  name: 'ping',
  description: "This is a ping commnad!",
  execute(message, args){
    message.channel.send('pong!');

  }
}
