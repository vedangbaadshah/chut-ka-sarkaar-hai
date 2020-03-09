var Discord = require('discord.js');
var botName = require('./package.json');
var bot = new Discord.Client();

bot.on('message', message =>{

 // Variables
    var sender = message.author; 
    var msg = message.content;
    var prefix = "," 
    
     if(message.author.id != "683723648753991680" && message.channel.id === "624994517111537695"){
        if(msg.startsWith(',', 0)){
            if(msg === prefix + "hI" && message.channel.id === "624994517111537695"){
                message.channel.send('AA GAYE GAANDU YAHA MARWANE KE LIYE ') 
            }
            else{
                message.channel.send("Hey, I only understand ,Hii right now. jab khali hunga :) ")
            }
        }
        else{
            message.delete();
            message.channel.send(sender + " this bot only accepts commands which starts with '>' dot.");
        }
    }
});

bot.login(process.env.BOT_TOKEN)
