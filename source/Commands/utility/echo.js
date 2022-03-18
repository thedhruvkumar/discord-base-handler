const {Command} = require('reconlx');
const {} = require('discord.js');

module.exports = new Command({
    name:"echo",
    description:"echo a message",
    type: 'CHAT_INPUT' ,
    userPermissions:['SEND_MESSAGES'],
    options:[{
        name:'message',
        description:'your message',
        type:'STRING',
        required:true

    }],
    execute : async({interaction , client})=>{
        interaction.reply({content:`${interaction.options.getString('message')}`})
    }
});