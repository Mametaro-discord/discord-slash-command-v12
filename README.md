[![version](https://img.shields.io/npm/v/discord-slash-commands-v12?style=flat-square)](https://www.npmjs.com/package/discord-slash-commands-v12?activeTab=versions)
[![downloads](https://img.shields.io/npm/dt/discord-slash-commands-v12?style=flat-square)](https://www.npmjs.com/package/discord-slash-commands-v12)
[![issue](https://img.shields.io/github/issues/Mametaro-discord/discord-slash-command-v12?style=flat-square)](https://github.com/Mametaro-discord/discord-slash-commands-v12/issues)
[![pull request](https://img.shields.io/github/issues-pr/Mametaro-discord/discord-slash-command-v12?style=flat-square)](https://github.com/Mametaro-discord/discord-slash-commands-v12/pulls)
[![license](https://img.shields.io/github/license/Mametaro-discord/discord-slash-command-v12?style=flat-square)](https://github.com/Mametaro-discord/discord-slash-commands-v12/blob/master/LICENSE)
# discord-slash-commands-v12
 
## Check it
This package got so big changing. sorry;<br>
So please give me reports(with issues and pull requests) to me.

## Description 
If you used this, you could handle slash commands easily.

## Getting Started
**Installation**  
```
npm i discord-slash-commands-v12 
```  
  
**Mandatory Preparation**  
You have to give the bot the scope "applications.commands" to handle slash commands.  
↓example url
```
https://discord.com/api/oauth2/authorize?client_id={BOTS_ID}&permissions=0&scope=bot+applications.commands
```

## Usage 
**Setup** 
```js
const { Client } = require('discord.js');
const client = new Client();
const slash = require('discord-slash-commands-v12');
slash(client);
``` 

<!--
**Event Listener** 
```js
client.on('command', (data) => {
	//code
});
```
-->

**Example**(Ping-Pong)
```js
slash(client);

client.on('ready', () => {
	const ping = {
		name: 'ping',
		description: 'pong!'
	};
	client.commands.create(ping);
});

client.on('command', data => {
	if (data.commandName === 'ping') {
		data.reply.send('pong!');
	};
});
``` 

## Need more help?
You can ask in [my discord server](https://discord.gg/UQSUBHwM7T)

## Finally
I hope I did no mistake;  
Give me issues if you find bugs!  
 
I will make MessageComponents usable.  
So, please wait for new releases.  
