//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "27849730363";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0kvVWJmeVNBU01ZVENNYzJWakM3KzlUbHF6MHRjVzNXaDVMS0wrQjltUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibmYzR3JBcVc5TVRvaUIrTTZNKzUxWTRKbm5RN1NibnBGazhJTmhrUTNFMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLTExPUmFNRVlJelBYaG9OTjNKeFk3SkVJTEtvaEF3cDM1eVh6RXlNelZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCN2o2UEcrUkN3WXd3RkgwSG8xVkdtYUVBOUp1R1ZFQWtEMkRTMTlZMHdBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlMSmRERktHZ01NVEw5OU8zVk1QOUpqSUZFcTNCbEp3Ry9qcG5keEFrMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJuZGhlc2hQUmFUdWx6ZGN6aUk3MzdYWUlSNVgwbmw5dWdBSFRFQndjbU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU45YUdQK3JPTzFWZ3JlV1UvRUpEZytLaXFwRmFxYktCb1RxVVZiODEwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVltSURqSXliYTNTalVJdlVsN1h2MXp0VUVjV0lnTlJIWUl1eUJTZERpQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhPNkJncU5YL21jSFJySkttNDFFZ3d6L3drYTIvVzlWNk9OZnNCeFlQUG9FcFc3TzV1VTU3d2xuVEIzSTg1NmlkMVQvUFl1UUQvZlZKRy9mU3c5RGdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6IlBtV1ZtbjljSFk3WmZPaXczaFlmb1FWZktjclBIWlM3QkI1SVBEQlFVM0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik9LTEpFb2xrU0I2Q0pwb0JIQ180cXciLCJwaG9uZUlkIjoiYWQ3MThiYjctNTFmOS00NjA4LWI5MGQtNjRhNTIxYmYwYTY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkloMC9jektTSFdIcVlocklZaDlKb0pzcHhGQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdXZIZWZlWUpmMjl5bU81bTJKYWY2ZTdCSDg9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSkg4NkRGVzYiLCJtZSI6eyJpZCI6IjI3NjE1MDQ1NTcyOjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi5bCK5pWs44Go44Go44KC44Gr44Kv44K944KS5ZCb44Gr6KiA44GGIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLMnZ3b1lGRU9hRWo3a0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJuRnJBa1BCWXVZRWVXb29MODlMSTBId1kvZ2ZuNlpsRFg5MUQ3eU82QVdzPSIsImFjY291bnRTaWduYXR1cmUiOiJuM0JtRDFydytZUXNPTHNxT3A3UXp0b2lCd0xEb21Ib05pVWR3SThtNk9lWExHelRtYUROLzdjR1lBN3JFVktxMVhSdU13YnZwaURvQlBkMnhnODJEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOFpDVUE5OWFoNm9CTnZIL2pzR0d3SXJua1lQZzdCTWp4Q0l6WFl6czBralVkemxSbGFRSmFra3plbWFCR2JwZUNmRDRodzBYK3VPRzluYmtJdjM5Z3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNTA0NTU3MjozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp4YXdKRHdXTG1CSGxxS0MvUFN5TkI4R1A0SDUrbVpRMS9kUSs4anVnRnIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAzOTY3ODh9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`the Cylee bot™®`",
  author: process.env.PACK_AUTHER || "Cylee thee Poet ❤️🧸",
  packname: process.env.PACK_NAME || "c y l e e",
  botname: process.env.BOT_NAME || "theCyleeBot",
  ownername: process.env.OWNER_NAME || "errr'body hates cylee メ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
