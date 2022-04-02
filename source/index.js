const {Intents} = require("discord.js");
const ExtendedClient = require('../source/Structures/Client');
const {readdirSync} = require('fs');
const client = new ExtendedClient({intents: [Intents.FLAGS.GUILDS , Intents.FLAGS.GUILD_MEMBERS , Intents.FLAGS.GUILD_MESSAGES , Intents.FLAGS.GUILD_PRESENCES ] , partials:['CHANNEL']});
module.exports = client;

const handlers = readdirSync('./source/Handler').filter(f=>f.endsWith('.js'));
handlers.forEach((file)=>{
    require(`../source/Handler/${file}`)(client);
})

client.start();

