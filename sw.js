/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","2d9d18a03ebaaefef9201aaedc16ba6d"],["/archives/11eb4aac.html","c04f6720e20fbf41ee90bb7239977cf8"],["/archives/14740f7c.html","3f4ffe0e6a801e2940a177e0b76fda10"],["/archives/1b850b16.html","567945e437ab070875d9496a5c0523ce"],["/archives/2022/07/index.html","5f42c75eec432f3f841590aa6a142e82"],["/archives/2022/08/index.html","4c484a3f00551b67494c4c6c4feba754"],["/archives/2022/08/page/2/index.html","fbd93e7c8445c35ea28d1906cf4dd199"],["/archives/2022/09/index.html","9cc66a2640ed5320eca83335eed60fe6"],["/archives/2022/10/index.html","18f9119934ec02a673f53441919eb892"],["/archives/2022/11/index.html","9e7817880d3c8e53612c45c61392d407"],["/archives/2022/12/index.html","dc170a8f364477ef02aa13515201b58e"],["/archives/2022/index.html","76820f2597c559b36360cd5800dcd363"],["/archives/2022/page/2/index.html","c0223b2d5300105229641a228513ee48"],["/archives/2022/page/3/index.html","afc6a2a6d9080a73b85a7cfca92a1afd"],["/archives/2022/page/4/index.html","bb867940ab36c67cea562dae181cec27"],["/archives/2022/page/5/index.html","caf0ddfd693ae2187b5e68e032778475"],["/archives/29b0359b.html","36c46202ad1703d14997f6df85c7d30b"],["/archives/30bce1d1.html","e902fa31400ba6f550b1544ebdcb0eb7"],["/archives/3ee11b0f.html","8549434ef0d252fc43c1601cea746bb5"],["/archives/45897d5c.html","2cf84b037997647471c5c469cd2e8eb5"],["/archives/4ae2ec41.html","f64f40c0da78e5a156fb9e2964362034"],["/archives/4bd8701b.html","349e221ca27a4a53f5c1eea5c165e497"],["/archives/4ebac27c.html","597dbf679ecd07827c9a16ea9c67caf1"],["/archives/53e6b356.html","f06c7392463215413cbe338771de19f6"],["/archives/583ff077.html","ea7fea5c586953e410a0d868c2349c36"],["/archives/5d71c71f.html","4df3cef39f03dcfe9d1f5f1620d7c987"],["/archives/5e2c4b67.html","cc3f93a1f9bde3fb77268ce5b037c936"],["/archives/614f1131.html","2a26aacea3a10d3b3c823eddee72d7e0"],["/archives/61b9829e.html","a0d0e23ef9267f39dddc3c90752c5ed8"],["/archives/65ad2601.html","e8beba58ef4a24141c9d67f03d86e378"],["/archives/670e47f.html","56a284884a283fa3f1af10b139a5a9fc"],["/archives/69707535.html","23a3ab506590ae97f1deb4316f3e149b"],["/archives/6d1af91.html","848e958d50d44237be91a0384645706c"],["/archives/6deceee9.html","66630e07c1d743e0f8aa6467f1af771b"],["/archives/70734559.html","969c2d4a1043f97b58fef518bf7e6af7"],["/archives/74e5e1ec.html","dbdb6533887379ddb996368020ae2207"],["/archives/7e9276a3.html","91b470886292e8c9413c068433728ddd"],["/archives/8245da27.html","ed136fc28562ddfa0ab58cdfb4ab627d"],["/archives/895003b5.html","26fe1715859133059d286427908ca83a"],["/archives/8a79afbb.html","c2c21a883f307459edf440491e0d5744"],["/archives/8b73c6b7.html","10a51eda7890b9fb3b1b6d125fda24a5"],["/archives/a1078b2d.html","18ca51b699bb2d80ca49e43efa5ac3fd"],["/archives/a61abc.html","2ebc2de1229dba33852e1cefb2499886"],["/archives/a844d9fc.html","f144f300ff2c6e1db57cc21ea6b74b33"],["/archives/a90c94cd.html","ebe03d3b7e44d5e3cf7b5261cc0da0ae"],["/archives/ac792cf4.html","0c97f41782797cf006365b53cdb426dc"],["/archives/aedd05c3.html","fd986c5dd1305a74305ddd0eabffb802"],["/archives/bbc95d58.html","97f9f8c4e849ceb0df6acaa68f937c4c"],["/archives/bd7ef112.html","adee7047c908d038692038b699aa7480"],["/archives/becc831a.html","735f0fb2dea717a773da1095edf08da3"],["/archives/d1fc759.html","d1dc8bcf984a23c8aa4bf133470f9b1c"],["/archives/e433f3d.html","ccabf3dfa7d1caffa401d63e7669c1da"],["/archives/e536ec4.html","c1da2d9e7dcb8225d1e89ed87088dba8"],["/archives/ec12b762.html","63aaaa0c98a98f25ec12cac306dabfc2"],["/archives/ff156c72.html","025908f9f598b0393b51dc2bc0428daa"],["/archives/ff1701d7.html","d89c2c6b541197de5defd455a5d590cc"],["/archives/index.html","f834f5a0c76d601f1df7af09f242d385"],["/archives/page/2/index.html","14429370ce5b07cced6753393a6744f3"],["/archives/page/3/index.html","ef821e907c89c703d09079e7a698f3ac"],["/archives/page/4/index.html","96ddcbe5eae0ddaf437cefa323043259"],["/archives/page/5/index.html","1afa76f3d97f9fa8c725148119d2ec5b"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","55398d6f7e87a3a727b45b07bf4ad838"],["/categories/Hexo魔改/index.html","b8790ff20c30cd96863ef245a11c0556"],["/categories/Hexo魔改/page/2/index.html","05e5dc5eeea8de3f2b83cdd36fb191ee"],["/categories/OI/index.html","d46b255e96e2da077dc6afc6a83103ab"],["/categories/Windows/index.html","35a715b6b064f6ff48cf50f86d916d92"],["/categories/index.html","60c301fadf3c79b5a733faa3f9e2442c"],["/categories/个人/index.html","c97b3b0b0cc10e1721c7a07434844488"],["/categories/白嫖教程/index.html","4e017210337555b592853307514e7c8e"],["/categories/社会/index.html","6b5811cb6a387afe16a12afbfbe3e316"],["/categories/经验教程/index.html","10106f20367596d60b9cb2421c82dd60"],["/categories/编程/index.html","32cb22f1954d2364bfb0f5d34c16da05"],["/categories/网络/index.html","b86d3bb33208a533c77460434786deb2"],["/categories/避坑教程/index.html","9bf2eaf19ec946c148b50425eca8af48"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","38f0567ac074cedcb3eacda9f0a5c2c5"],["/fontawesome/index.html","dc66ecae24272342a5c6da27986f6c34"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","d750fa0ccc1841661125fc01dcd8f51f"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","91e6071e4a6c4dfb6ec9197cde85035b"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","5d4ff36f22a29b651b33bb541b83393e"],["/license/index.html","4fb72f3b2076f51d7d270f0005e5d105"],["/link/index.html","b865d6a858b3fd22793c2a18706b2418"],["/links/index.html","cacdbfa2353ac5247df361f49775abc3"],["/messageboard/index.html","d837af08e8e99468b1cd6f16e188d5ca"],["/musics/index.html","2eafc705c6f76cdd27a133fc22109741"],["/muyu/index.html","33e8a0310405f62d03351d46223af5ab"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","1607fada25e1b235632dd64499288a19"],["/page/2/index.html","5893dcead30bda1d9ac6fff1806fe652"],["/page/3/index.html","464b8ede864da809502dcdaadd7e24c2"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","7b391e2f451ab4d31716057fe108b951"],["/sw-register.js","947f299ca2c59ada20969e53443b0284"],["/tags/Hexo魔改/index.html","c52609ece77a7d36499a2f9db2585eb0"],["/tags/Hexo魔改/page/2/index.html","b29a659bea279f6cb578eb4f622ef39d"],["/tags/OI/index.html","81b0a78a290f5e125f1d467b8c44019f"],["/tags/PyQt5/index.html","3c570ec1e485e20a8e83f6f0668cc153"],["/tags/Python/index.html","b7b6085cb176b24005d9c5184c842040"],["/tags/Windows/index.html","a93b9f6d11aa037990904b40710bfb32"],["/tags/goorm/index.html","ccc8489a894efce75c585fd3ccd869fd"],["/tags/index.html","8cd8724b3154e185665483bb47880ff7"],["/tags/uClock/index.html","41452647eb8ada04b881f58dd23cf46a"],["/tags/个人/index.html","a6e75148d1ed1e24a0e8158f19b40192"],["/tags/域名/index.html","7e133a71be23f6fbdc730435555dff67"],["/tags/字符处理/index.html","5acd5969de862cc18d19e6ab574b09e4"],["/tags/服务器/index.html","fde6a5f2a62dd6ed4ae2acddf9894d5c"],["/tags/模拟/index.html","d5a641869250f1dc4dc3bc5106fe74d3"],["/tags/白嫖/index.html","9a9b74f6cda72ae25c3eff870bdec824"],["/tags/社会/index.html","3e373e316cd2dbd99617c5ef03f347bd"],["/tags/编程/index.html","068a8449574b909f857b9230422a0aba"],["/tags/网络/index.html","c19177efd29231b982d54cf4de276dd6"],["/tags/翻墙/index.html","bc96de2e46a8564e9914b980998acf72"],["/tags/贪心/index.html","c098eb8984d36ff93609bb07fd98f4f3"],["/tags/避坑/index.html","45669113ea652c318aa3024433f1c751"],["/tags/高精度/index.html","3d83d12e16cbec9ac2f9e9bbbe90495c"],["/tags/魔改日记/index.html","e037d854ac11aef10baa229b49d24bdf"],["/tools/index.html","0b97a20fc22021c0d414299887df1e4d"],["/update/index.html","846f1a0fa8feae4e14d89de28e72866a"],["/zaobao/index.html","1decf24a2147bb49513b77aa478b114c"]];
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
