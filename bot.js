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
    var prefix = msg.content.split(' ', 2)[0].toLowerCase()
    var cMessage = msg.content.replace(/\w+/g, part => (swears[part.toLowerCase()] === undefined ? part : swears[part.toLowerCase()]))

    if(msg.content != cMessage){
        msg.react('👊')
    }

    if(prefix === "i'm" || prefix === "i’m" || prefix === "im"){
        var name = msg.content.slice(prefix.length + 1)
        var cName = name.replace(/\w+/g, part => (swears[part.toLowerCase()] === undefined ? part : swears[part.toLowerCase()])).replace(/\b[a-z]/g, char => char.toUpperCase())
        msg.channel.send(`Hi ${cName}, I'm Dad.`)
    }

});

client.login(token)