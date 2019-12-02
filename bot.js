const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client()
const info = JSON.parse(fs.readFileSync('./token.JSON'))
const token = info.token
const swears =  JSON.parse(fs.readFileSync('./swears.JSON'))

client.once('ready', () => {
	console.log('Ready!')
})

client.on('message', msg => {
    var cMessage = msg.content.replace(/\w+/g, part => (swears[part.toLowerCase()] === undefined ? part : swears[part.toLowerCase()]))

    console.log(msg.channel.messages);
    for (var message in msg.channel.messages){
        console.log(message);
        if(message.pinned === true){
            console.log(message.content);
        }
    }

    if(msg.content == ':dab:'){
        msg.react('👊');
    }

    if(msg.content != cMessage){
        msg.react('🇩')
            .then(() => msg.react('👊'))
            .then(() => msg.react('🇳'))
            .then(() => msg.react('🇹'));
    }

    if(msg.author.id != 571155567964454913 && (cMessage.toLowerCase().search(/i'm/g) != -1 || cMessage.toLowerCase().search(/i’m/g) != -1 || cMessage.toLowerCase().search(/im/g) != -1)){
        var name = cMessage.slice(Math.max(cMessage.toLowerCase().search(/i'm/g), cMessage.toLowerCase().search(/i’m/g), cMessage.toLowerCase().search(/im/g)) + 3).replace(/^\w/, c => c.toUpperCase()).trim();

        msg.channel.send(`Hi ${name}, I'm Dad.`);
    }

});

client.login(token);