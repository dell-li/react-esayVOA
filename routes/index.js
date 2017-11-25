var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/header.json', function(req, res, next) {
  res.json({
 "ret":true,
 "data":{
 	"EnglishType": [
        {
         "id": 1,
         "title":"长速英语",
         "list":[{
             "title":"音频",
             "id":"1",
             "url":"/list/1"
         },{
            "title":"视频",
             "id":"2",
             "url":"/list/2"
         },{
           "title":"翻译",
            "id":"3",
            "url":"/list/3"
         }]
     },
     {
     	"id": 2,
         "title":"慢速英语",
         "list":[{
             "title":"音频",
             "id":"1",
             "url":"/list/1"
         },{
            "title":"科技报道",
             "id":"2",
             "url":"/list/2"
         },{
            "title":"词汇掌故",
             "id":"3",
             "url":"/list/3"
         },{
           "title":"美国故事",
             "id":"4",
             "url":"/list/4"
         },{
            "title":"时事新闻",
             "id":"5",
             "url":"/list/5"
         },{
            "title":"经济报道",
             "id":"6",
             "url":"/list/6"
         },{
            "title":"建国史话",
             "id":"7",
             "url":"/list/7"
         },{
            "title":"教育报道",
             "id":"8",
             "url":"/list/8"
         },{
            "title":"自然探索",
             "id":"9",
             "url":"/list/9"
         },{
            "title":"健康报道",
             "id":"10",
             "url":"/list/10"
         },{
            "title":"美国万花筒",
             "id":"11",
             "url":"/list/11"
         },{
            "title":"科学动态",
             "id":"12",
             "url":"/list/12"
         },{
            "title":"农业报道",
             "id":"13",
             "url":"/list/13"
         },{
            "title":"美国专栏",
             "id":"14",
             "url":"/list/14"
         },{
            "title":"美国人物",
             "id":"15",
             "url":"/list/15"
         }]
     },{
     	"id": 3,
         "title":"英语教学(初级)",
         "list":[{
             "title":"流行美语",
             "id":"1",
             "url":"/list/1"
         },{
            "title":"美语三级跳",
             "id":"2",
             "url":"/list/2"
         },{
            "title":"美国习惯用语",
             "id":"3",
             "url":"/list/3"
         },{
           "title":"学个词",
             "id":"4",
             "url":"/list/4"
         },{
            "title":"AS IT IS",
             "id":"5",
             "url":"/list/5"
         },{
            "title":"体育美语",
             "id":"6",
             "url":"/list/6"
         },{
            "title":"美语怎么说",
             "id":"7",
             "url":"/list/7"
         },{
            "title":"商务礼节美语",
             "id":"8",
             "url":"/list/8"
         },{
            "title":"双语新闻",
             "id":"9",
             "url":"/list/9"
         },{
            "title":"美语咖啡屋",
             "id":"10",
             "url":"/list/10"
         },{
            "title":"中级美语",
             "id":"11",
             "url":"/list/11"
         },{
            "title":"美语训练班",
             "id":"12",
             "url":"/list/12"
         },{
            "title":"VOA每日一课",
             "id":"13",
             "url":"/list/13"
         },{
            "title":"OMG美语",
             "id":"14",
             "url":"/list/14"
         },{
            "title":"VOA相关资料",
             "id":"15",
             "url":"/list/15"
         }]
     }
     ],
     "list":[{
     "title":"大家说英语",
     "id":"1",
     "url":"/list/1"
   },{
     "title":"空中英语教室",
     "id":"2",
     "url":"/list/2"
   
   },{
     "title":"彭蒙惠英语",
     "id":"3",
     "url":"/list/3"
   
   },{
     "title":"科学美国人",
     "id":"4",
     "url":"/list/4"
   
   },{
     "title":"冬吴相对论",
     "id":"5",
     "url":"/list/5"
   },{
     "title":"走遍美国",
     "id":"6",
     "url":"/list/6"
   },{
     "title":"英文名著",
     "id":"7",
     "url":"/list/7"
   },{
    "title":"托福考试",
     "id":"8",
     "url":"/list/8"
   },{
     "title":"美国脱口秀",
     "id":"9",
     "url":"/list/9"
   },{
     "title":"BBC听力资料",
     "id":"10",
     "url":"/list/10"
   },{
   	 "title":"外教课堂",
     "id":"11",
     "url":"/list/11"
   },{
     "title":"大家说英语",
     "id":"12",
     "url":"/list/12"
   },{
   	"title":"大家说英语",
     "id":"13",
     "url":"/list/13"
   },{
     "title":"大家说英语",
     "id":"14",
     "url":"/list/14"
   },{
     "title":"大家说英语",
     "id":"15",
     "url":"/list/15"
   },{
    "title":"大家说英语",
     "id":"16",
     "url":"/list/16"
   },{
     "title":"大家说英语",
     "id":"17",
     "url":"/list/17"
   },{
     "title":"大家说英语",
     "id":"18",
     "url":"/list/18"
   },{
     "title":"大家说英语",
     "id":"19",
     "url":"/list/19"
   },{
     "title":"大家说英语",
     "id":"20",
     "url":"/list/20"
   },{
     "title":"大家说英语",
     "id":"21",
     "url":"/list/21"
   },{
     "title":"大家说英语",
     "id":"22",
     "url":"/list/22"
   },{
     "title":"大家说英语",
     "id":"23",
     "url":"/list/23"
   },{
     "title":"大家说英语",
     "id":"24",
     "url":"/list/24"
   },{
     "title":"大家说英语",
     "id":"25",
     "url":"/list/25"
   },{
     "title":"大家说英语",
     "id":"26",
     "url":"/list/26"
   },{
     "title":"大家说英语",
     "id":"27",
     "url":"/list/27"
   },{
     "title":"大家说英语",
     "id":"28",
     "url":"/list/28"
   }]
 }
 })

});


router.get('/api/index.json', function(req, res, next) {
  res.json(
    {
  "ret":true,
   "data":{
     "friendLink":[{
          "id":1,
          "link":"/detail/1",
           "title":"小马过河"
     },{
          "id":2,
          "link":"/detail/2",
          "title":"雅思培训"
     
     },{
          "id":3,
          "link":"/detail/3",
          "title":"留学机构"
     
     },{
          "id":4,
          "link":"/detail/4",
          "title":"出国语言培训"
     
     },{
          "id":5,
          "link":"/detail/5",
          "title":"人人听力网"
     
     },{
          "id":6,
          "link":"/detail/6",
          "title":"英语口语"
     
     },{
          "id":7,
          "link":"/detail/7",
          "title":"英文小说网"
     
     },{
          "id":8,
          "link":"/detail/8",
          "title":"口译"
     
     },{
          "id":9,
          "link":"/detail/9",
          "title":"美国之音"
     
     },{
          "id":10,
          "link":"/detail/10",
          "title":"给力英语网"
     
     },{
          "id":11,
          "link":"/detail/11",
          "title":"中小学教育"
     
     },{
          "id":12,
          "link":"/detail/12",
          "title":"翻译资格考试"
     
     },{
          "id":13,
          "link":"/detail/13",
          "title":"GCT"
     
     },{
          "id":14,
          "link":"/detail/14",
          "title":"英语六级"
     
     },{
          "id":15,
          "link":"/detail/15",
          "title":"英语学习网站"
     
     },{
          "id":16,
          "link":"/detail/16",
          "title":"泰语学习网站"
     
     },{
          "id":17,
          "link":"/detail/17",
          "title":"英蕊幼儿英语"
     
     },{
          "id":18,
          "link":"/detail/18",
          "title":"手抄报"
     
     },{
          "id":19,
          "link":"/detail/19",
          "title":"简单学习网"
     
     },{
          "id":20,
          "link":"/detail/20",
          "title":"哈尔滨英语"
     
     },{
          "id":21,
          "link":"/detail/21",
          "title":"英语口语培训"
     
     },{
          "id":22,
          "link":"/detail/22",
          "title":"在线英语培训"
     
     },{
          "id":23,
          "link":"/detail/23",
          "title":"英语培训"
     
     },{
          "id":24,
          "link":"/detail/24",
          "title":"韩语学习网"
     
     },{
          "id":25,
          "link":"/detail/25",
          "title":"家教"
     
     },{
          "id":26,
          "link":"/detail/26",
          "title":"在线英语培训"
     
     },{
          "id":27,
          "link":"/detail/27",
          "title":"大学生"
     
     }],
     "list":[{
         "id":1,
          "link":"/detail/1",
          "category":"暖湾 ",
          "title":"宠物鱼品牌推广～",
          "time":"2017-11-17"
     
     },{
         "id":2,
          "link":"/detail/2",
          "category":"空中英语教室 ",
          "title":"本年度亚洲最佳英文教学奖:《空中英语教室》系列杂志!",
          "time":"2017-11-17"
     
     },{
         "id":3,
          "link":"/detail/3",
          "category":" AS IT IS",
          "title":"Leonardo da Vinci Painting Sells for Record $450 Million",
          "time":"2017-11-17"
     
     },{
         "id":4,
          "link":"/detail/4",
          "category":"AS IT IS ",
          "title":"Small Montana City Elects Former Refugee as Mayor",
          "time":"2017-11-17"
     
     },{
         "id":5,
          "link":"/detail/5",
          "category":"AS IT IS ",
          "title":"Indian Hindus Attacking Muslims, Stealing Their Cows",
          "time":"2017-11-17"
     
     },{
         "id":6,
          "link":"/detail/6",
          "category":" VOA常速英语  ",
          "title":"Clearing Explosive Remnants of War in the West Bank",
          "time":"2017-11-17"
     
     },{
         "id":7,
          "link":"/detail/7",
          "category":"AS IT IS  ",
          "title":"Japan Seeks to Expand Influence in Southeast Asia",
          "time":"2017-11-16"
     
     },{
         "id":8,
          "link":"/detail/8",
          "category":"科技报道  ",
          "title":"Distant Star Refuses to Die",
          "time":"2017-11-16"
     
     },{
         "id":9,
          "link":"/detail/9",
          "category":"科技报道  ",
          "title":"5 Reasons to Try Firefox ‘Quantum’ Browser ",
          "time":"2017-11-16"
     
     },{
         "id":10,
          "link":"/detail/10",
          "category":" VOA常速英语 ",
          "title":"President Trump at ASEAN Summit",
          "time":"2017-11-16"
     
     },{
         "id":11,
          "link":"/detail/11",
          "category":"VOA常速英语 ",
          "title":"U.S. Supports Safe Return of Rohingya to Burma",
          "time":"2017-11-16"
     
     },{
         "id":12,
          "link":"/detail/12",
          "category":"AS IT IS  ",
          "title":"Richard Nixon: Resigned",
          "time":"2017-11-13"
     
     },{
         "id":13,
          "link":"/detail/13",
          "category":"AS IT IS  ",
          "title":"Many North Koreans Depend on Informal Markets",
          "time":"2017-11-13"
     
     },{
         "id":14,
          "link":"/detail/14",
          "category":"AS IT IS ",
          "title":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
          "time":"2017-11-13"
     
     },{
         "id":15,
          "link":"/detail/15",
          "category":" 科技报道 ",
          "title":"New Orangutan Species Discovered in Indonesia",
          "time":"2017-11-13"
     
     },{
         "id":16,
          "link":"/detail/16",
          "category":"AS IT IS ",
          "title":"'Paradise Papers' Show Secret Wealth of Officials, Famous People",
          "time":"2017-11-07"
     
     },{
         "id":17,
          "link":"/detail/17",
          "category":" AS IT IS ",
          "title":"Saudi Crown Prince Detains Opponents, Expands Power",
          "time":"2017-11-07"
     
     },{
         "id":18,
          "link":"/detail/18",
          "category":"健康报道 ",
          "title":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
          "time":"2017-11-07"
     
     },{
         "id":19,
          "link":"/detail/19",
          "category":" AS IT IS ",
          "title":"Vietnam Tech Startups Seek Next Step Forward",
          "time":"2017-11-06"
     
     },{
         "id":20,
          "link":"/detail/20",
          "category":"AS IT IS  ",
          "title":"Lyndon Johnson: Complicated",
          "time":"2017-11-06"
     
     },{
         "id":21,
          "link":"/detail/21",
          "category":"AS IT IS ",
          "title":"Saudi Arabia Is First Country to Give Citizenship to Robot",
          "time":"2017-11-06"
     
     },{
         "id":22,
          "link":"/detail/22",
          "category":"科技报道  ",
          "title":"Have Scientists Discovered a Radio ‘Space Shield?’",
          "time":"2017-11-06"
     
     },{
         "id":23,
          "link":"/detail/23",
          "category":"AS IT IS ",
          "title":"Airlines Begin New Security Measures for Flights to US",
          "time":"2017-10-26"
     
     },{
         "id":24,
          "link":"/detail/24",
          "category":"科技报道 ",
          "title":"Smart Cameras to Help You Capture Better Photos",
          "time":"2017-10-26"
     
     },{
         "id":25,
          "link":"/detail/25",
          "category":"VOA常速英语 ",
          "title":"Ongoing U.S. Support for Rohingya Refugees",
          "time":"2017-10-26"
     
     },{
         "id":26,
          "link":"/detail/26",
          "category":"教育报道 ",
          "title":"Educators Try New Methods to Save American Indian Languages",
          "time":"2017-10-25"
     
     },{
         "id":27,
          "link":"/detail/27",
          "category":"科技报道 ",
          "title":"Americans Worry Robots Will Take Jobs, Leave Nothing to Do",
          "time":"2017-10-25"
     
     },{
         "id":28,
          "link":"/detail/28",
          "category":"VOA常速英语 ",
          "title":"U.S. Withdraws From UNESCO",
          "time":"2017-10-25"
     
     },{
         "id":29,
          "link":"/detail/29",
          "category":"VOA常速英语 ",
          "title":"Countering Iran's Aggression",
          "time":"2017-10-25"
     
     },{
         "id":30,
          "link":"/detail/30",
          "category":"AS IT IS ",
          "title":"Neither Side Backing Down in Catalonia Independence Drive",
          "time":"2017-10-24"
     
     },{
         "id":31,
          "link":"/detail/31",
          "category":"AS IT IS  ",
          "title":"Fake News Still Here, Even As Facebook, Google Fight It",
          "time":"2017-10-24"
     
     },{
         "id":32,
          "link":"/detail/32",
          "category":"AS IT IS ",
          "title":"Turkish, US Diplomats Work to Ease Troubled Ties",
          "time":"2017-10-24"
     
     },{
         "id":33,
          "link":"/detail/33",
          "category":"AS IT IS  ",
          "title":"Harry Potter Exhibit Opens at British Library",
          "time":"2017-10-24"
     
     },{
         "id":34,
          "link":"/detail/34",
          "category":"科技报道  ",
          "title":"Researchers Genetically Modify Corn to Increase Nutrition",
          "time":"2017-10-24"
     
     },{
         "id":35,
          "link":"/detail/35",
          "category":"健康报道  ",
          "title":"The Benefits of Baby Talk",
          "time":"2017-10-24"
     
     },{
         "id":36,
          "link":"/detail/36",
          "category":"VOA常速英语  ",
          "title":"Forbes: Trump’s Wealth Suffers Major Drop Since Presidency",
          "time":"2017-10-20"
     
     },{
         "id":37,
          "link":"/detail/37",
          "category":" AS IT IS  ",
          "title":"Researchers Aim to Clean up South Asia's Dirty Kilns",
          "time":"2017-10-19"
     
     },{
         "id":38,
          "link":"/detail/38",
          "category":"AS IT IS ",
          "title":"Another American Writer Wins Man Booker Prize",
          "time":"2017-10-19"
     
     },{
         "id":39,
          "link":"/detail/39",
          "category":" AS IT IS  ",
          "title":"How Powerful Personal Experiences Changed Opinions",
          "time":"2017-10-19"
     
     },{
         "id":40,
          "link":"/detail/40",
          "category":" AS IT IS",
          "title":"New Lego Set Honors 'Women of NASA'",
          "time":"2017-10-19"
     
     },{
         "id":41,
          "link":"/detail/41",
          "category":"科技报道 ",
          "title":"Apple Co-Founder Launches Technology School",
          "time":"2017-10-19"
     
     },{
         "id":42,
          "link":"/detail/42",
          "category":"AS IT IS  ",
          "title":"President Trump May Visit Korean DMZ on Asia Trip",
          "time":"2017-10-18"
     
     },{
         "id":43,
          "link":"/detail/43",
          "category":"AS IT IS ",
          "title":"Expert: North Korea’s Cyber Abilities Growing",
          "time":"2017-10-18"
     
     }]
   
   
  }

 })

});


router.get('/api/list.json', function(req, res, next) {
  res.json(
    {
  "ret":true,
   "data":{
     
     "list":[{
         
         "id":1,
          "link":"/detail/1",
          "category":" AS IT IS",
          "title":req.query.id+"Leonardo da Vinci Painting Sells for Record $450 Million",
          "time":"2017-11-17"
     
     },{
         "id":2,
          "link":"/detail/2",
          "category":"AS IT IS ",
          "title":"Small Montana City Elects Former Refugee as Mayor",
          "time":"2017-11-17"
     
     },{
         "id":3,
          "link":"/detail/3",
          "category":"AS IT IS ",
          "title":"Indian Hindus Attacking Muslims, Stealing Their Cows",
          "time":"2017-11-17"
     
     },{
         "id":4,
          "link":"/detail/4",
          "category":" VOA常速英语  ",
          "title":"Clearing Explosive Remnants of War in the West Bank",
          "time":"2017-11-17"
     
     },{
         "id":5,
          "link":"/detail/5",
          "category":"AS IT IS  ",
          "title":"Japan Seeks to Expand Influence in Southeast Asia",
          "time":"2017-11-16"
     
     },{
         "id":6,
          "link":"/detail/6",
          "category":"科技报道  ",
          "title":"Distant Star Refuses to Die",
          "time":"2017-11-16"
     
     },{
         "id":7,
          "link":"/detail/7",
          "category":"科技报道  ",
          "title":"5 Reasons to Try Firefox ‘Quantum’ Browser ",
          "time":"2017-11-16"
     
     },{
         "id":8,
          "link":"/detail/8",
          "category":" VOA常速英语 ",
          "title":"President Trump at ASEAN Summit",
          "time":"2017-11-16"
     
     },{
         "id":9,
          "link":"/detail/9",
          "category":"VOA常速英语 ",
          "title":"U.S. Supports Safe Return of Rohingya to Burma",
          "time":"2017-11-16"
     
     },{
         "id":10,
          "link":"/detail/10",
          "category":"AS IT IS  ",
          "title":"Richard Nixon: Resigned",
          "time":"2017-11-13"
     
     },{
         "id":11,
          "link":"/detail/11",
          "category":"AS IT IS  ",
          "title":"Many North Koreans Depend on Informal Markets",
          "time":"2017-11-13"
     
     },{
         "id":12,
          "link":"/detail/12",
          "category":"AS IT IS ",
          "title":"In Lebanon, Musician Helps Voices of Children Rise Above Poverty",
          "time":"2017-11-13"
     
     },{
         "id":13,
          "link":"/detail/13",
          "category":" 科技报道 ",
          "title":"New Orangutan Species Discovered in Indonesia",
          "time":"2017-11-13"
     
     },{
         "id":14,
          "link":"/detail/14",
          "category":"AS IT IS ",
          "title":"'Paradise Papers' Show Secret Wealth of Officials, Famous People",
          "time":"2017-11-07"
     
     },{
         "id":15,
          "link":"/detail/15",
          "category":" AS IT IS ",
          "title":"Saudi Crown Prince Detains Opponents, Expands Power",
          "time":"2017-11-07"
     
     },{
         "id":16,
          "link":"/detail/16",
          "category":"健康报道 ",
          "title":"Researchers Shocked at 'Pain Gap' Between Rich and Poor",
          "time":"2017-11-07"
     
     },{
         "id":17,
          "link":"/detail/17",
          "category":" AS IT IS ",
          "title":"Vietnam Tech Startups Seek Next Step Forward",
          "time":"2017-11-06"
     
     },{
         "id":18,
          "link":"/detail/18",
          "category":"AS IT IS  ",
          "title":"Lyndon Johnson: Complicated",
          "time":"2017-11-06"
     
     },{
         "id":19,
          "link":"/detail/19",
          "category":"AS IT IS ",
          "title":"Saudi Arabia Is First Country to Give Citizenship to Robot",
          "time":"2017-11-06"
     
     },{
         "id":20,
          "link":"/detail/20",
          "category":"科技报道  ",
          "title":"Have Scientists Discovered a Radio ‘Space Shield?’",
          "time":"2017-11-06"
     
     },{
         "id":21,
          "link":"/detail/21",
          "category":"AS IT IS ",
          "title":"Airlines Begin New Security Measures for Flights to US",
          "time":"2017-10-26"
     
     },{
         "id":22,
          "link":"/detail/22",
          "category":"科技报道 ",
          "title":"Smart Cameras to Help You Capture Better Photos",
          "time":"2017-10-26"
     
     },{
         "id":23,
          "link":"/detail/23",
          "category":"VOA常速英语 ",
          "title":"Ongoing U.S. Support for Rohingya Refugees",
          "time":"2017-10-26"
     
     },{
         "id":24,
          "link":"/detail/24",
          "category":"教育报道 ",
          "title":"Educators Try New Methods to Save American Indian Languages",
          "time":"2017-10-25"
     
     },{
         "id":25,
          "link":"/detail/25",
          "category":"科技报道 ",
          "title":"Americans Worry Robots Will Take Jobs, Leave Nothing to Do",
          "time":"2017-10-25"
     
     },{
         "id":26,
          "link":"/detail/26",
          "category":"VOA常速英语 ",
          "title":"U.S. Withdraws From UNESCO",
          "time":"2017-10-25"
     
     },{
         "id":27,
          "link":"/detail/27",
          "category":"VOA常速英语 ",
          "title":"Countering Iran's Aggression",
          "time":"2017-10-25"
     
     },{
         "id":28,
          "link":"/detail/28",
          "category":"AS IT IS ",
          "title":"Neither Side Backing Down in Catalonia Independence Drive",
          "time":"2017-10-24"
     
     },{
         "id":29,
          "link":"/detail/29",
          "category":"AS IT IS  ",
          "title":"Fake News Still Here, Even As Facebook, Google Fight It",
          "time":"2017-10-24"
     
     },{
         "id":30,
          "link":"/detail/30",
          "category":"AS IT IS ",
          "title":"Turkish, US Diplomats Work to Ease Troubled Ties",
          "time":"2017-10-24"
     
     },{
         "id":31,
          "link":"/detail/31",
          "category":"AS IT IS  ",
          "title":"Harry Potter Exhibit Opens at British Library",
          "time":"2017-10-24"
     
     },{
         "id":32,
          "link":"/detail/32",
          "category":"科技报道  ",
          "title":"Researchers Genetically Modify Corn to Increase Nutrition",
          "time":"2017-10-24"
     
     },{
         "id":33,
          "link":"/detail/33",
          "category":"健康报道  ",
          "title":"The Benefits of Baby Talk",
          "time":"2017-10-24"
     
     },{
         "id":34,
          "link":"/detail/34",
          "category":"VOA常速英语  ",
          "title":"Forbes: Trump’s Wealth Suffers Major Drop Since Presidency",
          "time":"2017-10-20"
     
     },{
         "id":35,
          "link":"/detail/35",
          "category":" AS IT IS  ",
          "title":"Researchers Aim to Clean up South Asia's Dirty Kilns",
          "time":"2017-10-19"
     
     },{
         "id":36,
          "link":"/detail/36",
          "category":"AS IT IS ",
          "title":"Another American Writer Wins Man Booker Prize",
          "time":"2017-10-19"
     
     },{
         "id":37,
          "link":"/detail/37",
          "category":" AS IT IS  ",
          "title":"How Powerful Personal Experiences Changed Opinions",
          "time":"2017-10-19"
     
     },{
         "id":38,
          "link":"/detail/38",
          "category":" AS IT IS",
          "title":"New Lego Set Honors 'Women of NASA'",
          "time":"2017-10-19"
     
     },{
         "id":39,
          "link":"/detail/39",
          "category":"科技报道 ",
          "title":"Apple Co-Founder Launches Technology School",
          "time":"2017-10-19"
     
     },{
         "id":40,
          "link":"/detail/40",
          "category":"AS IT IS  ",
          "title":"President Trump May Visit Korean DMZ on Asia Trip",
          "time":"2017-10-18"
     
     },{
         "id":41,
          "link":"/detail/41",
          "category":"AS IT IS ",
          "title":"Expert: North Korea’s Cyber Abilities Growing",
          "time":"2017-10-18"
     
     }]
   
   }

 })

});

router.get('/api/detail.json', function(req, res, next) {
  res.json(
  {
  "ret":true,
  "data":{
  
      "detail":{
          "title":req.query.id+"Leonardo da Vinci Painting Sells for Record $450 Million",
          "time":"时间 : 2017-11-17 06:28   来源 : VOA官网     收听下载次数 : 423次",
          "content":"<p style='margin-top:40px;font-size:12px;line-height:18px'>A painting of Jesus Christ by Leonardo da Vinci has sold for a record $450 million. That is the most money ever paid for an artwork.</p><p style='margin-top:10px;font-size:12px;line-height:18px'>The painting is called “Salvator Mundi,” Latin for “Savior of the World.” It is one of fewer than 20 works by the Renaissance painter known to exist. It sold at an auction on Wednesday.</p><p style='margin-top:10px;font-size:12px;line-height:18px'>Before Wednesday, the highest-known sale price for any artwork had been $300 million for Willem de Kooning’s painting “Interchange.” Businessman Kenneth C. Griffin bought it in a private sale in 2015.</p><p style='margin-top:10px;font-size:12px;line-height:18px;height:160px'><img style='width:245px;height:140px;margin:0 auto;float:left;margin-top:5px' src='http://www.easyvoa.com/uploads/allimg/171120/13310153T-0.jpg'/><span style='display:inline-block;width:268px;margin-left:10px;margin-top:10px;font-size:12px;line-height:18px'>A Pablo Picasso’s painting “Les femmes D’Alger” held the previous record for artwork sold at auction. It was sold in 2015 for over $179 million.</span><span style='display:inline-block;width:268px;margin-left:10px;margin-top:10px;font-size:12px;line-height:18px'>The sale of the da Vinci painting took place at Christie’s auction house in New York City. Bidding for the piece opened at $75 million. The bidding lasted 19 minutes.</span><p style='margin-top:15px;font-size:12px;line-height:18px'>People inside Christie’s cheered as the hammer came down to mark the end of bidding. The record sale price includes money that the unnamed winner must pay to the auction house.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>Jussi Pylkkänen was the auctioneer and is Global president of Christie's. He told the Reuters news agency, “It was a moment when all the stars were aligned, and I think Leonardo would be very pleased.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The 66-centimeter-tall painting dates to around 1500. It shows Jesus dressed in Renaissance-style clothing. His right hand is raised in blessing and his left hand holds a crystal ball.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>The painting was in a private collection of King Charles I of England. It disappeared from view until 1900, when a British collector bought it. At that time, it was thought to have been painted by a student of Leonardo rather than the master himself.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>In 2005, a group of art dealers paid less than $10,000 for the artwork. It was badly damaged and partly painted over. They restored the work and proved that the painting was done by Leonardo da Vinci himself.</p><p style='margin-top:15px;font-size:12px;line-height:18px'>Russian billionaire Dmitry Rybolovlev bought the restored painting in 2013 for $127.5 million.</p><div style='margin:20px 0 0 0;padding-bottom:5px'><h2 style='line-height:25px;height:25px;color:#fff;background:#777dff;font-size:12px;font-weight:normal;padding-left:15px'>VOA内容相关链接：</h2><ul style='margin:3px 0;list-style:none;height:250px'><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>US Veterans Selling Spice from Afghanistan, Where They Served</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Chinese Supermarkets Stop Selling Brazilian Meat After Food Safety Scandal</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Los Angeles Permits People to Sell Goods on the Sidewalks</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>America’s Most Expensive Home Is $250 Million</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>3-D Printing Lets Blind Experience Famous Painting</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Long-lost $160 Million Painting Returned to Museum</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Large Creature Swam the Seas 170 Million Years Ago</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Sea Monster Swam Oceans 170 Million Years Ago</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Water Pollution Puts Over 300 Million at Risk</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Almost 46 Million People Live in Modern Slavery</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>El Nino Drought Leaves 28 Million Southern Africans Hungry</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Painting Captures Moments after Lincoln's Assassination</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Large Diamond Could Be Sold for $70 Million</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Firm Fined $10 Million For Belly Fat Fraud</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Firm Fined $10 Million For Belly Fat Fraud</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Palestinian Wins Teaching Prize and $1 Million</li><li style='width:45%;height:25px;overflow；hidden;line-height:25px;margin:0 15px;float:left;font-size:12px;color:green'>Court Awards $55 Million to Secretly Taped Sportscaster</li></ul></div></p>"
      
      }
   }

 })

});
module.exports = router;
