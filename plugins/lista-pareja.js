let handler = async (m, { conn, isOwner }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender  
let user = conn.getName(m.sender)
let pareja = global.db.data.users[m.sender].pasangan 
let relacion = Object.entries(global.db.data.users).filter(user => user[1].pasangan)
let caption = `🌸 LISTA DE RELAC 🌸
*╭─────────────►*
│ *𝑻𝒐𝒕𝒂𝒍 : ${relacion.length} 𝑼𝒔𝒖𝒂𝒓𝒊𝒐* ${relacion ? '\n│\n' + relacion.map(([jid], i) => `
│ *${i + 1}.* ${conn.getName(jid) == undefined ? 'Sin Pareja' : conn.getName(jid)}
│ ${isOwner ? '@' + jid.split`@`[0] : jid}\n│ - - - - - - - - -`.trim()).join('\n') : ''}
*╰────────────►*`
await conn.reply(m.chat, caption, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: `${lenguajeGB['smsAvisoAG']()}`,
body: '', previewType: 0, thumbnail: imagen2, sourceUrl: md}}})
//conn.sendButton(m.chat, caption, `💟 MI PAREJA ES ⇢ ${pareja ? `*${user} 💞 ${conn.getName(pareja)}*` : `❌ NO TIENE PAREJA`}\n${wm}`, null, [ ['☘️ MENU ☘️', '/menu']], m, { mentions: await conn.parseMention(caption) })
}
handler.command = /^(listaparejas|listarelacion|listship|listpareja)$/i
handler.register = true
export default handler