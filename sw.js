/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","6695c557b163656f05786f31a4116ada"],["/archives/2022/07/index.html","a2bc383cf428ca026a7af8a9f8053b07"],["/archives/2022/08/index.html","14f17699137fb242a83f8502752f88ed"],["/archives/2022/08/page/2/index.html","5c904a5bae9906fe5bf52009aa545918"],["/archives/2022/09/index.html","1d19ef3ec057abc5b8961e49ee0c7335"],["/archives/2022/10/index.html","3145b4d46b72aafd5c5090606bcfa58d"],["/archives/2022/11/index.html","3cf59108d72077cea758f35a687bc2ff"],["/archives/2022/12/index.html","2363a13dd8176e0f064c19adcf70f16c"],["/archives/2022/index.html","ccea58715ca4a58951994b94c5c2834a"],["/archives/2022/page/2/index.html","334c9bbd776e7bbf0bd84eb1fdcbd67f"],["/archives/2022/page/3/index.html","ced15097943a15e48631936c6255d94a"],["/archives/2022/page/4/index.html","5a4096793deb6f001b59bb3c80e46a86"],["/archives/2022/page/5/index.html","73f4898f1e151735112d8fb5f09c0718"],["/archives/index.html","8b291fc3d3b93158aa819dbc0e519e2d"],["/archives/page/2/index.html","c1802a8127e43fad4ce6f716e5dac8b5"],["/archives/page/3/index.html","e92cb844a4798f75aafbe68dc08407e4"],["/archives/page/4/index.html","4e381d5a77f181626c1b57ad4e6f8dfc"],["/archives/page/5/index.html","dce97f6776857b298f25ca847a2615b2"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","07d8c3db06421eac093a8415204d8474"],["/categories/Hexo魔改/index.html","a36592599c611ceaa4fc58f42151fc39"],["/categories/Hexo魔改/page/2/index.html","9e3b96691fded87082c82d6591d6d4ce"],["/categories/OI/index.html","a58275fc4c622b6d691bb88bc01ea253"],["/categories/Windows/index.html","2715062c129bf1587c63f353c08aff91"],["/categories/index.html","fff8af5723844ecca63db69b39949411"],["/categories/个人/index.html","b731714eed25d1f2af8399c32c3dfb61"],["/categories/白嫖教程/index.html","6b781f73a640bc00052303753631c99c"],["/categories/社会/index.html","8c3146a93d247946dc15258ff9541dd0"],["/categories/经验教程/index.html","577c15a827248a514123e98d51179da4"],["/categories/编程/index.html","d33f58015ff1073d983ff67c5b46ea64"],["/categories/网络/index.html","7f9aa7278261a863fba23e81316edb8b"],["/categories/避坑教程/index.html","0e16a991d00ff7c8371aa93b203163c2"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/fcircle/index.html","4f514a7dbe90a69b611feda299b21314"],["/fontawesome/index.html","ad37def383d8a26c4702e1ea4113d388"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","9e10769f747d1bd3f96ef6d28c97a362"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","c36cc40250adf0fb1691167a7d96c653"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","7d891f58ebeb75c9b84a28c4a7744f1b"],["/license/index.html","d577f2cff408af455c39da25bc1cdb29"],["/link/index.html","9f877799da254ff3031a61e53c0b2211"],["/links/index.html","8807b6388709d611ac78d653522762cc"],["/messageboard/index.html","8be5002fb44b8b922726a6e4cd5761f4"],["/musics/index.html","7db9ef1a4e01df48df7fdd8f2b114bd9"],["/muyu/index.html","e5f5159daa81c205c48d607b92345800"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","ea8873588472a9b1d4ce28e012c2e674"],["/page/2/index.html","160913715b0d6358df0311609de05728"],["/page/3/index.html","ad120b31664de007ffb85efb2129a724"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","f49319c4baa7ea751d605ec89394d659"],["/posts/14740f7c/index.html","d97caebf6e690b8d3c2bfe1b3cbe4ee6"],["/posts/1b850b16/index.html","43be3cc17fa2b0a27285899ce1472235"],["/posts/29b0359b/index.html","6442b78f598ceba7c101c8f713940b83"],["/posts/30bce1d1/index.html","a87b2fecfb2629bb7ffdffa59f107d37"],["/posts/3ee11b0f/index.html","e48eb35fdbf88b0afb88ef11b4a1123c"],["/posts/45897d5c/index.html","f0c9ec746c8814f63bef256b217efb3a"],["/posts/4ae2ec41/index.html","34a8d0ee103312f0ebed37ab684847d4"],["/posts/4bd8701b/index.html","ec450e0f581d1b7d398603078a9c09bf"],["/posts/4ebac27c/index.html","a012f457101e4d5eab2bca1270360218"],["/posts/53e6b356/index.html","775fe6dac82d641839151f0a0654cbca"],["/posts/583ff077/index.html","cf959826914bb6b3d204166b876f98db"],["/posts/5d71c71f/index.html","b3370efd353b886ea426ba5c66e7704d"],["/posts/5e2c4b67/index.html","44e1cfe5e88d0ea3108e19e7bf7e123b"],["/posts/614f1131/index.html","180e8b95e679477f3f0315f27ee0b970"],["/posts/61b9829e/index.html","7b00a9dab18fda3cc25a9c11a2132182"],["/posts/65ad2601/index.html","adf66adea09c04c89a23b7f548bde233"],["/posts/670e47f/index.html","334a2c2891ccacf78ee3599648847f1b"],["/posts/69707535/index.html","f23b81fab6b6b024e68e1353f927d221"],["/posts/6d1af91/index.html","0cc0ae3775ba61d9f152b0b40cd8dcbb"],["/posts/6deceee9/index.html","07921738fe3437a66c0295244c081c23"],["/posts/70734559/index.html","653ff9760908718bfca0bb0a2dde7723"],["/posts/74e5e1ec/index.html","a9a36368591d9f5eb3da231035971db8"],["/posts/7e9276a3/index.html","ce084e110dd1c25fdd5a5cb5dbca6a40"],["/posts/8245da27/index.html","b5f5bf5fd942117ad3a41ab312656e3a"],["/posts/895003b5/index.html","4237aa044eb80442d43127863ceaa4d3"],["/posts/8a79afbb/index.html","f7a4f7fefdc65160545829988c149d65"],["/posts/8b73c6b7/index.html","4fc7c1e6653eae66a694d176062afacc"],["/posts/a1078b2d/index.html","46ff36ce1e72939893c00373f0867e55"],["/posts/a61abc/index.html","aed12b175932e880b1444c9a833dba36"],["/posts/a844d9fc/index.html","93ae399d9b8a55ad27b850b48737379a"],["/posts/a90c94cd/index.html","a3ce16ca0bb7789a298812cde33414e8"],["/posts/ac792cf4/index.html","6549d9f9e0cf290ab653a52bbad87799"],["/posts/aedd05c3/index.html","ec7c7025c6c8c7406e7d19f0671fcc8a"],["/posts/bbc95d58/index.html","4c60946ab67b588fc7ae32c97b1e57fb"],["/posts/bd7ef112/index.html","ae7e7cbad8246675e26181cb7aabcc38"],["/posts/becc831a/index.html","d36cad1e3e00b1d613acb9e11ba16571"],["/posts/d1fc759/index.html","0da5c711b79d0d0787f89f1cb3f9e47c"],["/posts/e433f3d/index.html","e3d526691c453ab4192568838cd88dd8"],["/posts/e536ec4/index.html","906eb01b90bfec71e92d4b2aee021fb0"],["/posts/ec12b762/index.html","d145d35c18672387b8032d5da8c5a796"],["/posts/ff156c72/index.html","35e3a71689b9b4177e2643692d95d5c3"],["/posts/ff1701d7/index.html","9cc60fb40aecfc7279c9614ea15425bd"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","525110f47e4a6e83c12eacf6321d1b1c"],["/sw-register.js","8307affa7497de7932134aa819231e3a"],["/tags/Hexo魔改/index.html","0f3682376ec7cf417a72a4f11e176888"],["/tags/Hexo魔改/page/2/index.html","fd0cfb48563be6663cdf890493f1b4ab"],["/tags/OI/index.html","db13bd9924bd5716e0911cd1ed1f5a14"],["/tags/PyQt5/index.html","eddb2a57b177a2761f832dc47f911ab7"],["/tags/Python/index.html","d1b34a8f93ff314613c1639731d3ae3d"],["/tags/Windows/index.html","258e8586d9ddf2564c28d20b9930b3c1"],["/tags/goorm/index.html","a32394b4be21d4d1f56419ef0cdfeda4"],["/tags/index.html","3c6c77b95b7d7fe697210b3c2e571f4e"],["/tags/uClock/index.html","195ec4c9997a4e4ba1870d068eb523e4"],["/tags/个人/index.html","b15825d78b1fab84a395d9ed591f3405"],["/tags/域名/index.html","7a9d12f05c06b7b9b3dc34625b2667e7"],["/tags/字符处理/index.html","8043915ad0003eefedb8b503ea20301c"],["/tags/服务器/index.html","5f3df2b6129c3493d860e999e691fa2d"],["/tags/模拟/index.html","66ba5f1925429b3e2df0aab1353ee107"],["/tags/白嫖/index.html","f8bac2837c7f41f3e2796627f971e431"],["/tags/社会/index.html","321e1a99da5114702ad1f5e4cca14b36"],["/tags/编程/index.html","36079094a22f58d3a028828c9dc0ad26"],["/tags/网络/index.html","dbd014bf0466772fbcb30701a39520eb"],["/tags/翻墙/index.html","2f355affba92da8fe5cb9f9e487b1d86"],["/tags/贪心/index.html","8111f07f0eb45a879a1724d5a819ae7b"],["/tags/避坑/index.html","da914f07b2b8d31c2fa73ae371d65a7f"],["/tags/高精度/index.html","cf67b3259a438e2638a6ed989d9a45b4"],["/tags/魔改日记/index.html","69c4f5acc831aff9f7f46cd2cfc25f08"],["/tools/index.html","8726792e07dc817595745d363629329f"],["/update/index.html","a1777baf65359066e45afca7c4045658"],["/update/links/index.html","4a78324d232fcbb732c0d86eebbd86a1"],["/zaobao/index.html","8cfc433a5dba1ff172678abb87461163"],["/zaobao/links/index.html","ab7d1c835fe96aa15727b13e34344f33"]];
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
