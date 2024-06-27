import ws from 'ws';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    let uniqueUsers = new Map();

    global.conns.forEach((conn) => {
        if (conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED) {
            uniqueUsers.set(conn.user.jid, conn);
        }
    });

    let users = [...uniqueUsers.values()];
    let totalUsers = users.length;

    let totalusr = Object.keys(global.db.data.users).length;
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let username = conn.getName(m.sender);
    let locale = 'es';
    let d = new Date(new Date + 3600000);
    let time = d.toLocaleTimeString(locale, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    let sbot =
        conn.user.jid == global.conn.user.jid
        ? "> *`🐈‍⬛ 𝘉𝘰𝘵 :`* 𝘗𝘳𝘪𝘯𝘤𝘪𝘱𝘢𝘭"
        : "> *`🐈‍⬛ 𝘉𝘰𝘵 : 𝘚𝘶𝘣 - 𝘣𝘰𝘵 𝘥𝘦`* " + `  Wa.me/${global.conn.user.jid.split`@`[0]}`;

    global.fcontact = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: "status@broadcast",
        },
        message: {
            contactMessage: {
                displayName: `\nɢᴇɴᴇꜱɪꜱ ᴘʀᴏꜰᴇꜱɪᴏɴᴀʟ \nᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛꜱᴀᴘᴘ`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${username}\nitem1.TEL;waid=${m.sender.split("@")[0]}:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            },
        },
    };

    let totalreg = Object.keys(global.db.data.users).length;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length;

    await conn.reply(m.chat, '🐈‍⬛ `𝗖𝗔𝗥𝗚𝗔𝗡𝗗𝗢 𝗠𝗘𝗡𝗨....`', fcontact);

    m.react("🐈‍⬛");
    let menu = ``;

    let txt = ""
    txt += "*_◌⃘࣭࣪࣪࣪۬🐈‍⬛─ׅ─  𝙂 𝙀 𝙉 𝙀 𝙎 𝙄 𝙎  ──◌⃘࣭ٜ࣪࣪࣪۬🐈‍⬛_*\n\n";
    txt += '> *`🫅 𝘔𝘪 𝘊𝘳𝘦𝘢𝘥𝘰𝘳:`*' + ` Angelito\n`;
    txt += '> *`📚 𝘓𝘪𝘣𝘳𝘦𝘳𝘪𝘢:`*' + ` _Baileys_\n`;
    txt += `${sbot}\n`;
    txt += '> *`⚙ 𝘗𝘳𝘦𝘧𝘪𝘫𝘰:`*' + ` [  ${usedPrefix}  ]\n`;
    txt += '> *`🤖 𝘚𝘶𝘣-𝘉𝘰𝘵𝘴 𝘈𝘤𝘵𝘪𝘷𝘰𝘴:`*' + ` ${totalUsers || '0'}\n`;
    txt += '> *`🍀 𝘜𝘴𝘶𝘢𝘳𝘪𝘰𝘴:`*' + ` ${totalusr} \n`;
    txt += '> *`🪪 𝘙𝘦𝘨𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘴:`*' + ` ${rtotalreg}\n`;
    txt += '> *`⌚ 𝘓𝘭𝘦𝘷𝘰 𝘈𝘤𝘵𝘪𝘷𝘢:`*' + ` ${uptime}\n\n`;
    txt += '> _© 2024 |_ ' + `𝘉𝘺: 𝘎𝘦𝘯𝘦𝘴𝘪𝘴 𝘉𝘰𝘵.\n\n`;
    txt += "*_◌⃘࣭࣪࣪࣪۬🐈‍⬛─ׅ────────────◌⃘࣭ٜ࣪࣪࣪۬🐈‍⬛_*\n";

    let listSections = [];

    listSections.push({
        title: `🔖 MENUS DE GENESIS `,
        rows: [
            {
                header: "🐈‍⬛ 𝗠𝗲𝗻𝘂 𝗖𝗼𝗺𝗽𝗹𝗲𝘁𝗼",
                title: "",
                description: `ᴍᴇɴᴜ ᴄᴏᴍᴘʟᴇᴛᴏ 📚`,
                id: `${usedPrefix}allmenu`,
            },
            {
                header: "🐈‍⬛ 𝗠𝗲𝗻𝘂 𝗔𝘂𝗱𝗶𝗼𝘀",
                title: "",
                description: `ᴍᴇɴᴜ ᴀᴜᴅɪᴏꜱ 🔊`,
                id: `${usedPrefix}menuaudios`,
            },
            {
                header: "🐈‍⬛ 𝗠𝗲𝗻𝘂 𝗛𝗼𝘁",
                title: "",
                description: `ᴍᴇɴᴜ ʜᴏᴛ 🔥`,
                id: `${usedPrefix}labiblia`,
            },
            {
                header: "🐈‍⬛ 𝗠𝗲𝗻𝘂 𝗥𝗮𝗻𝗱𝗼𝗺",
                title: "",
                description: `ᴍᴇɴᴜ ʀᴀɴᴅᴏᴍ ♻️`,
                id: `${usedPrefix}menurandom`,
            },
            {
                header: "✅ 𝗥𝗲𝗱𝗲𝘀",
                title: "",
                description: `ʀᴇᴅᴇꜱ ɢᴇɴᴇꜱɪꜱ 🍃`,
                id: `${usedPrefix}redes`,
            },
            {
                header: "📣 𝗚𝗿𝘂𝗽𝗼𝘀/𝗖𝗮𝗻𝗮𝗹𝗲𝘀",
                title: "",
                description: `ɢʀᴜᴘᴏꜱ ɢᴇɴᴇꜱɪꜱ 🐈‍⬛`,
                id: `${usedPrefix}grupos`,
            },
{
                header: "🚀 𝗩𝗲𝗹𝗼𝗰𝗶𝗱𝗮𝗱",
                title: "",
                description: `ᴠᴇʟᴏᴄɪᴅᴀᴅ ɢᴇɴᴇꜱɪꜱ 🚀`,
                id: `${usedPrefix}ping`,
            },
{
                header: "🎁 𝗗𝗼𝗻𝗮𝗿",
                title: "",
                description: `ᴅᴏɴᴀʀ ɢᴇɴᴇꜱɪꜱ 🎁`,
                id: `${usedPrefix}donate`,
            },
        ],
    });

    let vid = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img2 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img3 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img4 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img5 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img6 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img8 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img9 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img10 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";
    let img11 = "https://telegra.ph/file/e6dd71bd907a92ef9ec03.jpg";

    await conn.sendList(m.chat, menu, txt, `𝗠𝗘𝗡𝗨𝗦 𝗚𝗘𝗡𝗘𝗦𝗜𝗦`, [vid, img, img2, img3, img4, img5, img6, img8, img9, img10, img11].getRandom(), listSections, fcontact);
};

handler.command = ["menu", "help", "menú"];

export default handler;


function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}


  var ase = new Date();
  var hour = ase.getHours();
switch(hour){
  case 0: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 1: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 💤'; break;
  case 2: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🦉'; break;
  case 3: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 4: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 5: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 6: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌄'; break;
  case 7: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌅'; break;
  case 8: hour = 'Bᴜᴇɴᴏs Dɪᴀs 💫'; break;
  case 9: hour = 'Bᴜᴇɴᴏs Dɪᴀs ✨'; break;
  case 10: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌞'; break;
  case 11: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌨'; break;
  case 12: hour = 'Bᴜᴇɴᴏs Dɪᴀs ❄'; break;
  case 13: hour = 'Bᴜᴇɴᴏs Dɪᴀs 🌤'; break;
  case 14: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌇'; break;
  case 15: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🥀'; break;
  case 16: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌹'; break;
  case 17: hour = 'Bᴜᴇɴᴀs Tᴀʀᴅᴇs 🌆'; break;
  case 18: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 19: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 20: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌌'; break;
  case 21: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
  case 22: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌙'; break;
  case 23: hour = 'Bᴜᴇɴᴀs Nᴏᴄʜᴇs 🌃'; break;
}
  var greeting = hour;