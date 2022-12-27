/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","b89a463a235b388c238d7f50aaa8eb62"],["/archives/11eb4aac.html","bd5633066a81faacb6259e84e07fba62"],["/archives/14740f7c.html","a674914899ae8a38fd2c11a61b291010"],["/archives/1b850b16.html","4c2e9b07329c318885f3180777928d7e"],["/archives/2022/07/index.html","2d108c87e3680dbf2197c8760d6b2c1f"],["/archives/2022/08/index.html","af0c98d95e6879a5a150e200d99c9cd5"],["/archives/2022/08/page/2/index.html","27bb493f8260a97df20fd928ffe068b8"],["/archives/2022/09/index.html","cb2b2bcf76ba64ef824c29832ac28e9a"],["/archives/2022/10/index.html","42631052213627436c7e72ad7efe3ec8"],["/archives/2022/11/index.html","96d952789a5bf5121a42002632b90884"],["/archives/2022/12/index.html","39fccef11c77e58190fb824e3b5b7946"],["/archives/2022/index.html","6a6632556626071f8e5388349c39fdaf"],["/archives/2022/page/2/index.html","21f5d92179cd0b2da5a17ab2239bbbb3"],["/archives/2022/page/3/index.html","5dd41537ec608b0a01570791b471425b"],["/archives/2022/page/4/index.html","1a1a8125423059f461cf572672e1c305"],["/archives/2022/page/5/index.html","fcc075ca6ad5e40139837a416c01145c"],["/archives/29b0359b.html","632b94171aae65e565416a7c00a6634b"],["/archives/30bce1d1.html","06bc6e2638dc7bba496bf1bc09804368"],["/archives/3ee11b0f.html","52c44c51ae595644c2199791b73baa18"],["/archives/45897d5c.html","0da6e5b8cc0d41009ada586d27649f05"],["/archives/4ae2ec41.html","f921ec75b2b2b210d5df8698a55911c6"],["/archives/4bd8701b.html","f1cdf03e9c4e5aeb9ce4a4f51d0685f0"],["/archives/4ebac27c.html","0b8ca5b6efda417cb319956eb666d9e4"],["/archives/53e6b356.html","7cd2fd78d662e9e58862ed741c1f927e"],["/archives/583ff077.html","b7677cb6c8ad476fae8ffd4693530b7a"],["/archives/5d71c71f.html","0360e7e98ce75e28041999681c9cb7ae"],["/archives/5e2c4b67.html","4a1b7623bd730b92d956ddf372d176f3"],["/archives/614f1131.html","d9d28d0e06e50395b0ad235d9cbd56cd"],["/archives/61b9829e.html","b4ed34d4efd684f22d04ae4aab7bc1ea"],["/archives/65ad2601.html","d67d5842d12eec71c3dc5eb5c8110a69"],["/archives/670e47f.html","5b8c78b01c1f8688f6f1e0d295eacca8"],["/archives/69707535.html","03732f46c9fc106890a862b62afae890"],["/archives/6d1af91.html","8938c9879a9f3a54e120f0b9f9388ba8"],["/archives/6deceee9.html","7fcd9d5f6f69574d971db8bd3ae4bfec"],["/archives/70734559.html","a80931624bd0c4b33c0ba9deccfa19d2"],["/archives/74e5e1ec.html","3418cf2c33fb8fc90a3b4b0ead63ca64"],["/archives/7e9276a3.html","f7a07f93ab2f19e300c626d2dd594524"],["/archives/8245da27.html","6e1cd33d2c946cf47f132b57ddb68349"],["/archives/895003b5.html","133446c533ea665cd775d4f3dfc0ad7b"],["/archives/8a79afbb.html","89b408d17cc332338915ec96babf916b"],["/archives/8b73c6b7.html","1df26799a530be514e35baeb2044d0a9"],["/archives/a1078b2d.html","8847eeae222a3a293ee8c552816b19b2"],["/archives/a61abc.html","738f6124f6537b70788a7a9ad3331ee9"],["/archives/a844d9fc.html","ddd256a9c2d71468fbe26ceee7c268b0"],["/archives/a90c94cd.html","b7e1251b57e6642bfddf4277f1ce83c0"],["/archives/ac792cf4.html","6b895875f6021384db89ca885e72be83"],["/archives/aedd05c3.html","e1bb28f301110e18987d2ddde7d95bf1"],["/archives/bbc95d58.html","adc7fbe2300bd8490a0cd33b217e4a49"],["/archives/bd7ef112.html","f617e0b6eb14329806cd044e82603bd6"],["/archives/becc831a.html","4ed7ebb713e95f56a9159b8177583c4a"],["/archives/d1fc759.html","2032bc8520e26a07235a874e6bf66946"],["/archives/e433f3d.html","4c061c9a8335f60de60245d30653ed46"],["/archives/e536ec4.html","1131ceaf73ebba277956a0730cc97ffb"],["/archives/ec12b762.html","826bafa08d860b57e1b70b5adf353818"],["/archives/ff156c72.html","c959ce3baaad2fd7ae62bf07e0ac17e4"],["/archives/ff1701d7.html","3242c04317bdb330b45a18b37a2c41d8"],["/archives/index.html","d6051ccb1deec5adfeba10a0e868fafb"],["/archives/page/2/index.html","d2acfec381dff8303093311d4fb3c357"],["/archives/page/3/index.html","e0d2fef5a377729210f2da2d0aa7cb3a"],["/archives/page/4/index.html","fe7017c1c2dbf1722e16bfa028d137d9"],["/archives/page/5/index.html","27132dd86cc36bff5f6ba8c7dfe48e33"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","b4607b4fe48cf0dc70c470b18cc6728a"],["/categories/Hexo魔改/index.html","75166b24892219808d7d4e9b6dd5ff24"],["/categories/Hexo魔改/page/2/index.html","ad4141cae1a903bc031e8885b1908868"],["/categories/OI/index.html","5e37e4b82789c5911523f588ebc7020d"],["/categories/Windows/index.html","89580d70489394a15c252392ef7f3677"],["/categories/index.html","883d522b7e3f64d817a1811ef18f08b0"],["/categories/个人/index.html","bf0676b7ccf90f869f28137b490bafea"],["/categories/白嫖教程/index.html","b81005b92f683c0fbc9690a5efc9dc10"],["/categories/社会/index.html","d5519e5d71aa5159fd1a3cb99854ae8f"],["/categories/经验教程/index.html","29cc8e44c7760ce39304ca92c7bcd66a"],["/categories/编程/index.html","721c3d6f60385aede2dc65f2f8650f11"],["/categories/网络/index.html","0c196e45cf42c5dbd771f523d404eeb1"],["/categories/避坑教程/index.html","4c625206c246c00dad713dfb54cc1799"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","ce1e513ce001e2366eed7f70c668d1db"],["/fontawesome/index.html","c014f9b7fcebd989411b6c58eb42dc2f"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","644ca533ea628116db29c345384d0806"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","2dc2856a158171f46544a0ac4437533f"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","dfd0334ef07a82b6de0c531f4a4af1ab"],["/license/index.html","a5f9008a95e4459216c1438e83fda4f8"],["/link/index.html","ea1cd49b1ff633b4a4b0b699fe6a44dc"],["/links/index.html","4c52288eb86472aa6fe66cc72eb570bb"],["/messageboard/index.html","65dae14611cdc232643f5e439f1db4a8"],["/musics/index.html","f51b2458ee5d9c65a9003b56832abcdf"],["/muyu/index.html","70746a3d1b3aacdae850af5dfb05347c"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","22c5e54637afc9b52a7cb8bb4880c880"],["/page/2/index.html","fb10987bad8ee6a256f60aae14078a7d"],["/page/3/index.html","0bd5be7f52844a8584b8895589cc7ff8"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","6973086351eb92a77ad4cbb19a916290"],["/sw-register.js","be5baf86c222035804c30d098c0d8c18"],["/tags/Hexo魔改/index.html","fef9dd171f23bb4755a01a313ffbaf55"],["/tags/Hexo魔改/page/2/index.html","91e20283ac039680832b17416877b34e"],["/tags/OI/index.html","ce02679d410639c14382b503aa97df32"],["/tags/PyQt5/index.html","2aaf10d035a85b07a71e84d8556a5513"],["/tags/Python/index.html","5b4e9452de7076f0d2bb7ade44c7d5f6"],["/tags/Windows/index.html","681d93cb2b1738d7d23420fd16a43f44"],["/tags/goorm/index.html","81542a2457e95a5e7f1e9a417336301d"],["/tags/index.html","01a19be8190a5a941d72a6f6abd76d4c"],["/tags/uClock/index.html","0516b93c313216ab8d755863566f3615"],["/tags/个人/index.html","0501c1290785933e398d23990bc58ab3"],["/tags/域名/index.html","e48574c20900ac0bfeb4b5200657ecc2"],["/tags/字符处理/index.html","058f2a6f19020b7914de04c0aca6c2a7"],["/tags/服务器/index.html","19ef3b4d227b7dd5b3aa8a171317551e"],["/tags/模拟/index.html","22830f31b5b09ae0306d3351e9f168e5"],["/tags/白嫖/index.html","5138f086f422262c4a08fc573eca6ec3"],["/tags/社会/index.html","7bf19205878a825bc00f90f07d3849bd"],["/tags/编程/index.html","5c23595d497930f20b81a1652f80f700"],["/tags/网络/index.html","73da27220c70bbe4c23b7b96e82b1f38"],["/tags/翻墙/index.html","53ac2498a4e835c861ab896034a9b19c"],["/tags/贪心/index.html","110a1de59e348bfebdf09aecd0a9e84a"],["/tags/避坑/index.html","6e9cf0bad3fcf110778e89ffd334b524"],["/tags/高精度/index.html","5fedfd4896bd9773657a19dc945d28f5"],["/tags/魔改日记/index.html","2bd8d7162aa9f30bb1df26f3968f276a"],["/tools/index.html","64c1bb07f2a11da0318c270cc5f64ef6"],["/update/index.html","26995b66dddb5c0237cdbb32de9a49fd"],["/zaobao/index.html","c99066214d2a859d7b8c37c7d7cdf6c4"]];
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
