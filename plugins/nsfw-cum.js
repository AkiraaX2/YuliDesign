/* Créditos a Soffi-Neko, Darlyn1234 BrunoSobrino */
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
const who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false;

if (!who) throw '[❗] Etiqueta a alguien.'      
    
const sexo = await conn.getFile(`https://delirius-homepage.vercel.app/api/cum`);
    
const cap = `@${m.sender.split('@')[0]} se vino en @${who.split('@')[0]}! >.<`

conn.sendMessage(m.chat, {video: sexo.data, gifPlayback: true, caption: cap, mentions: [m.sender, who]}, {quoted: m});
};
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i;
handler.group = true;
export default handler;