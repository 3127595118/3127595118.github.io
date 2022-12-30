/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","bb4df84d9ce36f44b4d234a3c356b9c2"],["/archives/2022/07/index.html","7376963aaef49aab5b89812f84f458c8"],["/archives/2022/08/index.html","91c30d4e873767a080c0e109a6fbabe7"],["/archives/2022/08/page/2/index.html","2aae233aa2013ad41b5965865883bb6b"],["/archives/2022/09/index.html","0b2b71bb74a38939fd968898b0437459"],["/archives/2022/10/index.html","26b173659d032b1b7934ffef4a39e445"],["/archives/2022/11/index.html","442a7aebcfd87663d342edbaabd71c8d"],["/archives/2022/12/index.html","7c9aefab7909d149a2fa13e414050685"],["/archives/2022/index.html","41ebcf2eed5572bef77ad84bf6c51581"],["/archives/2022/page/2/index.html","9a5af0fa48a7cbbb9845dc4698951e8f"],["/archives/2022/page/3/index.html","b5137f5a8b3ab53f34180e98f53c9ca4"],["/archives/2022/page/4/index.html","e80a23059c6e84494eb6c64bbe1f159d"],["/archives/2022/page/5/index.html","ef6151c705cbd329aaa6c4564ba1ecaf"],["/archives/index.html","cbc857d981de10264cfae1ba3bdf32dd"],["/archives/page/2/index.html","3112cae3825a7abd36f8cabbf88d4a24"],["/archives/page/3/index.html","320824592fdc1c46f175742b40b21713"],["/archives/page/4/index.html","99f1ffc20175ef7425365b218dc2239e"],["/archives/page/5/index.html","1d5064e3a0c11c96cd3f6e79fd63d3d8"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","a536541e53780196cd7e187de116180f"],["/categories/Hexo魔改/index.html","f2f8e0257e1a192662c2dce52517d633"],["/categories/Hexo魔改/page/2/index.html","dd38a5b3e33a4cbdd2285e57512e7a6f"],["/categories/OI/index.html","01bb89dc5ac6729b103294cf30210438"],["/categories/Windows/index.html","d63e288e400bae974630219886f9b3df"],["/categories/index.html","3d549f29fa7c4f5bd573f642b65f0751"],["/categories/个人/index.html","6adaec2f09f5c4bba1e3091bfbe3e9b4"],["/categories/白嫖教程/index.html","2a5bf54348e14b6cfc6d14329eafa8c5"],["/categories/社会/index.html","f3bda43c1dad89c0aad74596a378837e"],["/categories/经验教程/index.html","60474785f76c3a473c5cc22a39f5328e"],["/categories/编程/index.html","1c69de53385eb6412996d24308deb933"],["/categories/网络/index.html","40b787089e56a7b755022320e8d607be"],["/categories/避坑教程/index.html","001e60c7bef9a1579acd29be34b98d4b"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/fcircle/index.html","14ec50e79bfe7712d388303bd280eb3a"],["/fontawesome/index.html","546c7dba41994ef4fd2b391eb4babe66"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","ed375dabeaf2ea2f99829a965d39a1d0"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","82776f3cc3894f2170b3ecd6c9e445b9"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","726041c4b13170c2f6aff3968344b511"],["/license/index.html","54c5bdd363ede1b8bc38a3faab2cc4bf"],["/link/index.html","ed9bdc6f2f7c7fe271715045d548d4cf"],["/links/index.html","36a608c192e05a5857969d1536bb0d02"],["/messageboard/index.html","4eef761321043fc42d8f3ea1d26c7742"],["/musics/index.html","8723cad7a2b40eab0bc38a782cfda199"],["/muyu/index.html","740f6e5637e9c90a2025763e66e73c34"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","ff3112f1628e06a9f91800b95521e49a"],["/page/2/index.html","902f8aba2edca683a55cdaf376681c30"],["/page/3/index.html","a82863b6449ec287f96ce06b3e73fea2"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","872f8a3c9b5e7613bdb68e1337363af0"],["/posts/14740f7c/index.html","e932e74622c4030423539907e35d348e"],["/posts/1b850b16/index.html","625a47f56cb0ad09235707c1a9d0006f"],["/posts/29b0359b/index.html","1f07bbcfbc8767c2bbe84e46213c541c"],["/posts/30bce1d1/index.html","1e4d3eadedabba50a05eeb8b1e30a699"],["/posts/3ee11b0f/index.html","a2ec72a54da4653dc862d91222ff57af"],["/posts/45897d5c/index.html","5d74e92409779a6ba2202d706a5488a5"],["/posts/4ae2ec41/index.html","abfa87d734d9ef74100a5748ae0059f6"],["/posts/4bd8701b/index.html","fd7b874ba31f3bdefccdb5ca8b06c5c1"],["/posts/4ebac27c/index.html","ca96ca573a86f012b58b59bd5040def0"],["/posts/53e6b356/index.html","bae95c2b1e82f87293c8998f04fe8bc3"],["/posts/583ff077/index.html","987ec5483ce0f560c75cb9ba031d6589"],["/posts/5d71c71f/index.html","cdf02bbdb7cece5e54bc9f89a4138a29"],["/posts/5e2c4b67/index.html","a8a4bf47d3d244e238b88f6050410c0a"],["/posts/614f1131/index.html","123062c81ba3c4febdd734be7357f94b"],["/posts/61b9829e/index.html","2fb99138c7c39cae1ef46c21c680dc9c"],["/posts/65ad2601/index.html","fa3ddc27dff60f503f2df8663eb103d4"],["/posts/670e47f/index.html","33e07ddf4229732f43abf35de1e6973b"],["/posts/69707535/index.html","27f0292b228baacdc42e69d961b8dbe4"],["/posts/6d1af91/index.html","2389610f7ce06f287a28347dbcb4c709"],["/posts/6deceee9/index.html","bb5fb4bec64cbbd29378910267324470"],["/posts/70734559/index.html","9a865e4ccd8992eab7139a699ac3c379"],["/posts/74e5e1ec/index.html","482f5be211a27ff116fddb19d3edf09f"],["/posts/7e9276a3/index.html","750580e81c4e37c218805d35bd5cdd19"],["/posts/8245da27/index.html","1eb6660d1c33a228fdec4bd03f2e2d4c"],["/posts/895003b5/index.html","8cd37785eb363f4da902fe2c05dcb244"],["/posts/8a79afbb/index.html","580ebbdcc3c589d15b480b39daaa27d5"],["/posts/8b73c6b7/index.html","c9c2269c41b5f6466a2dc68a21af996e"],["/posts/a1078b2d/index.html","caae9868ffdfa6ad98da8a8147cdbaee"],["/posts/a61abc/index.html","af4a3de9462c17e0a1698c507c98f734"],["/posts/a844d9fc/index.html","6c5776118bdec5c9aad3957cc4f12697"],["/posts/a90c94cd/index.html","c9e4c9689c90e16670c63d2e807657dc"],["/posts/ac792cf4/index.html","779491a0a44dfecc43f13885a331cec8"],["/posts/aedd05c3/index.html","2f3c8ea2e99e4d21afccf93090bad65e"],["/posts/bbc95d58/index.html","dbb46e5d7a7f43c8a707d2fb84fce1ef"],["/posts/bd7ef112/index.html","08949782974110b109c80a894bfdc09b"],["/posts/becc831a/index.html","f2b6147e2fb8938cf3d60aa60bf8665f"],["/posts/d1fc759/index.html","a0c0770b248b581cb5dc53058b94df05"],["/posts/e433f3d/index.html","8d97f70c833d72262931589a67920466"],["/posts/e536ec4/index.html","308b2b62d2ac8371ab04922d533e7a5e"],["/posts/ec12b762/index.html","f9d664372abcd2cd81aba979cbe506fc"],["/posts/ff156c72/index.html","1e111bca65ebb67ed22df11c98993da1"],["/posts/ff1701d7/index.html","4e9c95461ce9cc61f9724845370e682d"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","54e82b87944d31e6788604fdcfef3aba"],["/sw-register.js","efe4a372ac349b808f6e3565c87eb1af"],["/tags/Hexo魔改/index.html","a215506f37be20ec3bc9067a222c316e"],["/tags/Hexo魔改/page/2/index.html","feb2bfab8820dee280a289615069dd61"],["/tags/OI/index.html","2d579be6a59732a951ec0645c07ecce3"],["/tags/PyQt5/index.html","4470bc05a7797ee7c81e7a9e2542395f"],["/tags/Python/index.html","bf424f4c2a34f3590e7dcd8ed0956395"],["/tags/Windows/index.html","1689dc2208e4be638b4b5073369db86a"],["/tags/goorm/index.html","de4e65694a4836fa3c5d2d6cd0f329eb"],["/tags/index.html","f2599fa2a3c8dc587309863420b4e00c"],["/tags/uClock/index.html","b97b927b8b15e556ba63c04d935b5155"],["/tags/个人/index.html","f4b3f7df42f38dd8c92f12c0c1debee1"],["/tags/域名/index.html","20ab0f2bacbf63ec9cbb23d967ba7203"],["/tags/字符处理/index.html","f366f7c8bc69fe7edd60180199265801"],["/tags/服务器/index.html","73285c0e4902535f9c040d5d3c5d25cd"],["/tags/模拟/index.html","d54bdef7c3cb229b3841d152a79aa5bf"],["/tags/白嫖/index.html","6441d6c4a13e9e0152dbe1a74905c138"],["/tags/社会/index.html","cf0d585ce6457de91fa738cd0dfc58a4"],["/tags/编程/index.html","63931402a23f18f52df680937f79a2ec"],["/tags/网络/index.html","fca3975547533cd882840c1b462aa9bc"],["/tags/翻墙/index.html","c683ae9d57ee70391d37fcaa59a4d733"],["/tags/贪心/index.html","acd7a256797abe7372952f16cfa30488"],["/tags/避坑/index.html","893a1f00a6e7e17134c54d65127caea5"],["/tags/高精度/index.html","f53ff356ce7b56e12aae54d467b78b1a"],["/tags/魔改日记/index.html","2cd3989035b01646ab7e2d0740186885"],["/tools/index.html","fd45a597249f920d3eb2ae97475bbe59"],["/update/index.html","6dc85288c2e050bb3bf812ad86377e1d"],["/update/links/index.html","485ee6e7812682fd3567835981fda135"],["/zaobao/index.html","289ca86378575c3a5ba3c094329cff4c"],["/zaobao/links/index.html","8f17ae22b7763c9b1aab7e66e73c064f"]];
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
