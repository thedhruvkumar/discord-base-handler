const client = require('../../index.js');
client.on( "interactionCreate" ,	async (interaction) =>{
    if (!interaction.isCommand()) return;
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    
    if(!interaction.member.permissions.has(command.userPermissions)) return interaction.reply({content:`You dont have the following permission \`${command.userPermissions}\`` , ephemeral:true});
    
    
    const args = [];    
    
    for (let option of interaction.options.data) {
        if (option.type === "SUB_COMMAND") {
            if (option.name) args.push(option.name);
            option.options?.forEach((x) => {
                if (x.value) args.push(x.value);
            });
        } else if (option.value) args.push(option.value);
    }
    
        
        await command.execute({client , interaction , args}).catch((error)=>{
            console.log(error);
            interaction.reply({content:'An Error Occured While Processing' , ephemeral:true})
        });
   

    
    
    if (!interaction.isButton()) return;
    if (!interaction.isSelectMenu()) return;
    
});
