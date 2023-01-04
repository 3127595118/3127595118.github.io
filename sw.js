/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","66218ee6387266f87ed73a9d8dbab233"],["/archives/2022/07/index.html","1594145eb93a168791838b3985fe464f"],["/archives/2022/08/index.html","09fe99e8fdd36bdd8cdfdaddf9d15e1b"],["/archives/2022/08/page/2/index.html","251f207ddaae723dd9d3fa0ab8c6ed92"],["/archives/2022/09/index.html","a08960cd8874b071741676ebb6ba8d50"],["/archives/2022/10/index.html","f224f76322f0716dc5701816b1a07c15"],["/archives/2022/11/index.html","81cfa4486388753f6263a728863c7419"],["/archives/2022/12/index.html","dcfb32d823b88455c682fcf0adbc2d9c"],["/archives/2022/12/page/2/index.html","f9d7a1fb750f9c690d4aae22a0f15624"],["/archives/2022/index.html","3cf7781eea1d0f5e5abec2eedf273ff6"],["/archives/2022/page/2/index.html","655fc785b900eea703be38c6b992dd67"],["/archives/2022/page/3/index.html","97c7ae9f0794ff1387d6c9a537f74751"],["/archives/2022/page/4/index.html","4553e06d714e5ef99e909b0b00437e70"],["/archives/2022/page/5/index.html","a7b4e768da20328f108e919d236f6213"],["/archives/index.html","1b64ebd70a6b0a6f547c52ac5a6699a7"],["/archives/page/2/index.html","6e44cda95fed6bf2c20271d7d96e0090"],["/archives/page/3/index.html","cfe7f0a2eea407312a8c05c778cf4879"],["/archives/page/4/index.html","94d7db729b7fcd7dd5920a892142099c"],["/archives/page/5/index.html","2cc0845bd00ce5698769676b92d12d6a"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","756640099f22b09efe0869efff5a61b9"],["/categories/Hexo魔改/index.html","c479126746092392c493076a4acf4b76"],["/categories/Hexo魔改/page/2/index.html","cbad865dce8225c2e464e7f0e85414e1"],["/categories/OI/index.html","c1dc3105f658c7b27cc55b57be17a6ab"],["/categories/Windows/index.html","1797ac5cbf64063c17be7daa3312fb3f"],["/categories/index.html","c7e334d324f08be6b9b1ceab33d933de"],["/categories/个人/index.html","bfe7e5ddeb7105309dd5177d14b75109"],["/categories/白嫖教程/index.html","4e2db100886606276184e8b502c08e1d"],["/categories/社会/index.html","b3749e6d673eddfa8c8127a5c2514d48"],["/categories/经验教程/index.html","d3d7dc6472f5436ed1ef8c638742556c"],["/categories/编程/index.html","7d14aea27be647df1873bf4f37975ccb"],["/categories/网络/index.html","2dfc86b430da965355f0aecb09fdf8a0"],["/categories/避坑教程/index.html","f0a30470a188af5e2678dc99bfeab88f"],["/census/index.html","66369920f83f9de3ff65bad7fd72d310"],["/charts/index.html","7894c1658bd3bb83f3edddd708ec64f2"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/cheesy_pick-up_lines.css","ae49a440c9ab2f4d7701482536e6a9c0"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/custom.css","f71314079a1cd56d36ca893e4bee011f"],["/css/custom/poem.css","17bddda78c8e0afa4a97512ad7607c88"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","5d7b5d2f77cb51040a7b90771ebb7795"],["/css/kslink.css","d53f6d87759a616d44c39c49f9364bf8"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/css/xiaoxitanchuang.css","af87366b57420784145a8ac87116327c"],["/fcircle/index.html","dc504a7a7ec9c7219d415eb3ee3f902d"],["/fontawesome/index.html","e90de59e304a43d2aef71f901fe6256f"],["/fonts/iconfont.ttf","a8cd5b9fda65955eeed6b8e630514612"],["/fonts/iconfont.woff","67af1334b7e8130b7bbd2de4772aa2a3"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/gushi/index.html","3109920302f1485255c9a60f2d59ce78"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","33b330e38bfb9f76409ad3916c4f88cc"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/console.js","2a905a927032e7525923e3088283b8c8"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/custom/cheesy_pick-up_lines.js","0128a71b81f2f4e1a208ddfb86cd1fd1"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/daohanglan.js","9b51657038de22ffc8c9c811e969df5a"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","6d89a6c660fd5509372776c897212da7"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fishes.js","ae61fbc397bb398ca3bf0c70887fea15"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/fuzhi.js","75feb06c0fa2c4d73016966a3852cdad"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/hygl.js","9b6585cf314a5410523ad02dada58b40"],["/js/kslink.js","26713629ccfefa5d57f5da35896a9ed0"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/newYear.js","2339aa8d21e5ca10b327737ff09ca6e0"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","635f5d6a8299912a1bab02b5c5d37913"],["/js/randomFriend.js","4816111040176357eee24ce919b7c869"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/static/console.js","2a905a927032e7525923e3088283b8c8"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/txmap.js","795e648d3c6b57aa1fcc9fc7fe5ae329"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weather.js","07a3f187e7a806bc4664606ab5c5e513"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","2563405cc9c3530ae852c334e5bcb926"],["/license/index.html","e2279f93803b2cc49c22d24c20915f3c"],["/link/index.html","94d89a6e7d4f94b13e0445202f80bd4f"],["/links/index.html","c79f1cd571e0d969512a32de5c691aff"],["/messageboard/index.html","a1c1f79e793b93a4133289a9818dd00b"],["/muyu/index.html","69a9e1e3e557f7fdeb36f47cf2e5c9f3"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","2ccac7352a860e8f72b4f9719cd1393b"],["/page/2/index.html","29e204b13a928b698f2536208bd2c498"],["/page/3/index.html","b253c5ff670968cd233c579d168989cb"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/0/index.html","84dd058f6fbf541446c5fdb68c1bc8a4"],["/posts/11eb4aac/index.html","e497a10edc85c149405efd2384254530"],["/posts/140ab620/index.html","72ce534546268e7bf461676aab25cd56"],["/posts/14740f7c/index.html","b56bc26e3f612dc3c45312bf6ef78eb6"],["/posts/1b850b16/index.html","ed66568c5c1ed171881ed33384ec99e8"],["/posts/29b0359b/index.html","134a67390cbfd53bd91c9e960f5b5881"],["/posts/30bce1d1/index.html","0b427db7c746ed0f4304387bcf0fd5f0"],["/posts/3ee11b0f/index.html","3b0bcc78a54bc1657dc72f2075a70c5f"],["/posts/45897d5c/index.html","ac690acee1172c9cf9db35f8660c424f"],["/posts/4ae2ec41/index.html","e9609b6bf230f36b87033a22098066bc"],["/posts/4bd8701b/index.html","5857751ef69d126ba728ba1eee49a33e"],["/posts/4ebac27c/index.html","1e3f3b9b3f1feb025684af9b42a0add0"],["/posts/53e6b356/index.html","2551eac99cf4e24630dc2f7f0311dd01"],["/posts/583ff077/index.html","1cf1175f29b01d4bbd191c73926b5e5f"],["/posts/5d71c71f/index.html","9416c5b7f7790c99ca444cf6fa07b629"],["/posts/5e2c4b67/index.html","7da2d2ddcfe992c6b9c46c96e32f825f"],["/posts/614f1131/index.html","088877d491a5a78f0cf99112c458de6b"],["/posts/61b9829e/index.html","1c49523cedfc7ad72ce7ffa44b9b3db1"],["/posts/65ad2601/index.html","27c754faf6b5c7c2309d3033e28c7d05"],["/posts/670e47f/index.html","5640a80d21845dddbb23e84bc6504b71"],["/posts/69707535/index.html","af89624a8a5a1ad6ba929b1fefa5ad53"],["/posts/6d1af91/index.html","3e2650b71dc3b5073a3bb8ce30d9b40f"],["/posts/6deceee9/index.html","c89833dd0d9dce15d997a4fcfe3d4665"],["/posts/70734559/index.html","58424df2a7e487db0e05f55a41247ef7"],["/posts/74e5e1ec/index.html","b399ac267252d9187ec128443b52a66a"],["/posts/7e9276a3/index.html","95e1865b63f5fe14d41915d126675850"],["/posts/8245da27/index.html","80004676d806c4891c12d1950275dec4"],["/posts/895003b5/index.html","3b3d4d82793832b51a32f161a3d43de7"],["/posts/8a79afbb/index.html","aa06de6f1bc53f5fed6ffea3d7eea44f"],["/posts/8b73c6b7/index.html","8bf65b5c5d345bcfbc50b3ce0aec056b"],["/posts/a1078b2d/index.html","88930c7a3ce05d3a274d4c7803961106"],["/posts/a61abc/index.html","e479d096f118d1309216e59fbc91e804"],["/posts/a844d9fc/index.html","7dd3ee61cd95237a5e5bf4b5fb454dfd"],["/posts/a90c94cd/index.html","0e5398db202ebbbc3395ad17b966aba8"],["/posts/ac792cf4/index.html","c88c49306af911b6bfdc98c291a375a6"],["/posts/aedd05c3/index.html","141a75e463862da25df8335819750a62"],["/posts/bbc95d58/index.html","ebf76855efe35008d42944c7cc92b99c"],["/posts/bd7ef112/index.html","93ee9b0be1509aa929b00ba539c0a36b"],["/posts/becc831a/index.html","ef11b53837b132f122f30133001bb8ac"],["/posts/d1fc759/index.html","e015a8bb5a4ac97b6f433e0f8ab263da"],["/posts/e433f3d/index.html","9902bf565b5339ef12a32f4b2ea658c1"],["/posts/e536ec4/index.html","682fe1a9412ce72067e5d4ff527bb43b"],["/posts/ec12b762/index.html","f56e893742c762fe63e05fb919b0a781"],["/posts/ff156c72/index.html","389afee91231bc9e2c7194164b35e22d"],["/posts/ff1701d7/index.html","904d6202428ab64d278a94174d5b8376"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","5b783762b5490fa94ea7f71b11624bff"],["/static/console.js","2a905a927032e7525923e3088283b8c8"],["/sw-register.js","90a6164923312aa866b136f51c9a62f7"],["/tags/Hexo魔改/index.html","40db47be412abf34a882e372b59ae7df"],["/tags/Hexo魔改/page/2/index.html","ac17269d2bdbedd0250be199ed1ed8ff"],["/tags/OI/index.html","411ac99cb6acef115f9d790f2fb15a34"],["/tags/PyQt5/index.html","d1ac7b20af2868feb466b60085f4ca26"],["/tags/Python/index.html","a321b2ad9dad8999841cfa89b25ec906"],["/tags/Windows/index.html","4548ccdadf424cf4f152a79cb1a243bb"],["/tags/goorm/index.html","729bf3fc37973890e0d0aac8ab2ae1f5"],["/tags/index.html","e8cedae76cdceb475cbef7b2b54d32f4"],["/tags/uClock/index.html","228194266d01051b66b733f89146b714"],["/tags/个人/index.html","c91a3875edbb90157595c5d84352cf16"],["/tags/域名/index.html","fb51b556d603d3615707ef77f73cf795"],["/tags/字符处理/index.html","011149eef908c3d39c37f74f9298f999"],["/tags/服务器/index.html","bef3a54da0ec256b9b487b52f194dee6"],["/tags/模拟/index.html","c659df3699ebc225497a6495c4ebad81"],["/tags/白嫖/index.html","ace5c6fd7a2482d1902d66e29538b5a8"],["/tags/社会/index.html","e025378a0431dc623278a7f812d2817b"],["/tags/编程/index.html","78b308e55203c8156e615cd17e85c1d2"],["/tags/网络/index.html","adaa5c1a54ffbe0666b1cdbf984d0031"],["/tags/翻墙/index.html","1be83c2f0efad6b865668b5b18771de4"],["/tags/贪心/index.html","22b372166511828060cbaa5fb92faf08"],["/tags/避坑/index.html","9b2ea01b7bfac1a168cddbecc4b21e17"],["/tags/高精度/index.html","de905fe87a9fc8e18ec74ed9ba04176a"],["/tags/魔改日记/index.html","2afbf9a212c599c8b1c99e1bef678568"],["/tools/index.html","fc16196a2e27fc54be5397432f93f143"],["/update/index.html","f7ff237d51081c1e50ad40ba121ac733"],["/update/links/index.html","3e0627794da536dd687fa6a222fef0e6"],["/zaobao/index.html","5141a89834aa030e57b3a600b7c1bc70"],["/zaobao/links/index.html","e38e90a3d6475ccac2c9e50174f1d75b"]];
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
