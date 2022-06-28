//                     zimbot.inc.pressents 
//                     2022 production
//                     Thanks to dikArdnt
// 👋 SOME BUG ARE FIXING AND ADD NEW PARTS by MR NIMA 
                                                                                        //drips


const fs = require('fs')
const chalk = require('chalk')

//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

//other
global.owner = ['94715166712'] 
global.pemilik = ['94715166712'] //pemilik nomor
global.premium = ['94715166712'] //premium number
global.pengguna = 'Nima' //pengguna
global.botnma = '𝐋𝐨𝐥𝐢 𝐁𝐨𝐭' //botnama,botname
global.ownernma = 'nima' //ownernama,ownername
global.packname = '© ɴɪᴍᴀ ᴇᴅɪᴛɪᴏɴ' // packname
global.author = 'ɴɪᴍᴀ ᴏғᴄ ɢʀᴏᴜᴘ ʙᴏᴛ' //authorname
global.sessionName = 'session'
global.prefa = ['#','!','/',''] 
global.sp = '🔵'
// Alive massage 
global.alive =`Hello i am alive now

Download song type .yt 
Thanks fro using...`
// Welcome massage  
global.welcome = `
🌀 Thanks Fro using sl zim bot
✾ Some bugs fixing
😼♥️
`
// වෙල්කම් එක යවන්න ඔනි නම් add කියලා දාන්න 
global.sendwelcome = `add`
// Good bye එක ඔනි නම් remove කියලා දාන්න
global.sendgoodbye = `remove`

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
global.imgalive = fs.readFileSync('./image/drips.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
