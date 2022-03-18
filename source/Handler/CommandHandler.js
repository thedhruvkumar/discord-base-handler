const { readdirSync } = require('fs');

module.exports = (client) => {

    const commands = [];
    const cmdFolders = readdirSync(`./source/Commands`);
    cmdFolders.forEach(cmdFolder=>{
        const cmdFiles = readdirSync(`./source/Commands/${cmdFolder}`).filter(f=>f.endsWith('.js'));
        cmdFiles.forEach(file=>{
            const command = require(`../Commands/${cmdFolder}/${file}`);
            client.commands.set(command.name,command);
            commands.push(command)
               
        });

    });
    client.on('ready' , async () => client.registerCommands(commands));

}