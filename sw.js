/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","2963396c68ccbda2aa50837a7712942c"],["/archives/2022/07/index.html","5e2b0c4f8324b2854093fc5310c0f368"],["/archives/2022/08/index.html","659cd59be159b5a46b943e41c16b0d9c"],["/archives/2022/08/page/2/index.html","415defa71516425ab3985d8362f1a3ca"],["/archives/2022/09/index.html","43e94ce1d0ea609317bfd1e87a6b4be7"],["/archives/2022/10/index.html","e1ef932bf456c4d18f658e9f1c8593d8"],["/archives/2022/11/index.html","5ffa0737d94fae7331a1a8eabbee8fad"],["/archives/2022/12/index.html","53741d6a93dec8604a9d468b2825dee0"],["/archives/2022/12/page/2/index.html","86cfe1464ec5e3c9acbd0c45afcd3bc0"],["/archives/2022/index.html","ad7a0007a6770e03ac8086b5d5ff2e27"],["/archives/2022/page/2/index.html","1fb4ad6af81661df44a06290bb104f94"],["/archives/2022/page/3/index.html","75d8fd231752ab56d20da5892130f337"],["/archives/2022/page/4/index.html","d693544d9b85ce0179db54e6895a6b73"],["/archives/2022/page/5/index.html","2c1cdc8d1882720c7474d48c840f3423"],["/archives/index.html","5943674443be35991340f0fc22418d90"],["/archives/page/2/index.html","aa8b983f15a587e964f281ab6d66ca7f"],["/archives/page/3/index.html","b81668ca977afb13982f81a984fcd699"],["/archives/page/4/index.html","30d549bc536e4a998ab1413680556cf9"],["/archives/page/5/index.html","97563234bd54b57a6837be9edf9c4aab"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","6e74e4ababc4706cedaac5cf1b6f3f2f"],["/categories/Hexo魔改/index.html","52cbae6f0d3a889476438763d80c30f9"],["/categories/Hexo魔改/page/2/index.html","1a845a9b93045bb6c843af5ca04bab72"],["/categories/OI/index.html","ac34938a07f119f5bc519769e7111ae3"],["/categories/Windows/index.html","8a1de22e40b41faeb297250c1a444c95"],["/categories/index.html","2de7215211a9f1bf97448bce17ea4783"],["/categories/个人/index.html","30352ae50c6a8e3df1d0075ce8802efb"],["/categories/白嫖教程/index.html","b17bfab6130bde33f799d77e0b5083fc"],["/categories/社会/index.html","44452a21b7a6d699682e8839928a7a10"],["/categories/经验教程/index.html","ec9515a374eb8d49d291d01fb968a68f"],["/categories/编程/index.html","2fde46312bda038a60640690d296fcd0"],["/categories/网络/index.html","07bfcc283f0f908fa20bdf979a288205"],["/categories/避坑教程/index.html","973d483410a6a3f7ae057ffb3b43f950"],["/census/index.html","083ca3df9b4a94f55377b85a0f90ecfd"],["/charts/index.html","9af8f07618c29c3746884b1913b837a2"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/cheesy_pick-up_lines.css","ae49a440c9ab2f4d7701482536e6a9c0"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/custom.css","72501170bf362d605956292a45f5c7bc"],["/css/custom/poem.css","17bddda78c8e0afa4a97512ad7607c88"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","27dd1133f88a053b38cb225c1293b46d"],["/css/kslink.css","d53f6d87759a616d44c39c49f9364bf8"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/css/xiaoxitanchuang.css","af87366b57420784145a8ac87116327c"],["/fcircle/index.html","3423ea81d21b4042fede9cca4c0514d0"],["/fontawesome/index.html","0885af9e9e9be4223bb39660a171a264"],["/fonts/iconfont.ttf","a8cd5b9fda65955eeed6b8e630514612"],["/fonts/iconfont.woff","67af1334b7e8130b7bbd2de4772aa2a3"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/gushi/index.html","dcb6b69e248e05a1b05479c082942124"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","f105010eda3b79ef46919ff773fd7e92"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/console.js","2a905a927032e7525923e3088283b8c8"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/custom/cheesy_pick-up_lines.js","0128a71b81f2f4e1a208ddfb86cd1fd1"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/daohanglan.js","9b51657038de22ffc8c9c811e969df5a"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fishes.js","ae61fbc397bb398ca3bf0c70887fea15"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/fuzhi.js","75feb06c0fa2c4d73016966a3852cdad"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/hygl.js","9b6585cf314a5410523ad02dada58b40"],["/js/kslink.js","26713629ccfefa5d57f5da35896a9ed0"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/newYear.js","2339aa8d21e5ca10b327737ff09ca6e0"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","eac3d8a2013c776814865d6841d3b183"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/static/console.js","2a905a927032e7525923e3088283b8c8"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/txmap.js","56f575c36abbd1e1452e9179e839eacf"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","412c25b25ac224ba1dff9de758b81af5"],["/license/index.html","aba48abd01e4c4e24cc7da5a7f251cd3"],["/link/index.html","59c495b80ccb0acf16489ec219476970"],["/links/index.html","4263ca86b3efa570cd9f13e0f03dc2d6"],["/messageboard/index.html","6e63fd20f0993410486610b6166fb64e"],["/muyu/index.html","2769e26713b553f445fa277a2f0ae044"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","a8bbcaa19dec754db0af73d420215497"],["/page/2/index.html","db837eefc22dd820a3ed33285b49af31"],["/page/3/index.html","f5c70838cf8ac1ff8352cecbaed4d2cf"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/0/index.html","4fcffa303ce81e4d88701f515030645f"],["/posts/11eb4aac/index.html","357e1875253dccb5489c60d267ec6688"],["/posts/140ab620/index.html","9b39169f19a7bb9ce10b058c3668305d"],["/posts/14740f7c/index.html","c5d45c14208007df249d30ee7ea84c7c"],["/posts/1b850b16/index.html","d776bd106c5951e417c4725d46e840dc"],["/posts/29b0359b/index.html","d5efee62bc5b8d8533ff7f876aeffc65"],["/posts/30bce1d1/index.html","b1a7b60fe82362f47da471f6f4766400"],["/posts/3ee11b0f/index.html","c87d8594bdb2f56457f74d0cc74758fc"],["/posts/45897d5c/index.html","8d67a5c0c37d6669049b71cea0b0075b"],["/posts/4ae2ec41/index.html","ba6490d163bd78f44130b980aa5c2308"],["/posts/4bd8701b/index.html","6bf423e0874d19c4863ff54f0899a40f"],["/posts/4ebac27c/index.html","2a3f1d467afb94d83faafce7763ffe53"],["/posts/53e6b356/index.html","e8e012acddb5ae948ffacb5f1aa6c942"],["/posts/583ff077/index.html","3ff9841145b924db40083c2571f1a0c1"],["/posts/5d71c71f/index.html","d1480cdebc81fcdcf40aaf1e0e50dac9"],["/posts/5e2c4b67/index.html","480dd855870df56cb198bd4f219d8ff5"],["/posts/614f1131/index.html","788e0b2fb5c4dcf095eefa24cb0f4bdd"],["/posts/61b9829e/index.html","5bd818b2d7f2bafe11adb185337dc0c7"],["/posts/65ad2601/index.html","10722c5c3c7e1c1c61a7a80fd1b00cd6"],["/posts/670e47f/index.html","a95bff22bf1e72b816005341111784b1"],["/posts/69707535/index.html","3adad91b7f37cfd3c15cfb30adf97e35"],["/posts/6d1af91/index.html","c6a1b3453a25e66f40150decf55a9b1a"],["/posts/6deceee9/index.html","02afec10cfd89d0b5e8e1563e04357db"],["/posts/70734559/index.html","9b3c1feec908881f8485260490530b8b"],["/posts/74e5e1ec/index.html","17ebcd320a1bd3b63711f72ac59b60a9"],["/posts/7e9276a3/index.html","41873b4e378509bfd994f6048698ad00"],["/posts/8245da27/index.html","1f8268bb51b32bb8ae480774be22ae25"],["/posts/895003b5/index.html","57ac647410f1e9d077d95c4d45200eec"],["/posts/8a79afbb/index.html","f63d2acbe2f389673d34b2ce873ee17f"],["/posts/8b73c6b7/index.html","111d7f376f88ed182af8d137b0149831"],["/posts/a1078b2d/index.html","9ed07e1bfed4135763ef0a425bc637a8"],["/posts/a61abc/index.html","c9a4aade48df5dab1e3d5cce42aabe20"],["/posts/a844d9fc/index.html","2c887b14e2d4044718d7e003a6f32729"],["/posts/a90c94cd/index.html","a85e5e56fc8571af5e49c9dc8db68ffd"],["/posts/ac792cf4/index.html","67fc240ab0394f520833a9407b6c902a"],["/posts/aedd05c3/index.html","d5eb58c50c18810de12ffdd53921be1c"],["/posts/bbc95d58/index.html","9351d87c5f0f0357c9ba3a605bef144d"],["/posts/bd7ef112/index.html","1bfaf3c303a08bbb2798798d079041df"],["/posts/becc831a/index.html","7e668f3a3102e9197143a50bd460d419"],["/posts/d1fc759/index.html","0b64e854466a3f12b68149dab8673336"],["/posts/e433f3d/index.html","d87b13c0f6e1c5487d6d94936588f9c6"],["/posts/e536ec4/index.html","80613056d8d52e6342874b2b92900c0e"],["/posts/ec12b762/index.html","ad92590ce2c7d3b339bf353ba1dedebf"],["/posts/ff156c72/index.html","6c61a8dc82ae56086742868afcb35ca2"],["/posts/ff1701d7/index.html","bf475ef65c71514931982e6227877d57"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","0558ec319631e8b479c072ca7bd291e9"],["/static/console.js","2a905a927032e7525923e3088283b8c8"],["/sw-register.js","0f40ca7d3f17f4ab001ba03706ebb631"],["/tags/Hexo魔改/index.html","fe647139a9ef59cfa8f1415bf6a3ceda"],["/tags/Hexo魔改/page/2/index.html","f40a596e0715276316e77e7e9850587c"],["/tags/OI/index.html","f80b8cf2234e4dda3de9cf0ef195a688"],["/tags/PyQt5/index.html","8e88178f1a7a74fde4b171777859362a"],["/tags/Python/index.html","fd7a009a23864720b8b305f123ed2912"],["/tags/Windows/index.html","936e5d51d2a732c0cd2dbd4ff594af39"],["/tags/goorm/index.html","dded26aa11946fc7aa7e363564008a13"],["/tags/index.html","70aaa56545ae9f0089b2a5ae9545d71a"],["/tags/uClock/index.html","3fec5a04111f6aab5f875266201644b6"],["/tags/个人/index.html","74913ab5ae487f49d7e82bba94abfff1"],["/tags/域名/index.html","a047851e3b5c7075a0064771bbb6af38"],["/tags/字符处理/index.html","96f074c6e8a808fe3be77b1e095dee40"],["/tags/服务器/index.html","1329410933199aeb53c8dc471b36e37e"],["/tags/模拟/index.html","6d12b885505a03f166ffdd8f4df99961"],["/tags/白嫖/index.html","851b947d3da64d406c31ffb36a031524"],["/tags/社会/index.html","87645c23b8e51cd616f6deef3b8ebe1d"],["/tags/编程/index.html","c513eef69f99973b1c3ec15a52db32dd"],["/tags/网络/index.html","51beb27d7b38d566c88daf645f32b59f"],["/tags/翻墙/index.html","ec728c93fb02fbf6ff4a397f5eb74a1d"],["/tags/贪心/index.html","6b75b461ef1b2d7f4d6775b67ae40f85"],["/tags/避坑/index.html","6f07e2693938235c7b36603aa2c30d5a"],["/tags/高精度/index.html","a1a7d822c33c56d8d72ee2c9d887dd9a"],["/tags/魔改日记/index.html","7185be853d25a78bd24c9568bc567b00"],["/tools/index.html","69fbfc8f2f2f9743d7008ac228da5168"],["/update/index.html","910f04af23b455274bc6372c9eeb7c28"],["/update/links/index.html","72bbe4d87a30fc057eccf6eef89c73f0"],["/zaobao/index.html","ed8f207ba60c0355e47b9b8793f190f0"],["/zaobao/links/index.html","0120404302d894ad612fd289b953a25c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
