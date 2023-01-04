/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","e0c76a1c2daa536b9b9d5e04614c3be0"],["/archives/2022/07/index.html","4b49148717c10c947c7f11ea8a4cc8f2"],["/archives/2022/08/index.html","0cd5e4273445f097faa8827fde180f8c"],["/archives/2022/08/page/2/index.html","b5b4a749b373d3a3709204691a35262e"],["/archives/2022/09/index.html","5d1e3bf274e38fee2086e311110d4e3a"],["/archives/2022/10/index.html","dbdbcb1eb878ad00186983b477cc5114"],["/archives/2022/11/index.html","3c73b60f6ffeb998d4f5cca1580edb04"],["/archives/2022/12/index.html","e2005962648d82aa2d853a3d41d3daa5"],["/archives/2022/12/page/2/index.html","9c0788ad1c347da6b966f36c183aa1b8"],["/archives/2022/index.html","463b36f835a3d2932dd04a9236fe79aa"],["/archives/2022/page/2/index.html","e5806e65c4cf0351e09f374999f80ba4"],["/archives/2022/page/3/index.html","1dff3da5bb976ed18f5878db97d58792"],["/archives/2022/page/4/index.html","fbd9ebce2480fb4b39457179ffa59856"],["/archives/2022/page/5/index.html","b3700bb4f0274cdbf8ffb4d3060058a8"],["/archives/index.html","2cc8a4aadd3e0ac1321f589e5ba4102d"],["/archives/page/2/index.html","b52102d89ab3801c8788c81b574bc2fd"],["/archives/page/3/index.html","7cdf2fab2b8aa8ad825b92d38acc329f"],["/archives/page/4/index.html","cbc0ab9c36206eeccab67cb88e78020d"],["/archives/page/5/index.html","1de25ffff55ca3ed5f586f331ffb4c2d"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","823c1db8e3ea4c9b103e7a31cad202fc"],["/categories/Hexo魔改/index.html","e8b8bf692fbebf2ebac432cffc341367"],["/categories/Hexo魔改/page/2/index.html","3e1e9f7ff1699bf0c63483c0568e9fdb"],["/categories/OI/index.html","13b68509ea15a979538e2a095131d57b"],["/categories/Windows/index.html","053ede73e53aa84594dbfe7d572e58af"],["/categories/index.html","1e89420a2aa01d88178cd3913d5c22f0"],["/categories/个人/index.html","b33a23d0d4e4a586f4e75989c8a18e04"],["/categories/白嫖教程/index.html","a67aec938f196bd931b4070798276b77"],["/categories/社会/index.html","858db6dfa12354681ef487daf2723346"],["/categories/经验教程/index.html","fb2688827a3d331bddd72b8460ba9c24"],["/categories/编程/index.html","59815d639fa5a30733bf01792da8b951"],["/categories/网络/index.html","d09d6244aa57c7612582ca7b84d8e6e9"],["/categories/避坑教程/index.html","178f1a42d51ff1033c7afd1aff0bd7e7"],["/census/index.html","fd2969b6e5ddf53e9aee1b5779494813"],["/charts/index.html","53d903cc74974545c4d62a1cb4a0313e"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/cheesy_pick-up_lines.css","ae49a440c9ab2f4d7701482536e6a9c0"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/custom.css","f71314079a1cd56d36ca893e4bee011f"],["/css/custom/poem.css","17bddda78c8e0afa4a97512ad7607c88"],["/css/custom/twikoo_beautify.css","bde7a45c8e2894ce76ec22cccea66cc5"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","5d7b5d2f77cb51040a7b90771ebb7795"],["/css/kslink.css","d53f6d87759a616d44c39c49f9364bf8"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/css/xiaoxitanchuang.css","af87366b57420784145a8ac87116327c"],["/fcircle/index.html","8ee7a2458c7c529dffc20ac6c2eff23f"],["/fontawesome/index.html","1a4883c23ba7fa529933e3c27af884aa"],["/fonts/iconfont.ttf","a8cd5b9fda65955eeed6b8e630514612"],["/fonts/iconfont.woff","67af1334b7e8130b7bbd2de4772aa2a3"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/gushi/index.html","54b6e9082965a4067c58cf9837174a65"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","f67fdeeb5b22bb0ca0e357aa1301387c"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/console.js","2a905a927032e7525923e3088283b8c8"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/custom/cheesy_pick-up_lines.js","0128a71b81f2f4e1a208ddfb86cd1fd1"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/daohanglan.js","9b51657038de22ffc8c9c811e969df5a"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","6d89a6c660fd5509372776c897212da7"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fishes.js","ae61fbc397bb398ca3bf0c70887fea15"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/fuzhi.js","75feb06c0fa2c4d73016966a3852cdad"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/hygl.js","9b6585cf314a5410523ad02dada58b40"],["/js/kslink.js","26713629ccfefa5d57f5da35896a9ed0"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/newYear.js","2339aa8d21e5ca10b327737ff09ca6e0"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","ab64db2cfd3582d988b18a186cb99207"],["/js/randomFriend.js","4816111040176357eee24ce919b7c869"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/static/console.js","2a905a927032e7525923e3088283b8c8"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/title.js","c07740f77444c0e38d2c6d616afc366a"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/txmap.js","795e648d3c6b57aa1fcc9fc7fe5ae329"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weather.js","07a3f187e7a806bc4664606ab5c5e513"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","41371c6a20eac001f15addbfbe2892c1"],["/license/index.html","7fd085ef2e85201598215251240c5533"],["/link/index.html","1ab3cd7e575d3750bb9aa9c83ab649c2"],["/links/index.html","935fa7c8bbd3b344337407554ae5acde"],["/messageboard/index.html","ac03e8d1ead57551d66f82dd5b2e0406"],["/muyu/index.html","7437e32ea794e4b93b7f8d29e3108b13"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","6ed2b39388ee3b97f5eb42208b757038"],["/page/2/index.html","bf84bfb58c65b72e02323dd16a899a64"],["/page/3/index.html","292b731727a435e475b6f56cdec9dd6c"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/0/index.html","c67aff6e7b658e83575261c8788b6d09"],["/posts/11eb4aac/index.html","ae86c0482cc0bce3d5670095398b510f"],["/posts/140ab620/index.html","f3cbe719ad3c3ce5776387de4e99745e"],["/posts/14740f7c/index.html","71d165ea6c3e58d05e722e144dda29a7"],["/posts/1b850b16/index.html","dc9aa325cfda67602bb2b9faa770be84"],["/posts/29b0359b/index.html","d1bf6932c731031f5a24c2767d2427a7"],["/posts/30bce1d1/index.html","0bb5d14317763454f6b9e3c31e288b5f"],["/posts/3ee11b0f/index.html","cdbb4b61b56164fd93be2747c5c97953"],["/posts/45897d5c/index.html","507c24dcc295bc3ef1eba9dd05a957ea"],["/posts/4ae2ec41/index.html","acc8be671e149d3637bc8800e063d282"],["/posts/4bd8701b/index.html","70c5f3fb16e025ab56b392e39d69c9da"],["/posts/4ebac27c/index.html","627ea63b1ab2b6a26263a2fe58cdc5d7"],["/posts/53e6b356/index.html","b1ca59a88c533f74ac394c6566217162"],["/posts/583ff077/index.html","b0403c0c5160a59603aed6669ce80f7b"],["/posts/5d71c71f/index.html","3902a86c6282eb0e5b85fd89ff940651"],["/posts/5e2c4b67/index.html","ab56c39266c67c6bb100f48e87f6a05b"],["/posts/614f1131/index.html","39c93ce021e06340be130c2b4ba290fd"],["/posts/61b9829e/index.html","d840b29e7138141f7933ca9d53cd3dbe"],["/posts/65ad2601/index.html","9f28f7008fa35b106f8ff38a6389aa0c"],["/posts/670e47f/index.html","2d99f73c085752c76ddf231fb050eb5d"],["/posts/69707535/index.html","fe2df1c59233320b0334ac797190cb82"],["/posts/6d1af91/index.html","b3b43d792e1ca57508e3cec1c4104bbc"],["/posts/6deceee9/index.html","e4e2f869736f807c10721a1ab7a09b25"],["/posts/70734559/index.html","aa64e8fc30746995fa071a2ae4f21b4a"],["/posts/74e5e1ec/index.html","ab712c0e1f47568c3d88dfc4767b441a"],["/posts/7e9276a3/index.html","2c708a5b4af673e8deb286bd43278362"],["/posts/8245da27/index.html","3b21265ba813e83be6ed9917e2d6520f"],["/posts/895003b5/index.html","759d67e6d57057866f128423fcdb6cbb"],["/posts/8a79afbb/index.html","1631fbebb5fdec08ebf7c581a96fd5ea"],["/posts/8b73c6b7/index.html","1c106560ad2fa066f169ef01673356c7"],["/posts/a1078b2d/index.html","a2cc642fa85fd9ee4bbb0ec5f152828b"],["/posts/a61abc/index.html","64ac7f2ad643730382dc46b3ae82c440"],["/posts/a844d9fc/index.html","8d34286592ff710e5e801749c0531015"],["/posts/a90c94cd/index.html","98ac04234ba464021f76489201f8bd43"],["/posts/ac792cf4/index.html","0a03b6fea643f7b426c40849464d86ee"],["/posts/aedd05c3/index.html","fcb75187a69fa0c8f7dce1f59f841656"],["/posts/bbc95d58/index.html","f7de6c0ef3efefb93ec6bd1b55c7ee25"],["/posts/bd7ef112/index.html","7c4e37c31649c49460df1e475b94029a"],["/posts/becc831a/index.html","e69927f1e739a47f18fa45238b236e1b"],["/posts/d1fc759/index.html","d616c5c97773aab73817f14bc501bcc7"],["/posts/e433f3d/index.html","d51086d138333f60ffb1cf19f71b3c3e"],["/posts/e536ec4/index.html","af3d961be797022013372b1d3c460f8c"],["/posts/ec12b762/index.html","d09c0f43d65977111007335809f59a6e"],["/posts/ff156c72/index.html","fc9c26074bc001d2a9aabcb66759dcf5"],["/posts/ff1701d7/index.html","4c91fcb6098050826aa67b5167e48e02"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","4e49a70f81f3b65cd1670905b38e5b87"],["/static/console.js","2a905a927032e7525923e3088283b8c8"],["/sw-register.js","58da59bbbd6f795cae3c4513fe0c8c26"],["/tags/Hexo魔改/index.html","80ba4186fe0b9dd34b0e45045f4defcd"],["/tags/Hexo魔改/page/2/index.html","7d2ebc91f07104f48a20042863e3d3b5"],["/tags/OI/index.html","d50b80cb35d9b87036b6d895dcf39531"],["/tags/PyQt5/index.html","43d9b48cbf3119aab96ad9c0fe8d20b5"],["/tags/Python/index.html","add8cc9a091fc5888cf116d41e903d58"],["/tags/Windows/index.html","be48bda4042d35f735fe5477b51a6d5b"],["/tags/goorm/index.html","c693b98acb1f2703b2280a5cf63b6765"],["/tags/index.html","403984cda513f1bf608ce8d2f202f728"],["/tags/uClock/index.html","2a6e2462727ea5968106a76b96c617bd"],["/tags/个人/index.html","738b492df1f294943962fafdd5847369"],["/tags/域名/index.html","254207608e5b8dcf6e4084e80570844f"],["/tags/字符处理/index.html","339ca736c50ae95b4bd0f0f78edd0d29"],["/tags/服务器/index.html","31ffe7b9cb88eab265010b23dfa9e2e9"],["/tags/模拟/index.html","9753d8a08570a455da0ea4848737195b"],["/tags/白嫖/index.html","d4ae3bb0e51dd963427d063d6208a67f"],["/tags/社会/index.html","1ae278aef336f5141e12e475288b3414"],["/tags/编程/index.html","32f50027e008dd515804cb00e835ec92"],["/tags/网络/index.html","fbf80574a440ee6a0526f2d0c8a727e8"],["/tags/翻墙/index.html","ae1752660a62ffbb10154cb9f745590c"],["/tags/贪心/index.html","ccbc775f3479d0630d9885e9ae7ff426"],["/tags/避坑/index.html","ecf87223e3a28245bb5f747c4affba7c"],["/tags/高精度/index.html","d7d96e633be5f63501ae71146a91d5a1"],["/tags/魔改日记/index.html","1a4ed4de3b3a7e753fe104953395eecf"],["/tools/index.html","46469a8844b9eb015260e2d3702a30bf"],["/update/index.html","dd7e9251ce3c710f688379a0d2bd0347"],["/update/links/index.html","f4b0785d25cb5650883f09d319f97f6c"],["/zaobao/index.html","2414bc723619809529ab31ee00f08512"],["/zaobao/links/index.html","703ca88cb961079b850a4e5d25e509e7"]];
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
