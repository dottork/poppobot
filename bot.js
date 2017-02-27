var cool = require('cool-ascii-faces')

var asciiHeart = require("ascii-heart");

const cows = require('cows');

const vacca=require('vaca');

var token = '309693128:AAH4TGkBXegyVLykKklS9P44emEgv56K9BM';

var Bot = require('node-telegram-bot-api'),
    bot = new Bot(token, { polling: true });

console.log('bot server started...');





bot.onText(/^\/somma((\s+\d+)+)$/, function (msg, match) {
  var result = 0;
  match[1].trim().split(/\s+/).forEach(function (i) {
    result += (+i || 0);
  })
  bot.sendMessage(msg.chat.id, result).then(function () {
    // reply sent!
  });
});


bot.onText(/faccia/,function (msg) {
  bot.sendMessage(msg.chat.id, cool());
});

bot.onText(/mucca/,function (msg) {
  var ii=Math.floor(Math.random() * 399) + 1;  
  const opts = {
    parse_mode: "HTML",
  };
  bot.sendMessage(msg.chat.id, "<code>"+ cows()[ii] + "</code>", opts);
  console.log(cows()[ii]);
});


bot.onText(/cuore/,function (msg) {
  const opts = {
    parse_mode: "HTML",
  };
  bot.sendMessage(msg.chat.id, "<code>"+ asciiHeart(12,12) + "</code>", opts);
  
});














