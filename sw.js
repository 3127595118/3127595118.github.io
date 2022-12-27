/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","84c1080728ec79771d34d6872bcf7c0d"],["/archives/11eb4aac.html","a40ad929546876d03cf825939655eb69"],["/archives/14740f7c.html","cad018e8dd4bc298098d663eeba96b3f"],["/archives/1b850b16.html","ff75c3ff2f1e1dbb344ba01eab4dc86b"],["/archives/2022/07/index.html","b7acb6d4a2411ceb494ab33ed74a1312"],["/archives/2022/08/index.html","972c5d219fecbe886223be33482ef2ac"],["/archives/2022/08/page/2/index.html","3f22c88fd32fd080d806b73064ced8e2"],["/archives/2022/09/index.html","0cd38ae7a634c8929cb23502aa686e57"],["/archives/2022/10/index.html","8377ef8c5e25ebecae06aba8d002d9f2"],["/archives/2022/11/index.html","9b2b511878bc711cc4f2d814f5728a65"],["/archives/2022/12/index.html","2b59b28fcbc6d5858c6b1b63ec7a69df"],["/archives/2022/index.html","491ef899f54d0fcd5c1fec998dcadf0d"],["/archives/2022/page/2/index.html","fec781166cbe5b2f233343debe87c620"],["/archives/2022/page/3/index.html","c3a0f11409847fa9636696492baf3565"],["/archives/2022/page/4/index.html","1fad1b4f43e8b0536567ad20ea05f8ae"],["/archives/2022/page/5/index.html","9a0e359ce27e3736037150fd8ebd574a"],["/archives/29b0359b.html","97ec90732fe666110c25eac84c6bd65e"],["/archives/30bce1d1.html","aea595550b6ae4062c4e489dd2039931"],["/archives/3ee11b0f.html","6aca48750119cc26ddcae28c3b808b0f"],["/archives/45897d5c.html","38c0a4c113f2f3afe6bee8f94e96f448"],["/archives/4ae2ec41.html","c8f35f7b839af9820a8fed9ec1fba0d2"],["/archives/4bd8701b.html","af95b301ec20b7bf0fd7f424d162f8e4"],["/archives/4ebac27c.html","6af5a6974c3af050d2e0653458a8b953"],["/archives/53e6b356.html","65f8c583a5b754e67d73a2efbf134e38"],["/archives/583ff077.html","3c0d46b2b0f8dac46209fd2db526f6ea"],["/archives/5d71c71f.html","757b7b0475e4769a0cf0eb84d608bc8e"],["/archives/5e2c4b67.html","5c9a2b82bfb02f35cf3666ab524c860f"],["/archives/614f1131.html","27c110b5fa2de40a3f9a1463efb28251"],["/archives/61b9829e.html","87e702feaa6f473699ffe2fb8c0aaa0b"],["/archives/65ad2601.html","53be6a7badb652c6bc8f764e1a3de7e8"],["/archives/670e47f.html","a9bc35b6570bdd70787dec17a2bc8f9b"],["/archives/69707535.html","5bad627b881eba76a217e883c1a4a1be"],["/archives/6d1af91.html","2702cd1bc4deb7b16c986d90f4c74af6"],["/archives/6deceee9.html","c3222cc22f72b1e6c9655e8f014faaee"],["/archives/70734559.html","4ce829384afc1a0ac86f080700310529"],["/archives/74e5e1ec.html","3b70318687240407367bd8a8d099d69a"],["/archives/7e9276a3.html","e5c328a8231036d14a343868b53c4dd3"],["/archives/8245da27.html","cdc493414fb535f948f427dd65df539b"],["/archives/895003b5.html","becc0fd2b006ff1ea1c7419b39ebb6ca"],["/archives/8a79afbb.html","2cdb32acfaf2030cfd9923e35486d34a"],["/archives/8b73c6b7.html","6de10e80468985a3fc3fad59d2b0c0f4"],["/archives/a1078b2d.html","a9d6602366a791b5de3f74f0dbe306f3"],["/archives/a61abc.html","10d8b2fb6dbbb4e6a32cda8720d462cd"],["/archives/a844d9fc.html","3e1d60b8a10d02bda7b24b6047d7da72"],["/archives/a90c94cd.html","ec0163dab9ba7d7a8213010f824c5477"],["/archives/ac792cf4.html","4d72c40b63c43b44ab0b23e71b60e34a"],["/archives/aedd05c3.html","d7d32a81634cdc14e7debf6c66e1cebf"],["/archives/bbc95d58.html","4256e45c696f11cd99ef3ae9e5d5c992"],["/archives/bd7ef112.html","7649f7ed40be7a692bad23a492154aab"],["/archives/becc831a.html","d600736ac2be09e325dad3cdd0b611ab"],["/archives/d1fc759.html","1343c8fbaa27517336fa912bf276ddfc"],["/archives/e433f3d.html","8762d7524b94b0fcd7ffb91e34e82b28"],["/archives/e536ec4.html","30db021ba331f9503637b226772bde50"],["/archives/ec12b762.html","0d3f801521eca56efd105079c1a9aa26"],["/archives/ff156c72.html","95ee6ed72d3f821aed67c30174cd02c3"],["/archives/ff1701d7.html","67eab9ffaa425fce20b5431e116bb78a"],["/archives/index.html","f445db689414c7f3a5faa37afd52292d"],["/archives/page/2/index.html","2b577e83401388678796dba15e292aa0"],["/archives/page/3/index.html","51b90d775cb9efcab0444c1e2d08f752"],["/archives/page/4/index.html","72d52252207ac4cd8ffa68dc48221130"],["/archives/page/5/index.html","0c73842a791c7837c48dd96890d9e8d2"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","695e2b6e425698e41d00f0ee0b41eb48"],["/categories/Hexo魔改/index.html","15ca21de3809d47387a27fd9249ad588"],["/categories/Hexo魔改/page/2/index.html","0e2f02d6e0a55a2743a284780492dcfc"],["/categories/OI/index.html","5b2a5f328ed22aefc38f676e8fc34509"],["/categories/Windows/index.html","58c75a56cc798c1bb28e88cfc1c464d5"],["/categories/index.html","3244d2e812dadece31030b4024842fd8"],["/categories/个人/index.html","f294d1d65f04d5dbaaf75ea183b2ca28"],["/categories/白嫖教程/index.html","c45559bb6abbe8271bbe75ebf4dae2f2"],["/categories/社会/index.html","754bedbf732b689d902d0d3217336207"],["/categories/经验教程/index.html","cc511177acbf450b6e5f7ebfc5b4805c"],["/categories/编程/index.html","ca4b281efeee2b98a673be0bc7b73e56"],["/categories/网络/index.html","1016b5167eb5b0f9c0c8d51e13a150eb"],["/categories/避坑教程/index.html","986e972f4e36c71c803b5aba0231d9c1"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","9c896895e7bc21ddf08d04cebc11cfb0"],["/fontawesome/index.html","d5fd4c223aa4ca18e2f0ac635216b76a"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","36bfa9454c98a8744680fec0a181ed87"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","b54a977e149e823ce5bcef2c3e2787f0"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","637d2f37b07af7a46ce3c319e6125646"],["/license/index.html","5216ba40e61354f34af81cf0ca8527b8"],["/link/index.html","c9b66da18600ba25718e6b0de40b4de4"],["/links/index.html","f450a7fdd27756603c373d53b09c769f"],["/messageboard/index.html","8e09c37b7e57fe860765ae73e19ccb94"],["/musics/index.html","b8187570b6b6ccc4dfb35545511a61db"],["/muyu/index.html","d1f81232fa36e94e0913a51a184902cb"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","8a2b489ddb012380ee0c08832e91aa19"],["/page/2/index.html","a0ecad6c7be67356c13e599013e26b4a"],["/page/3/index.html","9564903c61216ef6105dcbcf6a94a25b"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","4de606e16781d79b99884b788ad1a141"],["/sw-register.js","275da59819c4754ab964d50faf53f059"],["/tags/Hexo魔改/index.html","0ec0e706caa9851077b09c8f58f46023"],["/tags/Hexo魔改/page/2/index.html","e0ee0263a08aa2883c86399b5458368d"],["/tags/OI/index.html","6c7aa539bcfac8b8112cec0c0b05d7fc"],["/tags/PyQt5/index.html","53e67d889cadc3a16cb6ae5fdc9d7896"],["/tags/Python/index.html","d52651f483755c09f1002927efebecd0"],["/tags/Windows/index.html","593b26def79f685c7d57dac9cc3e2bc0"],["/tags/goorm/index.html","ee26f830a18c997645939f3849d0795d"],["/tags/index.html","9184c52dd60731af38641addd121ff4d"],["/tags/uClock/index.html","d1deb7dc4064e7f10e5474583dacd636"],["/tags/个人/index.html","455641b543157df228cd94571f64925f"],["/tags/域名/index.html","60efc31fabdbff7ac9ec9938d4668065"],["/tags/字符处理/index.html","2eabddf18d14aaf83542397a75496bcf"],["/tags/服务器/index.html","aa408be7aa272c03b8a912b0d36fdea9"],["/tags/模拟/index.html","6cb0f500324e44e8e9dbbfca7cf1c109"],["/tags/白嫖/index.html","f4b78bf4e1942913e8cd884521a506dc"],["/tags/社会/index.html","2a741deb4bf19ab729accf86bd498c30"],["/tags/编程/index.html","4cc92953d11aa01a80a2dfa940995029"],["/tags/网络/index.html","689db0653c54e780068fa8ba761ae6e0"],["/tags/翻墙/index.html","b33eff4e5a83b14621813b6d94470d91"],["/tags/贪心/index.html","385eca8822786c579f78730e8392eab0"],["/tags/避坑/index.html","e586367e86fe24fdab440841972e2ab9"],["/tags/高精度/index.html","816a18b56e97fb296bfb096297536677"],["/tags/魔改日记/index.html","9ee4396d11a899d8c7f88100d06b62b0"],["/tools/index.html","7459e4f05f34488752d8859df844c78f"],["/update/index.html","04ae7762320421f61a667f112ca51c4d"],["/zaobao/index.html","26e5da0d065da815cd4537184a85f60e"]];
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
