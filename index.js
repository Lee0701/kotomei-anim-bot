const Telegraf = require('telegraf')
require('dotenv').config()
const config = require('./config.js')

const bot = new Telegraf(config.botToken)

const animation = ['|)', '|`)', '|・`)', '|ω・`)', '| ω・`)']
const delay = 100

// | ω・`)
bot.command('prpr', (ctx) => {
  let index = 0
  const edit = (msg) => {
    ctx.telegram.editMessageText(msg.chat.id, msg.message_id, null, animation[index])
    if(++index < animation.length) setTimeout(() => edit(msg), delay)
  }
  ctx.reply('|').then((msg) => edit(msg))
})

bot.launch()
