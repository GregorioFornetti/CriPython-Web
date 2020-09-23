
let JSON_unicode_limitado;
const COMECO_UNICODE_MAIUSC = 65;
const FIM_UNICODE_MAIUSC = 90;
const COMECO_UNICODE_MINUSC = 97;
const FIM_UNICODE_MINUSC = 122;
const LIMITE_UNICODE = 734;
const TAMANHO_ALFABETO = 26;
const ERRO_MENSAGEM = "Mensagem inválida !"
const ERRO_CHAVE = "Chave inválida !"

/*
function collect_unicode_json(limite) {
    return fetch(`/unicode/${limite}`)
    .then(response => response.json())
    .then((JSON_unicode_recebido) => {
        return JSON_unicode_recebido;
    })
}


collect_unicode_json(LIMITE_UNICODE).then((JSON_unicode) => {
    JSON_unicode_limitado = JSON_unicode;
    console.log(JSON_unicode_limitado)
    tamanho_unicode_limitado = Object.keys(JSON_unicode_limitado).length / 2;
});
*/
JSON_unicode_limitado = {0: " ", " ": 0, "0str": 16, 1: "!", "1str": 17, 2: '"', "2str": 18, 3: "#", "3str": 19, 4: "$", "4str": 20, 5: "%",
"5str": 21, 6: "&", "6str": 22, 7: "'", "7str": 23, 8: "(", "8str": 24, 9: ")", "9str": 25, 10: "*", 11: "+", 12: ",", 13: "-", 14: ".",15: "/",16: "0",
17: "1",18: "2",19: "3",20: "4",21: "5",22: "6",23: "7",24: "8",25: "9",26: ":",27: ";",28: "<",29: "=",30: ">",31: "?",32: "@",33: "A",34: "B",35: "C",
36: "D",37: "E",38: "F",39: "G",40: "H",41: "I",42: "J",43: "K",44: "L",45: "M",46: "N",47: "O",48: "P",49: "Q",50: "R",51: "S",52: "T",53: "U",54: "V",
55: "W",56: "X",57: "Y",58: "Z",59: "[",60: "\\",61: "]",62: "^",63: "_",64: "`",65: "a",66: "b",67: "c",68: "d",69: "e",70: "f",71: "g",72: "h",73: "i",
74: "j",75: "k",76: "l",77: "m",78: "n",79: "o",80: "p",81: "q",82: "r",83: "s",84: "t",85: "u",86: "v",87: "w",88: "x",89: "y",90: "z",91: "{",92: "|",
93: "}",94: "~",95: "¡",96: "¢",97: "£",98: "¤",99: "¥",100: "¦",101: "§",102: "¨",103: "©",104: "ª",105: "«",106: "¬",107: "®",108: "¯",109: "°",110: "±",
111: "²",112: "³",113: "´",114: "µ",115: "¶",116: "·",117: "¸",118: "¹",119: "º",120: "»",121: "¼",122: "½",123: "¾",124: "¿",125: "À",126: "Á",127: "Â",
128: "Ã",129: "Ä",130: "Å",131: "Æ",132: "Ç",133: "È",134: "É",135: "Ê",136: "Ë",137: "Ì",138: "Í",139: "Î",140: "Ï",141: "Ð",142: "Ñ",143: "Ò",144: "Ó",
145: "Ô",146: "Õ",147: "Ö",148: "×",149: "Ø",150: "Ù",151: "Ú",152: "Û",153: "Ü",154: "Ý",155: "Þ",156: "ß",157: "à",158: "á",159: "â",160: "ã",161: "ä",
162: "å",163: "æ",164: "ç",165: "è",166: "é",167: "ê",168: "ë",169: "ì",170: "í",171: "î",172: "ï",173: "ð",174: "ñ",175: "ò",176: "ó",177: "ô",178: "õ",
179: "ö",180: "÷",181: "ø",182: "ù",183: "ú",184: "û",185: "ü",186: "ý",187: "þ",188: "ÿ",189: "Ā",190: "ā",191: "Ă",192: "ă",193: "Ą",194: "ą",195: "Ć",
196: "ć",197: "Ĉ",198: "ĉ",199: "Ċ",200: "ċ",201: "Č",202: "č",203: "Ď",204: "ď",205: "Đ",206: "đ",207: "Ē",208: "ē",209: "Ĕ",210: "ĕ",211: "Ė",212: "ė",
213: "Ę",214: "ę",215: "Ě",216: "ě",217: "Ĝ",218: "ĝ",219: "Ğ",220: "ğ",221: "Ġ",222: "ġ",223: "Ģ",224: "ģ",225: "Ĥ",226: "ĥ",227: "Ħ",228: "ħ",229: "Ĩ",
230: "ĩ",231: "Ī",232: "ī",233: "Ĭ",234: "ĭ",235: "Į",236: "į",237: "İ",238: "ı",239: "Ĳ",240: "ĳ",241: "Ĵ",242: "ĵ",243: "Ķ",244: "ķ",245: "ĸ",246: "Ĺ",
247: "ĺ",248: "Ļ",249: "ļ",250: "Ľ",251: "ľ",252: "Ŀ",253: "ŀ",254: "Ł",255: "ł",256: "Ń",257: "ń",258: "Ņ",259: "ņ",260: "Ň",261: "ň",262: "ŉ",263: "Ŋ",
264: "ŋ",265: "Ō",266: "ō",267: "Ŏ",268: "ŏ",269: "Ő",270: "ő",271: "Œ",272: "œ",273: "Ŕ",274: "ŕ",275: "Ŗ",276: "ŗ",277: "Ř",278: "ř",279: "Ś",280: "ś",
281: "Ŝ",282: "ŝ",283: "Ş",284: "ş",285: "Š",286: "š",287: "Ţ",288: "ţ",289: "Ť",290: "ť",291: "Ŧ",292: "ŧ",293: "Ũ",294: "ũ",295: "Ū",296: "ū",297: "Ŭ",
298: "ŭ",299: "Ů",300: "ů",301: "Ű",302: "ű",303: "Ų",304: "ų",305: "Ŵ",306: "ŵ",307: "Ŷ",308: "ŷ",309: "Ÿ",310: "Ź",311: "ź",312: "Ż",313: "ż",314: "Ž",
315: "ž",316: "ſ",317: "ƀ",318: "Ɓ",319: "Ƃ",320: "ƃ",321: "Ƅ",322: "ƅ",323: "Ɔ",324: "Ƈ",325: "ƈ",326: "Ɖ",327: "Ɗ",328: "Ƌ",329: "ƌ",330: "ƍ",331: "Ǝ",
332: "Ə",333: "Ɛ",334: "Ƒ",335: "ƒ",336: "Ɠ",337: "Ɣ",338: "ƕ",339: "Ɩ",340: "Ɨ",341: "Ƙ",342: "ƙ",343: "ƚ",344: "ƛ",345: "Ɯ",346: "Ɲ",347: "ƞ",348: "Ɵ",
349: "Ơ",350: "ơ",351: "Ƣ",352: "ƣ",353: "Ƥ",354: "ƥ",355: "Ʀ",356: "Ƨ",357: "ƨ",358: "Ʃ",359: "ƪ",360: "ƫ",361: "Ƭ",362: "ƭ",363: "Ʈ",364: "Ư",365: "ư",
366: "Ʊ",367: "Ʋ",368: "Ƴ",369: "ƴ",370: "Ƶ",371: "ƶ",372: "Ʒ",373: "Ƹ",374: "ƹ",375: "ƺ",376: "ƻ",377: "Ƽ",378: "ƽ",379: "ƾ",380: "ƿ",381: "ǀ",382: "ǁ",
383: "ǂ",384: "ǃ",385: "Ǆ",386: "ǅ",387: "ǆ",388: "Ǉ",389: "ǈ",390: "ǉ",391: "Ǌ",392: "ǋ",393: "ǌ",394: "Ǎ",395: "ǎ",396: "Ǐ",397: "ǐ",398: "Ǒ",399: "ǒ",
400: "Ǔ",401: "ǔ",402: "Ǖ",403: "ǖ",404: "Ǘ",405: "ǘ",406: "Ǚ",407: "ǚ",408: "Ǜ",409: "ǜ",410: "ǝ",411: "Ǟ",412: "ǟ",413: "Ǡ",414: "ǡ",415: "Ǣ",416: "ǣ",
417: "Ǥ",418: "ǥ",419: "Ǧ",420: "ǧ",421: "Ǩ",422: "ǩ",423: "Ǫ",424: "ǫ",425: "Ǭ",426: "ǭ",427: "Ǯ",428: "ǯ",429: "ǰ",430: "Ǳ",431: "ǲ",432: "ǳ",433: "Ǵ",
434: "ǵ",435: "Ƕ",436: "Ƿ",437: "Ǹ",438: "ǹ",439: "Ǻ",440: "ǻ",441: "Ǽ",442: "ǽ",443: "Ǿ",444: "ǿ",445: "Ȁ",446: "ȁ",447: "Ȃ",448: "ȃ",449: "Ȅ",450: "ȅ",
451: "Ȇ",452: "ȇ",453: "Ȉ",454: "ȉ",455: "Ȋ",456: "ȋ",457: "Ȍ",458: "ȍ",459: "Ȏ",460: "ȏ",461: "Ȑ",462: "ȑ",463: "Ȓ",464: "ȓ",465: "Ȕ",466: "ȕ",467: "Ȗ",
468: "ȗ",469: "Ș",470: "ș",471: "Ț",472: "ț",473: "Ȝ",474: "ȝ",475: "Ȟ",476: "ȟ",477: "Ƞ",478: "ȡ",479: "Ȣ",480: "ȣ",481: "Ȥ",482: "ȥ",483: "Ȧ",484: "ȧ",
485: "Ȩ",486: "ȩ",487: "Ȫ",488: "ȫ",489: "Ȭ",490: "ȭ",491: "Ȯ",492: "ȯ",493: "Ȱ",494: "ȱ",495: "Ȳ",496: "ȳ",497: "ȴ",498: "ȵ",499: "ȶ",500: "ȷ",501: "ȸ",
502: "ȹ",503: "Ⱥ",504: "Ȼ",505: "ȼ",506: "Ƚ",507: "Ⱦ",508: "ȿ",509: "ɀ",510: "Ɂ",511: "ɂ",512: "Ƀ",513: "Ʉ",514: "Ʌ",515: "Ɇ",516: "ɇ",517: "Ɉ",518: "ɉ",
519: "Ɋ",520: "ɋ",521: "Ɍ",522: "ɍ",523: "Ɏ",524: "ɏ",525: "ɐ",526: "ɑ",527: "ɒ",528: "ɓ",529: "ɔ",530: "ɕ",531: "ɖ",532: "ɗ",533: "ɘ",534: "ə",535: "ɚ",
536: "ɛ",537: "ɜ",538: "ɝ",539: "ɞ",540: "ɟ",541: "ɠ",542: "ɡ",543: "ɢ",544: "ɣ",545: "ɤ",546: "ɥ",547: "ɦ",548: "ɧ",549: "ɨ",550: "ɩ",551: "ɪ",552: "ɫ",
553: "ɬ",554: "ɭ",555: "ɮ",556: "ɯ",557: "ɰ",558: "ɱ",559: "ɲ",560: "ɳ",561: "ɴ",562: "ɵ",563: "ɶ",564: "ɷ",565: "ɸ",566: "ɹ",567: "ɺ",568: "ɻ",569: "ɼ",
570: "ɽ",571: "ɾ",572: "ɿ",573: "ʀ",574: "ʁ",575: "ʂ",576: "ʃ",577: "ʄ",578: "ʅ",579: "ʆ",580: "ʇ",581: "ʈ",582: "ʉ",583: "ʊ",584: "ʋ",585: "ʌ",586: "ʍ",
587: "ʎ",588: "ʏ",589: "ʐ",590: "ʑ",591: "ʒ",592: "ʓ",593: "ʔ",594: "ʕ",595: "ʖ",596: "ʗ",597: "ʘ",598: "ʙ",599: "ʚ",600: "ʛ",601: "ʜ",602: "ʝ",603: "ʞ",
604: "ʟ",605: "ʠ",606: "ʡ",607: "ʢ",608: "ʣ",609: "ʤ",610: "ʥ",611: "ʦ",612: "ʧ",613: "ʨ",614: "ʩ",615: "ʪ",616: "ʫ",617: "ʬ",618: "ʭ",619: "ʮ",620: "ʯ",
621: "ʰ",622: "ʱ",623: "ʲ",624: "ʳ",625: "ʴ",626: "ʵ",627: "ʶ",628: "ʷ",629: "ʸ",630: "ʹ",631: "ʺ",632: "ʻ",633: "ʼ",634: "ʽ",635: "ʾ",636: "ʿ",637: "ˀ",
638: "ˁ",639: "˂",640: "˃",641: "˄",642: "˅",643: "ˆ",644: "ˇ",645: "ˈ",646: "ˉ",647: "ˊ",648: "ˋ",649: "ˌ",650: "ˍ",651: "ˎ",652: "ˏ",653: "ː",654: "ˑ",
655: "˒",656: "˓",657: "˔",658: "˕",659: "˖",660: "˗",661: "˘",662: "˙",663: "˚",664: "˛",665: "˜",666: "˝",667: "˞","!": 1,":": 2,"#": 3,"$": 4,"%": 5,
"&": 6,"'": 7,"(": 8,")": 9,"*": 10,"+": 11,",": 12,"-": 13,".": 14,'/': 15,':': 26,";": 27,"<": 28,"=": 29,">": 30,"?": 31,"@": 32,A: 33,B: 34,C: 35,
D: 36,E: 37,F: 38,G: 39,H: 40,I: 41,J: 42,K: 43,L: 44,M: 45,N: 46,O: 47,P: 48,Q: 49,R: 50,S: 51,T: 52,U: 53,V: 54,W: 55,X: 56,Y: 57,Z: 58,"[": 59,"\\": 60,
"]": 61,"^": 62,"`": 64,a: 65,b: 66,c: 67,d: 68,e: 69,f: 70,g: 71,h: 72,i: 73,j: 74,k: 75,l: 76,m: 77,n: 78,o: 79,p: 80,q: 81,r: 82,s: 83,t: 84,u: 85,v: 86,
w: 87,x: 88,y: 89,z: 90,'{': 91,'|': 92,'}': 93,'~': 94,'¡': 95,'¢': 96,'£': 97,'¤': 98,'¥': 99,'¦': 100,'§': 101,'¨': 102,'©': 103,'ª': 104,'«': 105,'¬': 106,
'®': 107,'¯': 108,'°': 109,'±': 110,'²': 111,'³': 112,'´': 113,'µ': 114,'¶': 115,'·': 116,'¸': 117,'¹': 118,'º': 119,'»': 120,'¼': 121,'½': 122,'¾': 123,
'¿': 124,'À': 125,'Á': 126,'Â': 127,'Ã': 128,'Ä': 129,'Å': 130,'Æ': 131,'Ç': 132,'È': 133,'É': 134,'Ê': 135,'Ë': 136,'Ì': 137,'Í': 138,'Î': 139,'Ï': 140,
'Ð': 141,'Ñ': 142,'Ò': 143,'Ó': 144,'Ô': 145,'Õ': 146,'Ö': 147,'×': 148,'Ø': 149,'Ù': 150,'Ú': 151,'Û': 152,'Ü': 153,'Ý': 154,'Þ': 155,'ß': 156,'à': 157,
'á': 158,'â': 159,'ã': 160,'ä': 161,'å': 162,'æ': 163,'ç': 164,'è': 165,'é': 166,'ê': 167,'ë': 168,'ì': 169,'í': 170,'î': 171,'ï': 172,'ð': 173,'ñ': 174,
'ò': 175,'ó': 176,'ô': 177,'õ': 178,'ö': 179,'÷': 180,'ø': 181,'ù': 182,'ú': 183,'û': 184,'ü': 185,'ý': 186,'þ': 187,'ÿ': 188,'Ā': 189,'ā': 190,'Ă': 191,
'ă': 192,'Ą': 193,'ą': 194,'Ć': 195,'ć': 196,'Ĉ': 197,'ĉ': 198,'Ċ': 199,'ċ': 200,'Č': 201,'č': 202,'Ď': 203,'ď': 204,'Đ': 205,'đ': 206,'Ē': 207,'ē': 208,
'Ĕ': 209,'ĕ': 210,'Ė': 211,'ė': 212,'Ę': 213,'ę': 214,'Ě': 215,'ě': 216,'Ĝ': 217,'ĝ': 218,'Ğ': 219,'ğ': 220,'Ġ': 221,'ġ': 222,'Ģ': 223,'ģ': 224,'Ĥ': 225,
'ĥ': 226,'Ħ': 227,'ħ': 228,'Ĩ': 229,'ĩ': 230,'Ī': 231,'ī': 232,'Ĭ': 233,'ĭ': 234,'Į': 235,'į': 236,'İ': 237,'ı': 238,'Ĳ': 239,'ĳ': 240,'Ĵ': 241,'ĵ': 242,
'Ķ': 243,'ķ': 244,'ĸ': 245,'Ĺ': 246,'ĺ': 247,'Ļ': 248,'ļ': 249,'Ľ': 250,'ľ': 251,'Ŀ': 252,'ŀ': 253,'Ł': 254,'ł': 255,'Ń': 256,'ń': 257,'Ņ': 258,'ņ': 259,
'Ň': 260,'ň': 261,'ŉ': 262,'Ŋ': 263,'ŋ': 264,'Ō': 265,'ō': 266,'Ŏ': 267,'ŏ': 268,'Ő': 269,'ő': 270,'Œ': 271,'œ': 272,'Ŕ': 273,'ŕ': 274,'Ŗ': 275,'ŗ': 276,
'Ř': 277,'ř': 278,'Ś': 279,'ś': 280,'Ŝ': 281,'ŝ': 282,'Ş': 283,'ş': 284,'Š': 285,'š': 286,'Ţ': 287,'ţ': 288,'Ť': 289,'ť': 290,'Ŧ': 291,'ŧ': 292,'Ũ': 293,
'ũ': 294,'Ū': 295,'ū': 296,'Ŭ': 297,'ŭ': 298,'Ů': 299,'ů': 300,'Ű': 301,'ű': 302,'Ų': 303,'ų': 304,'Ŵ': 305,'ŵ': 306,'Ŷ': 307,'ŷ': 308,'Ÿ': 309,'Ź': 310,
'ź': 311,'Ż': 312,'ż': 313,'Ž': 314,'ž': 315,'ſ': 316,'ƀ': 317,'Ɓ': 318,'Ƃ': 319,'ƃ': 320,'Ƅ': 321,'ƅ': 322,'Ɔ': 323,'Ƈ': 324,'ƈ': 325,'Ɖ': 326,'Ɗ': 327,
'Ƌ': 328,'ƌ': 329,'ƍ': 330,'Ǝ': 331,'Ə': 332,'Ɛ': 333,'Ƒ': 334,'ƒ': 335,'Ɠ': 336,'Ɣ': 337,'ƕ': 338,'Ɩ': 339,'Ɨ': 340,'Ƙ': 341,'ƙ': 342,'ƚ': 343,'ƛ': 344,
'Ɯ': 345,'Ɲ': 346,'ƞ': 347,'Ɵ': 348,'Ơ': 349,'ơ': 350,'Ƣ': 351,'ƣ': 352,'Ƥ': 353,'ƥ': 354,'Ʀ': 355,'Ƨ': 356,'ƨ': 357,'Ʃ': 358,'ƪ': 359,'ƫ': 360,'Ƭ': 361,
'ƭ': 362,'Ʈ': 363,'Ư': 364,'ư': 365,'Ʊ': 366,'Ʋ': 367,'Ƴ': 368,'ƴ': 369,'Ƶ': 370,'ƶ': 371,'Ʒ': 372,'Ƹ': 373,'ƹ': 374,'ƺ': 375,'ƻ': 376,'Ƽ': 377,'ƽ': 378,
'ƾ': 379,'ƿ': 380,'ǀ': 381,'ǁ': 382,'ǂ': 383,'ǃ': 384,'Ǆ': 385,'ǅ': 386,'ǆ': 387,'Ǉ': 388,'ǈ': 389,'ǉ': 390,'Ǌ': 391,'ǋ': 392,'ǌ': 393,'Ǎ': 394,'ǎ': 395,
'Ǐ': 396,'ǐ': 397,'Ǒ': 398,'ǒ': 399,'Ǔ': 400,'ǔ': 401,'Ǖ': 402,'ǖ': 403,'Ǘ': 404,'ǘ': 405,'Ǚ': 406,'ǚ': 407,'Ǜ': 408,'ǜ': 409,'ǝ': 410,'Ǟ': 411,'ǟ': 412,
'Ǡ': 413,'ǡ': 414,'Ǣ': 415,'ǣ': 416,'Ǥ': 417,'ǥ': 418,'Ǧ': 419,'ǧ': 420,'Ǩ': 421,'ǩ': 422,'Ǫ': 423,'ǫ': 424,'Ǭ': 425,'ǭ': 426,'Ǯ': 427,'ǯ': 428,'ǰ': 429,
'Ǳ': 430,'ǲ': 431,'ǳ': 432,'Ǵ': 433,'ǵ': 434,'Ƕ': 435,'Ƿ': 436,'Ǹ': 437,'ǹ': 438,'Ǻ': 439,'ǻ': 440,'Ǽ': 441,'ǽ': 442,'Ǿ': 443,'ǿ': 444,'Ȁ': 445,'ȁ': 446,
'Ȃ': 447,'ȃ': 448,'Ȅ': 449,'ȅ': 450,'Ȇ': 451,'ȇ': 452,'Ȉ': 453,'ȉ': 454,'Ȋ': 455,'ȋ': 456,'Ȍ': 457,'ȍ': 458,'Ȏ': 459,'ȏ': 460,'Ȑ': 461,'ȑ': 462,'Ȓ': 463,
'ȓ': 464,'Ȕ': 465,'ȕ': 466,'Ȗ': 467,'ȗ': 468,'Ș': 469,'ș': 470,'Ț': 471,'ț': 472,'Ȝ': 473,'ȝ': 474,'Ȟ': 475,'ȟ': 476,'Ƞ': 477,'ȡ': 478,'Ȣ': 479,'ȣ': 480,
'Ȥ': 481,'ȥ': 482,'Ȧ': 483,'ȧ': 484,'Ȩ': 485,'ȩ': 486,'Ȫ': 487,'ȫ': 488,'Ȭ': 489,'ȭ': 490,'Ȯ': 491,'ȯ': 492,'Ȱ': 493,'ȱ': 494,'Ȳ': 495,'ȳ': 496,'ȴ': 497,
'ȵ': 498,'ȶ': 499,'ȷ': 500,'ȸ': 501,'ȹ': 502,'Ⱥ': 503,'Ȼ': 504,'ȼ': 505,'Ƚ': 506,'Ⱦ': 507,'ȿ': 508,'ɀ': 509,'Ɂ': 510,'ɂ': 511,'Ƀ': 512,'Ʉ': 513,'Ʌ': 514,
'Ɇ': 515,'ɇ': 516,'Ɉ': 517,'ɉ': 518,'Ɋ': 519,'ɋ': 520,'Ɍ': 521,'ɍ': 522,'Ɏ': 523,'ɏ': 524,'ɐ': 525,'ɑ': 526,'ɒ': 527,'ɓ': 528,'ɔ': 529,'ɕ': 530,'ɖ': 531,
'ɗ': 532,'ɘ': 533,'ə': 534,'ɚ': 535,'ɛ': 536,'ɜ': 537,'ɝ': 538,'ɞ': 539,'ɟ': 540,'ɠ': 541,'ɡ': 542,'ɢ': 543,'ɣ': 544,'ɤ': 545,'ɥ': 546,'ɦ': 547,'ɧ': 548,
'ɨ': 549,'ɩ': 550,'ɪ': 551,'ɫ': 552,'ɬ': 553,'ɭ': 554,'ɮ': 555,'ɯ': 556,'ɰ': 557,'ɱ': 558,'ɲ': 559,'ɳ': 560,'ɴ': 561,'ɵ': 562,'ɶ': 563,'ɷ': 564,'ɸ': 565,
'ɹ': 566,'ɺ': 567,'ɻ': 568,'ɼ': 569,'ɽ': 570,'ɾ': 571,'ɿ': 572,'ʀ': 573,'ʁ': 574,'ʂ': 575,'ʃ': 576,'ʄ': 577,'ʅ': 578,'ʆ': 579,'ʇ': 580,'ʈ': 581,'ʉ': 582,
'ʊ': 583,'ʋ': 584,'ʌ': 585,'ʍ': 586,'ʎ': 587,'ʏ': 588,'ʐ': 589,'ʑ': 590,'ʒ': 591,'ʓ': 592,'ʔ': 593,'ʕ': 594,'ʖ': 595,'ʗ': 596,'ʘ': 597,'ʙ': 598,'ʚ': 599,
'ʛ': 600,'ʜ': 601,'ʝ': 602,'ʞ': 603,'ʟ': 604,'ʠ': 605,'ʡ': 606,'ʢ': 607,'ʣ': 608,'ʤ': 609,'ʥ': 610,'ʦ': 611,'ʧ': 612,'ʨ': 613,'ʩ': 614,'ʪ': 615,'ʫ': 616,
'ʬ': 617,'ʭ': 618,'ʮ': 619,'ʯ': 620,'ʰ': 621,'ʱ': 622,'ʲ': 623,'ʴ': 625,'ʵ': 626,'ʶ': 627,'ʷ': 628,'ʸ': 629,'ʹ': 630,'ʺ': 631,'ʻ': 632,'ʼ': 633,'ʽ': 634,
'ʾ': 635,'ʿ': 636,'ˀ': 637,'ˁ': 638,'˂': 639,'˃': 640,'˄': 641,'˅': 642,'ˆ': 643,'ˇ': 644,'ˈ': 645,'ˉ': 646,'ˊ': 647,'ˋ': 648,'ˌ': 649,'ˍ': 650,'ˎ': 651,
'ˏ': 652,'ː': 653,'ˑ': 654,'˒': 655,'˓': 656,'˔': 657,'˕': 658,'˖': 659,'˗': 660,'˘': 661,'˙': 662,'˚': 663,'˛': 664,'˜': 665,'˝': 666,'˞': 667,'_': 63}

const tamanho_unicode_limitado = Object.keys(JSON_unicode_limitado).length / 2;