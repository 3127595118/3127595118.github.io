/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","4e5f9a882d3643b2b24d3cd3eb7b64d3"],["/archives/2022/07/index.html","c8933a032dfab5dae55d3851d8fa13ba"],["/archives/2022/08/index.html","fc3cc8616f1fbd819c225bc38d33893c"],["/archives/2022/08/page/2/index.html","9f46910bff490e9b366a172048ce736b"],["/archives/2022/09/index.html","80049fa7fe453433d5e3b2f97a39e2da"],["/archives/2022/10/index.html","991805c03ae260e8321c6c9f17b4a9e1"],["/archives/2022/11/index.html","1bd199dd64f8405a0953a6d1b1d8cbbb"],["/archives/2022/12/index.html","d2ea16361a34a1c446ee7cec2e8f861d"],["/archives/2022/index.html","61485feef89a3a63a4a74f1983f73ab8"],["/archives/2022/page/2/index.html","dee504bd3e53c6a33590a65f60acfa0a"],["/archives/2022/page/3/index.html","52d22a35b18d4c876ae92dd6cd75e7fc"],["/archives/2022/page/4/index.html","18058a2913a6bcfb351f817aeb62c163"],["/archives/2022/page/5/index.html","35f4a2fbeaafe749fdf35c57b72f3f53"],["/archives/index.html","edad1b53a4562e915ce6d756403cdb0d"],["/archives/page/2/index.html","6e694064cfa9611a2133bdfc564c2ce9"],["/archives/page/3/index.html","a1832509ace2413debcbc38edbd14aaa"],["/archives/page/4/index.html","22e1e149f7b835749d854a0faf9093e1"],["/archives/page/5/index.html","152e171f03b4d55a8c8f9c50eaceea4f"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","6a62cd01114ab7ced1dc049ef0afdcd8"],["/categories/Hexo魔改/index.html","fca06968c5461bd67d6c9616ae00f628"],["/categories/Hexo魔改/page/2/index.html","bb568bd40357fc905d69addba0586e49"],["/categories/OI/index.html","d6a36e20ffb0b5991570b829f0e62b5f"],["/categories/Windows/index.html","4322fb617b1f2f81552d81688eb8aca8"],["/categories/index.html","a8da722aa79f8dc658e4e2c673cfe429"],["/categories/个人/index.html","5231ae467e066eb1a3cc882f88a9f7b2"],["/categories/白嫖教程/index.html","f7c16a726726bdd00e6ba05c66249aba"],["/categories/社会/index.html","baaa508878ea1fd3b5f7de270671c6e2"],["/categories/经验教程/index.html","181799fa8dc45a040a365e00a7c83d90"],["/categories/编程/index.html","4b74ab9be4fd51d0b78d8101a7834a8a"],["/categories/网络/index.html","f6fbf5b61e99c34418df70382da0999d"],["/categories/避坑教程/index.html","bdabc7bdc0c0ec3c6d8c2371f80befbb"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","559e0c1810dc6bcfa79a58a43e427b32"],["/fontawesome/index.html","4f31cbef65834f647eabafe528aaf100"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","f53d139e4dff12e16d9e9abc676d12bf"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","03e785aafa0fe23a15848635db10f2c7"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","73d53908ba200473d637ef40952ebed5"],["/license/index.html","fe4f79cd3d39d2df9b63ea22c0777d80"],["/link/index.html","7480671dcbfbd08734e0bd3b9cc2d10c"],["/links/index.html","23499b372cbc10a18367f5cb4771249f"],["/messageboard/index.html","68419d24155f8d60718f40cc49f19a15"],["/musics/index.html","36f5728ba92bf9074d2b3de7a8abb3dc"],["/muyu/index.html","b7fb2a7632a4b425b84507446b12c44d"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","5bf0d05937427271b2b43bf6fdbf196a"],["/page/2/index.html","7c943b0a021ca641c5cce3426122b8d4"],["/page/3/index.html","591ccc4a2982cd3b8a2a248d9845a502"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","f1c829d0bbfa1d29f88bfbe32f840521"],["/posts/14740f7c/index.html","56c2e4f41925732ca8a513e3a4852115"],["/posts/1b850b16/index.html","3a92940fec6f61d4b0f4856608c26491"],["/posts/29b0359b/index.html","8c917a7eabe6de17d3b6071c05862686"],["/posts/30bce1d1/index.html","e2696f5454b205872a19bf2223f873e1"],["/posts/3ee11b0f/index.html","56231d93aacd22e44c1fe3a1dfab6106"],["/posts/45897d5c/index.html","4f1055761e4085a87dd912dd1494a3e3"],["/posts/4ae2ec41/index.html","32192aaed411638c07f2d95c28691a67"],["/posts/4bd8701b/index.html","9d8ec0f6e845f095ca88963bccdacef1"],["/posts/4ebac27c/index.html","f96f765006d7492366021741a4c7ae2a"],["/posts/53e6b356/index.html","fdf430ca041db0a5854edfd7b9b86064"],["/posts/583ff077/index.html","f394d2116caa2c4a2d0d709bc7683ef4"],["/posts/5d71c71f/index.html","e265392b33fab6811ad477bc744cf7de"],["/posts/5e2c4b67/index.html","1292a1afac9aefbc12ddea410c4ee46f"],["/posts/614f1131/index.html","a5a2b072b728fe64bf577d4888fbd39b"],["/posts/61b9829e/index.html","fbcf99f573c8a1a15a72b5d65751ccd5"],["/posts/65ad2601/index.html","9ba147a5d12ff09ec6a1a944e7990101"],["/posts/670e47f/index.html","f72d80c4ac7af298d631c70d95f3a7da"],["/posts/69707535/index.html","a8aa59d4e504bf78a9ac484f5dadd4a6"],["/posts/6d1af91/index.html","d8abc7e1c3ae36dcfccdb75a66352c1e"],["/posts/6deceee9/index.html","2cd465e91eb17c9163685eefa58f3718"],["/posts/70734559/index.html","59baeae38f3abdcda416f773ac697bb0"],["/posts/74e5e1ec/index.html","3d6deb278ac2559f444060c1746df1a7"],["/posts/7e9276a3/index.html","53702877b2bcf6f7a5a38cb0ab4ffeb1"],["/posts/8245da27/index.html","9cc18bbee9feaf5e9b527afba35b4357"],["/posts/895003b5/index.html","655d4cc28bb554b377265e0b7ec84afa"],["/posts/8a79afbb/index.html","20736d3cbc5241f3edcd789b265debe7"],["/posts/8b73c6b7/index.html","dbee19393fd28b66eafc8fe5f49f7164"],["/posts/a1078b2d/index.html","57863e1e32df9f4dded5ebb72f29ff0d"],["/posts/a61abc/index.html","d4daa495d0806e59d237982e742ccaa8"],["/posts/a844d9fc/index.html","88747647109fb34de06c32c0e1803859"],["/posts/a90c94cd/index.html","b529552bea881df650eff8001a8576e1"],["/posts/ac792cf4/index.html","adebae1a3278ce93a1738b1787de3617"],["/posts/aedd05c3/index.html","15de6fb98ae316bfda7dd685132d0c82"],["/posts/bbc95d58/index.html","5a3aecf5559a0560be0117186c605661"],["/posts/bd7ef112/index.html","17bff0f448ec984fbeabe935e0e2d114"],["/posts/becc831a/index.html","ee2eb74bb852d5c87eea66c11134de4f"],["/posts/d1fc759/index.html","6727dd3dcac34c06fd4689c0388c49d6"],["/posts/e433f3d/index.html","5b31aa9d69045bc5a82bb9c624136d5f"],["/posts/e536ec4/index.html","e126c21d61914ba92a08b7f9291fe382"],["/posts/ec12b762/index.html","9d8616cc7a9bcaba99f8e2325a875d55"],["/posts/ff156c72/index.html","a59d6c5a9a7723527ed149a3b289eb28"],["/posts/ff1701d7/index.html","63df2e76f67a3fd8c6ba00a794a79c4b"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","7244581641204f2d44b246a1268e440a"],["/sw-register.js","b8a23a618221a1e822eea1aeff339046"],["/tags/Hexo魔改/index.html","443f94d416c0a88c9b5f186b3f2dce39"],["/tags/Hexo魔改/page/2/index.html","3947930fc42b7ae3b4bd03dbdd4dedf3"],["/tags/OI/index.html","9008cc1f18a3bc7c7500240123e57425"],["/tags/PyQt5/index.html","db1c5c0580ed68ae7e5559516f538661"],["/tags/Python/index.html","0259aa95b78807a775c6bb72493c2a75"],["/tags/Windows/index.html","827c1c50c21b768d6e0a17e25e0ef03d"],["/tags/goorm/index.html","c47c220246c0ecf365755ea79cccae0e"],["/tags/index.html","f10302614a0efe7364683f3f3047089b"],["/tags/uClock/index.html","1098f6c35f99ea43788864cdf26cde2f"],["/tags/个人/index.html","6ba9226b0db5a9b5657af95c4cbc7318"],["/tags/域名/index.html","344ae5689241b0c6496b1a4dfa0cde73"],["/tags/字符处理/index.html","d8353b95a88734f5909301a8e051d5b3"],["/tags/服务器/index.html","a80b49afb0a3e3e30517e756f75366b7"],["/tags/模拟/index.html","5b7e97cf30c16a43b7bff05e5108a1b5"],["/tags/白嫖/index.html","a456d0eacc12d4d47815134e83d15047"],["/tags/社会/index.html","07f34f9057bba3dd7d1973bc562aef8d"],["/tags/编程/index.html","e3361f0a36ef90be37fac56ccf0cfcfa"],["/tags/网络/index.html","787bf21a40ab004d843e2d61fd8e250c"],["/tags/翻墙/index.html","b7e290c02976635ff229183940351581"],["/tags/贪心/index.html","ff894c8a81545bf8a4d24aad2604ba90"],["/tags/避坑/index.html","28e0859ffa5f6dc0445563305768c5c9"],["/tags/高精度/index.html","8083065f9b72d6a3a9d05e5c58d6638e"],["/tags/魔改日记/index.html","d1d12b5d66afa2abbba1b2c041e2b969"],["/tools/index.html","e9faab7dfe1bd06cc4ac5d58e24dfae6"],["/update/index.html","e90200890f0812abdcf17bd0db19a496"],["/zaobao/index.html","2304ac45a5b5f34095f7944d07595885"]];
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
