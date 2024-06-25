import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
      "messageContextInfo": {
      "deviceListMetadata": {},
      "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ""
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: ""
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "👋🏻 Hola¡! Bienvenido A Mi Sub Menú\n\n*Creador:* Angelito\n*Versión:* 1.0.0\n\n🍒 si hay algún error puedes contactarme, usa el comando: #owner\n\nGracias¡! 🔴",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"title\",\"sections\":[{\"title\":\"OPCIONES\",\"highlight_label\":\"new\",\"rows\":[{\"header\":\"MENU 📚\",\"title\":\"\",\"description\":\"Menu Completo 🍒\",\"id\":\".allmenu\"},{\"header\":\"MENU AUDIOS 🔊\",\"title\":\"\",\"description\":\"Menu Audios 🎶\",\"id\":\".menuaudios\"},{\"header\":\"MENU  JUEGOS 🎮\",\"title\":\"\",\"description\":\"Menu juegos 🎮\",\"id\":\".menugames\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\".owner\",\"id\":\"message\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"url\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }
       ],
   })
    })
    }
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(tu)$/i

export default handler