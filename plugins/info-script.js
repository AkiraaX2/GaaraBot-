import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
» 𝗦 𝗖 𝗥 𝗜 𝗣 𝗧  𝗚 𝗘 𝗡 𝗘 𝗦 𝗜 𝗦

🐈‍⬛ ${fgsc}

_apoyanos con una estrella a nuestro repositorio ⭐_

> ${mssg.ig}
`.trim())
    
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['sc', 'git', 'script'] 

export default handler
