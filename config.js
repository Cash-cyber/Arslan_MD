const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0M5cVlRQnpDaHRGcTJpMWRjMkNCRERDbUhCODY3Qnl0ZEJTU1RSZHVGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIxZXQvamp2UnV3RXlCM21kdG9WUkhkN0ZCUTdQd2dlbWxBeCtKd0JrZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhUDRTVnpoU0daamwzcHNQZStNd1hMSlJjQnNBWTRGZW1ETFRpSEVqN1VzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6QXJ3SW9qenA5NlBSSU1hQ25kZFdzN3NlcWtxNm1rdm93OFpsdUdPUDBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFPSWkrbS9CRkJXSFFjUlE5S2hGckRlVGtFY1V2b0p6RTMyRVhFOXcwM289In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUSjBnNlhMRHJDTHpIQWovSmNMMXNkeStsd0hzbjduTDY0T3lNV3Z2RHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1A3RlAvMUZIK1lBUTBZdWE0UUZpZEwyYmJQOHNESzExMnREQjJYK0ZFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjlvTG1xVW0zUnEwdTE5cklpOG9VQXAvWnc3VG5sc2hMcVcvajg0djNqST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJCZnVZS2VsZkdKVldCeUdzYUZPR01EMFZ3STdJUENaanp2VGFHei9HNWtOajRtdEFzSUcxTUhaaXRzaDllVXpqaEpXTVUvcFNjbThyaXlxMnU5Y2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUxLCJhZHZTZWNyZXRLZXkiOiJranVlcjd4T0pTbXpMbGVHalZRYXRFV2duQTNpQ0pKdmpFajJFWWF3UW9zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzA2MzM3ODJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUM5MTlGNUQ0RTU2OTI1QUVBNjhFODEwQUM4QzJGM0EifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1OTUxOTUzOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3MDYzMzc4MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzE1MEE0Q0I3NTE1NTczNEY2Mzg2NUIzRDg1QzgwNCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU5NTE5NTM5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJLNFc5R1BKMiIsIm1lIjp7ImlkIjoiMjM0NzA3MDYzMzc4MjoxM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjQ0MjUxNTY4MTczMjQ3OjEzQGxpZCIsIm5hbWUiOiJERUFUSCBLSVJBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKUzRtNUFHRUs3R2dNY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjYU1CUCtyODlieENvQnMyRzBreTRRUE5wRFd4NlhuZUd4bkRQZkZwUDNFPSIsImFjY291bnRTaWduYXR1cmUiOiJBS0NPTzYxQ0VLTHdaY3Y4WjdOMGJ4dFh1Q3d4YmdkYzNwRjVwcDExeWZDbkZPa2lGQnQ0Z04vM2l0bUQzOFhkRFJxOFBFWDhrUDR2T0h1WTNNcHBBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibU1QSUNGRURESkgzUmZYMHhURkgyRlBKL2ViOUJLVkJjMnF4MmVtWGRkSzgrRFh6YytkY3pQR0p0NGlSSlN0VmUzekJBSnFhRVZ2ek5LR0lwS0VIaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDcwNjMzNzgyOjEzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhHakFUL3EvUFc4UXFBYk5odEpNdUVEemFRMXNlbDUzaHNad3ozeGFUOXgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElFZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1OTUxOTUzNywibGFzdFByb3BIYXNoIjoibm0zQmIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFSdSJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "false",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
