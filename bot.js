const Discord = require("discord.js");
const client = new Discord.Client();
console.log("BOT TURNED ON :D")
const prefix = "!"

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

client.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

client.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})




client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});








client.login(process.env.BOT_TOKEN1);
const l7n = new Discord.Client();
l7n.on('ready' , message => {
l7n.user.setGame('.#Weeeeeelcome To L7n 🎶' , "https://twitch.tv/ichbinxirdx")
});
l7n.login(process.env.BOT_TOKENl7n);
const edward = new Discord.Client();

edward.on('message', message => {
    if (message.content === 'zg') {
        message.reply('pong');
      }
});

edward.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})



edward.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});





edward.login(process.env.BOT_TOKEN2);
const edward1 = new Discord.Client();






edward1.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});








edward1.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward1.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward1.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward1.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward1.login(process.env.BOT_TOKEN3);
const edward2 = new Discord.Client();







edward2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});








edward2.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward2.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward2.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward2.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward2.login(process.env.BOT_TOKEN4);
const edward3 = new Discord.Client();






edward3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});









edward3.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward3.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward3.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward3.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward3.login(process.env.BOT_TOKEN5);


const edward4 = new Discord.Client();










edward4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});





edward4.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward4.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward4.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward4.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward4.login(process.env.BOT_TOKEN6);

const edward5 = new Discord.Client();







edward5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});








edward5.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward5.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward5.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward5.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward5.login(process.env.BOT_TOKEN7);

const edward6 = new Discord.Client();









edward6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});






edward6.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward6.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward6.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward6.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward6.login(process.env.BOT_TOKEN8);


const edward7 = new Discord.Client();









edward7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});






edward7.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward7.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward7.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward7.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward7.login(process.env.BOT_TOKEN9);



const edward8 = new Discord.Client();









edward8.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});






edward8.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward8.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward8.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward8.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward8.login(process.env.BOT_TOKEN10);



const edward9 = new Discord.Client();









edward9.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});






edward9.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward9.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward9.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward9.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward9.login(process.env.BOT_TOKEN11);





const edward10 = new Discord.Client();









edward10.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

if (command == "say") {

message.channel.send(args.join("  "))
    message.delete();
  }



});






edward10.on('ready', async() => {
  var server = "495605964544671754"; 
var channel = "495607368814690304";
  setInterval(()=>{
    edward10.guilds.get(server).channels.get(channel).send('**gs gs gs gs gs gs gs gsggsبنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىببنشسيبنخشسيهخبشسبشسةنبشسةنبشسنخيلىشسخت فحلخشسنقفلالتشثقه فلالرشقتلشتق خلىشيتقلىشقىلشثىقلشىلتهىشتهلىب gsgs gsgs gsgsgsgsgsgsgsgsgsgsgsgsgsgsg**')
    },305);
})

edward10.on('ready', async() => {
var server = "495605964544671754"; 
var channel = "495607368814690304";
    setInterval(()=>{
    edward10.guilds.get(server).channels.get(channel).send('#daily')
    },86400);
})

edward10.login(process.env.BOT_TOKEN12);













