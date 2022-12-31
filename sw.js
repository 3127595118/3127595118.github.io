/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","1dded20dfb3294dbc5f038a2f3594013"],["/archives/2022/07/index.html","c18c8bdc050f8974bda9a9d52e991770"],["/archives/2022/08/index.html","dda709ef07b850c96e1cf50414ca560a"],["/archives/2022/08/page/2/index.html","a72ea563a8758cb452289b40ae281fb1"],["/archives/2022/09/index.html","10d05b8def64cd7482e19af733e1893c"],["/archives/2022/10/index.html","8a376ee8867bcb2cf32ab9579fd21b6b"],["/archives/2022/11/index.html","e5d5666efd1f705a6b3fc6be92f21a23"],["/archives/2022/12/index.html","58d42c657a18f3c90f0c4060d2d7176d"],["/archives/2022/12/page/2/index.html","46ac6ac35e15a7c299095bbc78ae22ec"],["/archives/2022/index.html","e6d8dbba6b467888fbbb03f82a4511ab"],["/archives/2022/page/2/index.html","dab6064bcb8dfdf0583eefba03c20a17"],["/archives/2022/page/3/index.html","d275f338d1770327231e406669ed305b"],["/archives/2022/page/4/index.html","64b41aaa1c1e5472bd240b149d90ecc6"],["/archives/2022/page/5/index.html","27162c503d0708861e8f62de1f7eba73"],["/archives/index.html","9f427262cabc1e70faf965786a2525d2"],["/archives/page/2/index.html","c6a44a5ef0b8ab2abdd1d885de459827"],["/archives/page/3/index.html","caee8ba16bb971c7f0355a81cdde950c"],["/archives/page/4/index.html","45f1333c97b0dbb6f34f24e456845518"],["/archives/page/5/index.html","8f0a20ad021a162e15615bc054b25421"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","7da3c4852667c9f1f2c599ec41bac941"],["/categories/Hexo魔改/index.html","44951ee953254b7b8af9900a82a48c77"],["/categories/Hexo魔改/page/2/index.html","44a12dc2d6b1b1151c7bed09bf075325"],["/categories/OI/index.html","37aeda7d715d16e0da79c8d64d240fe4"],["/categories/Windows/index.html","890a9967f38915a11798e1686f155da5"],["/categories/index.html","74a6483a0db201ccfc2603dbc4f9f8ec"],["/categories/个人/index.html","1db4fe9d35e9279b987a9909ad5da788"],["/categories/白嫖教程/index.html","e1d9bdf87c6d1f211f9483a94aab45e3"],["/categories/社会/index.html","253745fd57d6f5f50c082b17bf1f455a"],["/categories/经验教程/index.html","3cb89825795fbd0b8a1bdb269776dadc"],["/categories/编程/index.html","436e719afbf31a18aa5895c6422637ce"],["/categories/网络/index.html","9add195b918a27f7d83d46f8bdaef7a4"],["/categories/避坑教程/index.html","94be21f3162b3dc5aec44db8a60e90ac"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/cheesy_pick-up_lines.css","ae49a440c9ab2f4d7701482536e6a9c0"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/custom/poem.css","17bddda78c8e0afa4a97512ad7607c88"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/sweetalert.css","4668c1e648b8f58d442ed5b6b2031ee1"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/css/xiaoxitanchuang.css","af87366b57420784145a8ac87116327c"],["/fcircle/index.html","4e9caf96ecf3f0dc0f71627a40956f34"],["/fontawesome/index.html","92c504864873547920ffd1a98eee539d"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/gushi/index.html","dc81b5db53342c5b427ab7f67480ad59"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","aa76a20b5f2a4128e3069a074fd3040f"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/custom/cheesy_pick-up_lines.js","0128a71b81f2f4e1a208ddfb86cd1fd1"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fishes.js","ae61fbc397bb398ca3bf0c70887fea15"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/fuzhi.js","75feb06c0fa2c4d73016966a3852cdad"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/hygl.js","9b6585cf314a5410523ad02dada58b40"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","f991865d5c92ba4d317aa3aba5d1bb5b"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/sweetalert.js","25e927bce400d2204ff6391e1ee44b7a"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f3ace3f6e6af1896108651c4eb93aceb"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","93a1db25a12577b504318222bff85f49"],["/license/index.html","7f2421541b48d3e09f30fe3db9c16a16"],["/link/index.html","51a47ed607b3de1ef72e5b313ca329b8"],["/links/index.html","fe7b47d81f4e91ec87e0610fa33bae01"],["/messageboard/index.html","c9f164db7e66b17ca041c474b04a9e8d"],["/muyu/index.html","7afa782ccc3d28827814978333c4ecff"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","5402b6244a5a91e9681bb2aae75cee5f"],["/page/2/index.html","ea52eaa5deda257d9ee22168f5370218"],["/page/3/index.html","fe1bfc856f74be416b86b8a2fb13e912"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/0/index.html","d82d3e16d4655118011bfa3078c08430"],["/posts/11eb4aac/index.html","998590f7708659fb0a1cb75007c1f898"],["/posts/140ab620/index.html","57c37a6ffd8918c16a825d06182a9502"],["/posts/14740f7c/index.html","7968171f653d023a3ff598148dd62eb1"],["/posts/1b850b16/index.html","e3d1b846ce8c018b87e667c0405329ec"],["/posts/29b0359b/index.html","7ffd025e43686c93502001c5dfdb0a97"],["/posts/30bce1d1/index.html","657961fe6c0efa308908b6a29a85ef09"],["/posts/3ee11b0f/index.html","1f58559291cd62e01e528179f1476b7a"],["/posts/45897d5c/index.html","33003748865929c7e06bcf3f59df05bd"],["/posts/4ae2ec41/index.html","8a8a3c06f2c2c2363826ddde862d26d0"],["/posts/4bd8701b/index.html","ec667066542404683633ab99c2595e8a"],["/posts/4ebac27c/index.html","f48054ea7e9dc640e1eb1e7d38772564"],["/posts/53e6b356/index.html","82b889c1402278f3aeded9ac868fbc23"],["/posts/583ff077/index.html","3b57c38b80856950074005538a54cf1c"],["/posts/5d71c71f/index.html","1c1b54d8b66790709977cffa6cdb5d6f"],["/posts/5e2c4b67/index.html","c90b5c266d637a2ecbcd8b8185672d40"],["/posts/614f1131/index.html","3600bafe87c0fe78230f96a6a1c54e59"],["/posts/61b9829e/index.html","12dcfde1decd8d1f490d05420db5f761"],["/posts/65ad2601/index.html","4f85bc7ad327c0cebae90d9a660dc221"],["/posts/670e47f/index.html","03f23e4d2c407f305859f68f940a2044"],["/posts/69707535/index.html","874ccaf574958128a7c8112bb90426e3"],["/posts/6d1af91/index.html","53af4a85397a000939c3c0b840de48fe"],["/posts/6deceee9/index.html","d1bbc6bc0737b3533715b86c3ec01351"],["/posts/70734559/index.html","92a2a37827c2c922ab828793d59b3e43"],["/posts/74e5e1ec/index.html","121d6c3c903c839b9167336409ec1b9d"],["/posts/7e9276a3/index.html","489f0877a989013f12b231e5c13eaa9f"],["/posts/8245da27/index.html","b6c7f25bd204c72c8f09f4f79a95d294"],["/posts/895003b5/index.html","8bead3d5755371981b73bd9203591310"],["/posts/8a79afbb/index.html","99ce9259c98964941b2cfb79fd42d844"],["/posts/8b73c6b7/index.html","d84abd88e278d1ed3563a29f5f8f066e"],["/posts/a1078b2d/index.html","d39c0cb93003035250f8e6a9e1f5b263"],["/posts/a61abc/index.html","fec168d15d1140ef33ef627e221ecf7f"],["/posts/a844d9fc/index.html","ada0b250d080e1bb09976442915a727c"],["/posts/a90c94cd/index.html","5acc11656fb47729fd6832e0a6aabba5"],["/posts/ac792cf4/index.html","bc9d587929f93b5516ace2ea93b71ce5"],["/posts/aedd05c3/index.html","bcd14ecc00b4885dfef0f3decce53220"],["/posts/bbc95d58/index.html","672330509ce41f231c8da28f94dc4696"],["/posts/bd7ef112/index.html","1310b7d99d02e409203a45549544f747"],["/posts/becc831a/index.html","fd46db3a782599747846f72771092657"],["/posts/d1fc759/index.html","200ce130bf0b057f6382d18b36d551bd"],["/posts/e433f3d/index.html","e0415abe212c65398bbc4478ec31716a"],["/posts/e536ec4/index.html","45472b2d65d2e4d2ad9d816fb199a7c6"],["/posts/ec12b762/index.html","f7196cd23bb0ad5cf10a1d3430597131"],["/posts/ff156c72/index.html","aace78819960c46acdca67869f465600"],["/posts/ff1701d7/index.html","bafa5c6e4e13f32fdc77534bc983f865"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","d122a1050df80aee1c729210ee5ed3ba"],["/sw-register.js","d9ef98cd0e8256f0e3948f1b5be7ee56"],["/tags/Hexo魔改/index.html","56aa754c5d7c83339823c78f05f627af"],["/tags/Hexo魔改/page/2/index.html","2871d67dfa56e373dba52d98946af041"],["/tags/OI/index.html","87fe608906efdb7e9a855866167e326b"],["/tags/PyQt5/index.html","d3b54683ee623bef43591c664c6ab59a"],["/tags/Python/index.html","27664512a888d06a1de8b42c49d9fef4"],["/tags/Windows/index.html","623f6e65d4372989cfd0d1ea6d09f9b4"],["/tags/goorm/index.html","25cee2b9ab6d0d799c9745b405544b22"],["/tags/index.html","b02640972b2be5dafa017a50b4a30416"],["/tags/uClock/index.html","e89f90895c480420635cf6bb44dd7711"],["/tags/个人/index.html","256a9dfaeb2e1d6db2a7c3cc9d20e2df"],["/tags/域名/index.html","e3f1d27b2903d894d05c20d81eff682b"],["/tags/字符处理/index.html","72cc4931203d4626b31d73a6f6deb0aa"],["/tags/服务器/index.html","734db3e0106780d837a819005233f544"],["/tags/模拟/index.html","d5fa5d65f27ffb27d0cb79667c77eff2"],["/tags/白嫖/index.html","94c2c95fe9ddeef4aee8648bc5824931"],["/tags/社会/index.html","8d54685e08bcff4158e4d2f63b69e1b3"],["/tags/编程/index.html","7cce0bbca310b6a0034475607ed8692b"],["/tags/网络/index.html","9b1cdbe74d68e0f96d3b4fda6c427f73"],["/tags/翻墙/index.html","4647d5be4908d673058893c306c424da"],["/tags/贪心/index.html","fcd9cda831711fb408e4fbf6c854bc81"],["/tags/避坑/index.html","52dc3d60498d9afb7c7477f782388219"],["/tags/高精度/index.html","c5fd8bcef812bc2655c4993d9feedd7e"],["/tags/魔改日记/index.html","4c08001d1d98089aab503fbb3755014e"],["/tools/index.html","6ffbcf46f5fe5a596081866448fc5a99"],["/update/index.html","136c47665444a121a5ea9115b3514b08"],["/update/links/index.html","528ac14abd828ae72a9fd24393a19c25"],["/zaobao/index.html","d813381c6f43d0066e98a27996e198c9"],["/zaobao/links/index.html","f92e01bec75c191f4a36a86f0134316b"]];
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
