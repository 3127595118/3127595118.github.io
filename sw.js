/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","dda3c98dd7d12f274a6386944c010df7"],["/archives/2022/07/index.html","9d5e2fe4f65f884e9e31a5e906c28a7a"],["/archives/2022/08/index.html","eaa277a3059df186add594c4b690d6c0"],["/archives/2022/08/page/2/index.html","d789f0b7f082804846cd6e43292772b3"],["/archives/2022/09/index.html","bcc590d353fe890509a167b1b30c710b"],["/archives/2022/10/index.html","a90c9202677990040271ab6df19b2a7d"],["/archives/2022/11/index.html","c27a798899f8bbdc5d7c58b0e60c77e1"],["/archives/2022/12/index.html","d06b734402a689a8d04369c7659a1991"],["/archives/2022/index.html","082f1c71d4810baf8c5904836656d393"],["/archives/2022/page/2/index.html","4d506df99f2fec9be4b079497bfd6a0c"],["/archives/2022/page/3/index.html","4f4aacd3f6ab196d7cc0f18f142a25d0"],["/archives/2022/page/4/index.html","2021f66e081a9f49a05d590aafc63ec5"],["/archives/2022/page/5/index.html","a1ef6927ceaf22227aa759cf66761e3e"],["/archives/index.html","9eff062d24af2479a2216a2909ea7fa5"],["/archives/page/2/index.html","477cf0e7ed5b9e431476b8f8c354f9b5"],["/archives/page/3/index.html","8c81cbec3fed5eb01791ab9f13303d69"],["/archives/page/4/index.html","e1263df52c7640e099482cd1a71505bb"],["/archives/page/5/index.html","1a02404337be2273541ae34ca0f9b5cc"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","028683a001f233d6370dc3f5e484a8cf"],["/categories/Hexo魔改/index.html","cf90a55ee81c6287f9fd60cb35fb0f34"],["/categories/Hexo魔改/page/2/index.html","59f3f56b6c44e7b7563d99b39578cfae"],["/categories/OI/index.html","a2294d0a9ffa6be6672cec66556e9bd4"],["/categories/Windows/index.html","a55e8c774e33b7375ebedfa45d77bd38"],["/categories/index.html","3fe08e3a95811091b6fe570212b9688f"],["/categories/个人/index.html","5d42596b4060bcb878e7b6019986162a"],["/categories/白嫖教程/index.html","5e36e6b5b61e8063eff7af421d3a5fe9"],["/categories/社会/index.html","a80b4c10d7120705b608fdc717b8da96"],["/categories/经验教程/index.html","5e7f86f409ce5c08747d1ce50eb4a236"],["/categories/编程/index.html","f816189ac8052440d0cc2dc9cee276a5"],["/categories/网络/index.html","a0c2f5fc9610c4688ef9b581d32c3ab9"],["/categories/避坑教程/index.html","ccbfd60eb7f3f52105412e4f19dc0739"],["/census/index.html","8138ce2c2c00737acd2a7ac35cda1e57"],["/charts/index.html","887a3f862733a2a3109432f2879c8c1d"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/cheesy_pick-up_lines.css","ae49a440c9ab2f4d7701482536e6a9c0"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/custom.css","f71314079a1cd56d36ca893e4bee011f"],["/css/custom/poem.css","17bddda78c8e0afa4a97512ad7607c88"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","5d7b5d2f77cb51040a7b90771ebb7795"],["/css/kslink.css","d53f6d87759a616d44c39c49f9364bf8"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/css/xiaoxitanchuang.css","af87366b57420784145a8ac87116327c"],["/fcircle/index.html","ebc279eb225fb1aab8c3ad0bd00e8c63"],["/fontawesome/index.html","9539255f2c050351176a69b28294fa28"],["/fonts/iconfont.ttf","a8cd5b9fda65955eeed6b8e630514612"],["/fonts/iconfont.woff","67af1334b7e8130b7bbd2de4772aa2a3"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/gushi/index.html","00be23dc50b8c6f70b3159b3f74ab8bb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","907a07ba695e7063140de8a16a1975c4"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/console.js","2a905a927032e7525923e3088283b8c8"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/custom/cheesy_pick-up_lines.js","0128a71b81f2f4e1a208ddfb86cd1fd1"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/daohanglan.js","9b51657038de22ffc8c9c811e969df5a"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","6d89a6c660fd5509372776c897212da7"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fishes.js","ae61fbc397bb398ca3bf0c70887fea15"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/fuzhi.js","75feb06c0fa2c4d73016966a3852cdad"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/hygl.js","9b6585cf314a5410523ad02dada58b40"],["/js/kslink.js","26713629ccfefa5d57f5da35896a9ed0"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/newYear.js","2339aa8d21e5ca10b327737ff09ca6e0"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","8d857ecd2dc2a7ea857bb257b9aa0ebf"],["/js/randomFriend.js","4816111040176357eee24ce919b7c869"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/static/console.js","2a905a927032e7525923e3088283b8c8"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/txmap.js","795e648d3c6b57aa1fcc9fc7fe5ae329"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weather.js","07a3f187e7a806bc4664606ab5c5e513"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","047ada0bc89925a84983f2428e91fc0d"],["/license/index.html","e0e92d64ac641ef4e7358f1c62ccb3a8"],["/link/index.html","c926ed001cf4eafb7167c4e072c81c24"],["/links/index-1.html","7ebaf71d8ab76d9b775e064f91f8b69b"],["/links/index.html","78b52592fadf54c52ce99c49f10c4eea"],["/messageboard/index.html","b922eb2364b04f81d75df90a3d96cab6"],["/muyu/index.html","10a5088adbbd330092b298ef59f3de55"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","d5bb5a5dc204267e65f128f933e3af9d"],["/page/2/index.html","6da61fb2fa52555579c1c1d748b2b0c1"],["/page/3/index.html","4a8de2258bcb64d260fcb39d54811d0a"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","03eedeb2f624527c2d0f74f014610f32"],["/posts/140ab620/index.html","0ab462ff871627483a01803037367a7a"],["/posts/14740f7c/index.html","540572bf24196f61ddebd5e7ce3c0277"],["/posts/1b850b16/index.html","32c05595accfd62dd7b1a3c198a2f69f"],["/posts/29b0359b/index.html","cdb629f1be4e91de8f360783a167ed89"],["/posts/30bce1d1/index.html","07535961ea5930225deca54a09d89d3a"],["/posts/3ee11b0f/index.html","8ac6c0c4f3bd11db2601b9b392887134"],["/posts/45897d5c/index.html","6d54cf32cdce082d8a18f15835a74fde"],["/posts/4ae2ec41/index.html","7f6c1891dc4a9ea64c981f7d2758b0b0"],["/posts/4bd8701b/index.html","c39155f802ecfea186f0490f22740360"],["/posts/4ebac27c/index.html","d61ac0918885f61236c182990a346780"],["/posts/53e6b356/index.html","9e0f9d466d18eb100755cb2b808bd057"],["/posts/583ff077/index.html","0e414bc23827b6a046ad1c8d655652d1"],["/posts/5d71c71f/index.html","2b396e212158fd20a06d4c8f58a3711f"],["/posts/5e2c4b67/index.html","4a0be8cdafc026dd427e20244e28e950"],["/posts/614f1131/index.html","1b898e9452d9f3f7074682646acc8748"],["/posts/61b9829e/index.html","381e90c7d8e2f455af77eccbfde9c129"],["/posts/65ad2601/index.html","2860431081219c7640cb6a121866de68"],["/posts/670e47f/index.html","2e6b03a1a0b1f325acf863f7f07bcd7d"],["/posts/69707535/index.html","758d4c84a1e76d847ac8f99e2f5b2029"],["/posts/6d1af91/index.html","f4dbaca933ae9915ebeb525ea962f567"],["/posts/6deceee9/index.html","46bfc1ae20df80f8e9c2affe8aabaa19"],["/posts/70734559/index.html","ce79750478e56c7fa978d6942ff02355"],["/posts/74e5e1ec/index.html","bdf525ffbf1237281b25412c3d3ecbce"],["/posts/7e9276a3/index.html","b68aa9231c6dc2a9a06ee37e0f4dab69"],["/posts/8245da27/index.html","415cc20737e6d874f949534b71fcfc22"],["/posts/895003b5/index.html","cfc1433cf6b41d98f3c07cdce9a04283"],["/posts/8a79afbb/index.html","65079443df89dbedb840a6e40d85db32"],["/posts/8b73c6b7/index.html","0a39919e0c922ce5c71963befb2491ea"],["/posts/a1078b2d/index.html","e0d2a11f17eb887f6cc4155d21cc4c8a"],["/posts/a61abc/index.html","8fe26d53264300f3a176e27dd884f4d4"],["/posts/a844d9fc/index.html","fab2fb9db64b759b6b832970831b9a6d"],["/posts/a90c94cd/index.html","8ea4e9fca32ea1721c2c7888b3913d53"],["/posts/ac792cf4/index.html","7a28000b8689f8e6cd20c80dc4eddbeb"],["/posts/aedd05c3/index.html","420de2dd0fb1fd095bbe010f00ba98a1"],["/posts/bbc95d58/index.html","03b2591ebf27b02e54d918523dde7dff"],["/posts/bd7ef112/index.html","2b55a88a529998001fe04e483a9679b1"],["/posts/becc831a/index.html","33379aab2cabcefec4c29b6a19f69be9"],["/posts/d1fc759/index.html","0b6f43e9de7eb757339836be7076c0e6"],["/posts/e433f3d/index.html","10a65b9c1b1943e5824d776afe41665e"],["/posts/e536ec4/index.html","cabd164d8cc3a62f51cfe921242c8e8a"],["/posts/ec12b762/index.html","6207236b7223c033489030ba355613c2"],["/posts/ff156c72/index.html","5bc56bb4da0f465b0bbd536745a6d3da"],["/posts/ff1701d7/index.html","a1a613fa0a572b17fd0040c6e822ad6f"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","94c3c3922f4381f8aa9200875ac1a3d8"],["/static/console.js","2a905a927032e7525923e3088283b8c8"],["/sw-register.js","881e75c922fa2a24bdb12e7ba47ea715"],["/tags/Hexo魔改/index.html","bedae0655757f461ea7238f654cc2987"],["/tags/Hexo魔改/page/2/index.html","51b2c1661f200a8c6117cf681dc14025"],["/tags/OI/index.html","77cbd00e6d63595979fd5ca42d44fff7"],["/tags/PyQt5/index.html","c059f9d6536c4bbdb5e3214ff23ef1a4"],["/tags/Python/index.html","273ee64f21cfb3de408ea1eebc92d10c"],["/tags/Windows/index.html","148f057a09d1257c78c0e3b9b7bed37f"],["/tags/goorm/index.html","e40ce1dbed4db744b2b65c22c67dead3"],["/tags/index.html","894a3c400f416ac98d71dce72d5b0aca"],["/tags/uClock/index.html","29e8c7377d62e2645c07323c12cb1387"],["/tags/个人/index.html","11792b6d46664dba9f9727f00792a01c"],["/tags/域名/index.html","c9d05d91e723c6917844ba4964d2cc6e"],["/tags/字符处理/index.html","3c6749185e130a590e5287fe2e6171eb"],["/tags/服务器/index.html","4bcf3f872bd045b14dd94353da435eda"],["/tags/模拟/index.html","340caaa2269002a7f8d927b9dba70ac9"],["/tags/白嫖/index.html","58f4b046f15e646757c847097a92e6cd"],["/tags/社会/index.html","c0657b058cdff35833977b5cf48dce3c"],["/tags/编程/index.html","e99857a59694f3932d9f5877c7de06bf"],["/tags/网络/index.html","842efb274cec900f49d0affd0fc47736"],["/tags/翻墙/index.html","617d7129e04d1459b26872ed266ec9ed"],["/tags/贪心/index.html","f670b63f9679cab0fb9a1267f787657e"],["/tags/避坑/index.html","7e1b80de3e5fb531d8e46b72ca1dca3d"],["/tags/高精度/index.html","8633c82281a74be38a7afbfcf6e2b574"],["/tags/魔改日记/index.html","b8fd093fa74b4c30c10108717d933a9e"],["/tools/index.html","33b1c836d4d69bcccd1d51e476be3ff9"],["/update/index.html","8a9a1157ccc3c23222cf8b59d4c13d30"],["/update/links/index.html","971ed97961a1303d640eb63501784c50"],["/zaobao/index.html","1e6a9d0b98cb05a641af93ec0e0b60de"],["/zaobao/links/index.html","8dbe74e1ceb372353dabb43326dcac38"]];
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
