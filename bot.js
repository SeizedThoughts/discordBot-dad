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

    if(prefix === "i'm" || prefix === "i’m" || prefix === "im"){
        var name = msg.content.slice(prefix.length + 1).toLowerCase()
        var cName = name.replace(/\w+/g, part => (swears[part] === undefined ? part : swears[part]).replace(/^\w/, char => char.toUpperCase()))
        msg.channel.send(`Hi ${cName}, I'm Dad.`)
    }

});

client.login(token)