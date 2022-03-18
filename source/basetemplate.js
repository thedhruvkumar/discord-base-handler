const Command = require('../../Structures/Command');
const {} = require('discord.js');

module.exports = new Command({
    name:"",
    description:"",
    type:"",
    userPermissions:[''],
    execute : async({interaction , client})=>{
        interaction.reply({content:``})
    }
});