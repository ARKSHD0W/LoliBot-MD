import {googleImage} from '@bochilteam/scraper';
const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return conn.reply(m.chat, `𝗤𝘂𝗲 𝗯𝘂𝘀𝗰𝗮𝗿? 🤔️ 𝙪𝘀𝙖𝙧 𝙙𝙚 𝙡𝙖 𝙨𝙞𝙜𝙪𝙞𝙚𝙣𝙩𝙚 𝙢𝙖𝙣𝙚𝙧𝙖\n• 𝗘𝗷𝗲𝗺𝗽𝗹𝗼\n*${usedPrefix + command} Loli*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: iig, body: ' 💫 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🥳 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
if (m.text.includes('gore') || m.text.includes('cp')|| m.text.includes('porno')|| m.text.includes('Gore')|| m.text.includes('rule')|| m.text.includes('CP') || m.text.includes('Rule34') || m.text.includes('xxx')) throw '🙄'
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
conn.sendButton(m.chat, `🔎 𝐑𝐞𝐬𝐮𝐥𝐭𝐚𝐝𝐨𝐬 𝐝𝐞: ${text}`, botname, link, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command} ${text}`]], null, null, m, null, fake)   
  //conn.sendFile(m.chat, link, 'error.jpg', `🔎 *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙳𝙴:* ${text}\n🔗 *𝙻𝙸𝙽𝙺* ${link}\n🌎 *𝙱𝚄𝚂𝙲𝙰𝙳𝙾𝚁:* Google`, m);
};
handler.help = ['gimage <query>', 'imagen <query>'];
handler.tags = ['buscadores'];
handler.command = /^(gimage|image|imagen)$/i;
handler.register = true 
handler.limit = 1
export default handler;
