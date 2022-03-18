
const config = require('../Configs/config.json')
const mongoose = require('mongoose');

module.exports = (client)=> {

client.on("ready", async () => {
	
    // Register for a single guild
    // await client.guilds.cache
    //     .get("926738025759776858")
    //     .commands.set(commands);

    // Register for all the guilds the bot is in
    // await client.application.commands.set(commands);
});


}
