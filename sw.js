/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","911c46a83a67d8f68b109901700882f3"],["/archives/11eb4aac.html","c8bb1df8d21c51d5f0983d9ff1cf2ba6"],["/archives/14740f7c.html","c3be4952c19ff73410234cb9e5b4f446"],["/archives/1b850b16.html","8db3e33df19c91bb23101110b087cabc"],["/archives/2022/07/index.html","1638eed6c3e197d3ccfbb5f1c820cad4"],["/archives/2022/08/index.html","b0abe9d8a7257ae163b68939ac7d2983"],["/archives/2022/08/page/2/index.html","05b940dfd0b66a1833faa69d8e85e5b3"],["/archives/2022/09/index.html","31185d0ca70f34d905e9d7403e1eac1d"],["/archives/2022/10/index.html","f0c46045c8365fc407f12d24a6ac33c0"],["/archives/2022/11/index.html","4aab24140f8666869fd227690f0d9b91"],["/archives/2022/12/index.html","5d5262915c81811099458f4545908a2c"],["/archives/2022/index.html","219ad88e02492a31866918120ba793cd"],["/archives/2022/page/2/index.html","1196a9a8fc30083c67b9f0e86a9c8697"],["/archives/2022/page/3/index.html","74cfa23592267382b9c1a43825cf2fb5"],["/archives/2022/page/4/index.html","6bf3604c49ca2a6c6f40cc090d6c94e5"],["/archives/2022/page/5/index.html","5c3e50fde864504076a3cfb35b881807"],["/archives/29b0359b.html","6238f1000d837b14286c0f6ed56f11b1"],["/archives/30bce1d1.html","453a253fc258c3fc4bca19f462597555"],["/archives/3ee11b0f.html","6e21019d48f4e719f99a385d1cce31f9"],["/archives/45897d5c.html","92c8053008eff403743d22206b4c6b77"],["/archives/4ae2ec41.html","d9e2d31d4abf1aa45ab31602baf24406"],["/archives/4bd8701b.html","e250096aa8c4342d348c8d5d1cb0601e"],["/archives/4ebac27c.html","bb541a3874b019711f7fefe821a708be"],["/archives/53e6b356.html","59d6348d14bb6aeaf66532eeb16281e3"],["/archives/583ff077.html","29d5a537e434ccce868e15e61565f12a"],["/archives/5d71c71f.html","803f48647fae2b416d1e807eb0e5ef26"],["/archives/5e2c4b67.html","099626c43e6e6fe09f8c46dd90572f63"],["/archives/614f1131.html","2215b83f2d92988d27995d35a94740f1"],["/archives/61b9829e.html","b1d3925aaf7ab5600dd620048c8f8b19"],["/archives/65ad2601.html","1f49a22e8da4a4d5e58b165a3ba0ee71"],["/archives/670e47f.html","aeb4baf5d2124e50e4ca690c16db39bd"],["/archives/69707535.html","28d3addf3cc2dfc9c27a7a97d8a34d61"],["/archives/6d1af91.html","dce4163cf60ad9359402523891068444"],["/archives/6deceee9.html","af03ea0cf60d48558e1163349ff0b804"],["/archives/70734559.html","41c2fcfc7ae1d3bf989559eca9b1b45c"],["/archives/74e5e1ec.html","5cb09556f0252e0c2f1c54ea7f9d672c"],["/archives/7e9276a3.html","79e38a827a492f80b9a35c8794073a40"],["/archives/8245da27.html","066eacd2ad089abf0cc981044add2289"],["/archives/895003b5.html","c036402b2204094ba9d8c279dce20dfb"],["/archives/8a79afbb.html","9a6556161aa92226e7bd57e9fbbcf3f8"],["/archives/8b73c6b7.html","32977c52659235373a8b285c068cdbfb"],["/archives/a1078b2d.html","3bb7ffb78254eee912789830401423c9"],["/archives/a61abc.html","b55b1376d71fd8ec76c51d22f70f3f68"],["/archives/a844d9fc.html","9af0456df5f0e78921ebd0650e44ce6a"],["/archives/a90c94cd.html","1980c522128b672cce0ab59c82933da8"],["/archives/ac792cf4.html","7c509f345726576f65a9378a2865cc97"],["/archives/aedd05c3.html","099ea9f1532d47f4ff7313bc23f519cd"],["/archives/bbc95d58.html","59034a8ee32aa308730368c790245ce2"],["/archives/bd7ef112.html","45af52a75f3491f0a7882ba374084ea2"],["/archives/becc831a.html","c2ad959f9af47774fdbc87e48c8710fb"],["/archives/d1fc759.html","015168bb2307ab6a6a2c953583e6ec86"],["/archives/e433f3d.html","823e67f50616c81e7e6b6746de55cd10"],["/archives/e536ec4.html","f2b0c790f0d5e5d12051e5d4057b39a5"],["/archives/ec12b762.html","b66a106a70ce5ae015f450b3209afb68"],["/archives/ff156c72.html","b33d732a32a5089cb3756facbc314058"],["/archives/ff1701d7.html","d8c65ede0b738584b8b0f6c52ef013fc"],["/archives/index.html","ae3445988a6b54077d7f19ff2593b1cd"],["/archives/page/2/index.html","1304d1ea4aeccd42d971533a0eec01bf"],["/archives/page/3/index.html","505006e215b4ae1d63fe66c8672ddee4"],["/archives/page/4/index.html","88ae365d2d02d47e008681fc73d8743a"],["/archives/page/5/index.html","663ac1bc7ceb72673da874c8b918f150"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","9188879b0f2dc457117e777c7373a47c"],["/categories/Hexo魔改/index.html","38d25d5380d63ea8b76064d4e6d46ee2"],["/categories/Hexo魔改/page/2/index.html","598bf8564d177270c45093e7575847ac"],["/categories/OI/index.html","ba109d7247c4e73daab265d28774d2e5"],["/categories/Windows/index.html","c7bc05e89e334439a7e5324a5c12a1a0"],["/categories/index.html","1d9d131b0802b1a1b740d110d4dad627"],["/categories/个人/index.html","58250f4324f399d2e65014458954127e"],["/categories/白嫖教程/index.html","5c7bcf6690046c29435281e9cad1aab6"],["/categories/社会/index.html","3acfaf4751c901dafca1200a13fba0d7"],["/categories/经验教程/index.html","7bf486e0d9ce06673079ecfcd73a2401"],["/categories/编程/index.html","db457c593b6d1aa7a73415b59ac999c1"],["/categories/网络/index.html","f2fb6467fc7b737ca4aeb6eec9e51a8a"],["/categories/避坑教程/index.html","7f2c4033071e3df7f67cae5e9ea64108"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","6b30f8f5993393bd3e36d3b8f1190499"],["/fontawesome/index.html","2c5d0fcb59107d04c2dcae3f88367667"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","7d57cdaf1606da35b3c62f4f619db883"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","c730106c2cee5385f62fa711a46aff59"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","53874c96bbfa149605ec0e67b89f998f"],["/license/index.html","fdb925c7324b32b30d1091946d564695"],["/link/index.html","bfd6f574483f6c292b65aa0b982196d0"],["/links/index.html","b5bf14b4a83a69b4fcb22ee16bda2c70"],["/messageboard/index.html","4494164a1c8b0fbdb9191a3b1d120834"],["/musics/index.html","5bd37c99fe0c04258ded304da5719b3e"],["/muyu/index.html","c3fd7e26e91b0d7bc9b79cadf8de75d3"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","cf9505a1a780db60c259ed9334c4385a"],["/page/2/index.html","4b708e00dcd59926600862f9d6d4c6fc"],["/page/3/index.html","f4989b1d68cf3a0ab0d161038837ffad"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","4454a7ab4e3bd6462c51593541dfc09a"],["/sw-register.js","af9c5fbdf3e6439b3ca38cf0013c4731"],["/tags/Hexo魔改/index.html","b12d152b22f5a15ca4ed8086f1303e54"],["/tags/Hexo魔改/page/2/index.html","964454db799ebc51f3b3344ddeb82e96"],["/tags/OI/index.html","ac009ccea4d1bdfa801d1f60fb3fe7b6"],["/tags/PyQt5/index.html","4f5efeeceb7520cdcdb7836f147b8f94"],["/tags/Python/index.html","2c6c388db2b83ee0ecff5f28dc160441"],["/tags/Windows/index.html","54c81b3012a9eef4cdb8d03f4b2b4710"],["/tags/goorm/index.html","0540a7a6a3af4c546a300538295bf3b4"],["/tags/index.html","7fe6db3ff40aae025909a8d55cbda93e"],["/tags/uClock/index.html","14a49525692a45a5ed07faa4b4c1f6e8"],["/tags/个人/index.html","ed9342c66b56d5b1f4e1c37f76acab60"],["/tags/域名/index.html","f228325766ae5f8a65dac74572df1b7b"],["/tags/字符处理/index.html","205f86396d726afaaab6011b75ec5186"],["/tags/服务器/index.html","71cb95c355b0201df6b91683fde09230"],["/tags/模拟/index.html","c019e01f2925b2184a2f79256aacd875"],["/tags/白嫖/index.html","e81659b904e2f367dfc418f6fa1c920b"],["/tags/社会/index.html","a1b5a4e38caa28290647d40465201649"],["/tags/编程/index.html","2a0e278f37dd5d390f691edc9a142d63"],["/tags/网络/index.html","1ac4aa833445712cd0941dbc2cbcdb85"],["/tags/翻墙/index.html","3554cb3d6611c4dd35cdaa9bcaf12447"],["/tags/贪心/index.html","d139cf6e648858c5e5cffc2b0375a1a9"],["/tags/避坑/index.html","da60e6738af4418f53937f36ee9772ce"],["/tags/高精度/index.html","af23ff18cb64b6995f0e390584c362ad"],["/tags/魔改日记/index.html","3454fe949a63ad051a501f6f09848c76"],["/tools/index.html","fdc7a3862afe6b72148efa31cc890870"],["/update/index.html","cbc8806a2ca0aa5a2ee5bb8b7f323617"],["/zaobao/index.html","4cb4b52f75064c42652209aa4f41edbd"]];
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
