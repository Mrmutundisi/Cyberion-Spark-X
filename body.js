

'use strict';const _0x463bb9=_0x4a8a;(function(_0x34fc9f,_0x5687a7){const _0x2f230c=_0x4a8a,_0x1d23f0=_0x34fc9f();while(!![]){try{const _0x14a666=-parseInt(_0x2f230c(0x23d))/0x1*(parseInt(_0x2f230c(0x261))/0x2)+parseInt(_0x2f230c(0x1ae))/0x3*(-parseInt(_0x2f230c(0x287))/0x4)+-parseInt(_0x2f230c(0x1a8))/0x5+-parseInt(_0x2f230c(0x235))/0x6+parseInt(_0x2f230c(0x1e3))/0x7+-parseInt(_0x2f230c(0x249))/0x8+-parseInt(_0x2f230c(0x238))/0x9*(-parseInt(_0x2f230c(0x1ec))/0xa);if(_0x14a666===_0x5687a7)break;else _0x1d23f0['push'](_0x1d23f0['shift']());}catch(_0x4c752f){_0x1d23f0['push'](_0x1d23f0['shift']());}}}(_0x539c,0xd5e02));function _0x4a8a(_0xad04ed,_0x5f0e72){const _0x539c4c=_0x539c();return _0x4a8a=function(_0x4a8a8a,_0x24abae){_0x4a8a8a=_0x4a8a8a-0x18f;let _0x11be51=_0x539c4c[_0x4a8a8a];return _0x11be51;},_0x4a8a(_0xad04ed,_0x5f0e72);}var __createBinding=this&&this[_0x463bb9(0x19d)]||(Object[_0x463bb9(0x1ed)]?function(_0x3785bb,_0x5f0658,_0x316fe7,_0x52decf){const _0x5bbd6f=_0x463bb9;if(_0x52decf===undefined)_0x52decf=_0x316fe7;var _0x3700df=Object['getOwnPropertyDescriptor'](_0x5f0658,_0x316fe7);(!_0x3700df||(_0x5bbd6f(0x20e)in _0x3700df?!_0x5f0658['__esModule']:_0x3700df[_0x5bbd6f(0x28d)]||_0x3700df['configurable']))&&(_0x3700df={'enumerable':!![],'get':function(){return _0x5f0658[_0x316fe7];}}),Object[_0x5bbd6f(0x27d)](_0x3785bb,_0x52decf,_0x3700df);}:function(_0x387c95,_0x4036d0,_0x1cee02,_0x59a172){if(_0x59a172===undefined)_0x59a172=_0x1cee02;_0x387c95[_0x59a172]=_0x4036d0[_0x1cee02];}),__setModuleDefault=this&&this[_0x463bb9(0x282)]||(Object[_0x463bb9(0x1ed)]?function(_0x2645e7,_0x4d8617){const _0x1f2a9c=_0x463bb9;Object[_0x1f2a9c(0x27d)](_0x2645e7,'default',{'enumerable':!![],'value':_0x4d8617});}:function(_0x29578c,_0x662814){const _0x3657c1=_0x463bb9;_0x29578c[_0x3657c1(0x24d)]=_0x662814;}),__importStar=this&&this[_0x463bb9(0x203)]||function(_0x3a7694){const _0xaa5323=_0x463bb9;if(_0x3a7694&&_0x3a7694[_0xaa5323(0x299)])return _0x3a7694;var _0x46a7ae={};if(_0x3a7694!=null){for(var _0x4fbbda in _0x3a7694)if(_0x4fbbda!=='default'&&Object[_0xaa5323(0x22f)][_0xaa5323(0x1ab)][_0xaa5323(0x27a)](_0x3a7694,_0x4fbbda))__createBinding(_0x46a7ae,_0x3a7694,_0x4fbbda);}return __setModuleDefault(_0x46a7ae,_0x3a7694),_0x46a7ae;},__importDefault=this&&this['__importDefault']||function(_0xa9570c){const _0x6b667b=_0x463bb9;return _0xa9570c&&_0xa9570c[_0x6b667b(0x299)]?_0xa9570c:{'default':_0xa9570c};};Object[_0x463bb9(0x27d)](exports,_0x463bb9(0x299),{'value':!![]});const baileys_1=__importStar(require(_0x463bb9(0x260))),logger_1=__importDefault(require(_0x463bb9(0x236))),logger=logger_1['default'][_0x463bb9(0x198)]({});logger[_0x463bb9(0x1d5)]='silent';const pino=require(_0x463bb9(0x1f2)),boom_1=require(_0x463bb9(0x227)),conf=require('./config'),axios=require('axios'),moment=require('moment-timezone');let fs=require(_0x463bb9(0x1e1)),path=require('path');const FileType=require(_0x463bb9(0x195)),{Sticker,createSticker,StickerTypes}=require('wa-sticker-formatter'),{verifierEtatJid,recupererActionJid}=require(_0x463bb9(0x1db)),{atbverifierEtatJid,atbrecupererActionJid}=require(_0x463bb9(0x28e));let evt=require(__dirname+_0x463bb9(0x254));const {isUserBanned,addUserToBanList,removeUserFromBanList}=require('./lib/banUser'),{addGroupToBanList,isGroupBanned,removeGroupFromBanList}=require('./lib/banGroup'),{isGroupOnlyAdmin,addGroupToOnlyAdminList,removeGroupFromOnlyAdminList}=require('./lib/onlyAdmin');let {reagir}=require(__dirname+'/Ibrahim/app');function _0x539c(){const _0x22fb33=['protocolMessage','resolve','delay','mtype','Boom','./lib/warn','level','PM_PERMIT','messages.upsert','contextInfo','announcement','singleSelectReply','./lib/antilien','===========\x20written\x20message===========','unmute_at','useMultiFileAuthState','message\x20deleted\x20\x0a\x20@','Detected\x20status\x20update\x20from:','fs-extra','You\x20don\x27t\x20have\x20acces\x20to\x20commands\x20here','520079rUSghA','\x20*\x20*\x20*','delete','Message\x20deleted\x20by\x20me,\x20skipping.','makeInMemoryStore','Session\x20Invalid\x20','repeat','restartRequired','includes','28025590JFAxhr','create','startsWith','jidDecode','readdirSync','videoMessage','pino','chatJid','AUTO_LIKE_STATUS\x20is\x20enabled.\x20Listening\x20for\x20status\x20updates...','imageMessage','etablissement\x20d\x27un\x20automute\x20pour\x20','object','MODE','loadMessage','length','12345','------','unwatchFile','FULL','@s.whatsapp.net','node-cron','Cyberion\x20is\x20Online\x20🕸\x0a\x0a','type\x20de\x20message\x20:\x20','__importStar','An\x20Error\x20Occurred,\x20Repeat\x20Command!','BAES','antidemote','string','silent','120363158701337904@g.us','1.0.0','error','reactionMessage','Message\x20not\x20found\x20in\x20store.','get','env','HEROKU_APP_NAME','\x20removed\x20from\x20group.','loggedOut','pushName','\x0a\x20\x20\x20\x20┃\x20\x20☢️Owner\x20Number:\x20','./store.json','BAE5','mimetype','https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif','welcome','sendMessage','existsSync','./files/deleted-message.jpg','function','getContentType','child_process','#000000','log','forEach','connexion\x20réplacée\x20,,,\x20une\x20sesssion\x20est\x20déjà\x20ouverte\x20veuillez\x20la\x20fermer\x20svp\x20!!!','unavailable','Africa/Nairobi','./lib/welcome','@hapi/boom','Je\x20ne\x20reagis\x20pas\x20au\x20reactions','〕\x0a\x20\x20\x20\x20┃\x20\x20📱Mode\x20:\x20〚','messageContextInfo','group_id','close','connection\x20error\x20😞\x20,,,\x20trying\x20to\x20reconnect...\x20','one\x20or\x20somes\x20member(s)\x20left\x20group;\x0a','prototype','extname','replace','downloadAndSaveMediaMessage','Deleted\x20message\x20detected.','Successfully\x20reacted\x20to\x20status\x20update\x20by\x20','7195632ltedBU','@whiskeysockets/baileys/lib/Utils/logger','notify','18GkIKDC','remoteJid','buttonsResponseMessage','user','\x20could\x20not\x20be\x20installed\x20due\x20to\x20:\x20','3kAlrjy','selectedButtonId','./files/chrono.webp','timeout','endsWith','server','action','badSession','mentionedJid','Spark','Timeout\x20must\x20be\x20a\x20number','fromMe','2033536FEQoKV','/scs','Unknown\x20App\x20Name','trim','default','assign','contacts','etablissement\x20d\x27un\x20autounmute\x20pour\x20','Message','awaitForMessage','unlink','/Ibrahim/adams','watchFile','pm2\x20restart\x20all','!!!\x20connexion\x20fermée,\x20reconnexion\x20en\x20cours\x20...','Filter\x20must\x20be\x20a\x20function','msg','ADM','\x20a\x20','schedule','admin','participant','AUTO_READ','@whiskeysockets/baileys','746578LrwQpB','HEROKU_APP_LINK','\x20H\x20','connectionReplaced','type','😡😡\x20','safari','bot\x20detected\x20,\x20your\x20warn_count\x20was\x20upgrade\x20;\x0a\x20rest\x20:\x20','groupSettingUpdate','\x20and\x20@','goodbye','composing','filter','slice','zokk','mute_at','vous\x20êtes\x20déconnecté,,,\x20veuillez\x20rescanner\x20le\x20code\x20qr\x20svp','bot\x20detected,\x20\x0a','conversation','fetchLatestBaileysVersion','st1.webp','Timeout','sendPresenceUpdate','cache','messages','call','ChatJid\x20must\x20be\x20a\x20string','parse','defineProperty','caption','message\x20delete\x20\x0a\x20@','NUMERO_OWNER','\x20Installed\x20Successfully✔️','__setModuleDefault','------\x20message\x20------','groupMetadata','message\x20envoyé\x20par\x20:\x20','fromCharCode','172pXdJGo','\x20:\x20','groupParticipantsUpdate','now','Error\x20handling\x20deleted\x20message:','antipromote','writable','./lib/antibot','key','group-participants.update','floor','split','/Session/creds.json','Sender\x20must\x20be\x20a\x20string','participants','ETAT','sender','creds','__esModule','off','Loading\x20Cyberion\x20Commands\x20...\x0a','push','\x20have\x20been\x20removed\x20from\x20administrative\x20rights.','ADAMS','....\x20','\x0a\x20\x20\x20\x20✰⁠⁠⁠⁠▰▱▰▱▰▱▰▱▰▱▰▱▰▱▰✰⁠⁠⁠⁠\x0a\x20\x20\x20\x20\x20\x20\x20*𝗖𝗬𝗕𝗘𝗥𝗜𝗢𝗡-𝗦𝗣𝗔𝗥𝗞-𝗫*','〛\x0a\x20\x20\x20\x20┃\x20\x20⚙️Created\x20on\x20:\x20*23.8.2024*\x0a\x20\x20\x20\x20┃\x20\x20📃Total\x20Commands\x20:\x20','nomCom','undefined','owner','utf8','toFile','selectedRowId','✅Cyberion\x20is\x20now\x20Connected\x20to\x20WhatsApp!\x20☺️','Throttling\x20reactions\x20to\x20prevent\x20overflow.','reaction','@g.us','output','OWNER_NAME','file-type','toLocaleLowerCase','254710772666','child','demote','available','toLowerCase','\x0a\x20\x20\x20\x20┃\x20\x20✨️Bot\x20Name:\x20','__createBinding','number','antibot\x20','not_announcement','./lib/cron','text','connexion\x20en\x20cour\x20...','Cas\x20de\x20superUser\x20je\x20fais\x20rien','❒\x20*READ\x20THE\x20GROUP\x20DESCRIPTION\x20TO\x20AVOID\x20GETTING\x20REMOVED*\x20','writeFileSync','yes','2559065VBWnPH','\x0a\x20\x20\x20\x20┃\x20\x20🔮','warn','hasOwnProperty','listResponseMessage','status@broadcast','119877GWYnJF','PREFIXE','\x20\x0a❒\x20*Hey*\x20🖐️\x20@','Bot\x27s\x20user\x20ID\x20not\x20available.\x20Skipping\x20reaction.','je\x20fais\x20rien','WARN_COUNT','recording','Good\x20morning;\x20It\x27s\x20time\x20to\x20open\x20the\x20group.','remove','\x20WELCOME\x20TO\x20OUR\x20GROUP.\x20\x0a\x0a','find','contacts.upsert','fonction','*CYBERION-SPARK-X\x20WELCOME-MESSAGE*','map','concat','author','Commands\x20Installation\x20Completed\x20✅','Les\x20crons\x20n\x27ont\x20pas\x20été\x20activés','readMessages','connectionClosed','readFileSync','ext','add','message','\x20has\x20violated\x20the\x20anti-promotion\x20rule,\x20therefore\x20both\x20','statusCode','extendedTextMessage','redemarrage\x20sur\x20le\x20coup\x20de\x20l\x27erreur\x20\x20','bot\x20detected\x20;you\x20will\x20be\x20remove\x20because\x20of\x20reaching\x20warn-limit','test','Cyberion','DisconnectReason'];_0x539c=function(){return _0x22fb33;};return _0x539c();}var session=conf['session']['replace'](/CYBERION;;;/g,'');const prefixe=conf[_0x463bb9(0x1af)],more=String[_0x463bb9(0x286)](0x200e),readmore=more[_0x463bb9(0x1e9)](0xfa1),herokuAppName=process[_0x463bb9(0x20f)][_0x463bb9(0x210)]||_0x463bb9(0x24b),herokuAppLink=process[_0x463bb9(0x20f)][_0x463bb9(0x262)]||'https://dashboard.heroku.com/apps/'+herokuAppName,botOwner=process[_0x463bb9(0x20f)][_0x463bb9(0x280)]||'Unknown\x20Owner';async function authentification(){const _0x50ddf8=_0x463bb9;try{if(!fs['existsSync'](__dirname+_0x50ddf8(0x293)))console[_0x50ddf8(0x221)](_0x50ddf8(0x1a3)),await fs[_0x50ddf8(0x1a6)](__dirname+_0x50ddf8(0x293),atob(session),_0x50ddf8(0x2a5));else fs[_0x50ddf8(0x21b)](__dirname+'/Session/creds.json')&&session!=_0x50ddf8(0x26f)&&await fs[_0x50ddf8(0x1a6)](__dirname+_0x50ddf8(0x293),atob(session),'utf8');}catch(_0x2dab59){console['log'](_0x50ddf8(0x1e8)+_0x2dab59);return;}}authentification();const store=(0x0,baileys_1[_0x463bb9(0x1e7)])({'logger':pino()[_0x463bb9(0x198)]({'level':_0x463bb9(0x208),'stream':'store'})});setTimeout(()=>{const _0x26d5d7=_0x463bb9;async function _0x4ae4df(){const _0x3d104b=_0x4a8a,{version:_0x5a14f8,isLatest:_0xad6392}=await(0x0,baileys_1[_0x3d104b(0x274)])(),{state:_0x1ffc94,saveCreds:_0x2c98d9}=await(0x0,baileys_1[_0x3d104b(0x1de)])(__dirname+'/Session'),_0x26dcb6={'version':_0x5a14f8,'logger':pino({'level':_0x3d104b(0x208)}),'browser':[_0x3d104b(0x246),_0x3d104b(0x267),_0x3d104b(0x20a)],'printQRInTerminal':!![],'fireInitQueries':![],'shouldSyncHistoryMessage':!![],'downloadHistory':!![],'syncFullHistory':!![],'generateHighQualityLinkPreview':!![],'markOnlineOnConnect':![],'keepAliveIntervalMs':0x7530,'auth':{'creds':_0x1ffc94[_0x3d104b(0x298)],'keys':(0x0,baileys_1['makeCacheableSignalKeyStore'])(_0x1ffc94['keys'],logger)},'getMessage':async _0x55b207=>{const _0x2cb9e5=_0x3d104b;if(store){const _0x1b319c=await store[_0x2cb9e5(0x1f9)](_0x55b207['remoteJid'],_0x55b207['id'],undefined);return _0x1b319c[_0x2cb9e5(0x1c6)]||undefined;}return{'conversation':_0x2cb9e5(0x204)};}},_0x1b2a02=(0x0,baileys_1['default'])(_0x26dcb6);store['bind'](_0x1b2a02['ev']);const _0x37f52e=_0xcbca94=>new Promise(_0x54241a=>setTimeout(_0x54241a,_0xcbca94));let _0x921b74=0x0;conf[_0x3d104b(0x29e)]===_0x3d104b(0x1a7)&&(console[_0x3d104b(0x221)](_0x3d104b(0x1f4)),_0x1b2a02['ev']['on'](_0x3d104b(0x1d7),async _0x46252d=>{const _0x225951=_0x3d104b,{messages:_0x37a0ec}=_0x46252d;for(const _0x3ffbcf of _0x37a0ec){if(_0x3ffbcf[_0x225951(0x28f)]&&_0x3ffbcf['key'][_0x225951(0x239)]===_0x225951(0x1ad)){console[_0x225951(0x221)](_0x225951(0x1e0),_0x3ffbcf[_0x225951(0x28f)][_0x225951(0x239)]);const _0x2d220c=Date[_0x225951(0x28a)]();if(_0x2d220c-_0x921b74<0x1388){console[_0x225951(0x221)](_0x225951(0x190));continue;}const _0x27eeaf=_0x1b2a02['user']&&_0x1b2a02['user']['id']?_0x1b2a02['user']['id'][_0x225951(0x292)](':')[0x0]+_0x225951(0x1ff):null;if(!_0x27eeaf){console['log'](_0x225951(0x1b1));continue;}await _0x1b2a02['sendMessage'](_0x3ffbcf[_0x225951(0x28f)][_0x225951(0x239)],{'react':{'key':_0x3ffbcf[_0x225951(0x28f)],'text':'🕵'}},{'statusJidList':[_0x3ffbcf[_0x225951(0x28f)][_0x225951(0x25e)],_0x27eeaf]}),_0x921b74=Date[_0x225951(0x28a)](),console['log'](_0x225951(0x234)+_0x3ffbcf[_0x225951(0x28f)][_0x225951(0x239)]),await _0x37f52e(0x7d0);}}}));_0x1b2a02['ev']['on'](_0x3d104b(0x1d7),async _0x34391c=>{const _0x5f4bbd=_0x3d104b,{messages:_0x5be02c}=_0x34391c,_0x56fc44=_0x5be02c[0x0];if(!_0x56fc44[_0x5f4bbd(0x1c6)])return;const _0x537a36=_0x287772=>{const _0x3b581d=_0x5f4bbd;if(!_0x287772)return _0x287772;if(/:\d+@/gi[_0x3b581d(0x1cc)](_0x287772)){let _0xc6e5fc=(0x0,baileys_1[_0x3b581d(0x1ef)])(_0x287772)||{};return _0xc6e5fc[_0x3b581d(0x23b)]&&_0xc6e5fc[_0x3b581d(0x242)]&&_0xc6e5fc[_0x3b581d(0x23b)]+'@'+_0xc6e5fc['server']||_0x287772;}else return _0x287772;};var _0x56e540=(0x0,baileys_1[_0x5f4bbd(0x21e)])(_0x56fc44[_0x5f4bbd(0x1c6)]),_0x2447b2=_0x56e540=='conversation'?_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x273)]:_0x56e540==_0x5f4bbd(0x1f5)?_0x56fc44['message'][_0x5f4bbd(0x1f5)]?.['caption']:_0x56e540==_0x5f4bbd(0x1f1)?_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1f1)]?.['caption']:_0x56e540=='extendedTextMessage'?_0x56fc44['message']?.[_0x5f4bbd(0x1c9)]?.[_0x5f4bbd(0x1a2)]:_0x56e540==_0x5f4bbd(0x23a)?_0x56fc44?.['message']?.['buttonsResponseMessage']?.['selectedButtonId']:_0x56e540==_0x5f4bbd(0x1ac)?_0x56fc44['message']?.[_0x5f4bbd(0x1ac)]?.[_0x5f4bbd(0x1da)]?.['selectedRowId']:_0x56e540==_0x5f4bbd(0x22a)?_0x56fc44?.[_0x5f4bbd(0x1c6)]?.['buttonsResponseMessage']?.[_0x5f4bbd(0x23e)]||_0x56fc44[_0x5f4bbd(0x1c6)]?.[_0x5f4bbd(0x1ac)]?.['singleSelectReply']?.[_0x5f4bbd(0x2a7)]||_0x56fc44[_0x5f4bbd(0x1a2)]:'',_0x722079=_0x56fc44['key'][_0x5f4bbd(0x239)],_0x5778d0=_0x537a36(_0x1b2a02['user']['id']),_0x46b25d=_0x5778d0[_0x5f4bbd(0x292)]('@')[0x0];const _0x162553=_0x722079?.['endsWith'](_0x5f4bbd(0x192));var _0x55dd72=_0x162553?await _0x1b2a02['groupMetadata'](_0x722079):'',_0x1e8df9=_0x162553?_0x55dd72['subject']:'',_0x5322d9=_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1c9)]?.[_0x5f4bbd(0x1d8)]?.['quotedMessage'],_0x5c4d77=_0x537a36(_0x56fc44[_0x5f4bbd(0x1c6)]?.[_0x5f4bbd(0x1c9)]?.['contextInfo']?.[_0x5f4bbd(0x25e)]),_0x8230c8=_0x56fc44[_0x5f4bbd(0x251)]?.[_0x5f4bbd(0x1c9)]?.[_0x5f4bbd(0x1d8)]?.[_0x5f4bbd(0x245)],_0x34de80=_0x8230c8?_0x8230c8:_0x5322d9?_0x5c4d77:'',_0x5b071a=_0x162553?_0x56fc44[_0x5f4bbd(0x28f)]['participant']?_0x56fc44[_0x5f4bbd(0x28f)]['participant']:_0x56fc44[_0x5f4bbd(0x25e)]:_0x722079;_0x56fc44[_0x5f4bbd(0x28f)]['fromMe']&&(_0x5b071a=_0x5778d0);var _0x1c7506=_0x162553?_0x56fc44[_0x5f4bbd(0x28f)]['participant']:'';const {getAllSudoNumbers:_0x3fe7e9}=require('./lib/sudo'),_0x15018c=_0x56fc44[_0x5f4bbd(0x213)],_0x4f6155=_0x5f4bbd(0x197),_0x1fe4cc=_0x5f4bbd(0x197),_0x878eac=_0x5f4bbd(0x197),_0xef1757=_0x5f4bbd(0x197),_0x2ba27e=await _0x3fe7e9(),_0x5a022d=[_0x46b25d,_0x4f6155,_0x1fe4cc,_0x878eac,_0xef1757,conf['NUMERO_OWNER']][_0x5f4bbd(0x1bc)](_0x5623f4=>_0x5623f4[_0x5f4bbd(0x231)](/[^0-9]/g)+_0x5f4bbd(0x1ff)),_0x3b062c=_0x5a022d[_0x5f4bbd(0x1bd)](_0x2ba27e),_0x2d979d=_0x3b062c['includes'](_0x5b071a);var _0x439841=[_0x4f6155,_0x1fe4cc,_0x878eac,_0xef1757][_0x5f4bbd(0x1bc)](_0x42bb66=>_0x42bb66['replace'](/[^0-9]/g)+_0x5f4bbd(0x1ff))[_0x5f4bbd(0x1eb)](_0x5b071a);function _0x45f347(_0xe1eaed){const _0x4bfb82=_0x5f4bbd;_0x1b2a02[_0x4bfb82(0x21a)](_0x722079,{'text':_0xe1eaed},{'quoted':_0x56fc44});}console['log']('\x09🕵CYBERION-SPARK-X🕵'),console[_0x5f4bbd(0x221)](_0x5f4bbd(0x1dc));_0x162553&&console[_0x5f4bbd(0x221)]('message\x20provenant\x20du\x20groupe\x20:\x20'+_0x1e8df9);console[_0x5f4bbd(0x221)](_0x5f4bbd(0x285)+'['+_0x15018c+_0x5f4bbd(0x288)+_0x5b071a[_0x5f4bbd(0x292)](_0x5f4bbd(0x1ff))[0x0]+'\x20]'),console['log'](_0x5f4bbd(0x202)+_0x56e540),console[_0x5f4bbd(0x221)](_0x5f4bbd(0x283)),console[_0x5f4bbd(0x221)](_0x2447b2);function _0x1e1ef3(_0x5a4f44){const _0x8edd66=_0x5f4bbd;let _0x4aaa0c=[];for(_0x34391c of _0x5a4f44){if(_0x34391c[_0x8edd66(0x25d)]==null)continue;_0x4aaa0c[_0x8edd66(0x29c)](_0x34391c['id']);}return _0x4aaa0c;}var _0x30e2e4=conf[_0x5f4bbd(0x296)];if(_0x30e2e4==0x1)await _0x1b2a02[_0x5f4bbd(0x277)](_0x5f4bbd(0x19a),_0x722079);else{if(_0x30e2e4==0x2)await _0x1b2a02['sendPresenceUpdate'](_0x5f4bbd(0x26c),_0x722079);else _0x30e2e4==0x3?await _0x1b2a02['sendPresenceUpdate'](_0x5f4bbd(0x1b4),_0x722079):await _0x1b2a02[_0x5f4bbd(0x277)](_0x5f4bbd(0x224),_0x722079);}const _0x128801=_0x162553?await _0x55dd72[_0x5f4bbd(0x295)]:'';let _0x274336=_0x162553?_0x1e1ef3(_0x128801):'';const _0x5e3034=_0x162553?_0x274336[_0x5f4bbd(0x1eb)](_0x5b071a):![];var _0x9ede72=_0x162553?_0x274336[_0x5f4bbd(0x1eb)](_0x5778d0):![];const _0xe65c48=_0x2447b2?_0x2447b2[_0x5f4bbd(0x24c)]()['split'](/ +/)[_0x5f4bbd(0x26e)](0x1):null,_0x380aaf=_0x2447b2?_0x2447b2['startsWith'](prefixe):![],_0xda6495=_0x380aaf?_0x2447b2[_0x5f4bbd(0x26e)](0x1)[_0x5f4bbd(0x24c)]()[_0x5f4bbd(0x292)](/ +/)['shift']()[_0x5f4bbd(0x19b)]():![],_0x278448=conf['URL'][_0x5f4bbd(0x292)](',');function _0x497395(){const _0x295da0=_0x5f4bbd,_0x41f8d3=Math[_0x295da0(0x291)](Math['random']()*_0x278448[_0x295da0(0x1fa)]),_0x7f55be=_0x278448[_0x41f8d3];return _0x7f55be;}var _0x6eb066={'superUser':_0x2d979d,'dev':_0x439841,'verifGroupe':_0x162553,'mbre':_0x128801,'membreGroupe':_0x1c7506,'verifAdmin':_0x5e3034,'infosGroupe':_0x55dd72,'nomGroupe':_0x1e8df9,'auteurMessage':_0x5b071a,'nomAuteurMessage':_0x15018c,'idBot':_0x5778d0,'verifZokouAdmin':_0x9ede72,'prefixe':prefixe,'arg':_0xe65c48,'repondre':_0x45f347,'mtype':_0x56e540,'groupeAdmin':_0x1e1ef3,'msgRepondu':_0x5322d9,'auteurMsgRepondu':_0x5c4d77,'ms':_0x56fc44,'mybotpic':_0x497395};if(_0x56fc44['message'][_0x5f4bbd(0x1cf)]&&_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1cf)][_0x5f4bbd(0x265)]===0x0&&conf[_0x5f4bbd(0x25a)][_0x5f4bbd(0x19b)]()===_0x5f4bbd(0x1a7)){if(_0x56fc44[_0x5f4bbd(0x28f)][_0x5f4bbd(0x248)]||_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1cf)][_0x5f4bbd(0x28f)][_0x5f4bbd(0x248)]){console['log'](_0x5f4bbd(0x1e6));return;}console[_0x5f4bbd(0x221)](_0x5f4bbd(0x233));let _0x114f07=_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1cf)][_0x5f4bbd(0x28f)];try{let _0x2e5f40=_0x5f4bbd(0x215);const _0x2a42d5=fs[_0x5f4bbd(0x1c3)](_0x2e5f40,_0x5f4bbd(0x2a5)),_0x8935e3=JSON[_0x5f4bbd(0x27c)](_0x2a42d5);let _0xe04399=_0x8935e3[_0x5f4bbd(0x279)][_0x114f07[_0x5f4bbd(0x239)]],_0xd577ec;for(let _0x26ffa1=0x0;_0x26ffa1<_0xe04399[_0x5f4bbd(0x1fa)];_0x26ffa1++){if(_0xe04399[_0x26ffa1]['key']['id']===_0x114f07['id']){_0xd577ec=_0xe04399[_0x26ffa1];break;}}if(!_0xd577ec){console[_0x5f4bbd(0x221)](_0x5f4bbd(0x20d));return;}let _0x217c09=_0xd577ec[_0x5f4bbd(0x28f)]['participant']||_0xd577ec['key'][_0x5f4bbd(0x239)],_0x96cda2='*🕵\x20Deleted\x20Message\x20Detected*\x0a\x0aDeleted\x20by\x20@'+_0x217c09[_0x5f4bbd(0x292)]('@')[0x0];await _0x1b2a02[_0x5f4bbd(0x21a)](_0x5778d0,{'image':{'url':_0x5f4bbd(0x21c)},'caption':_0x96cda2,'mentions':[_0x217c09]}),await _0x1b2a02[_0x5f4bbd(0x21a)](_0x5778d0,{'forward':_0xd577ec},{'quoted':_0xd577ec});}catch(_0x2102e5){console[_0x5f4bbd(0x20b)](_0x5f4bbd(0x28b),_0x2102e5);}}conf[_0x5f4bbd(0x25f)]==='yes'&&_0x1b2a02['ev']['on'](_0x5f4bbd(0x1d7),async _0x22e08e=>{const _0x5e96d4=_0x5f4bbd,{messages:_0x480709}=_0x22e08e;for(const _0x362901 of _0x480709){!_0x362901['key'][_0x5e96d4(0x248)]&&await _0x1b2a02['readMessages']([_0x362901['key']]);}});_0x56fc44[_0x5f4bbd(0x28f)]&&_0x56fc44[_0x5f4bbd(0x28f)][_0x5f4bbd(0x239)]===_0x5f4bbd(0x1ad)&&conf['AUTO_READ_STATUS']===_0x5f4bbd(0x1a7)&&await _0x1b2a02[_0x5f4bbd(0x1c1)]([_0x56fc44[_0x5f4bbd(0x28f)]]);if(_0x56fc44[_0x5f4bbd(0x28f)]&&_0x56fc44[_0x5f4bbd(0x28f)]['remoteJid']===_0x5f4bbd(0x1ad)&&conf['AUTO_DOWNLOAD_STATUS']===_0x5f4bbd(0x1a7)){if(_0x56fc44[_0x5f4bbd(0x1c6)]['extendedTextMessage']){var _0x3b9584=_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1c9)]['text'];await _0x1b2a02['sendMessage'](_0x5778d0,{'text':_0x3b9584},{'quoted':_0x56fc44});}else{if(_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1f5)]){var _0x543f61=_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1f5)][_0x5f4bbd(0x27e)],_0x1313c0=await _0x1b2a02[_0x5f4bbd(0x232)](_0x56fc44[_0x5f4bbd(0x1c6)]['imageMessage']);await _0x1b2a02['sendMessage'](_0x5778d0,{'image':{'url':_0x1313c0},'caption':_0x543f61},{'quoted':_0x56fc44});}else{if(_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1f1)]){var _0x543f61=_0x56fc44[_0x5f4bbd(0x1c6)][_0x5f4bbd(0x1f1)][_0x5f4bbd(0x27e)],_0x277bbe=await _0x1b2a02[_0x5f4bbd(0x232)](_0x56fc44[_0x5f4bbd(0x1c6)]['videoMessage']);await _0x1b2a02[_0x5f4bbd(0x21a)](_0x5778d0,{'video':{'url':_0x277bbe},'caption':_0x543f61},{'quoted':_0x56fc44});}}}}if(!_0x439841&&_0x722079==_0x5f4bbd(0x209))return;try{const _0x2358ab=_0x56fc44['key']?.['id']?.[_0x5f4bbd(0x1ee)](_0x5f4bbd(0x205))&&_0x56fc44[_0x5f4bbd(0x28f)]?.['id']?.['length']===0x10,_0x364f9b=_0x56fc44[_0x5f4bbd(0x28f)]?.['id']?.[_0x5f4bbd(0x1ee)](_0x5f4bbd(0x216))&&_0x56fc44[_0x5f4bbd(0x28f)]?.['id']?.['length']===0x10;if(_0x2358ab||_0x364f9b){if(_0x56e540===_0x5f4bbd(0x20c)){console[_0x5f4bbd(0x221)](_0x5f4bbd(0x228));return;};const _0x45aace=await atbverifierEtatJid(_0x722079);if(!_0x45aace)return;;if(_0x5e3034||_0x5b071a===_0x5778d0){console[_0x5f4bbd(0x221)](_0x5f4bbd(0x1b2));return;};const _0x2ff1f6={'remoteJid':_0x722079,'fromMe':![],'id':_0x56fc44[_0x5f4bbd(0x28f)]['id'],'participant':_0x5b071a};var _0x27ea72=_0x5f4bbd(0x272);const _0x227d8f=_0x5f4bbd(0x218);var _0x11ef17=new Sticker(_0x227d8f,{'pack':_0x5f4bbd(0x1cd),'author':conf[_0x5f4bbd(0x194)],'type':StickerTypes[_0x5f4bbd(0x1fe)],'categories':['🤩','🎉'],'id':_0x5f4bbd(0x1fb),'quality':0x32,'background':_0x5f4bbd(0x220)});await _0x11ef17[_0x5f4bbd(0x2a6)]('st1.webp');var _0x310dd9=await atbrecupererActionJid(_0x722079);if(_0x310dd9===_0x5f4bbd(0x1b6)){_0x27ea72+=_0x5f4bbd(0x1df)+_0x5b071a[_0x5f4bbd(0x292)]('@')[0x0]+_0x5f4bbd(0x211),await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'sticker':fs[_0x5f4bbd(0x1c3)]('st1.webp')}),(0x0,baileys_1[_0x5f4bbd(0x1d1)])(0x320),await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'text':_0x27ea72,'mentions':[_0x5b071a]},{'quoted':_0x56fc44});try{await _0x1b2a02[_0x5f4bbd(0x289)](_0x722079,[_0x5b071a],_0x5f4bbd(0x1b6));}catch(_0x4c83f1){console[_0x5f4bbd(0x221)](_0x5f4bbd(0x19f))+_0x4c83f1;}await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'delete':_0x2ff1f6}),await fs[_0x5f4bbd(0x253)](_0x5f4bbd(0x275));}else{if(_0x310dd9===_0x5f4bbd(0x1e5))_0x27ea72+=_0x5f4bbd(0x27f)+_0x5b071a[_0x5f4bbd(0x292)]('@')[0x0]+'\x20Avoid\x20sending\x20link.',await _0x1b2a02['sendMessage'](_0x722079,{'text':_0x27ea72,'mentions':[_0x5b071a]},{'quoted':_0x56fc44}),await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'delete':_0x2ff1f6}),await fs[_0x5f4bbd(0x253)](_0x5f4bbd(0x275));else{if(_0x310dd9===_0x5f4bbd(0x1aa)){const {getWarnCountByJID:_0x1eabf0,ajouterUtilisateurAvecWarnCount:_0x226721}=require(_0x5f4bbd(0x1d4));let _0xc0d8b2=await _0x1eabf0(_0x5b071a),_0xeb7a1a=conf[_0x5f4bbd(0x1b3)];if(_0xc0d8b2>=_0xeb7a1a){var _0x541d93=_0x5f4bbd(0x1cb);await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'text':_0x541d93,'mentions':[_0x5b071a]},{'quoted':_0x56fc44}),await _0x1b2a02['groupParticipantsUpdate'](_0x722079,[_0x5b071a],'remove'),await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'delete':_0x2ff1f6});}else{var _0x57d632=_0xeb7a1a-_0xc0d8b2,_0x8704a8=_0x5f4bbd(0x268)+_0x57d632+'\x20';await _0x226721(_0x5b071a),await _0x1b2a02['sendMessage'](_0x722079,{'text':_0x8704a8,'mentions':[_0x5b071a]},{'quoted':_0x56fc44}),await _0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'delete':_0x2ff1f6});}}}}}}catch(_0x2e57f5){console[_0x5f4bbd(0x221)](_0x5f4bbd(0x29f)+_0x2e57f5);}if(_0x380aaf){const _0x159199=evt['cm'][_0x5f4bbd(0x1b8)](_0x2e64de=>_0x2e64de[_0x5f4bbd(0x2a2)]===_0xda6495);if(_0x159199)try{if(conf['MODE'][_0x5f4bbd(0x196)]()!=_0x5f4bbd(0x1a7)&&!_0x2d979d)return;if(!_0x2d979d&&_0x722079===_0x5b071a&&conf[_0x5f4bbd(0x1d6)]===_0x5f4bbd(0x1a7)){_0x45f347(_0x5f4bbd(0x1e2));return;}if(!_0x2d979d&&_0x162553){let _0x3a5007=await isGroupBanned(_0x722079);if(_0x3a5007)return;}if(!_0x5e3034&&_0x162553){let _0x50fb4b=await isGroupOnlyAdmin(_0x722079);if(_0x50fb4b)return;}if(!_0x2d979d){let _0x34af7f=await isUserBanned(_0x5b071a);if(_0x34af7f){_0x45f347('You\x20are\x20banned\x20from\x20bot\x20commands');return;}}reagir(_0x722079,_0x1b2a02,_0x56fc44,_0x159199[_0x5f4bbd(0x191)]),_0x159199[_0x5f4bbd(0x1ba)](_0x722079,_0x1b2a02,_0x6eb066);}catch(_0x150db4){console[_0x5f4bbd(0x221)](_0x5f4bbd(0x266)+_0x150db4),_0x1b2a02[_0x5f4bbd(0x21a)](_0x722079,{'text':'😡😡\x20'+_0x150db4},{'quoted':_0x56fc44});}}});const {recupevents:_0x5ecd68}=require(_0x3d104b(0x226));_0x1b2a02['ev']['on'](_0x3d104b(0x290),async _0xcd3ddb=>{const _0xa5ea17=_0x3d104b;console[_0xa5ea17(0x221)](_0xcd3ddb);let _0x28d4ad;try{_0x28d4ad=await _0x1b2a02['profilePictureUrl'](_0xcd3ddb['id'],'image');}catch{_0x28d4ad='';}try{const _0x530ed7=await _0x1b2a02[_0xa5ea17(0x284)](_0xcd3ddb['id']);if(_0xcd3ddb['action']==_0xa5ea17(0x1c5)&&await _0x5ecd68(_0xcd3ddb['id'],_0xa5ea17(0x219))=='on'){let _0x30dca1=_0xa5ea17(0x1bb),_0x4f0451=_0xcd3ddb[_0xa5ea17(0x295)];for(let _0x441ff2 of _0x4f0451){_0x30dca1+=_0xa5ea17(0x1b0)+_0x441ff2[_0xa5ea17(0x292)]('@')[0x0]+_0xa5ea17(0x1b7);}_0x30dca1+=_0xa5ea17(0x1a5),_0x1b2a02[_0xa5ea17(0x21a)](_0xcd3ddb['id'],{'image':{'url':_0x28d4ad},'caption':_0x30dca1,'mentions':_0x4f0451});}else{if(_0xcd3ddb[_0xa5ea17(0x243)]==_0xa5ea17(0x1b6)&&await _0x5ecd68(_0xcd3ddb['id'],_0xa5ea17(0x26b))=='on'){let _0x125552=_0xa5ea17(0x22e),_0x25740d=_0xcd3ddb[_0xa5ea17(0x295)];for(let _0x286633 of _0x25740d){_0x125552+='@'+_0x286633[_0xa5ea17(0x292)]('@')[0x0]+'\x0a';}_0x1b2a02['sendMessage'](_0xcd3ddb['id'],{'text':_0x125552,'mentions':_0x25740d});}else{if(_0xcd3ddb[_0xa5ea17(0x243)]=='promote'&&await _0x5ecd68(_0xcd3ddb['id'],_0xa5ea17(0x28c))=='on'){if(_0xcd3ddb[_0xa5ea17(0x1be)]==_0x530ed7[_0xa5ea17(0x2a4)]||_0xcd3ddb[_0xa5ea17(0x1be)]==conf[_0xa5ea17(0x280)]+_0xa5ea17(0x1ff)||_0xcd3ddb[_0xa5ea17(0x1be)]==decodeJid(_0x1b2a02[_0xa5ea17(0x23b)]['id'])||_0xcd3ddb[_0xa5ea17(0x1be)]==_0xcd3ddb[_0xa5ea17(0x295)][0x0]){console[_0xa5ea17(0x221)]('Cas\x20de\x20superUser\x20je\x20fais\x20rien');return;};await _0x1b2a02[_0xa5ea17(0x289)](_0xcd3ddb['id'],[_0xcd3ddb[_0xa5ea17(0x1be)],_0xcd3ddb[_0xa5ea17(0x295)][0x0]],_0xa5ea17(0x199)),_0x1b2a02['sendMessage'](_0xcd3ddb['id'],{'text':'@'+_0xcd3ddb['author'][_0xa5ea17(0x292)]('@')[0x0]+_0xa5ea17(0x1c7)+_0xcd3ddb['author'][_0xa5ea17(0x292)]('@')[0x0]+_0xa5ea17(0x26a)+_0xcd3ddb[_0xa5ea17(0x295)][0x0][_0xa5ea17(0x292)]('@')[0x0]+_0xa5ea17(0x29d),'mentions':[_0xcd3ddb[_0xa5ea17(0x1be)],_0xcd3ddb[_0xa5ea17(0x295)][0x0]]});}else{if(_0xcd3ddb['action']=='demote'&&await _0x5ecd68(_0xcd3ddb['id'],_0xa5ea17(0x206))=='on'){if(_0xcd3ddb[_0xa5ea17(0x1be)]==_0x530ed7['owner']||_0xcd3ddb[_0xa5ea17(0x1be)]==conf[_0xa5ea17(0x280)]+'@s.whatsapp.net'||_0xcd3ddb['author']==decodeJid(_0x1b2a02['user']['id'])||_0xcd3ddb[_0xa5ea17(0x1be)]==_0xcd3ddb['participants'][0x0]){console['log'](_0xa5ea17(0x1a4));return;};await _0x1b2a02['groupParticipantsUpdate'](_0xcd3ddb['id'],[_0xcd3ddb[_0xa5ea17(0x1be)]],'demote'),await _0x1b2a02[_0xa5ea17(0x289)](_0xcd3ddb['id'],[_0xcd3ddb[_0xa5ea17(0x295)][0x0]],'promote'),_0x1b2a02[_0xa5ea17(0x21a)](_0xcd3ddb['id'],{'text':'@'+_0xcd3ddb[_0xa5ea17(0x1be)]['split']('@')[0x0]+'\x20has\x20violated\x20the\x20anti-demotion\x20rule\x20by\x20removing\x20@'+_0xcd3ddb['participants'][0x0][_0xa5ea17(0x292)]('@')[0x0]+'.\x20Consequently,\x20he\x20has\x20been\x20stripped\x20of\x20administrative\x20rights.','mentions':[_0xcd3ddb['author'],_0xcd3ddb[_0xa5ea17(0x295)][0x0]]});}}}}}catch(_0x5ba876){console[_0xa5ea17(0x20b)](_0x5ba876);}});async function _0xb8aa53(){const _0x36d9cc=_0x3d104b,_0x1594fa=require(_0x36d9cc(0x200)),{getCron:_0x4bb10c}=require(_0x36d9cc(0x1a1));let _0x461d02=await _0x4bb10c();console[_0x36d9cc(0x221)](_0x461d02);if(_0x461d02[_0x36d9cc(0x1fa)]>0x0)for(let _0x20428a=0x0;_0x20428a<_0x461d02[_0x36d9cc(0x1fa)];_0x20428a++){if(_0x461d02[_0x20428a][_0x36d9cc(0x270)]!=null){let _0x1de5b3=_0x461d02[_0x20428a][_0x36d9cc(0x270)][_0x36d9cc(0x292)](':');console[_0x36d9cc(0x221)](_0x36d9cc(0x1f6)+_0x461d02[_0x20428a][_0x36d9cc(0x22b)]+_0x36d9cc(0x25b)+_0x1de5b3[0x0]+_0x36d9cc(0x263)+_0x1de5b3[0x1]),_0x1594fa[_0x36d9cc(0x25c)](_0x1de5b3[0x1]+'\x20'+_0x1de5b3[0x0]+_0x36d9cc(0x1e4),async()=>{const _0xc6f877=_0x36d9cc;await _0x1b2a02[_0xc6f877(0x269)](_0x461d02[_0x20428a][_0xc6f877(0x22b)],_0xc6f877(0x1d9)),_0x1b2a02[_0xc6f877(0x21a)](_0x461d02[_0x20428a][_0xc6f877(0x22b)],{'image':{'url':_0xc6f877(0x23f)},'caption':'Hello,\x20it\x27s\x20time\x20to\x20close\x20the\x20group;\x20sayonara.'});},{'timezone':'Africa/Nairobi'});}if(_0x461d02[_0x20428a][_0x36d9cc(0x1dd)]!=null){let _0xb3d09f=_0x461d02[_0x20428a]['unmute_at'][_0x36d9cc(0x292)](':');console[_0x36d9cc(0x221)](_0x36d9cc(0x250)+_0xb3d09f[0x0]+'\x20H\x20'+_0xb3d09f[0x1]+'\x20'),_0x1594fa['schedule'](_0xb3d09f[0x1]+'\x20'+_0xb3d09f[0x0]+_0x36d9cc(0x1e4),async()=>{const _0x541928=_0x36d9cc;await _0x1b2a02['groupSettingUpdate'](_0x461d02[_0x20428a][_0x541928(0x22b)],_0x541928(0x1a0)),_0x1b2a02[_0x541928(0x21a)](_0x461d02[_0x20428a][_0x541928(0x22b)],{'image':{'url':_0x541928(0x23f)},'caption':_0x541928(0x1b5)});},{'timezone':_0x36d9cc(0x225)});}}else console['log'](_0x36d9cc(0x1c0));return;}return _0x1b2a02['ev']['on'](_0x3d104b(0x1b9),async _0x2443e4=>{const _0x493ea2=_0x36fd98=>{const _0xdd1ed9=_0x4a8a;for(const _0x1ebaa3 of _0x36fd98){store[_0xdd1ed9(0x24f)][_0x1ebaa3['id']]?Object[_0xdd1ed9(0x24e)](store[_0xdd1ed9(0x24f)][_0x1ebaa3['id']],_0x1ebaa3):store[_0xdd1ed9(0x24f)][_0x1ebaa3['id']]=_0x1ebaa3;}return;};_0x493ea2(_0x2443e4);}),_0x1b2a02['ev']['on']('connection.update',async _0x229cb9=>{const _0x43200a=_0x3d104b,{lastDisconnect:_0x1deb74,connection:_0x3147eb}=_0x229cb9;if(_0x3147eb==='connecting')console[_0x43200a(0x221)]('ℹ️Cyberion\x20is\x20connecting...');else{if(_0x3147eb==='open'){console['log'](_0x43200a(0x18f)),console[_0x43200a(0x221)]('--'),await(0x0,baileys_1[_0x43200a(0x1d1)])(0xc8),console[_0x43200a(0x221)](_0x43200a(0x1fc)),await(0x0,baileys_1[_0x43200a(0x1d1)])(0x12c),console[_0x43200a(0x221)]('------------------/-----'),console['log'](_0x43200a(0x201)),console[_0x43200a(0x221)](_0x43200a(0x29b)),fs[_0x43200a(0x1f0)](__dirname+_0x43200a(0x24a))[_0x43200a(0x222)](_0x61aa6e=>{const _0x9c6d70=_0x43200a;if(path[_0x9c6d70(0x230)](_0x61aa6e)['toLowerCase']()=='.js'){try{require(__dirname+'/scs/'+_0x61aa6e),console[_0x9c6d70(0x221)](_0x61aa6e+_0x9c6d70(0x281));}catch(_0x4a8c3f){console['log'](_0x61aa6e+_0x9c6d70(0x23c)+_0x4a8c3f);}(0x0,baileys_1[_0x9c6d70(0x1d1)])(0x12c);}}),(0x0,baileys_1[_0x43200a(0x1d1)])(0x2bc);var _0x25cd31;if(conf[_0x43200a(0x1f8)][_0x43200a(0x196)]()===_0x43200a(0x1a7))_0x25cd31='public';else conf['MODE'][_0x43200a(0x196)]()==='no'?_0x25cd31='private':_0x25cd31=_0x43200a(0x2a3);console[_0x43200a(0x221)](_0x43200a(0x1bf)),await _0xb8aa53();if(conf['DP'][_0x43200a(0x19b)]()==='yes'){let _0x364505='\x20⁠⁠⁠⁠\x0a\x20┌─────═━┈┈━\x20\x20\x20\x20═─═━┈┈━═────┐\x0a\x20\x20\x20*☢️𝗖𝗬𝗕𝗘𝗥𝗜𝗢𝗡-𝗦𝗣𝗔𝗥𝗞-𝗫\x20𝗔𝗖𝗧𝗜𝗩𝗘🌐*\x0a\x20└─────═━┈┈━\x20\x20\x20\x20═───────═───┘\x0a\x20\x20\x20\x20☆▰▱▰▱▰▱▰▱▱▰▱▰▱▰▱☆\x0a\x20\x20\x20\x20┃\x20\x20🕵Creator:\x20*CARLTECH*\x0a\x20\x20\x20\x20┃\x20\x20❂──────────────────❂\x0a\x20\x20\x20\x20┃\x20\x20💫Prefix\x20:\x20〔'+prefixe+_0x43200a(0x229)+_0x25cd31+_0x43200a(0x2a1)+evt['cm'][_0x43200a(0x1fa)]+_0x43200a(0x19c)+herokuAppName+_0x43200a(0x1a9)+herokuAppLink+_0x43200a(0x214)+botOwner+_0x43200a(0x2a0);await _0x1b2a02['sendMessage'](_0x1b2a02[_0x43200a(0x23b)]['id'],{'text':_0x364505});}}else{if(_0x3147eb==_0x43200a(0x22c)){let _0x2d2c7a=new boom_1[(_0x43200a(0x1d3))](_0x1deb74?.[_0x43200a(0x20b)])?.[_0x43200a(0x193)][_0x43200a(0x1c8)];if(_0x2d2c7a===baileys_1['DisconnectReason'][_0x43200a(0x244)])console[_0x43200a(0x221)]('Session\x20id\x20error,\x20rescan\x20again...');else{if(_0x2d2c7a===baileys_1[_0x43200a(0x1ce)][_0x43200a(0x1c2)])console['log'](_0x43200a(0x257)),_0x4ae4df();else{if(_0x2d2c7a===baileys_1[_0x43200a(0x1ce)]['connectionLost'])console[_0x43200a(0x221)](_0x43200a(0x22d)),_0x4ae4df();else{if(_0x2d2c7a===baileys_1[_0x43200a(0x1ce)]?.[_0x43200a(0x264)])console['log'](_0x43200a(0x223));else{if(_0x2d2c7a===baileys_1[_0x43200a(0x1ce)][_0x43200a(0x212)])console[_0x43200a(0x221)](_0x43200a(0x271));else{if(_0x2d2c7a===baileys_1[_0x43200a(0x1ce)][_0x43200a(0x1ea)])console[_0x43200a(0x221)]('redémarrage\x20en\x20cours\x20▶️'),_0x4ae4df();else{console[_0x43200a(0x221)](_0x43200a(0x1ca),_0x2d2c7a);const {exec:_0x2b8385}=require(_0x43200a(0x21f));_0x2b8385(_0x43200a(0x256));}}}}}}console[_0x43200a(0x221)]('hum\x20'+_0x3147eb),_0x4ae4df();}}}}),_0x1b2a02['ev']['on']('creds.update',_0x2c98d9),_0x1b2a02['downloadAndSaveMediaMessage']=async(_0x41b039,_0x2c8849='',_0x3ad367=!![])=>{const _0x374660=_0x3d104b;let _0x4169b1=_0x41b039['msg']?_0x41b039[_0x374660(0x259)]:_0x41b039,_0x6b033f=(_0x41b039[_0x374660(0x259)]||_0x41b039)[_0x374660(0x217)]||'',_0x3d2bd6=_0x41b039[_0x374660(0x1d2)]?_0x41b039[_0x374660(0x1d2)][_0x374660(0x231)](/Message/gi,''):_0x6b033f['split']('/')[0x0];const _0x2d6259=await(0x0,baileys_1['downloadContentFromMessage'])(_0x4169b1,_0x3d2bd6);let _0x26a55a=Buffer['from']([]);for await(const _0x45b67a of _0x2d6259){_0x26a55a=Buffer['concat']([_0x26a55a,_0x45b67a]);}let _0x34e2b7=await FileType['fromBuffer'](_0x26a55a),_0x55dbb6='./'+_0x2c8849+'.'+_0x34e2b7[_0x374660(0x1c4)];return await fs['writeFileSync'](_0x55dbb6,_0x26a55a),_0x55dbb6;},_0x1b2a02[_0x3d104b(0x252)]=async(_0x248c0f={})=>{return new Promise((_0x28e95c,_0x58706e)=>{const _0x5c3fa2=_0x4a8a;if(typeof _0x248c0f!==_0x5c3fa2(0x1f7))_0x58706e(new Error('Options\x20must\x20be\x20an\x20object'));if(typeof _0x248c0f[_0x5c3fa2(0x297)]!==_0x5c3fa2(0x207))_0x58706e(new Error(_0x5c3fa2(0x294)));if(typeof _0x248c0f[_0x5c3fa2(0x1f3)]!==_0x5c3fa2(0x207))_0x58706e(new Error(_0x5c3fa2(0x27b)));if(_0x248c0f[_0x5c3fa2(0x240)]&&typeof _0x248c0f[_0x5c3fa2(0x240)]!==_0x5c3fa2(0x19e))_0x58706e(new Error(_0x5c3fa2(0x247)));if(_0x248c0f[_0x5c3fa2(0x26d)]&&typeof _0x248c0f[_0x5c3fa2(0x26d)]!==_0x5c3fa2(0x21d))_0x58706e(new Error(_0x5c3fa2(0x258)));const _0xda3a1c=_0x248c0f?.[_0x5c3fa2(0x240)]||undefined,_0x3fd61e=_0x248c0f?.[_0x5c3fa2(0x26d)]||(()=>!![]);let _0x162b0b=undefined,_0x4f37ea=_0x32981b=>{const _0x466ae8=_0x5c3fa2;let {type:_0x1dc6df,messages:_0x24d7f6}=_0x32981b;if(_0x1dc6df==_0x466ae8(0x237))for(let _0x39c001 of _0x24d7f6){const _0x4dcf1d=_0x39c001[_0x466ae8(0x28f)][_0x466ae8(0x248)],_0x3beec7=_0x39c001[_0x466ae8(0x28f)][_0x466ae8(0x239)],_0x18604b=_0x3beec7[_0x466ae8(0x241)](_0x466ae8(0x192)),_0x604a17=_0x3beec7==_0x466ae8(0x1ad),_0x2188ff=_0x4dcf1d?_0x1b2a02[_0x466ae8(0x23b)]['id'][_0x466ae8(0x231)](/:.*@/g,'@'):_0x18604b||_0x604a17?_0x39c001[_0x466ae8(0x28f)][_0x466ae8(0x25e)]['replace'](/:.*@/g,'@'):_0x3beec7;_0x2188ff==_0x248c0f[_0x466ae8(0x297)]&&_0x3beec7==_0x248c0f[_0x466ae8(0x1f3)]&&_0x3fd61e(_0x39c001)&&(_0x1b2a02['ev'][_0x466ae8(0x29a)]('messages.upsert',_0x4f37ea),clearTimeout(_0x162b0b),_0x28e95c(_0x39c001));}};_0x1b2a02['ev']['on'](_0x5c3fa2(0x1d7),_0x4f37ea),_0xda3a1c&&(_0x162b0b=setTimeout(()=>{const _0x1f4d85=_0x5c3fa2;_0x1b2a02['ev'][_0x1f4d85(0x29a)](_0x1f4d85(0x1d7),_0x4f37ea),_0x58706e(new Error(_0x1f4d85(0x276)));},_0xda3a1c));});},_0x1b2a02;}let _0x1df5f4=require[_0x26d5d7(0x1d0)](__filename);fs[_0x26d5d7(0x255)](_0x1df5f4,()=>{const _0x5a5aed=_0x26d5d7;fs[_0x5a5aed(0x1fd)](_0x1df5f4),console['log']('mise\x20à\x20jour\x20'+__filename),delete require[_0x5a5aed(0x278)][_0x1df5f4],require(_0x1df5f4);}),_0x4ae4df();},0x1388);
