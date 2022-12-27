/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","66dfb6a288296a533df295c705e88240"],["/archives/11eb4aac.html","51c9b2f291a72a15aa18bd7a59c77d62"],["/archives/14740f7c.html","6e5e727686d9d5f4cb11ccc0c2bc7034"],["/archives/1b850b16.html","a75fec6a54f1b04000b036f3589c95b8"],["/archives/2022/07/index.html","ccb56f492855d3f0f14fbe2c0711a9a0"],["/archives/2022/08/index.html","ff25abf08f51bbf98d0c51416818ce75"],["/archives/2022/08/page/2/index.html","5866f589a555f11f6528a87a2db2c2f5"],["/archives/2022/09/index.html","ac7eb344f06fadafae982ef0fc5c0d1b"],["/archives/2022/10/index.html","51e576075770d602277bb2aa88d7cb4f"],["/archives/2022/11/index.html","0814db75307b5d54d4ee2f48cb5b33ab"],["/archives/2022/12/index.html","aa72f06da629ed1ab9e4890aac4c089f"],["/archives/2022/index.html","746954400885ec798c3c80830319f516"],["/archives/2022/page/2/index.html","a47883c374322933e7411108b607e613"],["/archives/2022/page/3/index.html","1291fde7b2918f7fcb2503ab8521174d"],["/archives/2022/page/4/index.html","0cc39bae8b2eb11fdb81122f1586061b"],["/archives/2022/page/5/index.html","c8325f39aca331e1ed82737b53493da7"],["/archives/29b0359b.html","41592be76a266ddfd9cf85d82bfc7077"],["/archives/30bce1d1.html","2463ee40bb9087b45158e327fbabe68b"],["/archives/3ee11b0f.html","1e1a9c469b843ce41c4f615c1132fcb9"],["/archives/45897d5c.html","2d1f9f890f9457c675fbf3cc8c4c856c"],["/archives/4ae2ec41.html","a7a0e3493384fc441d67b6b32a70f4c2"],["/archives/4bd8701b.html","a63d194bc77327235dbf34ae9b0e953e"],["/archives/4ebac27c.html","90ad81cdde3c1f37f0e20323803318fc"],["/archives/53e6b356.html","ac49b839355df7592b6fe2d98e277eae"],["/archives/583ff077.html","4825f16f84cf7ea30b3be145106f66b4"],["/archives/5d71c71f.html","b3115559baef370ba5b5f7203d9f94d1"],["/archives/5e2c4b67.html","b3f046af9c7799d94d2640a0918b65a1"],["/archives/614f1131.html","db837c675aac726a78e46059d09793a9"],["/archives/61b9829e.html","a4758111806d6033ec20f9ee4d9b23a5"],["/archives/65ad2601.html","0f12ac90789f0a3c00f0dec073c4eecd"],["/archives/670e47f.html","87a0e9e3959c19c0a5076f265cc127c3"],["/archives/69707535.html","19db7cb13cefc63bb3527eeb12dbce01"],["/archives/6d1af91.html","7d7e14b59dd10d242628ff15810ae4ca"],["/archives/6deceee9.html","28cb883cf1a54c4ab49a1336ab2f2d21"],["/archives/70734559.html","b864786a6e22af23c7417cef55e2a3e7"],["/archives/74e5e1ec.html","ef7fee9073046717f4e9733cfb5c6508"],["/archives/7e9276a3.html","2e44562080c79ee05df62f823cb6d195"],["/archives/8245da27.html","f5b9980c01155a9127a8218c424414d8"],["/archives/895003b5.html","ef029594b78e2c9cc66ccd2156dcfef5"],["/archives/8a79afbb.html","3b6fe3f41f7c28775d68ff07b87cca31"],["/archives/8b73c6b7.html","64eb407d70d04e0bdc741aa2a7283ca8"],["/archives/a1078b2d.html","1fdada5bfcc78ec53b410b677d68ab66"],["/archives/a61abc.html","43adedb712bd01c50a0b7f2320852a4c"],["/archives/a844d9fc.html","c0d111fd7143ce98b0945bbd72168ba8"],["/archives/a90c94cd.html","baa1b512b8792dd96cf6bd3befa85ac8"],["/archives/ac792cf4.html","d3761f4cfc84ae792f9b6a64479171f5"],["/archives/aedd05c3.html","865204b089534cf7c39b48ea764a9fe5"],["/archives/bbc95d58.html","e5de4c811bd4aa733038f918ded16e47"],["/archives/bd7ef112.html","b9e4c3dcb49d3c6dfa6c7d2254202ef3"],["/archives/becc831a.html","6b51cf35161d8fc56bf057a5f4a4d22c"],["/archives/d1fc759.html","b19100e58853edcdbef5bf7bfa34c0d7"],["/archives/e433f3d.html","2f53cd14485bf2502f7cb00491e6505e"],["/archives/e536ec4.html","efffc15dfa17d9ecb373e48204b43f2a"],["/archives/ec12b762.html","82115a72effd94bd5f10ddb235dc6a37"],["/archives/ff156c72.html","ad45d32ee90ee08c52ee1e45ce55e1b3"],["/archives/ff1701d7.html","23b43d618b6ae5a6f110435a8058f86d"],["/archives/index.html","168dc5bc15f9fcef5adbfa22aad31a5d"],["/archives/page/2/index.html","cb0336498c7181fff4f9622285467f96"],["/archives/page/3/index.html","62c394c9727d72ea4d422cc0d11e9f20"],["/archives/page/4/index.html","b8ddb31c22863c06e16abee2e1dac1c0"],["/archives/page/5/index.html","8a6f8ec8787a3a45e8a013ca6d66fe06"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","a9de5a446624bb5d5d2466904b207fea"],["/categories/Hexo魔改/index.html","5e0c715b330460fb31bc08d08dc8f481"],["/categories/Hexo魔改/page/2/index.html","dd1017b8c61ea784f748674373b23fca"],["/categories/OI/index.html","624b199aa5b3946ae3acc5d4556d8b74"],["/categories/Windows/index.html","b92a696232d2a459dabc7e941f4f26a0"],["/categories/index.html","c501a2006b29387c2efc92adef4d830d"],["/categories/个人/index.html","e4da6590f8d9540212084bb616821eed"],["/categories/白嫖教程/index.html","fb9b6bae3aa6ca72b96b1f3fca73bdd5"],["/categories/社会/index.html","b25432067e71c3cbcfba3daff029214e"],["/categories/经验教程/index.html","9b775cb6a1f073741f54bb278089343b"],["/categories/编程/index.html","2f6ea9798ae661fff7fd632821237ed9"],["/categories/网络/index.html","c156943ce9ca4176661296e0a8a199ec"],["/categories/避坑教程/index.html","91466abc5ee52b239da339f3c5541720"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","3e5194509fe214f0c3f432b344b60cf0"],["/fontawesome/index.html","f74b10e043cddaadcccd77f9c35ba9ad"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","2836f4399e36efd3c3262b1033aee321"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","122593bf62de1d8244f2fbf7013e853f"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","7c6e6986483d48228a580f03178a9496"],["/license/index.html","2969c66a9e2058ea267df5b9d95709be"],["/link/index.html","031d513f1391e7608d1c1b10cdaa1a73"],["/links/index.html","4000047fcc337df660800173bb3f47fa"],["/messageboard/index.html","1ffaa1937536535bb268628c8e5c2c23"],["/musics/index.html","9f59a3d1cab2bb421d15358fc89a36e4"],["/muyu/index.html","506a576f402578216ed414a847dd8aaa"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","a34feed04110ac977ba7715c4bea882d"],["/page/2/index.html","f20c27a1ec3560e054ecc4ca92349d9f"],["/page/3/index.html","d0a9fa77d052474378418207be57677b"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","c04e3bb85143a0e30e2b09bec10b10d6"],["/sw-register.js","ae21e406c3033f35597d549bc9405b7b"],["/tags/Hexo魔改/index.html","b4935f42edc6adaf525acff8ca7fde8c"],["/tags/Hexo魔改/page/2/index.html","62535caa09fae61f61b930cd1d3c62c8"],["/tags/OI/index.html","bcecf6399c1deed6c77b6e94ac43d3c0"],["/tags/PyQt5/index.html","0f78bd627fe2129525198178f31fcb8d"],["/tags/Python/index.html","5906ad0ca24786b2b01d6c7891815a5a"],["/tags/Windows/index.html","5c4ca33122b711790a64a087dedb9df7"],["/tags/goorm/index.html","17caf098c60895080fb53045ba934623"],["/tags/index.html","a58f8b2036248ed10f269642cb7cc272"],["/tags/uClock/index.html","c017630492afbd2adf872e73ea1cff51"],["/tags/个人/index.html","fe47ac9cd3b4cb5f2d45697ebb849611"],["/tags/域名/index.html","bb0821ebaa0811596e3f9b139d30ea00"],["/tags/字符处理/index.html","fec35550d05e05b9891a90a60398f161"],["/tags/服务器/index.html","69daa7be1d1844eaae9657ac13c113de"],["/tags/模拟/index.html","eba81ab76c1192800068b67128e71947"],["/tags/白嫖/index.html","32eccce7f9bc8762206bf61128fe24fd"],["/tags/社会/index.html","babb270945957af18c063f7ad3d469f0"],["/tags/编程/index.html","41a9483ffc33919f2802d700f43a9c59"],["/tags/网络/index.html","a6d5641737dc317dda7987cdaae0beb8"],["/tags/翻墙/index.html","9a532ac9d71a30ac42af8c2b44b599cd"],["/tags/贪心/index.html","9fb820c2c2af509352be672f21fe16fa"],["/tags/避坑/index.html","590d00db69c706026a6afe592bf0d069"],["/tags/高精度/index.html","8ff7a9c4973dd95a65cca6882608d2a4"],["/tags/魔改日记/index.html","7a30a821419359eda1303595f449186c"],["/tools/index.html","73f4ce02eee2734ecff3d12afe1888bf"],["/update/index.html","93db326ed10ac2f6c7cfebb52c334794"],["/zaobao/index.html","6e8f4111e69e3e80b659e088146d7be6"]];
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
