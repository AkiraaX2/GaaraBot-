import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
letÂ qÂ =Â m.quotedÂ ||Â m
letÂ mimeÂ =Â (q.msgÂ ||Â q).mimetypeÂ ||Â ''
ifÂ (!m.quoted)Â return conn.reply(m.chat, Â `ðŸš© Etiqueta el *Video o Audio* que desea convertir en documento.`, m, rcanal)
if(!text) return conn.reply(m.chat, `ðŸš© Ingresa el nombre para guardar el documento.`, m, rcanal)
if (!/audio|video/.test(mime)) return conn.reply(m.chat, Â `ðŸš© Etiqueta el *Video o Audio* que desea convertir en documento.`, m, rcanal)
let media = await q.download?.()
if (!media) throw m.react('âœ–ï¸')
await m.react('ðŸ•“')
if (/video/.test(mime)) {
return conn.sendMessage(m.chat, { document: media, mimetype: 'video/mp4', fileName: `${text}.mp4`}, {quoted: m}).then(_ => m.react('âœ…'))
} else if (/audio/.test(mime)) {
return conn.sendMessage(m.chat, { document: media, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, {quoted: m}).then(_ => m.react('âœ…'))}
}
handler.help = ['document *<audio/video>*']
handler.tags = ['convertir']
handler.command = ['toducument', 'todoc']
handler.register = true

export default handler