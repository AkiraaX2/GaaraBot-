
let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
*_◌⃘࣭࣪࣪࣪۬🐈‍⬛─ׅ  𝙂 𝙀 𝙉 𝙀 𝙎 𝙄 𝙎  𝘽 𝙊 𝙏  ──◌⃘࣭ٜ࣪࣪࣪۬🐈‍⬛_*

🐈‍⬛ 𝗛𝗼𝗹𝗮 𝘀𝗼𝘆 𝗚𝗲𝗻𝗲𝘀𝗶𝘀 𝗕𝗼𝘁 
🐈‍⬛ 𝗧𝗲 𝗽𝗿𝗲𝘀𝗲𝗻𝘁𝗼 𝗺𝗶 𝗺𝗲𝗻𝘂 𝗵𝗼𝘁

(Use estos comandos sin el prefijo: *${usedPrefix}*)

*╭──「 MENU HOT 🔞 」*
*┊ »*🐈‍⬛ _*.nsfwloli*_
*┊ »*🐈‍⬛ _*.nsfwfoot*_
*┊ »*🐈‍⬛ _*.nsfwass*_
*┊ »*🐈‍⬛ _*.nsfwbdsm*_
*┊ »*🐈‍⬛ _*.nsfwcum*_
*┊ »*🐈‍⬛ _*.nsfwero*_
*┊ »*🐈‍⬛ _*.nsfwfemdom*_
*┊ »*🐈‍⬛ _*.nsfwfoot*_
*┊ »*🐈‍⬛ _*.nsfwglass*_
*┊ »*🐈‍⬛ _*.nsfworgy*_
*┊ »*🐈‍⬛ _*.yuri*_
*┊ »*🐈‍⬛ _*.yuri2*_
*┊ »*🐈‍⬛ _*.yaoi*_
*┊ »*🐈‍⬛ _*.yaoi2*_
*┊ »*🐈‍⬛ _*.panties*_
*┊ »*🐈‍⬛ _*.tetas*_
*┊ »*🐈‍⬛ _*.booty*_
*┊ »*🐈‍⬛ _*.ecchi*_
*┊ »*🐈‍⬛ _*.furro*_
*┊ »*🐈‍⬛ _*.hentai*_
*┊ »*🐈‍⬛ _*.trapito*_
*┊ »*🐈‍⬛ _*.imagenlesbians*_
*┊ »*🐈‍⬛ _*.pene*_
*┊ »*🐈‍⬛ _*.porno*_
*┊ »*🐈‍⬛ _*.randomxxx*_
*┊ »*🐈‍⬛ _*.pechos*_
*┊ »*🐈‍⬛ _*.ass*_ (ⓓ)
*┊ »*🐈‍⬛ _*.boobs*_ (ⓓ)
*┊ »*🐈‍⬛ _*.lesbian*_ (ⓓ)
*┊ »*🐈‍⬛ _*.pack*_ (ⓓ)
*┊ »*🐈‍⬛ _*.pussy*_ (ⓓ)
*┊ »*🐈‍⬛ _*.xnxx*_ (ⓓ)
*╰─────────────────┈°❀*


*╭──「 NSFW ANIME 🔞 」*
*┊ »*🐈‍⬛ _*.xwaifu*_ (ⓓ)
*┊ »*🐈‍⬛ _*.xneko*_ (ⓓ)
*┊ »*🐈‍⬛ _*.blowjob*_ (ⓓ)
*┊ »*🐈‍⬛ _*.trap*_ (ⓓ)
*┊ »*🐈‍⬛ _*.yuri*_ (ⓓ)
*┊ »*🐈‍⬛ _*.cum*_ (ⓓ)
*┊ »*🐈‍⬛ _*.hentai*_ (ⓓ)
*╰─────────────────┈°❀*
`
    let pp = './src/Menu.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rcanal)

}

handler.help = ['labiblia']
handler.tags = ['main']
handler.command = ['labiblia', 'menuhot'] 

export default handler