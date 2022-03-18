const Command = require('../../Structures/Command');
const {MessageEmbed} = require('discord.js');

module.exports = new Command({
    name:"help",
    description:"help you",
    type:"CHAT_INPUT",
    userPermissions:['SEND_MESSAGES'],
    execute : async({interaction , client})=>{
        interaction.reply({content:`wohoo`})
    }
});