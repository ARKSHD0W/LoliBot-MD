import fetch from 'node-fetch';
import axios from 'axios';
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (!text) throw `*⚠️ 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐮𝐧 𝐭𝐞𝐱𝐭𝐨 𝐩𝐚𝐫𝐚 𝐜𝐫𝐞𝐚𝐫 𝐮𝐧𝐚 𝐢𝐦𝐚𝐠𝐞𝐧 𝐲 𝐚𝐬𝐢 𝐮𝐬𝐚𝐫 𝐥𝐚 𝐟𝐮𝐧𝐜𝐢𝐨𝐧 𝐝𝐞 𝐝𝐚𝐥𝐥-𝐞*\n\n*• 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:*\n*${usedPrefix + command} gatitos llorando*`;
m.react('⌛') 
try {
const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(text)}&client_id=YuKJ2TeTdI2x92PLBA3a11kCEqxjrwVsGhrVRyLBEfU`;
const response = await axios.get(url);
if (response.data.results.length === 0) {
m.reply(`⚠️ No se encontraron imágenes para "${text}".`);
return;
}
const imageUrl = response.data.results[0].urls.regular; 
await conn.sendFile(m.chat, imageUrl, 'error.jpg', `_*Resultado de:* ${text}_`, m, null, fake);
//conn.sendMessage(m.chat, { image: { url: imageUrl }, caption:  }, { quoted: m });
m.react('✅');
} catch (e1) {  
console.log('[❗] Error en la api numero 1 de dall-e.' + e1)
try {        
const url = `https://api.betabotz.eu.org/api/search/bing-img?text=${encodeURIComponent(text)}&apikey=7gBNbes8`;
const response = await axios.get(url);
if (!response.data.result || response.data.result.length === 0) {
throw `⚠️ No se encontraron imágenes para "${text}".`;
}
const imageUrl = response.data.result[0];
await conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Resultados de: ${text}` }, { quoted: m });
m.react('✅');
} catch (e2) {  
console.log('[❗] Error en la api numero 1 de dall-e.' + e1)
try {
const tiores1 = await fetch(`https://vihangayt.me/tools/imagine?q=${text}`);
const json1 = await tiores1.json();
await conn.sendMessage(m.chat, {image: {url: json1.data}}, {quoted: m});
} catch (e3) {
console.log('[❗] Error en la api numero 2 de dall-e.');
try {                        
const tiores2 = await conn.getFile(`https://vihangayt.me/tools/midjourney?q=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores2.data}}, {quoted: m});
m.react('✅') 
} catch (e4) {
console.log('[❗] Error en la api numero 3 de dall-e.');
try {
const tiores3 = await fetch(`https://vihangayt.me/tools/lexicaart?q=${text}`);
const json3 = await tiores3.json();
await conn.sendMessage(m.chat, {image: {url: json3.data[0].images[0].url}}, {quoted: m});
m.react('✅') 
} catch (e5) {
console.log('[❗] Error en la api numero 4 de dall-e.');
try {
const tiores4 = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`);
await conn.sendMessage(m.chat, {image: {url: tiores4.data}}, {quoted: m});
m.react('✅') 
} catch (error) {
console.log('[❗] Error, ninguna api funcional.\n' + error);
m.reply(`error ${e1}`) 
m.react('❌') 
}}}}}}};
handler.help = ["dalle"]
handler.tags = ["buscadores"]
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai3', 'a-img', 'aimg', 'imagine'];
handler.register = true
export default handler;
