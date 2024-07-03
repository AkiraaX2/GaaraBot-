import didyoumean from 'didyoumean'
import similarity from 'similarity'

export async function before(m, { conn, match, usedPrefix, command }) {

       if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '')
    let args = noPrefix.trim().split` `.slice(1)
    let text = args.join` `
    let help = Object.values(plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1)
         if (help.includes(noPrefix)) return
    let mean = didyoumean(noPrefix, help)
    let sim = similarity(noPrefix, mean)
    let som = sim * 100
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let name = await conn.getName(who)

    let caption = `𝙷𝚘𝚕𝚊 ${name}  :3 𝚎𝚜𝚎 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚗𝚘 𝚎𝚡𝚒𝚜𝚝𝚎, 𝚝𝚊𝚕𝚟𝚎𝚣 𝚚𝚞𝚒𝚜𝚒𝚜𝚝𝚎 𝚍𝚎𝚌𝚒𝚛 :  *${usedPrefix + mean} ?*`
 if (mean) this.reply(m.chat, `${caption}`, m)
      }
}
export const disabled = false