//                     zimbot.inc.pressents 
//                     2022 production
//                     Thanks to dikArdnt
                                                                                        //drips


const fs = require('fs')
const chalk = require('chalk')

//global api
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other

module.global = {

    owner : '94715166712',
    pemilik : process.env.pemilink_number = "94715166712",
    premium: process.env.primium_number = '945166712',
    pengguna: process.env.pengguna = 'Nima',
    botnma: process.env.BOT_NAME = 'BOT NAME',
    ownernma: process.env.OWNER_NAME= 'Mr.Nima',
    packname: process.env.STICKER_PACKAGE =  '© Zim',
    sessionName: process.env.session_Name = 'session',
    prefa: process.env.prefa = '#',
    sp: process.env.SP_IMOJI =  '📍',
    
    },
/*global.owner = ['94715166712'] 
global.pemilik = ['94715166712'] //pemilik nomor
global.premium = ['94715166712'] //premium number
global.pengguna = 'Nima' //pengguna
global.botnma = 'GROUP BOT INC' //botnama,botname
global.ownernma = 'nima' //ownernama,ownername
global.packname = 'Nima offical group \nSticker pack 🥷' // packname
global.author = 'Mr. nima' //authorname
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵' */
global.mess = {
    success: '✅ Done!',
    admin: 'you must be admin to use this cmd!',
    botAdmin: 'zim bot must be admin neh!',
    owner: 'This cmd is for zim bot owner only',
    group: 'oooh sorry this cmd is for groups only!',
    private: 'goossssh it can only used in dms!',
    bot: 'This cmd  its only for the bot host',
    wait: 'wait zim bot processing ',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    

global.thumb = fs.readFileSync('./image/drips.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
