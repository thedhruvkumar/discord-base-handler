const { readdirSync } = require('fs');

module.exports = (client) => {
	const eventDirs = readdirSync('./source/Events')

	eventDirs.forEach((folder)=>{
		const eventFiles = readdirSync(`./source/Events/${folder}`);
		eventFiles.forEach((file)=> {
		const event = require(`../Events/${folder}/${file}`);
		if (event.once) {
			client.once(event.name, (...args) => event.execute(...args));
		} else {
			client.on(event.name, (...args) => event.execute(...args));
		}
	})
	})
    


}