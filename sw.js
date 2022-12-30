/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","79d4623767e110c8e3803920b3fa0c50"],["/archives/2022/07/index.html","b258c9ec4ed7a6ee45bb8e287899f34b"],["/archives/2022/08/index.html","89864fe346aca3c4f3948b7791344ba3"],["/archives/2022/08/page/2/index.html","1a9f42ed6ec8fd965b37f0bfb86fc41d"],["/archives/2022/09/index.html","04c9327b80e886da970458ec7f4bd85e"],["/archives/2022/10/index.html","86b337aaca42ba6568af66319d61e182"],["/archives/2022/11/index.html","c0018ab0876ccb4d514c3fa20eb4bf25"],["/archives/2022/12/index.html","6f31391cd1824bec5faf3a49f105e988"],["/archives/2022/index.html","c04abb52bcc423d36780f99a77a88adf"],["/archives/2022/page/2/index.html","24a5194525b2a0256d171dfe2020ae72"],["/archives/2022/page/3/index.html","a1bb1543ce5e803e4c0a3caba7035743"],["/archives/2022/page/4/index.html","7dd407cf79447314cfe933b4bc406f27"],["/archives/2022/page/5/index.html","4edc3f73da3de8be5f2f030011a4d6b2"],["/archives/index.html","d46c96fdcd872fe1f84576659012b952"],["/archives/page/2/index.html","17e0d85b8510f325b150c29eb7056969"],["/archives/page/3/index.html","77bd02853b02e24613c829d3d658239b"],["/archives/page/4/index.html","138a215187eaccc3fbb86121dea226bc"],["/archives/page/5/index.html","e6b8c30c23e9c6c6523ca0d5a36c9409"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","ca45287cb244dfcc24a5782d31a6572d"],["/categories/Hexo魔改/index.html","a8aada44b4d2feec01dcd34f46554a9e"],["/categories/Hexo魔改/page/2/index.html","e989d769dadba0f47f97e38285fee260"],["/categories/OI/index.html","53f5cc6dda0f234f148cd0ca5d4efcd5"],["/categories/Windows/index.html","ff0a684f8feef5060d906ab419f9bcdb"],["/categories/index.html","8f35d13ed021bbd04356a84e4657c0b7"],["/categories/个人/index.html","cf190a166bcfd17f9a37a93b6dab3513"],["/categories/白嫖教程/index.html","09aad25a5f12e24dbd6d8545a44efd3d"],["/categories/社会/index.html","9e2e3317ddd74ed9b53af0e001e76c44"],["/categories/经验教程/index.html","71adf8220b94936bb7098d0aa8de0a18"],["/categories/编程/index.html","f122fbc214a5e2c75f14ac75d5e8a885"],["/categories/网络/index.html","0c981aa706ca0b4d64c4a8742ad5cc4b"],["/categories/避坑教程/index.html","b78324ac032a3034d3279bda4c48add5"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/fcircle/index.html","26f432f523b5ff2c124bb02101d9c015"],["/fontawesome/index.html","2366dac4e72c798372d326a385c2c509"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","db271b6e60f4b773a0b05c94f300f82d"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","5f6200d44f29790a56d543703e0b15a2"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","02b702a258933436ef10e2d306678869"],["/license/index.html","30a1ba93675063ca802da10d95322341"],["/link/index.html","4637cd8517e61c5db90a9d2949160b21"],["/links/index.html","73adfe5f6dbbe702506fc8f2cdeacb2b"],["/messageboard/index.html","11d636b52b2d72272f82c39ee5b1e9ce"],["/musics/index.html","1911e26aa6a79f9522ec7ae883a4dc36"],["/muyu/index.html","a5b2ae9e6ac3dcbcda247d355f8d7c83"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","3abbe18a1a9c66e35317986cf38fb5d0"],["/page/2/index.html","9bd662aa8da6bbfe0f12eba0f7981916"],["/page/3/index.html","d7b93397bea42514499acf96d4cfa399"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","65482478fb85b812c025e511da96849a"],["/posts/14740f7c/index.html","634d730eb98390e6b64091494765924b"],["/posts/1b850b16/index.html","ab4b18e99666b847aadfe7a0c6fa0dc1"],["/posts/29b0359b/index.html","f3c489a53c886f4d275756b8d09f0aff"],["/posts/30bce1d1/index.html","02ac19abb52e271ecd6094dfbbe82eb1"],["/posts/3ee11b0f/index.html","d9417c96767aadf7406be3630e4ebeab"],["/posts/45897d5c/index.html","fd20b51f9751fb94ac4d26ca2338c576"],["/posts/4ae2ec41/index.html","1ffe86b9c9ec1d0a69238f18af579e5c"],["/posts/4bd8701b/index.html","74428ab8ccf22b6e6eb722c29a918680"],["/posts/4ebac27c/index.html","81ea87f5ddade3dbf7847f218e687c23"],["/posts/53e6b356/index.html","8ed9e9d6a4fbb8966ef2c781ab780e24"],["/posts/583ff077/index.html","fefb7a89ab958456f710bda2fbaa6453"],["/posts/5d71c71f/index.html","5ba80f67a602c9ea01b46eb2683b5800"],["/posts/5e2c4b67/index.html","e4c5d0d2149da2b55d50ee745b897b03"],["/posts/614f1131/index.html","c4d270df742a4e2fe3fab1d360461529"],["/posts/61b9829e/index.html","20cd4f2cac9e51669a6c63f65a32bcd5"],["/posts/65ad2601/index.html","426dc0ebb09177ba030c7aba75b55415"],["/posts/670e47f/index.html","7882a650c57de2f55e7c4a0987c0bcce"],["/posts/69707535/index.html","c7eb12084010291ff0317082749318e5"],["/posts/6d1af91/index.html","1986306747c82c237053252b98d0849c"],["/posts/6deceee9/index.html","46b7eed67c05a966e9dc8f4b4b2453c7"],["/posts/70734559/index.html","4a895e05d09910ca70e0a784b17d8126"],["/posts/74e5e1ec/index.html","a5aa73a9699c1faa50a4566f1f551747"],["/posts/7e9276a3/index.html","c505b67e360289e88d62394cbb0b3658"],["/posts/8245da27/index.html","b6f8bf39f920c314f6b7a4f8bc40e39f"],["/posts/895003b5/index.html","3758544dc0ace45888a0371da9386166"],["/posts/8a79afbb/index.html","d7e621615958c85bd2d569d5d6a38eb6"],["/posts/8b73c6b7/index.html","69fe4db63bedbc5349138561295dc129"],["/posts/a1078b2d/index.html","1fa88dfa4b6a1b4c183905a20fc818f8"],["/posts/a61abc/index.html","287c35d1a404f772c5f39660944371e9"],["/posts/a844d9fc/index.html","3635607cd84cdb236d8b79d7f92f6995"],["/posts/a90c94cd/index.html","ed2d5b22f49ff39aea1eef7cb025f2c4"],["/posts/ac792cf4/index.html","8c7e45d043659352551ba5e8a962b4fa"],["/posts/aedd05c3/index.html","817c681d8ef1dc93db8671491724a8ee"],["/posts/bbc95d58/index.html","637dacbdf77b90a5cd400370ebe6d1bc"],["/posts/bd7ef112/index.html","76e2bf1ed8144dda3ae21a0f7f7c7cc3"],["/posts/becc831a/index.html","0e00272009a870e91a51542f648c0288"],["/posts/d1fc759/index.html","4328819b32de113139827227db13c46a"],["/posts/e433f3d/index.html","fb1970279f108e3f32925147b8d129dd"],["/posts/e536ec4/index.html","6b251f0b4f8a8394deae4ab767186fed"],["/posts/ec12b762/index.html","76f780e1924e0a4891de79724900bb53"],["/posts/ff156c72/index.html","e9edaa2fee73229b7772d8eaf72753db"],["/posts/ff1701d7/index.html","2ae891c5da19f0c72df65ca01a112e4a"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","3bce4e451968fbebbda697aa6de9a698"],["/sw-register.js","82570be3b1010114fe82482a38b2e706"],["/tags/Hexo魔改/index.html","aedd804a107f1118f9debe705efcaac7"],["/tags/Hexo魔改/page/2/index.html","68eb5cd998491df06c01a45a8796dc99"],["/tags/OI/index.html","fd304b72771a7464090a9bb56c8fa5c7"],["/tags/PyQt5/index.html","6e3454234774d69801408e79fdc86bd1"],["/tags/Python/index.html","8bbc2827e255e589807dda3cfc55728a"],["/tags/Windows/index.html","fde1a4ff0a96bf3178739991346da117"],["/tags/goorm/index.html","504b40c6783e2337705b3b9017b45e19"],["/tags/index.html","b1177a67a068a988187dbc6d299535a9"],["/tags/uClock/index.html","7986777044e5483af4f4f0bf88d8118e"],["/tags/个人/index.html","6773178d13ee7d581cf8ff7f104c7eca"],["/tags/域名/index.html","8a74d16d4de8517145b9b0c8b95121a9"],["/tags/字符处理/index.html","d5ebd1f29265b97acdb0c32a3d0cad89"],["/tags/服务器/index.html","c8111c72e3b35fb8a4b7a8bd39a508e3"],["/tags/模拟/index.html","d4cec1863d056506a275366910244567"],["/tags/白嫖/index.html","814c29a70731f5ff26c8419ca6771b34"],["/tags/社会/index.html","efdf34bd405d4fff0c2d295b7035433f"],["/tags/编程/index.html","6515b2f6a2d4c2f0bd3eb7ae1585ca33"],["/tags/网络/index.html","663edfe34474f9447cef7146b51cc577"],["/tags/翻墙/index.html","8bf30fc1a611fbe3b2cf155c6d522031"],["/tags/贪心/index.html","eeae953711eed8c9e71fb9402996b610"],["/tags/避坑/index.html","d2f236521cdd250aed77ff707c0ea27f"],["/tags/高精度/index.html","5856b55d3ca2d37a7a454a7105fdb875"],["/tags/魔改日记/index.html","a5f480f22132e9fe06faf1570947434e"],["/tools/index.html","67841933111e27531b65ebc27d99fd5e"],["/update/index.html","a02309d22dc08c83c366cd90293e6c58"],["/update/links/index.html","cd4a7222e5682b521758651b46cf02f4"],["/zaobao/index.html","7366e3139925cc3c2d916ca9399d5115"],["/zaobao/links/index.html","5414b91e5766c8c3e21790ff3d66f6f7"]];
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
