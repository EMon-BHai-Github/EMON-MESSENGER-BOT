const os = require('os');

module.exports.config = {
  name: "admin",
  version: "3.0.0",
  permission: 0,
  credits: "Emon",
  prefix: true,
  description: "Show Admin & Server Information",
  category: "Utilities",
  usages: `${global.config.PREFIX}admin`,
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "request": ""
  }
};

module.exports.run = async function ({ api, event }) {
  try {
    // Server uptime
    const uptimeSeconds = process.uptime();
    const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

    // Admin + Server Info Message
    const infoMessage = `

╔════════════════════╗
║     🌸  𝑨𝒅𝒎𝒊𝒏 𝑰𝒏𝒇𝒐  🌸
╚════════════════════╝

👤 ব্যক্তিগত তথ্য
─────────────────────
✨ নাম             : ইমন 🥰
☪️ ধর্ম              : ইসলাম ❤️
🏡 বাড়ি             : মাদারিপুর 😌
🌍 বর্তমান ঠিকানা   : মালয়েশিয়া 🇲🇾
💼 পেশা            : মালায়সিয়ান প্রবাসি 😁
🎂 বয়স             : ২১ 🤭
📏 উচ্চতা          : জানিনা 😔
⚖️ ওজন            : জানিনা 😔
🩸 রক্ত             : O+ 😔
🎨 গায়ের রং       : কালো 🤗
🙅 বেয়াদবি        : করি না ☺️
💰 ধন সম্পদ      : নাই ☺️
🎯 শখ              : নাই 😊
❤️ ভালোবাসা     : একা 😊
─────────────────────
🌹 ধন্যবাদ 🌹

━━━━━━━━━━━━━━━━━━━
🖥️ 𝐒𝐞𝐫𝐯𝐞𝐫 𝐈𝐧𝐟𝐨
━━━━━━━━━━━━━━━━━━━
• Platform        : ${os.platform()}
• CPU            : ${os.cpus()[0].model}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB
━━━━━━━━━━━━━━━━━━━
🔰 By: 𝐄𝐦𝐨𝐧

╔══✪〘 ADMIN INFO 〙✪══╗
║ 👤 Name:  Emon Hawladar
║ 📘 Facebook: fb.com/EMon.BHai.FACEBOOK
║ 📧 Gmail: emonhawladar311@gmail.com
║ 📞 WhatsApp: wa.me/+8801309991724
╚═════════════════════╝
`;

    // Send with picture
    return api.sendMessage(
      {
        body: infoMessage,
        attachment: await require("axios")({
          url: "https://i.postimg.cc/SNm9B2p1/IMG-20250902-WA0048.jpg",
          method: "GET",
          responseType: "stream"
        }).then(res => res.data)
      },
      event.threadID,
      event.messageID
    );

  } catch (e) {
    console.log(e);
    return api.sendMessage("❌ একটি ত্রুটি ঘটেছে।", event.threadID, event.messageID);
  }
};
