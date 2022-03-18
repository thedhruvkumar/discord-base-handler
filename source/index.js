const ExtendedClient = require('../source/Structures/Client');
const {readdirSync} = require('fs');
const client = new ExtendedClient();
module.exports = client;

const handlers = readdirSync('./source/Handler').filter(f=>f.endsWith('.js'));
handlers.forEach((file)=>{
    require(`../source/Handler/${file}`)(client);
})

client.start();

