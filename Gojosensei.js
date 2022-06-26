require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const maker = require('mumaker')

const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const nexusnw = require('xfarr-api')

//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database\\
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = GojoMdNx = async (GojoMdNx, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await GojoMdNx.decodeJid(GojoMdNx.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group\\
        const groupMetadata = m.isGroup ? await GojoMdNx.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
	
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	//group target \\
const reply = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/gojo.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            GojoMdNx.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": ` Gojo-Satoru`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./GojoMedia/gojo.jpg`),"sourceUrl": "https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg"}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!GojoMdNx.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read\\
        if (m.message) {
            GojoMdNx.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await GojoMdNx.setStatus(`${GojoMdNx.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink\\
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nYou have been detected sending a group link, sorry you will be kicked !`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await GojoMdNx.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Sent This Group Link❤️`)
        if (isAdmins) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are An Admin Of The Group❤️`)
        if (isCreator) return reply(`Group Is Installed With Anti-Link But I Won't Kick You 😉, Because You Are My Owner Hahahahah🤣😘, You Think I Will Betray You Huh🐦`)
        GojoMdNx.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply 
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./GojoMedia/sticker/${anji}.webp`)
					GojoMdNx.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./GojoMedia/vn/${anju}.mp3`)
					GojoMdNx.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/image/${anjh}.jpg`)
					GojoMdNx.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./GojoMedia/vid/${anjh}.mp4`)
					GojoMdNx.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: GojoMdNx.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, GojoMdNx.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        GojoMdNx.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            GojoMdNx.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, GojoMdNx.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    GojoMdNx.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    GojoMdNx.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) GojoMdNx.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) GojoMdNx.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    GojoMdNx.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) GojoMdNx.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) GojoMdNx.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    GojoMdNx.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
        case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var GojoMdNx = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Your Blood* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Your Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Your Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Your Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Your Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Your Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HUNT RESULT🐺 ]_\n`
     teksehmazeh += `*🐟Fish* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Chicken* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Rabbit* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Sheep* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Cow* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Elephant* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await GojoMdNx.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, GojoMdNx, [{"urlButton": {"displayText": "YouTube📍","url": `${myweb}`}}])
  }
  break
        case 'userlimit': 
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Fish* : ${i.ikan}\n`
     txt += `*🐔Chicken* : ${i.ayam}\n`
     txt += `*🐇Rabbit* : ${i.kelinci}\n`
     txt += `*🐑Sheep* : ${i.domba}\n`
     txt += `*🐄Cow* : ${i.sapi}\n`
     txt += `*🐘Elephant* : ${i.gajah}\n\n`
     }
    reply(txt)       
  }
 break
case 'mining': case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mine Again⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     GojoMdNx.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Started Mining🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaction\\
 case 'getyt': case 'ytlist' : case 'ytl' : {
                                  
                                  if (!text) throw `Example : ${prefix + command} bts boy with luv`
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  for (let i of search.all)
                                  nima =  `
                                      
╔═════════════════◉
║     sʟ-ᴢɪᴍ ʙᴏᴛ ʏᴏᴜᴛᴜʙᴇ ᴅᴏᴡɴʟᴏᴅᴇʀ    ║
 ◉═════════════════╝
 `,
                                      template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      listMessage :{
                                      description: nima,
                                      buttonText: " SELECT ",
                                      footerText: ` 
🐣 ᴛɪᴛʟᴇ : ${search.all[0].title}

🔍 ɢᴇᴛ ᴛʏᴘᴇ : Search

📨 ɪᴅ : ${search.all[0].videoId}

⏰ ᴅᴜʀᴀᴛɪᴏɴ : ${search.all[0].timestamp}

🥷 ᴠɪᴇᴡs : ${search.all[0].views}

😼 ᴜᴘʟᴏᴀᴅ ᴛɪᴍᴇ : ${search.all[0].ago}

✍️ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ : ${search.all[0].description}

🌀 ᴜʀʟ : ${search.all[0].ago}



🧑‍💻 ᴾᴼᵂᴱᴿᴰ ᴮᵞ 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 `,
                                      listType: "SINGLE_SELECT",
                                      sections: [{
                                                  "title": `❶ Title - ${search.all[0].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[0].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[0].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[0].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[0].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❷ Title - ${search.all[1].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[1].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[1].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[1].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[1].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❸ Title - ${search.all[2].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[2].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[2].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[2].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[2].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❹ Title - ${search.all[3].title}` ,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[3].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[3].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[3].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[3].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❺ Title - ${search.all[4].title}` ,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[4].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[4].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[4].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[4].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❻ Title - ${search.all[5].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[5].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[5].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[5].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[5].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❼ Title - ${search.all[6].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[6].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[6].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[6].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[6].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❽ Title - ${search.all[7].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[7].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[7].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[7].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[7].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `❾ Title - ${search.all[8].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[8].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[8].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[8].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[8].url}`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": `➓ Title - ${search.all[9].title}`,
                                                  "rows": [
                                                      {
                                                          "title": " Download Song Document Type ",
                                                          
                                                          "rowId": `ytmp3 ${search.all[9].url}`
                                                      },
                                                      {
                                                          "title": " Download Song Audio Type ",
                                                          
                                                          "rowId": `audytmp3 ${search.all[9].url}`
                                                      },
                                                      {
                                                          "title": "Download Video",
                                                          
                                                          "rowId": `ytmp4 ${search.all[9].url}`
                                                      },
                                                      {
                                                          "title": "Download Document Video ",
                                                          
                                                          "rowId": `docvideo ${search.all[9].url}`
                                                      }
                                                  ]
                                              }
                                              
                                          ],
                              listType: 1
                                  }
                              }), {})
                              GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break	
                          case 'ttc': case 'ttt': case 'tictactoe': {
                              let TicTacToe = require("./lib/tictactoe")
                              this.game = this.game ? this.game : {}
                              if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
                              let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
                              if (room) {
                              reply('Partner found!')
                              room.o = m.chat
                              room.game.playerO = m.sender
                              room.state = 'PLAYING'
                              let arr = room.game.render().map(v => {
                              return {
                              X: '❌',
                              O: '⭕',
                              1: '1️⃣',
                              2: '2️⃣',
                              3: '3️⃣',
                              4: '4️⃣',
                              5: '5️⃣',
                              6: '6️⃣',
                              7: '7️⃣',
                              8: '8️⃣',
                              9: '9️⃣',
                              }[v]
                              })
                              let str = `Room ID: ${room.id}
                  
                  ${arr.slice(0, 3).join('')}
                  ${arr.slice(3, 6).join('')}
                  ${arr.slice(6).join('')}
                  
                  Waiting @${room.game.currentTurn.split('@')[0]}
                  
                  Type *give up* to surrender and admit defeat`
                              if (room.x !== room.o) await GojoMdNx.sendText(room.x, str, m, { mentions: parseMention(str) } )
                              await GojoMdNx.sendText(room.o, str, m, { mentions: parseMention(str) } )
                              } else {
                              room = {
                              id: 'tictactoe-' + (+new Date),
                              x: m.chat,
                              o: '',
                              game: new TicTacToe(m.sender, 'o'),
                              state: 'WAITING'
                              }
                              if (text) room.name = text
                              reply('Waiting for partner' + (text ? ` type the command below ${prefix}${command} ${text}` : ''))
                              this.game[room.id] = room
                              }
                              }
                              break
                              case 'delttc': case 'delttt': {
                              this.game = this.game ? this.game : {}
                              try {
                              if (this.game) {
                              delete this.game
                              GojoMdNx.sendText(m.chat, `Successfully delete the TicTacToe session`, m)
                              } else if (!this.game) {
                              reply(`TicTacToe Session🎮 there is not any`)
                              } else throw '?'
                              } catch (e) {
                              reply('error')
                              }
                              }
                              break
                              case 'suitpvp': case 'suit': {
                              this.suit = this.suit ? this.suit : {}
                              let poin = 10
                              let poin_lose = 10
                              let timeout = 60000
                              if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) reply(`Complete your previous suit`)
                          if (m.mentionedJid[0] === m.sender) return reply(`Can't play with myself !`)
                              if (!m.mentionedJid[0]) return reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
                              if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
                              let id = 'suit_' + new Date() * 1
                              let caption = `_*SUIT PvP*_
                  
                  @${m.sender.split`@`[0]} challenging @${m.mentionedJid[0].split`@`[0]} to play suit
                  
                  Please @${m.mentionedJid[0].split`@`[0]} to type accept/reject`
                              this.suit[id] = {
                              chat: await GojoMdNx.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
                              id: id,
                              p: m.sender,
                              p2: m.mentionedJid[0],
                              status: 'wait',
                              waktu: setTimeout(() => {
                              if (this.suit[id]) GojoMdNx.sendText(m.chat, `_Suit time out_`, m)
                              delete this.suit[id]
                              }, 60000), poin, poin_lose, timeout
                              }
                              }
                              break
                              case 'buddika': {
                
                                
                he = `hellllkk`
                let link = `https://youtu.be/cvj3054O5NU`
                buffer = fs.readFileSync('./drips.jpg')
let buttons = [
{buttonId: `halo`, buttonText: {displayText: 'WELCOME'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
jpegThumbnail:buffer,
fileName: `Welcome To ${metadata.subject}`,
fileLength: 99999999999999,
caption: `${he} \n ${global.welcome}`,
footer: `© DARK MAKER`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `Don't forget to smile today`,
body: `SUBSCRIBE NIMA OFC`,
mediaType:2,
thumbnail: buffer,
sourceUrl: link,
mediaUrl: link,
}}
}
GojoMdNx.sendMessage(anu.id, buttonMessage, {quoted:fgclink})

}
                          case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                                  GojoMdNx.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/TfI3QYW.jpg' }, caption: `*𝗛𝗜 𝗕𝗥𝗢 ${m.pushName}* ` }, { quoted: m })
                              }   // https://i.ibb.co/MhqzZj8/Darkmekcersilverownerfrofilepgoto.jpg
                              break
                          case 'sc': case 'script': case 'git': {
                                  reply('Script : https://github.com/\n Dont Forget to SUB https://youtu.be/cZ3UrzArI5A\n Dont Forget To Subscribe')
                              }
                              break
                              case 'Hi': case 'hi': case 'HI': {
                              if (isAdmins) return reply (`*👋 Hello Admin ${m.pushName}*`)
                                  replay(`*👋 Hello... ${m.pushName}*`)
                              }
                              break
                              case 'Thank': case 'thanku': case 'Thnks': case 'Thank': {
                                  reply(`*🐣 Your are welcome... ${m.pushName}*`)
                              }
                              break
                              case 'chat': {
                                  if (!isCreator) throw mess.owner
                                  if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                                  if (args[0] === 'mute') {
                                      GojoMdNx.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'unmute') {
                                      GojoMdNx.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'archive') {
                                      GojoMdNx.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'unarchive') {
                                      GojoMdNx.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'read') {
                                      GojoMdNx.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'unread') {
                                      GojoMdNx.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'delete') {
                                      GojoMdNx.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  }
                              }
                              break
                          case 'family100hdiejebdjdijdjdjdj': { //this is in indonesian so if u want to activate u can but will be in indonesian
                                  if ('family100'+m.chat in _family100) {
                                      reply('There are still unfinished sessions!')
                                      throw false
                                  }
                                  let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                                  let random = anu[Math.floor(Math.random() * anu.length)]
                                  let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                                  _family100['family100'+m.chat] = {
                                      id: 'family100'+m.chat,
                                      pesan: await GojoMdNx.sendText(m.chat, hasil, m),
                                      ...random,
                                      terjawab: Array.from(random.jawaban, () => false),
                                      hadiah: 6,
                                  }
                              }
                              break
                              case 'halahkdkdkd': case 'hilihdkksls': case 'huluhkdksls': case 'helehkdkdkd': case 'holohkdkskks': //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                              if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
                              ter = command[1].toLowerCase()
                              tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
                              reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
                              break
                              case 'tebakjxkzkossihdhdidii': { //this is in indonesian so if u want to activate u can but will be in indonesian (thanks to respected creator of this case)
                                  if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. music\n2. picture\n3. word\n4. sentence\n5. lyrics\n6.rice cake`
                                  if (args[0] === "lagu") {
                                      if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                      let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                                      let result = anu[Math.floor(Math.random() * anu.length)]
                                      let msg = await GojoMdNx.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                                      GojoMdNx.sendText(m.chat, `The song is a song from?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                                      tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                                      })
                                      await sleep(60000)
                                      if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, GojoMdNx.user.name, m)
                                      delete tebaklagu[m.sender.split('@')[0]]
                                      
                                      }
                                  } else if (args[0] === 'gambar') {
                                      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                                      let result = anu[Math.floor(Math.random() * anu.length)]
                                      GojoMdNx.sendImage(m.chat, result.img, `Please answer the questions above\n\nDescription : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                                      tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                                      })
                                      await sleep(60000)
                                      if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time has run out\Answer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, GojoMdNx.user.name, m)
                                      delete tebakgambar[m.sender.split('@')[0]]
                                      
                                      }
                                  } else if (args[0] === 'kata') {
                                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                                      let result = anu[Math.floor(Math.random() * anu.length)]
                                      GojoMdNx.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                                      tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                                      })
                                      await sleep(60000)
                                      if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time has run out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, GojoMdNx.user.name, m)
                                      delete tebakkata[m.sender.split('@')[0]]
                                      
                                      }
                                  } else if (args[0] === 'kalimat') {
                                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                                      let result = anu[Math.floor(Math.random() * anu.length)]
                                      GojoMdNx.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60s`, m).then(() => {
                                      tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                                      })
                                      await sleep(60000)
                                      if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, GojoMdNx.user.name, m)
                                      delete tebakkalimat[m.sender.split('@')[0]]
                                      
                                      }
                                  } else if (args[0] === 'lirik') {
                                      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                                      let result = anu[Math.floor(Math.random() * anu.length)]
                                      GojoMdNx.sendText(m.chat, `These are the lyrics of the song? : *${result.soal}*?\nTime : 60s`, m).then(() => {
                                      tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                                      })
                                      await sleep(60000)
                                      if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, GojoMdNx.user.name, m)
                                      delete tebaklirik[m.sender.split('@')[0]]
                                      
                                      }
                                  } else if (args[0] === 'lontong') {
                                      if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                      let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                                      let result = anu[Math.floor(Math.random() * anu.length)]
                                      GojoMdNx.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
                                      caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                              caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                                      })
                                      await sleep(60000)
                                      if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      GojoMdNx.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, GojoMdNx.user.name, m)
                                      delete caklontong[m.sender.split('@')[0]]
                              delete caklontong_desk[m.sender.split('@')[0]]
                          
                                      }
                                  }
                              }
                              break
                              case 'mathquiz': case 'math': {
                                  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                                  let { genMath, modes } = require('./src/math')
                                  if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nExample: ${prefix}math medium`
                                  let result = await genMath(text.toLowerCase())
                                  GojoMdNx.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} seconds`, m).then(() => {
                                      kuismath[m.sender.split('@')[0]] = result.jawaban
                                  })
                                  await sleep(result.waktu)
                                  if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                                      console.log("Answer: " + result.jawaban)
                                      reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                                      delete kuismath[m.sender.split('@')[0]]
                                  }
                              }
                              break
                              case 'mysoulmate': {
                              if (!m.isGroup) throw mess.group
                              let member = participants.map(u => u.id)
                              let me = m.sender
                              let jodoh = member[Math.floor(Math.random() * member.length)]
                              let jawab = `👫Your match is
                  
                  @${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
                              let ments = [me, jodoh]
                              let buttons = [
                                          { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: ments})
                              }
                              break
                              case 'couple': {
                              if (!m.isGroup) throw mess.group
                              let member = participants.map(u => u.id)
                              let orang = member[Math.floor(Math.random() * member.length)]
                              let jodoh = member[Math.floor(Math.random() * member.length)]
                              let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
                  Ciee Whats Going On💖👀`
                              let menst = [orang, jodoh]
                              let buttons = [
                                          { buttonId: 'CONGRATS', buttonText: { displayText: 'CONGRATS' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, jawab, GojoMdNx.user.name, m, {mentions: menst})
                              }
                              break
                              case 'join': {
                                  if (!isCreator) throw mess.owner
                                  if (!text) throw 'Enter the group link!'
                                  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                                  replay(mess.wait)
                                  let result = args[0].split('https://chat.whatsapp.com/')[1]
                                  await GojoMdNx.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                              }
                              break
                              case 'leave': {
                                  if (!isCreator) throw mess.owner
                                  await GojoMdNx.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                              }
                              break
                          case 'kick': case 'remove': case 'ban':{
                          if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
                      case 'add': {
                          if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                          let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
                      case 'promote': {
                          if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
                      case 'demote': {
                          if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await GojoMdNx.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
                          case 'block': {
                          if (!isCreator) throw mess.owner
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await GojoMdNx.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
                          case 'unblock': {
                          if (!isCreator) throw mess.owner
                          let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                          await GojoMdNx.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                      }
                      break
                          case 'setname': case 'setsubject': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (!text) throw 'Text ?'
                                  await GojoMdNx.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
                              }
                              break
                            case 'setdesc': case 'setdesk': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (!text) throw 'Text ?'
                                  await GojoMdNx.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
                              }
                              break
                            case 'setppbot': case 'setbotpp': {
                                  if (!isCreator) throw mess.owner
                                  if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  await GojoMdNx.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                                  reply(mess.success)
                                  }
                                  break
                             case 'setppgroup': case 'setgrouppp': case 'setgcpp': case 'setppgrup': case 'setppgc': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isAdmins) throw mess.admin
                                  if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  await GojoMdNx.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                                  reply(mess.success)
                                  }
                                  break
                  case 'grupinfo': case 'groupinfo':
                  try{
                   var pic = await GojoMdNx.getProfilePicture(m.chat)
                    } catch {
                   var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
                    }
                  let ingfo = `*𝗚𝗥𝗢𝗨𝗣 𝗜𝗡𝗙𝗢*\n\n*𝗡𝗔𝗠𝗘 :* ${groupName}\n*𝗜𝗗 𝗚𝗥𝗢𝗨𝗣:* ${m.chat}\n*𝗠𝗔𝗗𝗘 :* ${moment(`${groupMetadata.creation}` * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n*𝗚𝗥𝗢𝗨𝗣 𝗢𝗪𝗡𝗘𝗥:* @${groupMetadata.owner.split('@')[0]}\n*𝗔𝗗𝗠𝗜𝗡𝗦 :* ${groupAdmins.length}\n*𝗠𝗘𝗠𝗕𝗘𝗥𝗦 :* ${participants.length}\n*𝗗𝗘𝗦𝗖 :* \n${groupMetadata.desc}`
                  ds = await getBuffer(pic)
                  GojoMdNx.sendMessage(m.chat, { image: ds,caption: ingfo, mentions: [groupMetadata.owner] }, { quoted: m})
                  break
                              case 'tagall': case 'tag': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                  let teks = `༼༺⋋ 𝗧𝗔𝗚𝗔𝗟𝗟 ⋌༻༽
                   
                    *𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n`
                                  for (let mem of participants) {
                                  teks += `🔵 @${mem.id.split('@')[0]}\n`
                                  }
                                  GojoMdNx.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                                  }
                                  break
                                  case 'hidetag': {
                              if (!m.isGroup) throw mess.group
                              if (!isAdmins) throw mess.admin
                              GojoMdNx.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                              }
                              break
                          case 'style': case 'styletext': {
                              if (!isPremium && global.db.users[m.sender].limit < 1) return reply(mess.endLimit) // response when limit runs out
                          db.users[m.sender].limit -= 1 // -1 limit
                          let { styletext } = require('./lib/scraper')
                          if (!text) throw 'Enter Query text!'
                                  let anu = await styletext(text)
                                  let teks = `Entered Text:  ${text}\n\n`
                                  for (let i of anu) {
                                      teks += `🔵 *${i.name}* : ${i.result}\n\n`
                                  }
                                  reply(teks)
                          }
                          break
                                 case 'vote': {
                              if (!m.isGroup) throw mess.group
                              if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
                              if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Owner is handsome*`
                              reply(`Voting starts!\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}checkvote* - to check the votes\n*${prefix}deletevote* - to delete vote`)
                              vote[m.chat] = [q, [], []]
                              await sleep(1000)
                              upvote = vote[m.chat][1]
                              devote = vote[m.chat][2]
                              teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽
                  
                  *𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
                  
                  ┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${vote[m.chat][1].length}
                  
                   
                  └────
                  
                  ┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${vote[m.chat][2].length}
                  
                   
                  └────
                  
                  *${prefix}deletevote* - to delete votes`
                  let buttonsVote = [
                    {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
                    {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
                  ]
                  
                              let buttonMessageVote = {
                                  text: teks_vote,
                                  footer: GojoMdNx.user.name,
                                  buttons: buttonsVote,
                                  headerType: 1
                              }
                              GojoMdNx.sendMessage(m.chat, buttonMessageVote)
                          }
                              break
                                 case 'upvote': {
                              if (!m.isGroup) throw mess.group
                              if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*Type ${prefix}vote* - to start voting`
                              isVote = vote[m.chat][1].concat(vote[m.chat][2])
                              wasVote = isVote.includes(m.sender)
                              if (wasVote) throw 'You have Voted'
                              vote[m.chat][1].push(m.sender)
                              menvote = vote[m.chat][1].concat(vote[m.chat][2])
                              teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽
                  
                  *𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
                  
                  ┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${vote[m.chat][1].length}
                  ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
                  └────
                  
                  ┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${vote[m.chat][2].length}
                  ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
                  └────
                  
                  *${prefix}hapusvote* - to delete votes`
                              let buttonsUpvote = [
                                {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
                                {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
                              ]
                  
                              let buttonMessageUpvote = {
                                  text: teks_vote,
                                  footer: GojoMdNx.user.name,
                                  buttons: buttonsUpvote,
                                  headerType: 1,
                                  mentions: menvote
                               }
                              GojoMdNx.sendMessage(m.chat, buttonMessageUpvote)
                          }
                               break
                                  case 'devote': {
                              if (!m.isGroup) throw mess.group
                              if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
                              isVote = vote[m.chat][1].concat(vote[m.chat][2])
                              wasVote = isVote.includes(m.sender)
                              if (wasVote) throw 'You Have Voted'
                              vote[m.chat][2].push(m.sender)
                              menvote = vote[m.chat][1].concat(vote[m.chat][2])
                              teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽
                  
                  *𝗗𝗘𝗩𝗢𝗧𝗘:* ${vote[m.chat][0]}
                  
                  ┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${vote[m.chat][1].length}
                  ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
                  └────
                  
                  ┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${vote[m.chat][2].length}
                  ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
                  └────
                  
                  *${prefix}hapusvote* - to delete votes`
                              let buttonsDevote = [
                                {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Up-Vote'}, type: 1},
                                {buttonId: `${prefix}devote`, buttonText: {displayText: 'De-Vote'}, type: 1}
                              ]
                  
                              let buttonMessageDevote = {
                                  text: teks_vote,
                                  footer: GojoMdNx.user.name,
                                  buttons: buttonsDevote,
                                  headerType: 1,
                                  mentions: menvote
                              }
                              GojoMdNx.sendMessage(m.chat, buttonMessageDevote)
                      }
                              break
                                   
                  case 'cekvote':
                  if (!m.isGroup) throw mess.group
                  if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
                  teks_vote = `༼༺⋋ 𝗩𝗢𝗧𝗘 ⋌༻༽
                  
                  *𝗥𝗘𝗔𝗦𝗢𝗡:* ${vote[m.chat][0]}
                  
                  ┌༺ 𝗨𝗣𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${upvote.length}
                  ${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
                  └────
                  
                  ┌༺ 𝗗𝗘𝗩𝗢𝗧𝗘 ༻
                   
                  ├ Total: ${devote.length}
                  ${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
                   
                  └────
                  
                  *${prefix}hapusvote* - to delete votes
                  
                  
                  ©${GojoMdNx.user.id}
                  `
                  GojoMdNx.sendTextWithMentions(m.chat, teks_vote, m)
                  break
                          case 'deletevote': case'delvote': case 'hapusvote': {
                              if (!m.isGroup) throw mess.group
                              if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - to start voting`
                              delete vote[m.chat]
                              reply('Successfully Deleted Vote Session In This Group')
                          }
                              break
                                 case 'group': case 'grup': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (args[0] === 'close'){
                                      await GojoMdNx.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'open'){
                                      await GojoMdNx.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                                  } else {
                                  let buttons = [
                                          { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                                          { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `Group Mode`, GojoMdNx.user.name, m)
                  
                               }
                              }
                              break
                              case 'editinfo': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                               if (args[0] === 'open'){
                                  await GojoMdNx.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
                               } else if (args[0] === 'close'){
                                  await GojoMdNx.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Close Edit Group Info`)).catch((err) => reply(jsonformat(err)))
                               } else {
                               let buttons = [
                                          { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                                          { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `Mode Edit Info`, GojoMdNx.user.name, m)
                  
                              }
                              }
                              break
                   
case 'antilink':
	        if (!m.isGroup) return reply(`This feature only be used in group`)
			if (!isAdmins) return reply(`This feature could be used by admin only`)
			if (!isBotAdmins) return reply(`Bot must be admin first`)
					if (args[0] === 'on') {
						if (isAntiLink) return reply('*already activated*')
						antilink.push(m.chat)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('*Successfully activated the antilink*')
						GojoMdNx.sendMessage(m.chat,  {text: `ALLERT!!! This group has been installed anti-link\nIf you violate then I will kick`})
					} else if (args[0] === 'off') {
						if (!isAntiLink) return reply('*already deactivated*')
						var ini = antilink.indexOf(m.chat)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
						reply('*Successfully disabled antilink*')
					} else  {
                        let buttons = [
                               { buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
                               { buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
                           ]
                           await GojoMdNx.sendButtonText(m.chat, buttons, `*ANTILINK*`, GojoMdNx.user.name, m)
                       }
                                      break 
                                      case 'antiwame': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (args[0] === "on") {
                                  if (db.chats[m.chat].wame) return m.reply(`Already Activated`)
                                  db.chats[m.chat].wame = true
                                  m.reply(`Anti Wa.me Activated!`)
                                  } else if (args[0] === "off") {
                                  if (!db.chats[m.chat].wame) return m.reply(`Already deactivated`)
                                  db.chats[m.chat].wame = false
                                  m.reply(`Anti Wa.me is not activated!`)
                                  } else {
                                   let buttons = [
                                          { buttonId: 'antiwame on', buttonText: { displayText: 'ON' }, type: 1 },
                                          { buttonId: 'antiwame off', buttonText: { displayText: 'OFF' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `Mode Anti Wa.me`, GojoMdNx.user.name, m)
                                  }
                               }
                               break
                                         case 'mute': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isAdmins) throw mess.admin
                                  if (args[0] === "on") {
                                  if (db.chats[m.chat].mute) return reply(`Already activated`)
                                  db.chats[m.chat].mute = true
                                  reply(`${GojoMdNx.user.name} has been muted in this group !`)
                                  } else if (args[0] === "off") {
                                  if (!db.chats[m.chat].mute) return reply(`Already deactivated`)
                                  db.chats[m.chat].mute = false
                                  reply(`${GojoMdNx.user.name} has been unmuted in this group!`)
                                  } else {
                                   let buttons = [
                                          { buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
                                          { buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `Mute Bot`, GojoMdNx.user.name, m)
                                  }
                               }
                               break
                              case 'linkgroup': case 'grouplink': case 'gclink': case 'linkgc': {
                                  if (!m.isGroup) throw mess.group
                                  let response = await GojoMdNx.groupInviteCode(m.chat)
                                  GojoMdNx.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink of: ${groupMetadata.subject} Group`, m, { detectLink: true })
                              }
                              break
                              case 'ephemeral': {
                                  if (!m.isGroup) throw mess.group
                                  if (!isBotAdmins) throw mess.botAdmin
                                  if (!isAdmins) throw mess.admin
                                  if (!text) throw 'Enter the enable/disable value, For Example ${prefix}ephemeral enable'
                                  if (args[0] === 'enable') {
                                      await GojoMdNx.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  } else if (args[0] === 'disable') {
                                      await GojoMdNx.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                                  }
                              }
                              break
                              case 'delete': case 'del': {
                                  if (!m.quoted) throw false
                                  let { chat, fromMe, id, isBaileys } = m.quoted
                                  if (!isBaileys) throw 'The message was not sent by a bot!'
                                  GojoMdNx.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
                              }
                              break
                              case 'bcgc': case 'bcgroup': {
                                  if (!isCreator) throw mess.owner
                                  if (!text) throw `Where is the text?\n\nExample : ${prefix + command} hello guys, am back`
                                  let getGroups = await GojoMdNx.groupFetchAllParticipating()
                                  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                                  let anu = groups.map(v => v.id)
                                  reply(`Send Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} second`)
                                  for (let i of anu) {
                                      await sleep(1500)
                                      let btn = [{
                                                  urlButton: {
                                                      displayText: '😼 BOT GROUP 😼',
                                                      url: 'https://chat.whatsapp.com/Fs5ZpTLA3u64JN5a6K3a44'
                                                  }
                                              }, {
                                                  callButton: {
                                                      displayText: 'OWNER',
                                                      phoneNumber:'+94 715166712'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'BOT STATUS',
                                                      id: 'ping'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: 'owner'
                                                  }  
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: '𝙝𝙤𝙬 𝙩𝙤 𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙',
                                                      id: 'nimayt'
                                                  }
                                              }]
                                        fatihgans = fs.readFileSync('./image/drips.jpg')
                                        let txt = `「 ZimBot Broadcast 」\n\n${text}`
                                        GojoMdNx.send5ButImg(i, txt, GojoMdNx.user.name, fatihgans, btn)
                                      }
                                  reply(`Successful Sending Broadcast To ${anu.length} Group(s)`)
                              }
                              break
                              case 'bc': case 'broadcast': case 'bcall': {
                                  if (!isCreator) throw mess.owner
                                  if (!text) throw `Where is the text?\n\nExample : ${prefix + command} Zimbot here`
                                  let anu = await store.chats.all().map(v => v.id)
                                  reply(`Send Broadcast To ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} second`)
                          for (let yoi of anu) {
                              await sleep(1500)
                              let btn = [{
                                                  urlButton: {
                                                      displayText: 'BOT GROUP',
                                                      url: 'https://chat.whatsapp.com/Fs5ZpTLA3u64JN5a6K3a44'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: 'owner'
                                                  }
                                              }]
                                        fatihgans = fs.readFileSync('./image/drips.jpg')
                                        let txt = `「 BOT BROADCAST 」\n\n${text}`
                                        GojoMdNx.send5ButImg(yoi, txt, `Broadcast By ${global.pengguna}`, fatihgans, btn)
                          }
                          reply('Broadcast Success')
                              }
                              break
                              case 'chatinfo': {
                                  if (!m.quoted) reply('Reply to mesaage')
                                  let msg = await m.getQuotedObj()
                                  if (!m.quoted.isBaileys) throw 'The message was not sent by a bot!'
                                  let teks = ''
                                  for (let i of msg.userReceipt) {
                                      let read = i.readTimestamp
                                      let unread = i.receiptTimestamp
                                      let waktu = read ? read : unread
                                      teks += `🔵 @${i.userJid.split('@')[0]}\n`
                                      teks += `🔵 *𝗧𝗜𝗠𝗘 :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} 🔵 *𝗦𝗧𝗔𝗧𝗨𝗦 :* ${read ? 'Read' : 'Unread'}\n\n`
                                  }
                                  GojoMdNx.sendTextWithMentions(m.chat, teks, m)
                              }
                              break
                              case 'q': case 'quoted': {
                          if (!m.quoted) return reply('Reply Message!!')
                          let wokwol = await GojoMdNx.serializeM(await m.getQuotedObj())
                          if (!wokwol.quoted) return reply('The message you replied to does not contain a reply')
                          await wokwol.quoted.copyNForward(m.chat, true)
                              }
                          break
                              case 'listpc': {
                                   let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                                   let teks = `🔵 *𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗟 𝗖𝗛𝗔𝗧 𝗟𝗜𝗦𝗧*\n\n𝗧𝗢𝗧𝗔𝗟 𝗖𝗛𝗔𝗧 : ${anu.length} Chat\n\n`
                                   for (let i of anu) {
                                       let nama = store.messages[i].array[0].pushName
                                       teks += `🔵 *𝗡𝗔𝗠𝗘 :* ${nama}\n🔵 *𝗨𝗦𝗘𝗥 :* @${i.split('@')[0]}\n🔵 *𝗖𝗛𝗔𝗧 :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                                   }
                                   GojoMdNx.sendTextWithMentions(m.chat, teks, m)
                               }
                               break
                                   case 'listgc': {
                                   let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                                   let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                                   for (let i of anu) {
                                       let metadata = await GojoMdNx.groupMetadata(i)
                                       teks += `🔵 *𝗡𝗔𝗠𝗘 :* ${metadata.subject}\n *🔵OWNER :* @${metadata.owner.split('@')[0]}\n🔵 *🔵ID :* ${metadata.id}\n🔵 *MADE :* ${moment(metadata.creation * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n🔵 *MEMBERS :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                                   }
                                   GojoMdNx.sendTextWithMentions(m.chat, teks, m)
                           }	 
                               break
                               case 'listonline': case 'onlinelist': case 'liston': {
                                      let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                                      let online = [...Object.keys(store.presences[id]), botNumber]
                                      GojoMdNx.sendText(m.chat, 'Online List:\n\n' + online.map(v => '🔵 @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
                               }
                               break
                              case 'sticker': case 's': case 'stickergif': case 'sgif': {
                              if (!quoted) throw `Reply Video/Image With Caption ${prefix + command}`
                              replay('```💱 makeing your sticker ...```')
                                      if (/image/.test(mime)) {
                                  let media = await quoted.download()
                                  let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                                  await fs.unlinkSync(encmedia)
                              } else if (/video/.test(mime)) {
                                  if ((quoted.msg || quoted).seconds > 11) return reply('උපරිම තත්පර 10ක වීඩියෝ පමණයි !')
                                  let media = await quoted.download()
                                  let encmedia = await GojoMdNx.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                                  await fs.unlinkSync(encmedia)
                              } else {
                                  throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                                  }
                              }
                              break
                              case 'ebinary': {
                              if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
                              let { eBinary } = require('./lib/binary')
                              let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                              let eb = await eBinary(teks)
                              reply(eb)
                          }
                          break
                              case 'dbinary': {
                              if (!m.quoted.text && !text) throw `Send/reply text with caption ${prefix + command}`
                              let { dBinary } = require('./lib/binary')
                              let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
                              let db = await dBinary(teks)
                              reply(db)
                          }
                          break
                              case 'emojimix': {
                              if (!text) throw `Example : ${prefix + command} 😅+🤔`
                          let [emoji1, emoji2] = text.split`+`
                          let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                          for (let res of anu.results) {
                              let encmedia = await GojoMdNx.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
                              await fs.unlinkSync(encmedia)
                          }
                          }
                          break
                              case 'photo': case 'toimg': {
                                  if (!quoted) throw '*photo  එකකට රිප්ලයි කරන්න !*'
                                  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                                  replay(mess.wait)
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  let ran = await getRandom('.png')
                                  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                                      fs.unlinkSync(media)
                                      if (err) throw err
                                      let buffer = fs.readFileSync(ran)
                                      GojoMdNx.sendMessage(m.chat, { image: buffer }, { quoted: m })
                                      fs.unlinkSync(ran)
                                  })
                              }
                              break
                              case 'tomp4': case 'tovideo': {
                                  if (!quoted) throw 'Reply Image'
                                  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                                  replay(mess.wait)
                          let { webp2mp4File } = require('./lib/uploader')
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  let webpToMp4 = await webp2mp4File(media)
                                  await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                                  await fs.unlinkSync(media)
                              }
                              break
                              case 'toaud': case 'toaudio': {
                              if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want Audio With Caption ${prefix + command}`
                              if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
                              replay(mess.wait)
                              let media = await quoted.download()
                              let { toAudio } = require('./lib/converter')
                              let audio = await toAudio(media, 'mp4')
                              GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
                              }
                              break
                              case 'tomp3': case 'mp3': {
                              if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
                              if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
                              if (!quoted) throw `Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`
                              replay(mess.wait)
                              let media = await quoted.download()
                              let { toAudio } = require('./lib/converter')
                              let audio = await toAudio(media, 'mp4')
                              GojoMdNx.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${GojoMdNx.user.name}.mp3`}, { quoted : m })
                              }
                              break
                              case 'tovn': case 'unvoice': {
                              if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
                              if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
                              replay(mess.wait)
                              let media = await quoted.download()
                              let { toPTT } = require('./lib/converter')
                              let audio = await toPTT(media, 'mp4')
                              GojoMdNx.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
                              }
                              break
                              case 'togif': {
                                  if (!quoted) throw 'Reply Image'
                                  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                                  replay(mess.wait)
                          let { webp2mp4File } = require('./lib/uploader')
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  let webpToMp4 = await webp2mp4File(media)
                                  await GojoMdNx.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                                  await fs.unlinkSync(media)
                              }
                              break
                              case 'tourl': {
                                  replay(mess.wait)
                          let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  if (/image/.test(mime)) {
                                      let anu = await TelegraPh(media)
                                      reply(util.format(anu))
                                  } else if (!/image/.test(mime)) {
                                      let anu = await UploadFileUgu(media)
                                      reply(util.format(anu))
                                  }
                                  await fs.unlinkSync(media)
                              }
                              break
                              case 'imagenobg': case 'removebg': case 'remove-bg': {
                          if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                          if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                          if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                          let remobg = require('remove.bg')
                          let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
                          let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
                          hmm = await './src/remobg-'+getRandom('')
                          localFile = await GojoMdNx.downloadAndSaveMediaMessage(quoted, hmm)
                          outputFile = await './src/hremo-'+getRandom('.png')
                          replay('*Background removeing...*')
                          remobg.removeBackgroundFromImageFile({
                            path: localFile,
                            apiKey: apinobg,
                            size: "regular",
                            type: "auto",
                            scale: "100%",
                            outputFile 
                          }).then(async result => {
                          GojoMdNx.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
                          await fs.unlinkSync(localFile)
                          await fs.unlinkSync(outputFile)
                          })
                          }
                          break
                          case 'yts': case 'ytsearch': {
                                  if (!text) throw `Example : ${prefix + command} story wa anime`
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  let teks = 'Subscribe Search\n\n Result From '+text+'\n\n'
                                  let no = 1
                                  for (let i of search.all) {
                                      teks += `🔵 No : ${no++}\n💮 𝗧𝗬𝗣𝗘 : ${i.type}\n🔳 𝗩𝗜𝗗𝗘𝗢 𝗜𝗗 : ${i.videoId}\n🔴 𝗧𝗜𝗧𝗟𝗘 : ${i.title}\n🔵 𝗩𝗜𝗘𝗪𝗦 : ${i.views}\n🎬 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${i.timestamp}\n📡 𝗨𝗣𝗟𝗢𝗔𝗗 𝗔𝗧 : ${i.ago}\n🌍 𝗔𝗨𝗧𝗛𝗢𝗥 : ${i.author.name}\n📌 𝗨𝗥𝗟 : ${i.url}\n\n─────────────────\n\n`
                                  }
                                  GojoMdNx.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
                              }
                              break
                          case 'google': {
                                  if (!text) throw `Example : ${prefix + command} fatih arridho`
                                  let google = require('google-it')
                                  google({'query': text}).then(res => {
                                  let teks = `Google Search From : ${text}\n\n`
                                  for (let g of res) {
                                  teks += `🔮 *𝗧𝗜𝗧𝗟𝗘* : ${g.title}\n`
                                  teks += `🔮 *𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* : ${g.snippet}\n`
                                  teks += `🔮 *𝗟𝗜𝗡𝗞* : ${g.link}\n\n────────────────────────\n\n`
                                  } 
                                  reply(teks)
                                  })
                                  }
                                  break
                          case 'gimage': case 'img': {
                          if (!text) throw `Example : ${prefix + command} ml nana`
                          let gis = require('g-i-s')
                          gis(text, async (error, result) => {
                          n = result
                          images = n[Math.floor(Math.random() * n.length)].url
                          let buttons = [
                                      {buttonId: `gimage ${text}`, buttonText: {displayText: 'NEXT IMG'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: images },
                                      caption: `*𝗚𝗢𝗢𝗚𝗟𝗘 𝗜𝗠𝗔𝗚𝗘*
💫 *𝗤𝗨𝗘𝗥𝗬* : ${text}
🔗 *𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟* : ${images}`,
                                      footer: GojoMdNx.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                          })
                          }
                          break
                          case 'play': case 'yt': {
                                  if (!text) throw `Example : *${prefix + command} lelena*`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  for (let i of search.all)   
                                  
                                      ngen = `

*ɳιɱα σϝƈ ყσυƚυႦҽ ԃσɯɳlσαԃҽɾ* 
*───────────⦁◈✾*

🐣 𝗧𝗜𝗧𝗟𝗘 : ${search.all[0].title}
🎗️ 𝗘𝗫𝗧 : Search
📨 𝗜𝗗 : ${search.all[0].videoId}
⏰ 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${search.all[0].timestamp}
🥷 𝗩𝗜𝗘𝗪𝗘𝗥𝗦 : ${search.all[0].views}
😼 𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗 : ${search.all[0].ago}
📁 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡 : ${search.all[0].description}

                  `
                  message = await prepareWAMessageMedia({ image : { url: search.all[0].thumbnail } }, { upload:   GojoMdNx.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: `🥷 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 🥷`,
                                              hydratedFooterText: ngen,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'YOUTUBE',
                                                      url: `${search.all[0].url}`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: '🎵 SONG 🎵',
                                                      id: `song ${search.all[0].url}`
                                                      }
                                                  }, {quickReplyButton: {
                                                      displayText: '🎬 VIDEO 🎬',
                                                      id: `video ${search.all[0].url} `
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break
                          case 'song':  {
                                  if (!text) throw `Example : ${prefix + command} bts boy with luv`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  for (let i of search.all)             
                                 
                                      ngen = `


*╭─────────────◎*
│
│🌀 𝗧𝗜𝗧𝗟𝗘 : ${search.all[0].title}
│
│⏰ 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${search.all[0].timestamp}
│
│🥷 𝗩𝗜𝗘𝗪𝗘𝗥𝗦 : ${search.all[0].views}
│
│🌀 𝙐𝙍𝙇 : ${search.all[0].url}
│
│🌐 𝗖𝗛𝗔𝗡𝗡𝗘𝗟 : ${search.all[0].author.url}
│
*╰─────────────◎*            
 `
                  message = await prepareWAMessageMedia({ image : { url: search.all[0].thumbnail } }, { upload:   GojoMdNx.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: ngen,
                                              hydratedFooterText: `Playing To ${text}`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'YOUTUBE',
                                                      url: `${search.all[0].url}`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: '📁 DOCUMENT 📁',
                                                      id: `ytmp3 ${search.all[0].url} 256kbps`
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: '🎧 AUDIO 🎧',
                                                      id: `audytmp3 ${search.all[0].url} 256kbs`
                                                      }
                                                  
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break
                              case 'video': {
                                  if (!text) throw `Example : *${prefix + command} lelena*`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                  let yts = require("yt-search")
                                  let search = await yts(text)
                                  let nima = search.all           
                                                          
                                      ngen = `


🐣 𝗧𝗜𝗧𝗟𝗘 : ${search.all[0].title}
⏰ 𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡 : ${search.all[0].timestamp}
🥷 𝗩𝗜𝗘𝗪𝗘𝗥𝗦 : ${search.all[0].views}
😼 𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗 : ${search.all[0].ago}
🌀 𝙐𝙍𝙇 : ${search.all[0].url}
📁 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡 : ${search.all[0].description}

                  `
                  message = await prepareWAMessageMedia({ image : { url: nima[0].thumbnail } }, { upload:   GojoMdNx.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText:`
╭───[ 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 ]──◎
│
│ *🎬 VIDEO DOWNLOADER 🎬* 
│
╰───────────────◎` ,
                                              hydratedFooterText: ngen,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'YOUTUBE',
                                                      url: `${search.all[0].url}`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'Video',
                                                      id: `ytmp4 ${search.all[0].url} 360p`
                                                      }
                                                 }, {
                                                  quickReplyButton: {
                                                      displayText: 'Document video',
                                                      id: `docvideo ${search.all[0].url} 360p`
                                                      }
                                                  
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break                      
                          case 'ytmp3': case 'ytaudio': {
                                  let { yta } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your Document type song...*\n`, m, )
                                  let quality = args[1] ? args[1] : '256kbps'
                                  let media = await yta(text, quality)
                                  buf = await getBuffer(media.thumb)
                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                  GojoMdNx.sendImage(m.chat, media.thumb, `🟡 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🎀 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n📡 𝗨𝗥𝗟 : ${isUrl(text)}\n📜 𝗘𝗫𝗧 : MP3\n📑 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '256kbps'}`, m)
                                  GojoMdNx.sendMessage(m.chat, {document:{ url: media.dl_link }, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{
                title:`🐣 ᴛɪᴛʟᴇ - ${media.title}\n🎧 sɪᴢᴇ - ${media.filesize}`,
                body:"YOUTUBE MP3",
                mediaType:2,
                thumbnail:buf,
                mediaUrl:`${text}`, 
                sourceUrl: `${global.ytchannel}` }}}, {quoted:m})
                              }
                              break
                              case 'audytmp3': case 'audytaudio': {
                                  let { yta } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtF6Tccag%27 320kbps`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Preparing ${m.pushName} your song...*\n`, m, )
                                  let quality = args[1] ? args[1] : '256kbps'
                                  let media = await yta(text, quality)
                                  if (media.filesize >= 150000) return reply('❗ Audio size is too big '+util.format(media))
                                  GojoMdNx.sendImage(m.chat, media.thumb, `🟡 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🎀 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n📡 𝗨𝗥𝗟 : ${isUrl(text)}\n📜 𝗘𝗫𝗧 : MP3\n📑 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '256kbps'}`, m)
                                  GojoMdNx.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                              }
                              break
		case 'audytmp3': case 'audytsytmp3': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('youtu')) throw '*The link you provided is not valid*'
                anu = await fetchJson(`https://ravindumanoj-sew-api.herokuapp.com/main/download/ytmp3?url=${text}&apikey=RavinduManoj`)
                tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')   
                GojoMdNx.sendMessage(m.chat, { audio: { url: anu.mp3 }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                            
            }
            break
                              case 'ytmp4': case 'ytvideo': {
                              
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                  let quality = args[1] ? args[1] : '360p'
                                  let media = await ytv(text, quality)
                                  await replay (`*🔄 Loading ${m.pushName}  Video...* `)
                                  if (media.filesize >= 100000) return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                  GojoMdNx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n👜 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🌼 𝗨𝗥𝗟 : ${isUrl(text)}\n🌍 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '360p'}` }, { quoted: m })
                                  
                              }
                              break
                              case '480ytmp4': case 'docvideo': {
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  await GojoMdNx.sendText(m.chat, `\n*🔄 Please wait ${m.pushName}...*\n`, m, )
                                  let quality = args[1] ? args[1] : '360p'
                                  let media = await ytv(text, quality)
                                  if (media.filesize >= 150000) return reply('❗ Video size is too big '+util.format(media)+'.mp4')
                                  GojoMdNx.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n👜 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🌼 𝗨𝗥𝗟 : ${isUrl(text)}\n🌍 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '360p'}` }, { quoted: m })
                              }
                              break
                              /*
                              case '480ytmp4': case 'docvideo': {
                              
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  let quality = args[1] ? args[1] : '480p'
                                  let media = await ytv(text, quality)
                                  if (media.filesize >= 150000) return reply('*❗ Video size is too big*\n\n ♨ please Try 360p ♨ '+util.format(media)+'.mp4')
                                  GojoMdNx.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n👜 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🌼 𝗨𝗥𝗟 : ${isUrl(text)}\n🌍 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '480p'}` }, { quoted: m })
                              }
                              break
                              */
                              case '720ytmp4': case '720ytvideo': {
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} https://Subscribe.com/watch?v=PtFMhcag%27 360p`
                                  let quality = args[1] ? args[1] : '720p'
                                  let media = await ytv(text, quality)
                                  if (media.filesize >= 150000) return reply('*❗ Video size is too big* \n\n♨ _Please try 480p or 360p_ ♨'+util.format(media)+'.mp4')
                                  GojoMdNx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🌟 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n👜 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🌼 𝗨𝗥𝗟 : ${isUrl(text)}\n🌍 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '720p'}` }, { quoted: m })
                              }
                              break
                          case 'getmusic': {
                                  let { yta } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} 1`
                                  if (!m.quoted) return reply('Reply Message')
                                  if (!m.quoted.isBaileys) throw `Can only reply to messages from bots`
                          let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                                  if (!urls) throw `Maybe The Message You Replied Does Not Contain Ytsearch Results`
                                  let quality = args[1] ? args[1] : '320kbps'
                                  let media = await yta(urls[text - 1], quality)
                                  if (media.filesize >= 999999) return reply('Audio size is too big '+util.format(media))
                                  GojoMdNx.sendImage(m.chat, media.thumb, `🔮 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🔮 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🔮 𝗨𝗥𝗟 : ${isUrl(text)}\n🔮 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '320kbps'}`, m)
                                  GojoMdNx.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
                              }
                              break
                              case 'getvideo': {
                                  let { ytv } = require('./lib/y2mate')
                                  if (!text) throw `Example : ${prefix + command} 1`
                                  if (!m.quoted) return reply('Reply To A Message That Has Been Already Sent')
                                  if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                                  let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?Subscribe\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                                  if (!urls) throw `Maybe the message you replied does not contain the ytsearch result`
                                  let quality = args[1] ? args[1] : '360p'
                                  let media = await ytv(urls[text - 1], quality)
                                  if (media.filesize >= 100000) return reply('File Over Limit '+util.format(media))
                                  GojoMdNx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${media.title}\n🔮 𝗙𝗜𝗟𝗘 𝗦𝗜𝗭𝗘 : ${media.filesizeF}\n🔮 𝗨𝗥𝗟 : ${isUrl(text)}\n🔮 𝗘𝗫𝗧 : MP3\n🔮 𝗥𝗘𝗦𝗢𝗟𝗨𝗧𝗜𝗢𝗡 : ${args[1] || '360p'}` }, { quoted: m })
                              }
                              break
                              case 'pinterest': {
                                  replay(mess.wait)
                          let { pinterest } = require('./lib/scraper')
                                  anu = await pinterest(text)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                                  GojoMdNx.sendMessage(m.chat, { image: { url: result }, caption: '🔮 Media Url : '+result }, { quoted: m })
                              }
                              break
                              case 'anime': case 'waifu': case 'husbu': case 'neko': case 'shinobu': case 'megumin': case 'waifus': case 'nekos': case 'trap': case 'blowjob': {
                                  m.reply('Searcing Anime 🐣')
                                  GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/api/random/'+command, {}, 'apikey') }, caption: 'ᴍʀ ɴɪᴍᴀ ᴏғc ' + command }, { quoted: m })
                              }
                              break
                          case 'couplepp': case 'ppcouple': {
                                  replay(mess.wait)
                                  let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                                  let random = anu[Math.floor(Math.random() * anu.length)]
                                  GojoMdNx.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                                  GojoMdNx.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
                              }
                          break
                              case 'coffee': case 'kopi': {
                              let buttons = [
                                      {buttonId: `coffe`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: 'https://coffee.alexflipnote.dev/random' },
                                      caption: `Random Coffee`,
                                      footer: GojoMdNx.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'wallpaper': {
                                  if (!text) throw 'Enter Query Title'
                          let { wallpaper } = require('./lib/scraper')
                                  anu = await wallpaper(text)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                          let buttons = [
                                      {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT  PIC'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: result.image[0] },
                                      caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗖𝗔𝗧𝗘𝗚𝗢𝗥𝗬 : ${result.type}\n🔮 𝗗𝗘𝗧𝗔𝗜𝗟 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image[2] || result.image[1] || result.image[0]}`,
                                      footer: GojoMdNx.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'wikimedia': {
                                  if (!text) throw 'Enter Query Title'
                          let { wikimedia } = require('./lib/scraper')
                                  anu = await wikimedia(text)
                                  result = anu[Math.floor(Math.random() * anu.length)]
                                  let buttons = [
                                      {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      image: { url: result.image },
                                      caption: `🔮 𝗧𝗜𝗧𝗟𝗘 : ${result.title}\n🔮 𝗦𝗢𝗨𝗥𝗖𝗘 : ${result.source}\n🔮 𝗠𝗘𝗗𝗜𝗔 𝗨𝗥𝗟 : ${result.image}`,
                                      footer: GojoMdNx.user.name,
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'quotesanimekdksksksksk': case 'quoteanimexllzlzkl': {
                          let { quotesAnime } = require('./lib/scraper')
                                  let anu = await quotesAnime()
                                  result = anu[Math.floor(Math.random() * anu.length)]
                                  let buttons = [
                                      {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 2
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                                  let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                                  let buttons = [
                                      {buttonId: `motivasi`, buttonText: {displayText: 'NEXT'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      text: anu.result.message,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 2
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                                  if (!text) throw `Example : ${prefix + command} text`
                                  replay(mess.wait)
                                  GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
                          }
                              break
                          case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                                  if (!text) throw 'where is the text?'
                                  replay(mess.wait)
                                  GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
                              }
                              break
                              case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                                  if (!text) throw 'No Query Text'
                                  replay(mess.wait)
                                  GojoMdNx.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
                              }
                              break
                              case 'keberuntungan11111': case 'luck211111': {
                                  if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                                  let [nama, tgl, bln, thn] = text.split`,`
                                  let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                                  if (anu.status == false) return reply(anu.message)
                                  GojoMdNx.sendText(m.chat, `🔮 *𝗡𝗔𝗠𝗘 :* ${anu.message.nama}\n🔮 *𝗕𝗢𝗥𝗡 :* ${anu.message.tgl_lahir}\n🔮 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message.result}`, m)
                              }
                              break
                              case 'memancing1111': case 'fishing1111': {
                                  if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                                  let [tgl, bln, thn] = text.split`,`
                                  let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                                  if (anu.status == false) return reply(anu.message)
                                  GojoMdNx.sendText(m.chat, `🔮 *𝗗𝗔𝗧𝗘 :* ${anu.message.tgl_memancing}\n🔮 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message.result}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
                              }
                              break
                              case 'masasubur111111': case 'fertiletimekekskdk': {
                                  if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} first day of menstruation, cycle`
                                  let [tgl, bln, thn, siklus] = text.split`,`
                                  let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                                  if (anu.status == false) return reply(anu.message)
                                  GojoMdNx.sendText(m.chat, `🔮 *𝗝𝗔𝗦𝗜𝗟 :* ${anu.message.result}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
                              }
                              break
                              case 'zodiakjfjdkkd': case 'zodiackckdkdk': {
                                  if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                                  let zodiak = [
                                      ["capricorn", new Date(1970, 0, 1)],
                                      ["aquarius", new Date(1970, 0, 20)],
                                      ["pisces", new Date(1970, 1, 19)],
                                      ["aries", new Date(1970, 2, 21)],
                                      ["taurus", new Date(1970, 3, 21)],
                                      ["gemini", new Date(1970, 4, 21)],
                                      ["cancer", new Date(1970, 5, 22)],
                                      ["leo", new Date(1970, 6, 23)],
                                      ["virgo", new Date(1970, 7, 23)],
                                      ["libra", new Date(1970, 8, 23)],
                                      ["scorpio", new Date(1970, 9, 23)],
                                      ["sagittarius", new Date(1970, 10, 22)],
                                      ["capricorn", new Date(1970, 11, 22)]
                                  ].reverse()
                  
                                  function getZodiac(month, day) {
                                      let d = new Date(1970, month - 1, day)
                                      return zodiak.find(([_,_d]) => d >= _d)[0]
                                  }
                                  let date = new Date(text)
                                  if (date == 'Invalid Date') throw date
                                  let d = new Date()
                                  let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                                  let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
                  
                                  let zodiac = await getZodiac(birth[1], birth[2])
                                  
                                  let anu = await primbon.zodiak(zodiac)
                                  if (anu.status == false) return reply(anu.message)
                                  GojoMdNx.sendText(m.chat, `🔮 *𝗭𝗢𝗗𝗜𝗔𝗖 :* ${anu.message.zodiak}\n🔮 *𝗡𝗨𝗠𝗕𝗘𝗥 :* ${anu.message.nomor_keberuntungan}\n🔮 *𝗔𝗥𝗢𝗠𝗔 :* ${anu.message.aroma_keberuntungan}\n🔮 *𝗣𝗟𝗔𝗡𝗘𝗧 :* ${anu.message.planet_yang_mengitari}\n🔮 *𝗙𝗟𝗢𝗪𝗘𝗥 :* ${anu.message.bunga_keberuntungan}\n🔮 *𝗖𝗢𝗟𝗢𝗥 :* ${anu.message.warna_keberuntungan}\n🔮 *𝗥𝗢𝗖𝗞 :* ${anu.message.batu_keberuntungan}\n🔮 *𝗘𝗟𝗘𝗠𝗘𝗡𝗧 :* ${anu.message.elemen_keberuntungan}\n🔮 *𝗭𝗢𝗗𝗜𝗔𝗖 𝗖𝗢𝗨𝗣𝗟𝗘 :* ${anu.message.pasangan_zodiak}\n🔮 *𝗡𝗢𝗧𝗘𝗦 :* ${anu.message.catatan}`, m)
                              }
                              break
                              case 'shiondkskskso': {
                                  if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                                  let anu = await primbon.shio(text)
                                  if (anu.status == false) return reply(anu.message)
                                  GojoMdNx.sendText(m.chat, `🔮 *𝗥𝗘𝗦𝗨𝗟𝗧𝗦 :* ${anu.message}`, m)
                              }
                              break
                              case 'tiktok': case 'ttk': {
                              if (!text) throw `Use example ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
                              if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'

                              anu = await fetchJson(`https://ravindumanoj-sew-api.herokuapp.com/main/download/tiktok?url=${text}&apikey=RavinduManoj`)
                              let listmn = `\n\nTIK TOK DOWNLOADER\n\n`
                              buf = await getBuffer(`https://i.ibb.co/MhqzZj8/Darkmekcersilverownerfrofilepgoto.jpg`)
                              buf2 = await getBuffer(anu.result.nowm)
                              let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false }, { upload: GojoMdNx.waUploadToServer })
                              const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                              templateMessage: {
                              hydratedTemplate: {
                              videoMessage: message.videoMessage,
                              hydratedContentText: listmn,
                              hydratedFooterText: `🥷 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 🥷`,
                              hydratedButtons: [{


                              quickReplyButton: {
                              displayText: '🐣 ᴛʜᴀɴᴋs 🐣',
                              id: 'Thank'
                              }
                              }]
                              }
                              }
                              }), { userJid: m.chat, quoted: m })
                              GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break
                              /*case 'tiktokv': case 'tiktoknowm': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson('https://ravindumanoj-sew-api.herokuapp.com/main/download/tiktok?url='+{text}+'&apikey=RavinduManoj')
                                  
                                  let buttons = [
                                      {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1},
                                      {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      video: { url: anu.result.nowm},
                                      caption: `Download From ${text}`,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 5
                                  }
                                  GojoMdNx.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `tiktokvideo.mp4`, caption: `🥷 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 🥷`})
                              }
                              break
                              case 'tiktok': case 'tiktoknowm': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('ravindumanoj-sew', '/downloader/tiktok', { url: text }, '&apikey=RavinduManoj'))
                                  let buttons = [
                                      {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1},
                                      {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      video: { url: anu.result.nowm },
                                      caption: `Download From ${text}`,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 5
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              //https://ravindumanoj-sew-api.herokuapp.com/main/download/tiktok?url=https://vm.tiktok.com/ZMLJDa5Gy/&apikey=RavinduManoj
                              case 'tiktokwm': case 'tiktokwatermark': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api(` https://ravindumanoj-sew-api.herokuapp.com/main/download/tiktok?url=${text}&apikey=RavinduManoj `))
                                  let buttons = [
                                      {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'VIDEO'}, type: 1},
                                      {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: 'SONG'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      video: { url: anu.result.watermark },
                                      caption: `Download From ${text}`,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 5
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'tiktokmp3': case 'tiktokaudio': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/downloader/tiktok', { url: text }, 'apikey'))
                                  let buttons = [
                                      {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                                      {buttonId: `tiktokwm ${text}`, buttonText: {displayText: 'With Watermark'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      text: `Download From ${text}`,
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 2
                                  }
                                  let msg = await GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                          let { toAudio } = require('./lib/converter')
                          let nganu = await getBuffer(anu.result.nowatermark)
                          let cnvrt = await toAudio(nganu, 'mp4')
                                  GojoMdNx.sendMessage(m.chat, { audio: cnvrt, mimetype: 'audio/mpeg'}, { quoted: msg })
                              }
                              break*/
                              case 'instagram': case 'ig': case 'igdl': {
                                  if (!text) throw 'Enter Query Url!'
                                  replay(mess.wait)
                                  if (/(?:\/p\/|\/reel\/|\/tv\/)([^\s&]+)/.test(isUrl(text)[0])) {
                                      let anu = await fetchJson(api('zenz', '/downloader/instagram2', { url: isUrl(text)[0] }, 'apikey'))
                                      for (let media of anu.data) GojoMdNx.sendMedia(m.chat, media, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                                  } else if (/\/stories\/([^\s&]+)/.test(isUrl(text)[0])) {
                                      let anu = await fetchJson(api('zenz', '/downloader/instastory', { url: isUrl(text)[0] }, 'apikey'))
                                      GojoMdNx.sendMedia(m.chat, anu.media[0].url, '', `Download Url Instagram From ${isUrl(text)[0]}`, m)
                                  }
                              }
                              break
                              case 'joox': case 'jooxdl': {
                                  if (!text) throw 'No Query Title'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/downloader/joox', { query: text }, 'apikey'))
                                  let msg = await GojoMdNx.sendImage(m.chat, anu.result.img, `🔮 𝗧𝗜𝗧𝗟𝗘 : ${anu.result.lagu}\n🔮 𝗔𝗟𝗕𝗨𝗠 : ${anu.result.album}\n🔮 𝗦𝗜𝗡𝗚𝗘𝗥 : ${anu.result.penyanyi}\n🔮 𝗣𝗨𝗕𝗟𝗜𝗦𝗛 : ${anu.result.publish}\n🔮 𝗟𝗬𝗥𝗜𝗖𝗦 :\n${anu.result.lirik.result}`, m)
                                  GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.mp4aLink }, mimetype: 'audio/mpeg', fileName: anu.result.lagu+'.m4a' }, { quoted: msg })
                              }
                              break
                              case 'soundcloud': case 'scdl': {
                                  if (!text) throw 'No Query Title'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                                  let msg = await GojoMdNx.sendImage(m.chat, anu.result.thumb, `🔮 𝗧𝗜𝗧𝗟𝗘 : ${anu.result.title}\n🔮 𝗨𝗥𝗟 : ${isUrl(text)[0]}`)
                                  GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
                              }
                              break
                              case 'twitdl': case 'twitter': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                                  let buttons = [
                                      {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'SONG'}, type: 1}
                                  ]
                                  let buttonMessage = {
                                      video: { url: anu.result.HD || anu.result.SD },
                                      caption: util.format(anu.result),
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 5
                                  }
                                  GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                              }
                              break
                              case 'twittermp3': case 'twitteraudio': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                                  let buttons = [
                                      {buttonId: `twitter ${text}`, buttonText: {displayText: 'VIDEO'}, type: 1}
                                  ]
                                  let buttonMessage = {
                              image: { url: anu.result.thumb },
                                      caption: util.format(anu.result),
                                      footer: 'Press The Button Below',
                                      buttons: buttons,
                                      headerType: 4
                                  }
                                  let msg = await GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                                  GojoMdNx.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
                              }
                              break
           case 'fb': case 'facebook': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=dd79-1aeb-21a3&url=${text}`)
                tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')    
                GojoMdNx.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            break
                              /*case 'fbdl': case 'fb': case 'facebook': {
                                  if (!text) throw ' Query Link!'
                                  m.reply(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                                  GojoMdNx.sendMessage(m.chat, { video: { url: anu.result.url }, caption: ` *Title* : ${anu.result.title}`}, { quoted: m })
                              }
                              break*/
                              case 'pindl': case 'pinterestdl': {
                                  if (!text) throw 'Enter Query Link!'
                                  replay(mess.wait)
                                  let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                                  GojoMdNx.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
                              }
                              break
                  
                              case 'umma': case 'ummadl': {
                              if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                                  let { umma } = require('./lib) scraper')
                          let anu = await umma(isUrl(text)[0])
                          if (anu.type == 'video') {
                              let buttons = [
                                          {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'SONG'}, type: 1},
                                          {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'VIDEO'}, type: 1}
                                      ]
                              let buttonMessage = {
                                  image: { url: anu.author.profilePic },
                              caption: `
🔮 𝗧𝗜𝗧𝗟𝗘 : ${anu.title}
🔮 𝗔𝗨𝗧𝗛𝗢𝗥 : ${anu.author.name}
🔮 𝗟𝗜𝗞𝗘 : ${anu.like}
🔮 𝗖𝗔𝗣𝗧𝗜𝗢𝗡 : ${anu.caption}
🔮 𝗨𝗥𝗟 : ${anu.media[0]}
To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above
                  `,
                              footer: ' ɴɪᴍᴀ ᴏғᴄ ɢʀᴏᴜᴘ ʙᴏᴛ',
                              buttons,
                              headerType: 4
                              }
                              GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
                          } else if (anu.type == 'image') {
                              anu.media.map(async (url) => {
                                  GojoMdNx.sendMessage(m.chat, { image: { url }, caption: `🔵 𝗧𝗜𝗧𝗟𝗘 : ${anu.title}\n🔵 𝗔𝗨𝗧𝗛𝗢𝗥 : ${anu.author.name}\n🔵 𝗟𝗜𝗞𝗘 : ${anu.like}\n🔵 𝗖𝗔𝗣𝗧𝗜𝗢𝗡 : ${anu.caption}` }, { quoted: m })
                              })
                          }
                          }
                          break
                          case 'ringtone': {
                          if (!text) throw `Example : ${prefix + command} black rover`
                          let { ringtone } = require('./lib/scraper')
                          let anu = await ringtone(text)
                          let result = anu[Math.floor(Math.random() * anu.length)]
                          GojoMdNx.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
                          }
                          break
                          case 'iqra': {
                          oh = `Example : ${prefix + command} 3\n\Available IQRA : 1,2,3,4,5,6`
                          if (!text) throw oh
                          yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
                          GojoMdNx.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => reply(oh))
                          }
                          break
                          case 'juzamma': {
                          if (args[0] === 'pdf') {
                          replay(mess.wait)
                          GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
                          } else if (args[0] === 'docx') {
                          replay(mess.wait)
                          GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
                          } else if (args[0] === 'pptx') {
                          replay(mess.wait)
                          GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
                          } else if (args[0] === 'xlsx') {
                          replay(mess.wait)
                          GojoMdNx.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
                          } else {
                          reply(`What format do you want? ? Example : ${prefix + command} pdf
                  
                  Available formats : pdf, docx, pptx, xlsx`)
                          }
                          }
                          break
                          case 'hadith': case 'hadist': {
                          if (!args[0]) throw `Example:
                  ${prefix + command} bukhari 1
                  ${prefix + command} abu-daud 1
                  
                  Options available:
                  abu-daud
                  1 - 4590
                  ahmad
                  1 - 26363
                  bukhari
                  1 - 7008
                  darimi
                  1 - 3367
                  ibu-majah
                  1 - 4331
                  nasai
                  1 - 5662
                  malik
                  1 - 1594
                  muslim
                  1 - 5362`
                          if (!args[1]) throw `Which Hadith??\n\nExample:\n${prefix + command} muslim 1`
                          try {
                          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
                          let { number, arab, id } = res.find(v => v.number == args[1])
                          reply(`No. ${number}
                  
                  ${arab}
                  
                  ${id}`)
                          } catch (e) {
                          reply(`Hadith not found !`)
                          }
                          }
                          break
                          case 'alquran': {
                          if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
                          if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is surah Al-Fatihah verse 2 along with the audio, and the verse is just 1`
                          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                          let txt = `*Arab* : ${res.result.data.text.arab}
                  *English* : ${res.result.data.translation.en}
                  *Indonesia* : ${res.result.data.translation.id}
                  
                  ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                          reply(txt)
                          GojoMdNx.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
                          }
                          break
                          case 'tafsirsurah': {
                          if (!args[0]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
                          if (!args[1]) throw `Example:\n${prefix + command} 1 2\n\nthen the result is the interpretation of Surah Al-Fatihah verse 2`
                          let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
                          let txt = `「 *Tafsir Surah*  」
                  
                  *Short* : ${res.result.data.tafsir.id.short}
                  
                  *Long* : ${res.result.data.tafsir.id.long}
                  
                  ( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
                          reply(txt)
                          }
                          break
                  /*case 'alkitab':  if(!text) throw `Masukan Search Yang Anda Cari`
                  epep = await.fetchJson(`https://melcanz.com/alkitabsearch?q=${text}&apikey=melcantik`)
                  break*/
                  
                             case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                                  try {
                                  let set
                                  if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                                  if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                                  if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                                  if (/earrape/.test(command)) set = '-af volume=12'
                                  if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                                  if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                                  if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                                  if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                                  if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                                  if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                                  if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                                  if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                                  if (/audio/.test(mime)) {
                                  replay(mess.wait)
                                  let media = await GojoMdNx.downloadAndSaveMediaMessage(quoted)
                                  let ran = getRandom('.mp3')
                                  exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                                  fs.unlinkSync(media)
                                  if (err) return reply(err)
                                  let buff = fs.readFileSync(ran)
                                  GojoMdNx.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                                  fs.unlinkSync(ran)
                                  })
                                  } else reply(`Reply to the audio you want to change with caption *${prefix + command}*`)
                                  } catch (e) {
                                  reply(e)
                                  }
                                  break
                              case 'setcmd': {
                                  if (!m.quoted) throw 'Reply Message!'
                                  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                                  if (!text) throw `Untuk Command Apa?`
                                  let hash = m.quoted.fileSha256.toString('base64')
                                  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                                  global.db.sticker[hash] = {
                                      text,
                                      mentionedJid: m.mentionedJid,
                                      creator: m.sender,
                                      at: + new Date,
                                      locked: false,
                                  }
                                  reply(`Done!`)
                              }
                              break
                              case 'delcmd': {
                                  let hash = m.quoted.fileSha256.toString('base64')
                                  if (!hash) throw `No hashes`
                                  if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                                  delete global.db.sticker[hash]
                                  reply(`Done!`)
                              }
                              break
                              case 'listcmd': {
                                  let teks = `
                  *Hash List*
                  Info: *bold* hash is locked
                  ${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
                  `.trim()
                                  GojoMdNx.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
                              }
                              break
                              case 'lockcmd': {
                                  if (!isCreator) throw mess.owner
                                  if (!m.quoted) throw 'Reply Message!'
                                  if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                                  let hash = m.quoted.fileSha256.toString('base64')
                                  if (!(hash in global.db.sticker)) throw 'Hash not found in database'
                                  global.db.sticker[hash].locked = !/^un/i.test(command)
                                  reply('Done!')
                              }
                              break
                              case 'addmsg': {
                                  if (!m.quoted) throw 'Reply Message You Want To Save In Database'
                                  if (!text) throw `Example : ${prefix + command} message name`
                                  let msgs = global.db.database
                                  if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                                  msgs[text.toLowerCase()] = quoted.fakeObj
                  reply(`Successfully added message in message list as '${text}'
                      
                  Access with ${prefix}getmsg ${text}
                  
                  View list of message with ${prefix}listmsg`)
                              }
                              break
                              case 'getmsg': {
                                  if (!text) throw `Example : ${prefix + command} msg name\n\nView message list with ${prefix}listmsg`
                                  let msgs = global.db.database
                                  if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in message list`
                                  GojoMdNx.copyNForward(m.chat, msgs[text.toLowerCase()], true)
                              }
                              break
                              case 'listmsg': {
                                  let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
                              let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
                          let teks = '「 LIST DATABASE 」\n\n'
                          for (let i of seplit) {
                              teks += `💮 *𝗡𝗔𝗠𝗘 :* ${i.nama}\n💮 *𝗧𝗬𝗣𝗘 :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
                              }
                              reply(teks)
                          }
                          break
                              case 'delmsg': case 'deletemsg': {
                              let msgs = global.db.database
                              if (!(text.toLowerCase() in msgs)) return reply(`'${text}' not listed in the message list`)
                          delete msgs[text.toLowerCase()]
                          reply(`Successfully deleted '${text}' from the message list`)
                              }
                          break
                          case 'anonymous': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let buttons = [{
                                                  urlButton: {
                                                      displayText: 'REPORT BUG',
                                                      url: 'https://wa.me/27634090203?text=hello+bro+i+found+a+bug+in+your+bot'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'START CHAT',
                                                      id: 'start'
                                                  }
                                              }]
                                  GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await GojoMdNx.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, GojoMdNx.user.name, m)
                              }
                              break
                  case 'sendkontak': case 'sendcontact': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                                  if (!room) {
                                      let buttons = [
                                          { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                                      throw false
                                  }
                                  let profile = await GojoMdNx.profilePictureUrl(room.b)
                                  let status = await GojoMdNx.fetchStatus(room.b)
                                  let msg = await GojoMdNx.sendImage(room.a, profile, `Name : ${await GojoMdNx.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
                                  GojoMdNx.sendContact(room.a, [room.b.split("@")[0]], msg)
                              }
                              break
                              case 'keluar': case 'leave': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                                  if (!room) {
                                      let buttons = [
                                          { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
                                      throw false
                                  }
                                  reply('Ok')
                                  let other = room.other(m.sender)
                                  if (other) await GojoMdNx.sendText(other, `_Partner Has Left Anonymous Session_`, m)
                                  delete this.anonymous[room.id]
                                  if (command === 'leave') break
                              }
                              case 'mulai': case 'start': {
                                  if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                                      let buttons = [
                                          { buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `_You Are Still In Anonymous Session, Press The Button Below To Terminate Your Anonymous Session_`, GojoMdNx.user.name, m)
                                      throw false
                                  }
                                  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                                  if (room) {
                                      let buttons = [
                                          { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                                          { buttonId: 'stop', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(room.a, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, GojoMdNx.user.name, m)
                                      room.b = m.sender
                                      room.state = 'CHATTING'
                                      await GojoMdNx.sendButtonText(room.b, buttons, `_Successfully Found Partner, Now You Can Send Messages_`, GojoMdNx.user.name, m)
                                  } else {
                                      let id = + new Date
                                      this.anonymous[id] = {
                                          id,
                                          a: m.sender,
                                          b: '',
                                          state: 'WAITING',
                                          check: function (who = '') {
                                              return [this.a, this.b].includes(who)
                                          },
                                          other: function (who = '') {
                                              return who === this.a ? this.b : who === this.b ? this.a : ''
                                          },
                                      }
                                      let buttons = [
                                          { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `_Please Wait, Looking For A Partner_`, GojoMdNx.user.name, m)
                                  }
                                  break
                              }
                              case 'next': case 'lanjut': {
                                  if (m.isGroup) return reply('This Feature Cannot Be Used In Group!')
                                  this.anonymous = this.anonymous ? this.anonymous : {}
                                  let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                                  if (!romeo) {
                                      let buttons = [
                                          { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press The Button To Find A Partner\`\`\``)
                                      throw false
                                  }
                                  let other = romeo.other(m.sender)
                                  if (other) await GojoMdNx.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                                  delete this.anonymous[romeo.id]
                                  let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                                  if (room) {
                                      let buttons = [
                                          { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                                          { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, GojoMdNx.user.name, m)
                                      room.b = m.sender
                                      room.state = 'CHATTING'
                                      await GojoMdNx.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, GojoMdNx.user.name, m)
                                  } else {
                                      let id = + new Date
                                      this.anonymous[id] = {
                                          id,
                                          a: m.sender,
                                          b: '',
                                          state: 'WAITING',
                                          check: function (who = '') {
                                              return [this.a, this.b].includes(who)
                                          },
                                          other: function (who = '') {
                                              return who === this.a ? this.b : who === this.b ? this.a : ''
                                          },
                                      }
                                      let buttons = [
                                          { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                                      ]
                                      await GojoMdNx.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, GojoMdNx.user.name, m)
                                  }
                                  break
                              }
                              case 'public': {
                                  if (!isCreator) throw mess.owner
                                  GojoMdNx.public = true
                                  reply('𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝘂𝗯𝗹𝗶𝗰')
                              }
                              break
                              case 'self': {
                                  if (!isCreator) throw mess.owner
                                  GojoMdNx.public = false
                                  reply('𝗯𝗼𝘁 𝗻𝗼𝘄 𝘄𝗼𝗿𝗸𝗶𝗻𝗴 𝗮𝘀 𝗽𝗿𝗶𝘃𝗮𝘁𝗲')
                              }
                              break
                              case 'ping': case 'botstatus': case 'statusbot': {
                                  const used = process.memoryUsage()
                                  const cpus = os.cpus().map(cpu => {
                                      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                                      return cpu
                                  })
                                  const cpu = cpus.reduce((last, cpu, _, { length }) => {
                                      last.total += cpu.total
                                      last.speed += cpu.speed / length
                                      last.times.user += cpu.times.user
                                      last.times.nice += cpu.times.nice
                                      last.times.sys += cpu.times.sys
                                      last.times.idle += cpu.times.idle
                                      last.times.irq += cpu.times.irq
                                      return last
                                  }, {
                                      speed: 0,
                                      total: 0,
                                      times: {
                                          user: 0,
                                          nice: 0,
                                          sys: 0,
                                          idle: 0,
                                          irq: 0
                                  }
                                  })
                                  let timestamp = speed()
                                  let latensi = speed() - timestamp
                                  neww = performance.now()
                                  oldd = performance.now()
                                  respon = `
                  Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}
                  
                  Info Server
                  RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
                  
                  NodeJS Memory Usaage
                  ${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
                  
                  ${cpus[0] ? `_Total CPU Usage_
                  ${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
                  _CPU Core(s) Usage (${cpus.length} Core CPU)_
                  ${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                                  `.trim()
                                  reply(respon)
                              }
                              break
                              case 'owner': case 'creator': {
                              GojoMdNx.sendContact(m.chat, global.pemilik, m)
                              }
                              break
                                      case 'bug': case 'report': {
                                          if(!text) throw `Enter The Bug Example\n\n${command} ♨⃞ Error `
                                          GojoMdNx.sendMessage(`94715166712@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
                  Report Message: ${text}` })
                  reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid`)
                                      }
                                      break
                  case 'speedtest': case 'testspeed': {
                              m.reply('Testing Zimbot Speed...')
                              let cp = require('child_process')
                              let { promisify } = require('util')
                              let exec = promisify(cp.exec).bind(cp)
                            let o
                            try {
                            o = await exec('python speed.py')
                            } catch (e) {
                            o = e
                           } finally {
                          let { stdout, stderr } = o
                          if (stdout.trim()) m.reply(stdout)
                          if (stderr.trim()) m.reply(stderr)
                              }
                              }
                              break
                              case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
                                      reply(mess.wait)
                                      axios.get(`https://api.waifu.pics/sfw/${command}`)
                                      .then(({data}) => {
                                      GojoMdNx.sendVideoAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                                      })
                                      break
                                      case '2glass': case 'glass':
                                      if (!text) replay ('need word')
                                      reply(mess.wait)
                                      nima= await getBuffer(`https://sanuw-api.herokuapp.com/docs/ephoto/glasses?text=${text}&apikey=sanuwa`)
                                      .then(({data}) => {
                                      GojoMdNx.sendImage(m.chat, nima.results.url, mess.success, m)
                                      })
                                      break
                              case 'waifu': case 'loli':
                                      reply(mess.wait)
                                      axios.get(`https://api.waifu.pics/sfw/waifu`)
                                      .then(({data}) => {
                                      GojoMdNx.sendImage(m.chat, data.url, mess.success, m)
                                      })
                                      break
                 /* case 'tes': case 'test': case 'alive': case 'bot': case 'robot': {
                                 
                                      ngen = `

👋hello..${m.pushName} 😼${global.alive}            
 `
                  message = await prepareWAMessageMedia({ image : { url: ' https://github.com/DarkCreater2004/Tutug/raw/zim-bot-inc/drips.jpg' } }, { upload:   GojoMdNx.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: ngen,
                                              hydratedFooterText: `||${global.botnam}`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '📍Git 📍',
                                                      url: `https://github.com/`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'LIST MENU',
                                                      id: `command`
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `owner`
                                                      }
                                                  
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break*/
                    case 'menu': case 'panel': case 'help':{
                    let buttons = [
                    {buttonId: `command`, buttonText: {displayText: '☰ ʟɪsᴛ ᴍᴇɴᴜ ☰'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: '🧑‍💻 ᴏᴡɴᴇʀ 🧑‍💻️'}, type: 1},
                    {buttonId: `allmenu`, buttonText: {displayText: '⚙ ᴀʟʟ ᴍᴇɴᴜ ️⚙️'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./image/drips.jpg'),
                    caption: `*👋 ʜɪ ${pushname}* ✍️ᴛʜɪs ʙᴏᴛ ɪs sᴏᴍᴇ ʙᴜx \nғɪx ᴇᴅɪᴛɪᴏɴ`,
                    footer: `

╭────[ ʙᴏᴛ ᴍᴇɴᴜ ]
│
│😈 ʙᴏᴛ ɴᴀᴍᴇ : ${global.botnma}
│
│🧑‍💻 ᴏᴡɴᴇʀ ɴᴀᴍᴇ: ${global.ownernma}
┃
┃♻️ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
┃
╰───────────────⦁

\n╚═══════[ 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 ]`,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break

                  
                             /* case 'xxxlist': case 'xxxmenu': case 'xxxhelp': case 'xxx?': {
                                  timestampe = speed();
                  latensie = speed() - timestampe
                                  anu = ``
                  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `𝗛𝗶  ${pushname}
╭──────[ 𝐍𝐈𝐌𝐀 𝐎𝐅𝐂 𝐌𝐄𝐍𝐔 ]
│
│💎𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${global.botnma}
│
│💎𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘: ${global.ownernma}
┃
┃💎𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┃
╰─────────────────────⦁

`,
hydratedButtons: [{

{urlButton: {displayText: 'YOUTUBE',url: `${search.all[0].url}`}}
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  urlButton: {
                                                  displayText: 'GITHUB',
                                                      url: 'https://github.com/'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'MENU',
                                                      id: `allmenu`
                                                  }
                                                  }, {
                                                  quickReplyButton: {
                                                      displayText: 'LIST',
                                                      id: `command`
                                                  }
                                                  }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                                  }
                  break*/
                    /*case 'alive': case 'bot':{
                    let buttons = [
                    {buttonId: `command`, buttonText: {displayText: '☰ ʟɪsᴛ ᴍᴇɴᴜ ☰'}, type: 1},
                    {buttonId: `owner`, buttonText: {displayText: '🧑‍💻 ᴏᴡɴᴇʀ 🧑‍💻️'}, type: 1},
                    {buttonId: `ping`, buttonText: {displayText: '⚙ sʏsᴛᴇᴍ ᴀʙᴏᴜᴛ ️⚙️'}, type: 1}
                ]
                let buttonMessage = {
                    image: fs.readFileSync('./image/drips.jpg'),
                    caption: `╔══════⦁✾🌀✾⦁═════◎`,
                    footer: `👋hello..${m.pushName} \n😼${global.alive} 
\n╚═════════[ 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 ]`,
                    buttons: buttons,
                    headerType: 4
                }
                GojoMdNx.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break*/
            
                 case 'alive': case 'bot':{
                                 message = await prepareWAMessageMedia({ image : { url: 'https://github.com/DarkCreater2004/Tutug/raw/zim-bot-inc/drips.jpg '} }, { upload:   GojoMdNx.waUploadToServer })
                                  template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              imageMessage: message.imageMessage,
                                              hydratedContentText: '╔═════⦁✾🌀✾⦁════◎',
                                              hydratedFooterText: `👋hello..${m.pushName} \n😼${global.alive} 
\n╚═════[ 𝐷𝛥𝑅𝛫 𝛭𝛯𝛫𝛯𝑅 ]`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: '🧑‍💻 GIT 🧑‍💻',
                                                      url: `https://github.com/MR-NIMA-X/SL-Zim-MD`
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: '📋 ᴍᴇɴᴜ 📋',
                                                      id: `menu`
                                                      }
                                                  },  {
                                                  quickReplyButton: {
                                                      displayText: '🧑‍💻 ᴏᴡɴᴇʀ 🧑',
                                                      id: `owner`
                                                      }
                                                  }, {
                                                  quickReplyButton: {
                                                      displayText: '⚙ sʏsᴛᴇᴍ ᴀʙᴏᴜᴛ ️⚙',
                                                      id: `ping`
                                                      }
                                                  
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat, quoted: m })
                                    GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break
                   case 'command': case 'list' : case 'cmmd' : {
                  let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                  listMessage :{
                                      description: `
                                      
👋 𝗛𝗶  ${pushname}

╭──────[ 𝐍𝐈𝐌𝐀 𝐎𝐅𝐂 𝐌𝐄𝐍𝐔 ]
│
│💎𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 : ${global.botnma}
│
│💎𝗢𝗪𝗡𝗘𝗥 𝗡𝗔𝗠𝗘: ${global.ownernma}
┃
┃💎𝗥𝗨𝗡𝗧𝗜𝗠𝗘 : ${runtime(process.uptime())}
┃
╰─────────────────────⦁

`,

                                      buttonText: "𝗠𝗘𝗡𝗨",
                                      footerText: "ᴍʀ ɴɪᴍᴀ ᴏғᴄ",
                                      listType: "SINGLE_SELECT",
                                      sections: [{
                                                  "title": "ʙᴏᴛ ʟɪsᴛ ᴍᴇɴᴜ ᴄʟɪᴄᴋ ᴀɴᴅ sᴇʟᴇᴄᴛ ʏᴏᴜʀ ᴏᴡɴ",
                                                  "rows": [
                                                      {
                                                          "title": "𝗚𝗥𝗢𝗨𝗣 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}grupmenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "ᴍʀ ɴɪᴍᴀ ᴏғᴄ",
                                                  "rows": [
                                                      {
                                                          "title": "𝗠𝗘𝗡𝗨 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}allmenu`
                                                      },
                                                      {
                                                          "title": "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}downloadmenu`
                                                      },
                                                      {
                                                          "title": "𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}searchmenu`
                                                      },
                                                          {
                                                              "title": "𝗜𝗠𝗔𝗚𝗘 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}imagemenu`
                                                          },
                                                          {
                                                              "title": "𝗙𝗨𝗡 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}funmenu`
                                                          },
                                                          {
                                                              "title": "𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}convertmenu`
                                                          },
                                                          {
                                                              "title": "𝗥𝗔𝗡𝗗𝗢𝗠 𝗔𝗡𝗜𝗠𝗘 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}ranimemenu`
                                                          },
                                                          {
                                                          "title": "𝗠𝗜𝗦𝗖 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}nocategorymenu`
                                                          },
                                                          {
                                                              "title": "𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}databasemenu`
                                                          },
                                                          {
                                                              "title": "𝗩𝗢𝗜𝗖𝗘 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}voicemenu`
                                                          }
                                                  ]
                                              },
                                              {
                                                  "title": "𝗖𝗛𝗔𝗧 𝗖𝗠𝗗",
                                                  "rows": [
                                                      {
                                                          "title": "𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}anonymouschatmenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "𝗚𝗥𝗢𝗨𝗣 𝗖𝗠𝗗",
                                                  "rows": [
                                                      {
                                                          "title": "𝗦𝗬𝗦𝗧𝗘𝗠 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}sistemmenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "𝗢𝗪𝗡𝗘𝗥",
                                                  "rows": [
                                                      {
                                                          "title": "𝗢𝗪𝗡𝗘𝗥 𝗖𝗠𝗗",
                                                          
                                                          "rowId": `${prefix}ownermenu`
                                                      }
                                                  ]
                                              },
                                              {
                                                  "title": "𝗖𝗥𝗘𝗗𝗜𝗧𝗦 𝗕𝗢𝗧𝗦",
                                                  "rows": [
                                                      {
                                                          "title": "ɴɪᴍᴀ ᴏғᴄ ɢʀᴏᴜᴘ",
                                                          
                                                          "rowId": `${prefix}tqtt`
                                                      }
                                                  ]
                                              }
                                          ],
                            listType: 1
                                  }
                              }), {})
                              GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break
                  case 'grupmenu': {
                                  anu = `
 *𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨*
🌟 ${prefix}grouplink
🌟 ${prefix}ephemeral
🌟 ${prefix}setgrouppp
🌟 ${prefix}setname
🌟 ${prefix}group
🌟 ${prefix}editinfo
🌟 ${prefix}grupinfo
🌟 ${prefix}add
🌟 ${prefix}kick
🌟 ${prefix}promote
🌟 ${prefix}demote
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғᴄ`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'downloadmenu': {
                      okemenu = `
*𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨*
📍⃞ ${prefix}tiktoknowm
📍⃞ ${prefix}tiktokwm
📍⃞ ${prefix}tiktokmp3
📍⃞ ${prefix}instagram
📍⃞ ${prefix}ig2
📍⃞ ${prefix}igreels
📍⃞ ${prefix}igtv
📍⃞ ${prefix}twitter
📍⃞ ${prefix}twittermp3
📍⃞ ${prefix}ytmp3
📍⃞ ${prefix}ytmp4
📍⃞ ${prefix}getmusic
📍⃞ ${prefix}getvideo
📍⃞ ${prefix}song
📍⃞ ${prefix}video
📍⃞ ${prefix}yt / ${prefix}play
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: okemenu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғᴄ`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                              break 
                              case 'searchmenu': {
                                  anu = `
*𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨*
💮 ${prefix}play
💮 ${prefix}yts
💮 ${prefix}google
💮 ${prefix}gimage
💮 ${prefix}pinterest
💮 ${prefix}wallpaper
💮 ${prefix}wikimedia
💮 ${prefix}ytsearch
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғᴄ`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'randommenu': {
                      anu = `
 *𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨*
⚫ ${prefix}coffee
⚫ ${prefix}couplepp
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғᴄ`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'funmenu': {
                      anu = `
 *𝗙𝗨𝗡 𝗠𝗘𝗡𝗨*
🔘 ${prefix}couple
🔘 ${prefix}mysoulmate
🔘 ${prefix}math 
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғᴄ`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'voicemenu': {
                      anu = `
*𝗩𝗢𝗜𝗖𝗘 𝗖𝗛𝗔𝗡𝗚𝗘𝗥 𝗠𝗘𝗡𝗨*
🔵 ${prefix}bass
🔵 ${prefix}blown
🔵 ${prefix}deep
🔵 ${prefix}earrape
🔵 ${prefix}fast
🔵 ${prefix}fat
🔵 ${prefix}nightcore
🔵 ${prefix}reverse
🔵 ${prefix}robot
🔵 ${prefix}slow
🔵 ${prefix}squirrel
                  `
                  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғᴄ`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtube.com/channel/UCjDKRYcwd5ZIpGICcVVL96Q'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'religionmenukdksoejdjj': {
                      anu = `
*𝗥𝗘𝗟𝗜𝗚𝗜𝗢𝗡 𝗠𝗘𝗡𝗨*
 Islamic
🔵 ${prefix}iqra
🔵 ${prefix}hadith
🔵 ${prefix}alquran
🔵 ${prefix}juzamma
🔵 ${prefix}tafsirsurah`
                  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'horoscopemenukcodk': {
                      anu = `
 *𝗛𝗢𝗥𝗢𝗦𝗖𝗢𝗣𝗘 𝗠𝗘𝗡𝗨*

🔵 ${prefix}hockeynumber
🔵 ${prefix}dreammeaning
🔵 ${prefix}namemeaning
🔵 ${prefix}fortunetelling
🔵 ${prefix}marriageprediction
🔵 ${prefix}wife&husband
🔵 ${prefix}fortunetelling2
🔵 ${prefix}matchname
🔵 ${prefix}couplematch
🔵 ${prefix}married
🔵 ${prefix}businessnature
🔵 ${prefix}sustenance
🔵 ${prefix}profession
🔵 ${prefix}fate
🔵 ${prefix}potentialdisease
🔵 ${prefix}tarot
🔵 ${prefix}fengshui
🔵 ${prefix}goodday
🔵 ${prefix}badday
🔵 ${prefix}unluckyday
🔵 ${prefix}dragonday
🔵 ${prefix}sustenance2
🔵 ${prefix}luck
🔵 ${prefix}weton
🔵 ${prefix}character
🔵 ${prefix}luck2
🔵 ${prefix}fishing
🔵 ${prefix}fertiletime
🔵 ${prefix}zodiac
🔵 ${prefix}shio`
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'convertmenu': {
                      anu = `
*𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨*

🔵 ${prefix}toimage
🔵 ${prefix}removebg
🔵 ${prefix}sticker
🔵 ${prefix}emojimix
🔵 ${prefix}tovideo
🔵 ${prefix}togif
🔵 ${prefix}tourl
🔵 ${prefix}ebinary
🔵 ${prefix}dbinary
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'ranimemenu': {
                      anu = `
*RANDOM ANIME*

♨⃞ ${prefix}loli
♨⃞ ${prefix}neko
♨⃞ ${prefix}waifu
♨⃞ ${prefix}shinobu
♨⃞ ${prefix}megumin
♨⃞ ${prefix}bully
♨⃞ ${prefix}cuddle
♨⃞ ${prefix}cry
♨⃞ ${prefix}hug
♨⃞ ${prefix}awoo
♨⃞ ${prefix}kiss
♨⃞ ${prefix}lick
♨⃞ ${prefix}pat
♨⃞ ${prefix}smug
♨⃞ ${prefix}bonk
♨⃞ ${prefix}yeet
♨⃞ ${prefix}blush
♨⃞ ${prefix}smile
♨⃞ ${prefix}wave
♨⃞ ${prefix}highfive
♨⃞ ${prefix}handhold
♨⃞ ${prefix}nom
♨⃞ ${prefix}bite
♨⃞ ${prefix}glomp
♨⃞ ${prefix}slap
♨⃞ ${prefix}kill
♨⃞ ${prefix}happy
♨⃞ ${prefix}wink
♨⃞ ${prefix}poke
♨⃞ ${prefix}dance
♨⃞ ${prefix}cringe
                  `
                  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'nocategorymenu': {
                      anu = `
*𝗠𝗜𝗦𝗖 𝗠𝗘𝗡𝗨*
🔵 ${prefix}speedtest
🔵 ${prefix}ping
🔵 ${prefix}owner
🔵 ${prefix}donate
🔵 ${prefix}menu
🔵 ${prefix}delete
🔵 ${prefix}chatinfo
🔵 ${prefix}quoted
🔵 ${prefix}listpc
🔵 ${prefix}listgc
🔵 ${prefix}listonline
🔵 ${prefix}report
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'databasemenu': {
                      anu = `
*𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨*
🔵 ${prefix}setcmd
🔵 ${prefix}listcmd
🔵 ${prefix}delcmd
🔵 ${prefix}lockcmd
🔵 ${prefix}addmsg
🔵 ${prefix}listmsg
🔵 ${prefix}getmsg
🔵 ${prefix}delmsg
                    `
                    const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'anonymouschatmenu': {
                      anu = `
*𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨*
🔵 ${prefix}start
🔵 ${prefix}next
🔵 ${prefix}stop
                      `
                        const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'sistemmenu': {
                      anu = `
*𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨* 
🔵 ${prefix}antilink
🔵 ${prefix}mute
🔵 ${prefix}antiwame
                  `
                  const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                    case 'ownermenu': {
                        anu = `
*𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨*
🔵 ${prefix}chat
🔵 ${prefix}join
🔵 ${prefix}leave
🔵 ${prefix}setbotpp
🔵 ${prefix}block
🔵 ${prefix}unblock
🔵 ${prefix}bcgroup
🔵 ${prefix}bcall
                    `
                      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                    case 'allmenu': {
                         anu = `
    ╭───────────╮
    │ *NIMA OFC MENU*  ▎
    ╰───────────╯
    ╭──❰ 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨 ❱
    │🔵 ${prefix}grouplink
    │🔵 ${prefix}ephemeral
    │🔵 ${prefix}setgrouppp
    │🔵 ${prefix}setname
    │🔵 ${prefix}group
    │🔵 ${prefix}editinfo
    │🔵 ${prefix}grupinfo
    │🔵 ${prefix}add
    │🔵 ${prefix}kick
    │🔵 ${prefix}promote
    │🔵 ${prefix}demote
    ╰────────────⦁

    ╭──❰ 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 ❱
    │🌍 ${prefix}tiktoknowm
    │🌍 ${prefix}tiktokwm
    │🌍 ${prefix}tiktokmp3
    │🌍 ${prefix}instagram
    │🌍 ${prefix}ig2
    │🌍 ${prefix}igreels
    │🌍 ${prefix}igtv
    │🌍 ${prefix}twitter
    │🌍 ${prefix}twittermp3
    │🌍 ${prefix}ytmp3
    │🌍 ${prefix}ytmp4
    │🌍 ${prefix}getmusic
    │🌍 ${prefix}getvideo
    ╰────────────⦁

    ╭──❰ 𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨 ❱
    │💮 ${prefix}play
    │💮 ${prefix}yts
    │💮 ${prefix}google
    │💮 ${prefix}gimage
    │💮 ${prefix}pinterest
    │💮 ${prefix}wallpaper
    │💮 ${prefix}wikimedia
    │💮 ${prefix}ytsearch
    ╰────────────⦁

    ╭──❰ 𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨 ❱
    │🧱 ${prefix}coffee
    │🧱 ${prefix}couplepp
    ╰─────────────⦁
 
    ╭──❰ 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 ❱
    │🪟 ${prefix}couple
    │🪟 ${prefix}mysoulmate
    │🪟 ${prefix}math
    ╰────────────⦁

    ╭──❰ 𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨 ❱
    │🪞 ${prefix}bass
    │🪞 ${prefix}blown
    │🪞 ${prefix}deep
    │🪞 ${prefix}earrape
    │🪞 ${prefix}fast
    │🪞 ${prefix}fat
    │🪞 ${prefix}nightcore
    │🪞 ${prefix}reverse
    │🪞 ${prefix}robot
    │🪞 ${prefix}slow
    │🪞 ${prefix}squirrel
    ╰────────────⦁
                    
    ╭──❰ 𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨 ❱
    │🔵 ${prefix}toimage
    │🔵 ${prefix}removebg
    │🔵 ${prefix}sticker
    │🔵 ${prefix}emojimix
    │🔵 ${prefix}tovideo
    │🔵 ${prefix}togif
    │🔵 ${prefix}tourl
    │🔵 ${prefix}ebinary
    │🔵 ${prefix}dbinary
    ╰─────────────⦁
                  
    ╭──❰ *RANDOM ANIME* ❱
    │♨⃞ ${prefix}loli
    │♨⃞ ${prefix}neko
    │♨⃞ ${prefix}waifu
    │♨⃞ ${prefix}shinobu
    │♨⃞ ${prefix}megumin
    │♨⃞ ${prefix}bully
    │♨⃞ ${prefix}cuddle
    │♨⃞ ${prefix}cry
    │♨⃞ ${prefix}hug
    │♨⃞ ${prefix}awoo
    │♨⃞ ${prefix}kiss
    │♨⃞ ${prefix}lick
    │♨⃞ ${prefix}pat
    │♨⃞ ${prefix}smug
    │♨⃞ ${prefix}bonk
    │♨⃞ ${prefix}yeet
    │♨⃞ ${prefix}blush
    │♨⃞ ${prefix}smile
    │♨⃞ ${prefix}wave
    │♨⃞ ${prefix}highfive
    │♨⃞ ${prefix}handhold
    │♨⃞ ${prefix}nom
    │♨⃞ ${prefix}bite
    │♨⃞ ${prefix}glomp
    │♨⃞ ${prefix}slap
    │♨⃞ ${prefix}kill
    │♨⃞ ${prefix}happy
    │♨⃞ ${prefix}wink
    │♨⃞ ${prefix}poke
    │♨⃞ ${prefix}dance
    │♨⃞ ${prefix}cringe
    ╰─────────────⦁
    ╭──❰ 𝗠𝗜𝗦𝗖 𝗠𝗘𝗡𝗨 ❱
    │🪐 ${prefix}speedtest
    │🪐 ${prefix}ping
    │🪐 ${prefix}owner
    │🪐 ${prefix}donate
    │🪐 ${prefix}menu
    │🪐 ${prefix}delete
    │🪐 ${prefix}chatinfo
    │🪐 ${prefix}quoted
    │🪐 ${prefix}listpc
    │🪐 ${prefix}listgc
    │🪐 ${prefix}listonline
    │🪐 ${prefix}report
    ╰─────────────⦁
    ╭──❰ 𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨 ❱
    │🗂️ ${prefix}setcmd
    │🗂️ ${prefix}listcmd
    │🗂️ ${prefix}delcmd
    │🗂️ ${prefix}lockcmd
    │🗂️ ${prefix}addmsg
    │🗂️ ${prefix}listmsg
    │🗂️ ${prefix}getmsg
    │🗂️ ${prefix}delmsg
    ╰─────────────⦁                                                                     
    ╭──❰ 𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧 ❱
    │🔲 ${prefix}start
    │🔲 ${prefix}next
    │🔲 ${prefix}stop
    ╰─────────────⦁
    ╭──❰ 𝗧𝗘𝗫𝗧 𝗣𝗥𝗢 𝗠𝗘𝗡𝗨 ❱
    │⚽ ${prefix}3dchristmas
    │⚽ ${prefix}3ddeepsea
    │⚽ ${prefix}americanflag
    │⚽ ${prefix}3dscifi
    │⚽ ${prefix}3drainbow
    │⚽ ${prefix}3dwaterpipe
    │⚽ ${prefix}halloweenskeleton
    │⚽ ${prefix}sketch
    │⚽ ${prefix}bluecircuit
    │⚽ ${prefix}space
    │⚽ ${prefix}metallic
    │⚽ ${prefix}fiction
    │⚽ ${prefix}greenhorror
    │⚽ ${prefix}transformer
    │⚽ ${prefix}berry
    │⚽ ${prefix}thunder
    │⚽ ${prefix}magma
    │⚽ ${prefix}3dcrackedstone
    │⚽ ${prefix}3dneonlight
    │⚽ ${prefix}impressiveglitch
    │⚽ ${prefix}naturalleaves
    │⚽ ${prefix}fireworksparkle
    │⚽ ${prefix}matrix
    │⚽ ${prefix}dropwater
    │⚽ ${prefix}harrypotter
    │⚽ ${prefix}foggywindow
    │⚽ ${prefix}neond
    │⚽ ${prefix}christmasholiday
    │⚽ ${prefix}3dgradient
    │⚽ ${prefix}blackpink
    │⚽ ${prefix}gluetext
    ╰─────────────⦁
    ╭───❰ 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 ❱
    │❶ ${prefix}ffcover
    │❷ ${prefix}crossfire
    │❸ ${prefix}galaxy
    │❹ ${prefix}glass
    │❺ ${prefix}neon
    │❻ ${prefix}beach
    │❼ ${prefix}blackpink
    │❽ ${prefix}igcertificate
    │❾ ${prefix}ytcertificate
    └───────────⦁
    ╭──❰ 𝗦𝗬𝗦𝗧𝗘𝗠 𝗠𝗘𝗡𝗨 ❱
    │⚙️ ${prefix}antilink
    │⚙️ ${prefix}mute
    │⚙️ ${prefix}antiwame
    ╰─────────────⦁
    ╭───❰ 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 ❱
    │🎀 ${prefix}chat
    │🎀 ${prefix}join
    │🎀 ${prefix}leave
    │🎀 ${prefix}setbotpp
    │🎀 ${prefix}block
    │🎀 ${prefix}unblock
    │🎀 ${prefix}bcgroup
    │🎀 ${prefix}bcall
    ╰────────────⦁`
                      const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                                      templateMessage: {
                                          hydratedTemplate: {
                                              hydratedContentText: anu,
                                              locationMessage: {
                                              jpegThumbnail: fs.readFileSync('./image/drips.jpg')},
                                              hydratedFooterText: `ᴍʀ ɴɪᴍᴀ ᴏғc`,
                                              hydratedButtons: [{
                                                  urlButton: {
                                                      displayText: 'SUBSCRIBE',
                                                      url: 'https://youtu.be/-qgrOvpZqH8'
                                                  }
                                              }, {
                                                  quickReplyButton: {
                                                      displayText: 'OWNER',
                                                      id: `${prefix}owner`
                                                  }
                                              }]
                                          }
                                      }
                                  }), { userJid: m.chat })
                                  GojoMdNx.relayMessage(m.chat, template.message, { messageId: template.key.id })
                              }
                  break
                  case 'tqtt': 
                  reply(`Thanks for choosing ᴍʀ ɴɪᴍᴀ ᴏғc
                  subscribe to my YouTube channel DRIPS OFC
                  `)
                  break
                              default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    GojoMdNx.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
