var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('message', function (user, userID, channelID, message, evt) {
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            case 'greet':
                for (var user in args) {
                    bot.sendMessage({
                        to: channelID,
                        message: `Hi ${args[user]}! How are you today? Welcome back to the discord! Thanks for stopping by!!`
                    });
                }
                break;
            case 'summon':
                bot.moveUserTo({
                    userID, channelID
                });
                bot.sendMessage({
                    to: channelID,
                    message: 'Can\'t kill me!'
                });
                break;
         }
     }
});