const fs = global.nodemodule["fs-extra"];

module.exports.config = {

  name: "bot",

  version: "1.0.1",

  hasPermssion: 0,

  credits: "Mr Chand",

  description: "goibot",

  commandCategory: "Noprefix",

  usages: "noprefix",

  cooldowns: 5,

};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {

  var { threadID, messageID, reason } = event;

  const moment = require("moment-timezone");

  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");

  var idgr = `${event.threadID}`;

  var id = event.senderID;

  var name = await Users.getNameUser(event.senderID);


  var tl = ["I love you 😚 " , "Muddassir Ka Hun ai smjh" , "PIAYR sy BAT KER MJH SY " , "han tera diwana Hun 😁😐" , "chal chal Hawa ana DY " , " Tum Sy ACHA to ma KHUD Hun 😁😬" , "haiy Teri masoomiyat" , "chaqal Sy hi CHABAL LGTA hai" , "tera nam sun sun KY ma Pagal ho gya hun" , "AK to Tum BHI nah Pagal SY ho" , "KABI hawali DAKHI hai kia " , "MJH JESA beautiful Tum BHI NAHI ho " , "AK bat btaou Tum achy NAHI " , "JANU bano GY Mera " , "AGR TUM mjhy purpose KERO to " , "KABI MJHY DAKHA hai kia " , "I am hacker TUMRA Dil hack KER Lou ga " , " ma CHOR Hun tera Dil CHORI KER LIYA " , " JA DAFA ho MJHY Tum Sy bat nahi KERNI " , "ABY JA Pagal INSAN " , "MJHY Tang mat KER ma sad Hun " , "ma PRESHAN Hun KY TUM Pagal KESY ho " , "SACH main Tum single ho " , "BAGH JA WERNA gliya dou ge " , "bye MJHY Tum Sy bat nahi KERNI " , "I blocked you chal hat " , " SHAQL DAKH AUR CHALTA ban " , "can you send me number " , "ma Chand Ka bot hun " , "mera boss Muddassir hai bs " , "Muddassir Ka WHATSAP dou kia? " , "Ma mar gya sorry 😐" , "JA PHLY muh dho KY ah " , "ABY BAHAS nah KER MJH SY I am GUSA main" , "g g PATA hai Tum insane NAHI ho " , "bye Mera mood NAHI " , "have a nice day CHABAL INSAN " , " IB main I love you Kyu BOLA 😐 " , "Teri gf KA Ami ko btaou ga " , "you have girlfriend 😁 " , "BAITA single Mary ga YAAD RAKHNA " , "ma THAKH GYA HUN MJHY aram KERNA do " , "ma insane NAHI Hun AK bot hun " , "din main spna DAKHNA CHOR DY ","Meri gf hoti to mai v usse bt krta aaj puri rt time hi time hai 🤭🤭", "Aao tmhare sath relationship post laga ke tmhe Femous kr du😊", "EK QUESTION HAI SABHI SE BTAO MAI ACHA LGTA HU YA MERI MEMES 🙈😾🤤", "Chakar arhy hein apki Ib ma aa k gir jaun>>🥺🚶🏻‍♀️", "Mout ka farishta ya Mera  rishta?🙂❤️🙊•", "Wife k sath date pe gya tha \nJis ki thi usne dhek lya", "_ Sab ko loyal bnda chahiye tw hum dhokebaz kidhar jayen? 🥺💔", "WhatsApp k last seen k elwa mera koi or scene nai hai🙂", "Hai Tamna TumhY ChaHt sy Girayn🙂",  "Finally es group kee do teen  larkiya mujH pasanD agai Hai🚶‍♂😪🌚", "Suno👀\n\nKya tum mery leye surf kha kar muu sy bulbly nikal skti ho🙂🫴", "- GhUlabii آنــکھیں jh0 terii dekhii Harami Yevw Dill h0 Gya   3; 🙂 😆", "- مجھــــــے کیـــــا مــــیں تــــو سنــــگل ہــــوں 😒", "Dil ko krar Aya khud pa Pyr aya😒🙈😂", "Ehsaas kryn Bakwas nahi, Janam 🥺Shukria_😊🙆‍♂️", "Bs yar daily 3 4 crore ki zarorat mahsos Hoti hai 😂", "Begum walaw مــــــوســـــم ho rahaw haii aj to 🙂", "Shkl insani, soch ibleesi\n\nHnji apki hee ", "تـــــم میــــری بیگـــــم بنو گی کیا -🥺🖤", "LARKIO KAY BHI MAZAY HAY🥴 \nNO BRAIN NO TNSN⛑🔪⚡", "تمہارے حصے کی چُمیاں مچھر لے رہے ہیں.🙂💔", "Sirf Maggie noodles bna'ny sy Ghar nahi chalta SHABANA..🙂💔", "Wp pa add hona chahty ha apky sath ☺️💔", "- کھاؤ قسم تمہارے پاؤں کالے نہیں۔۔!!👣🙄", "Meny fail hokr bhi dekha hai Ye log shadi nh kraty 🙂💔", "Or batao kb ayga tumahara dill mujhe py😌🥺", "bht bura hu na mai? bhiin dedo apnii🙂", "Pyari Pyari ladkiyan Hazir Ho jay😁", "Kisi k pss لاش wali dp h tw send krein janu replY nahi de rhy..!", "MerKo abhi tk pink clr ki gf nh meli 😒🥺🙂💔:⁠-⁠)", "میرے مولا ایک thrkii بچــی yess کروا دے..🙂", "ایک kiss ادهار دے دو 💋\nکل واپس کردوں گا پکّا 😝", "Ajeeb ghr wale hain yr, mera phone 28% pr nikal kr apne 90% ko charge karte 𝐡𝐚𝐢𝐧-🌚", "Lagta hai mery sabar k phal  ka koi juice bna k pee gya..😐", "Dil Dany ki Umar ma  Exam's  Dy raha hoo 🙂🤝", "Behes karne se Rishty kmzor hojaate hn isiliye Direct mun pe thapr marein😊", "Bestie ki chummi halal hai ya Haram ? 🙂", "2001 \nJahan dalda wahan Mamta😊\n\n2023 \nJahan larki  wahan tharki😒", "Koi Pyari c Bachi a kr sar daba dy, Dard sa sar phat rha💔🥲", "Breakup k waqT kE dUa \n\n( KHUSH RAHEIN ) 🙂", "Thora sa Whatsapp number dy do naw🥺♥️", "لوٹ آؤ اور کہدو کہ \nمیں لسی پی کے سو گئی تھی😫", "Kuch Log achy ki Talaash Mein Mery Jaisy Masoom ko kho dety Hain☺️", "Tum wohi ho na jiska mood bilawaja khrab hojata h...!!!🙂", "Pyari pyari larkio ki talash ma berozgar larky add krliye hain 🥲💔", "Jab mera Message aye toh sare kaam chor kar sirf Mujhe reply kia karo😾😒", "Or Btao Real Life Ma bh itnyy Achy ho jitny social media per Bntyy ho>>🙂", "Pakistani Relationship:\nTum Feel Kro Meh Tumary uper hun 😒💔", "Us k jany k bd uski Pasnd ki Nail Polish lgaa k khana khata hu aesw lgta ha jesy wo khela rhee ha😒", "Be a Good Human.Delete GB Whatsapp💔🙂", "2 Din Pyar sy Baat kr loo tou Ammiyan bn  jatii hain🙂😒", "Girls after One Mint of Relationship...\nBegam hu mn apki🙂🤦", "Larkiyon ko achy sy pta hai kahan -Bhai- Bolna kaha -Ap- or kaha -Tum- 🙂", "Aaj mein ny Khud ko TV py dheka \n\nJab Tv Band Tha 🙂", "Qadar krlo Meri...\nKya pta Main b Panadol ki trha aik dam shaat hojun😒", "Naraz bandy ko manany ka sab sy acha tareka Ap khud us sy naraz hojaoo🙂🐣", "Jaisi meri shakal hai kunwara he marunga🙂👀", "Itni memories mere khud dimagh mai nahi hai jitni Snapchat ny bna rkhi ha",Uff aWp ITnI hasseN ko PatoGi", G G boLo mein idhr hun Babu😩",TuM Meri paal paal dharkan MeiN dharkti Ho",اور مجھے ہلکا ہلکا شک پڑ رہا ہے کسی کو 🙆مجھ سے ہلکی ہلکی 🙈محبت ہو رہی ہے","*اچھی بات کہنا بھی صدقہ ہے اس لئے "I love U"*  🙂🫰",];

  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  

  if (event.body.indexOf("bot") == 0 || (event.body.indexOf("Bot") == 0 ||(event.body.indexOf("Bot") == 0 ))) {

    var msg = {

      body: `🧡★━━━━━✩━━━━━★💥\n𝐍𝐚𝐦𝐞 😍:-\n 👉💋${name}💋👈 \n≪━─━─━─◈─━─━─━≫ 𝐓𝐞𝐱𝐭 💬 :-\n ${rand}\n💥★━━━━━✩━━━━━★OwNer Muddassir🧡`

    }

    return api.sendMessage(msg, threadID, messageID);

  };


}


module.exports.run = function({ api, event, client, __GLOBAL }) { }

