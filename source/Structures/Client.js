const { Client ,Collection } = require('discord.js');
const { Token , mongooseConnectionString , guildId  } = require('../Configs/config.json');
const mongoose = require('mongoose');
class ExtendedClient extends Client{

    constructor(options){
        super(options);
        this.commands = new Collection();
        this.events = new Collection();
    }
    start(){
        this.login(Token);
        this.on('ready' , async ()=>{
            console.log(`Logged in as ${this.user.tag}`)
            await mongoose.connect(mongooseConnectionString);
	        console.log('MongoDB Connected')
        });

    }
    async registerCommands(arrayOfCommands){
        if(guildId){
            await this.guilds.cache.get(guildId).commands.set(arrayOfCommands);
            console.log('Registered Slash Commands On Development GUILD')
        }
        else{
            await this.application.commands.set(arrayOfCommands);
            console.log('Registered Slash Commands Globally')
        }
    }
}
module.exports = ExtendedClient;
