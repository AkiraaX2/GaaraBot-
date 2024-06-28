import Scraper from '@SumiFX/Scraper'

let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) return m.reply('➤ `𝗔𝗩𝗜𝗦𝗢` 🐈‍⬛\n\n*INGRESA EL ENLACE*\n_${usedPrefix + command} <link>_`)

try {
let { dl_url } = await Scraper.igdl(args[0])
await conn.sendMessage(m.chat, { video: { url: dl_url }, caption: null }, { quoted: m})
} catch {
}}
handler.help = ['instagram <url ig>']
handler.tags = ['downloader']
handler.command = ['ig', 'igdl', 'instagram']
handler.register = true 
//handler.limit = 1
export default handler