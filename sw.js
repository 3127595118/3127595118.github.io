/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","d96c36427d31a5c1c67bbc1244e71086"],["/archives/2022/07/index.html","718b5459b1cbf36f9dc806586b0bd9ba"],["/archives/2022/08/index.html","c6c72f160ed71f27e2aa30e695679ad0"],["/archives/2022/08/page/2/index.html","7f10a0cf910c3e6ab7b7e2a02baebcf8"],["/archives/2022/09/index.html","47bac8be273b478b596ea875111481c8"],["/archives/2022/10/index.html","191e3d63f4fb1398389aa682e31e61a3"],["/archives/2022/11/index.html","35c0c7fc778a90ed7dc8ee3b7f98c812"],["/archives/2022/12/index.html","361053f683dd4c1c98f746817cc15956"],["/archives/2022/index.html","b478da675d9f061fff13a0830a7ea36c"],["/archives/2022/page/2/index.html","ced4b381e7a38812beae8a10f29a46a8"],["/archives/2022/page/3/index.html","4fdda5f7909b5f56494acb5e1ca9e869"],["/archives/2022/page/4/index.html","7e34e41177ab44a1c7f02861a2026ce1"],["/archives/2022/page/5/index.html","d687e7fffcba29e972342307ea2fb648"],["/archives/index.html","ad91c0e72d462354954f5a6d3919aaa9"],["/archives/page/2/index.html","1733aea4cca637cb203d8264c2562298"],["/archives/page/3/index.html","77156fa104cc416279fc026ab5286868"],["/archives/page/4/index.html","98dcf80a7ff0cb17f015de4109283858"],["/archives/page/5/index.html","5b5b11541176414ffb8b76780a78265d"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","dbebe966a519728be963fe5b3056cd78"],["/categories/Hexo魔改/index.html","f868edfa4aca291459898ed1e973e75e"],["/categories/Hexo魔改/page/2/index.html","79fd93baddfbf2d1dbd5fdbc544c38ea"],["/categories/OI/index.html","3029d76b26805d592957107e9c590b29"],["/categories/Windows/index.html","ddb303f44164bbcddebee760a260d71d"],["/categories/index.html","fcce0c9fda48848c3556308b9c98a474"],["/categories/个人/index.html","299ee82bf5b327421ae51a772c4d0450"],["/categories/白嫖教程/index.html","aeb9a1d755fc7af8b55c5cacaf7a9b6e"],["/categories/社会/index.html","dd14430966178a10519a911505ec8ebc"],["/categories/经验教程/index.html","fb281c62aca27a20aa6cec38247e464a"],["/categories/编程/index.html","54cf78c3568ccef7d15e1c3789c3116b"],["/categories/网络/index.html","f315f179756dbcd48cff1b5305b53f09"],["/categories/避坑教程/index.html","70f460f159587291a65fd9839ffde818"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","ce3dbffa7344c271f9094a497958de96"],["/fontawesome/index.html","ac5a36a73968e2dd2f86c7a16374fa7d"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","e4220d4dd1880666b19c2a04b1227ad1"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","d4a65a5c642bc6d72f27f0b8062dce25"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","79f44ec5e903ce98817deb20079e8001"],["/license/index.html","f6bd1f7b021fcf44790b3cad6dbc03b9"],["/link/index.html","9baeb553ca26a552dbb38a8aa286ad7d"],["/links/index.html","8f0e43e9a76ca5334eb8eeda35b0e718"],["/messageboard/index.html","465280355779aacea780752a2144af41"],["/musics/index.html","cf8e579d9f62db6af3c3f7c2a10e15f2"],["/muyu/index.html","6b502d116e190db10f9b99e4ffb04313"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","52b85a0b11a89885576625183cf32ad7"],["/page/2/index.html","b3b7a3f6c595ab1ad966c4e36662f435"],["/page/3/index.html","96a8eb19f9b0b3d7cd42c08d05ce25b9"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","0e4e2ec6f99bef4310b8e34c3c1eabee"],["/posts/14740f7c/index.html","5f176594ba528ba003f695bfac7f4bde"],["/posts/1b850b16/index.html","4dcfd36b79872f3c461a0c00ef0f7c27"],["/posts/29b0359b/index.html","182c10da6352469553df6f1ea91c5182"],["/posts/30bce1d1/index.html","ac4a485e74e19b75d82391a7563bd90e"],["/posts/3ee11b0f/index.html","42225f7d2e9c6c978be0187559385561"],["/posts/45897d5c/index.html","41d96a383bede8a9d8a4ba55ad1d3642"],["/posts/4ae2ec41/index.html","faa7be9bcaef3e9ec2ab807edd02fec3"],["/posts/4bd8701b/index.html","65005108d9d3658b7d622f92756619d3"],["/posts/4ebac27c/index.html","a5e94604e24939acc512a99ce37ba145"],["/posts/53e6b356/index.html","acd4a223ad1ce70dc6e952bbfbc52048"],["/posts/583ff077/index.html","b3ee637a66d05bef8dbb5b59cd232a87"],["/posts/5d71c71f/index.html","a094871345897482edacb524fa820215"],["/posts/5e2c4b67/index.html","e07764da535a4aa4abe89d3e8068d8a8"],["/posts/614f1131/index.html","6f76459d8b0ce6666dd417eaea3d4dcd"],["/posts/61b9829e/index.html","b83403d198f89f47d21fe6816fd1ed87"],["/posts/65ad2601/index.html","5f09c0c09533a099a7f23cefcc8bf82b"],["/posts/670e47f/index.html","d913b99f349f27c1a13135006a226f11"],["/posts/69707535/index.html","0b5011d0b2b057196508ab118105f6df"],["/posts/6d1af91/index.html","33dfba79d5646e799efd1bf590761e7e"],["/posts/6deceee9/index.html","4300a2ad0162a6c8689b16b61fb66c1d"],["/posts/70734559/index.html","35e367159f09c0467215d50739cfc4e3"],["/posts/74e5e1ec/index.html","a781e38a1016b754ea0c0b4b96f6c8a9"],["/posts/7e9276a3/index.html","bcebbf874d9f780b399b6ccc847c5bad"],["/posts/8245da27/index.html","52d5e369b22646b66d6019062316c0e1"],["/posts/895003b5/index.html","853396945d710b9f177dc58c4440ceee"],["/posts/8a79afbb/index.html","762dcee40aba08eb383af1807040373f"],["/posts/8b73c6b7/index.html","3f4e5c700b598ada5d28335a7602f192"],["/posts/a1078b2d/index.html","d836f6deab4af8e248b018fe8bbe9ef3"],["/posts/a61abc/index.html","7ef66b1a21b10491290d23421185a2ce"],["/posts/a844d9fc/index.html","c1709f946b5629cdbb262acf0154339f"],["/posts/a90c94cd/index.html","d6953866d87569f1279928bb87906a13"],["/posts/ac792cf4/index.html","afd90ecacb1b145284ce0b660fd34182"],["/posts/aedd05c3/index.html","2fc18b62664a8a451476161424a4cca0"],["/posts/bbc95d58/index.html","78ca02823cfabb8846a9a67550210bd1"],["/posts/bd7ef112/index.html","c6820d9430f5d1672cc3ed38fb9ab94e"],["/posts/becc831a/index.html","78f79b304162a082248c72ed42be9c3f"],["/posts/d1fc759/index.html","a3f64d8ae957ba7953f50a8b47ee48f0"],["/posts/e433f3d/index.html","d7ba5b620ac46b18463f577be2fa2738"],["/posts/e536ec4/index.html","b33e3e4598f2c6208014aa64ce3eaa20"],["/posts/ec12b762/index.html","8446ae116e802bdfb8e7b370bdfb3482"],["/posts/ff156c72/index.html","069fed161856709d8c9db9c59564de9d"],["/posts/ff1701d7/index.html","c9d09602a87c12152ace72a1028e3feb"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","a668cc8c8af2691d0cf9c9517892b904"],["/sw-register.js","9c1cdbb2d48ac1d295f5e2d1e172b02c"],["/tags/Hexo魔改/index.html","049fa892a2d0685a679cf067363e160e"],["/tags/Hexo魔改/page/2/index.html","d560c5fd5d23b00b89e650a29243cc29"],["/tags/OI/index.html","f1e24674d300792043387cf7031baf9a"],["/tags/PyQt5/index.html","c51d8d4861b69ce8ed5bb2262ecb3ea6"],["/tags/Python/index.html","d2a846a70f4c62c8b2524b1db536291a"],["/tags/Windows/index.html","a0f6f2f0d82c05e2a036cd7b3df8a460"],["/tags/goorm/index.html","fd349ac798b55db699c72ddfeb3e24d9"],["/tags/index.html","4582891b8ab4acec6645f82bee483626"],["/tags/uClock/index.html","11514bc6f56a128dcc91490879dfd5c3"],["/tags/个人/index.html","5b5ac2133604c7317c29d8041e2fc0d4"],["/tags/域名/index.html","7cd7e4221ce40e6945369e9fd4c007c2"],["/tags/字符处理/index.html","287fb5b192fb94da48448990bb80abba"],["/tags/服务器/index.html","d2323c76b2f398aa06bb7ce5b7f141ed"],["/tags/模拟/index.html","ae922dbd24d17fa2584899679a33cede"],["/tags/白嫖/index.html","be49028e8b1e87797f5151c78855e4ce"],["/tags/社会/index.html","36b402bb4c3178a43476829b2c153faa"],["/tags/编程/index.html","5022bcfdf616d0aabf855a1b4bc8c67f"],["/tags/网络/index.html","bb2b0cb9e576ad6a228fb8051e58d6eb"],["/tags/翻墙/index.html","d305c348c6764c999c5384508fece068"],["/tags/贪心/index.html","6dad57f4181569594d730ff9b95a991e"],["/tags/避坑/index.html","b4f2217bbda87080da8f5c8ec3e3b20f"],["/tags/高精度/index.html","f76e1645fd1bdb2982aa091807da767c"],["/tags/魔改日记/index.html","797bdb115a281cecc1d187278623c578"],["/tools/index.html","a7418edf843716a04c8371fa0457a331"],["/update/index.html","310941aa0e6ad0131327c20ed68bfdf3"],["/zaobao/index.html","343b9bc8ea10d268edba6d75fe807ef5"]];
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
