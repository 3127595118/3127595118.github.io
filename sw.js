/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","9f927e7a12e5a416ca87eb5f3099bf8e"],["/archives/11eb4aac.html","cc8a91e08f99b69a15cb0845b7bb76d1"],["/archives/14740f7c.html","a4c28372b532b57a0ffb83c52cb1ab8e"],["/archives/1b850b16.html","8b47b1cf47dba2aa268bd8ddf33d1c21"],["/archives/2022/07/index.html","f2e69492304b18850a54f6a3d9401e70"],["/archives/2022/08/index.html","8b288aa21cff364a7dfcc63607a4e858"],["/archives/2022/08/page/2/index.html","8a4aa4a67edf291938b84addadc2efd6"],["/archives/2022/09/index.html","a9103bd024eb4be9a8c84db9c1c01723"],["/archives/2022/10/index.html","0a345d3c2db9c70e68755decb7d307e6"],["/archives/2022/11/index.html","d20421bf871365a1ca3b146e944efe85"],["/archives/2022/12/index.html","584536142fdb6f0c1202e6dff0c84e1a"],["/archives/2022/index.html","70894d01bd7e8c95d76d94d53ddd21b1"],["/archives/2022/page/2/index.html","53b19d2492ec74c7f67acd43a9856575"],["/archives/2022/page/3/index.html","c2749da8922158c60ef5221399169ba8"],["/archives/2022/page/4/index.html","2d9deba817b6fb47f54f4d95b9ddb8a5"],["/archives/2022/page/5/index.html","c593e66c9611f6203677d38c25e45b73"],["/archives/29b0359b.html","86d12610b5a4988416c947e0f312bc02"],["/archives/30bce1d1.html","5c86688b6714cd535d886abe89b51a79"],["/archives/3ee11b0f.html","39c985e8f3887c4dd8537e48b2e97f73"],["/archives/45897d5c.html","85995967bbe9640fb1a3be43d7193455"],["/archives/4ae2ec41.html","30dea032487cd3a69c23fb33b08bbb52"],["/archives/4bd8701b.html","e0e0d4cfc2f3a87b874b847bfecbba7a"],["/archives/4ebac27c.html","6da354f66632c5eb294a0aa12dedd659"],["/archives/53e6b356.html","93e7815e78fc039ce10788fde1aada12"],["/archives/583ff077.html","a856efeebfea9124ea9115cd49052942"],["/archives/5d71c71f.html","f8ece4a6f7908fc6d9958183c5cc1c1d"],["/archives/5e2c4b67.html","d423abcd6584475e874ba72d4503538c"],["/archives/614f1131.html","452486944d0faeb48d8c06f34fa879f0"],["/archives/61b9829e.html","4d0bacdd3aa16c08e45ec0c571f4f027"],["/archives/65ad2601.html","17ffc61670cebba027c47d4cc7adaa46"],["/archives/670e47f.html","567737dd9e4ed792c5144a24ae6376e4"],["/archives/69707535.html","b9c6a7e95bc1728f9fe6afc361799417"],["/archives/6d1af91.html","5ddf9bd5da6afbb4e76769fce61a0702"],["/archives/6deceee9.html","5b17262923ff0522195c807f6f7ee5db"],["/archives/70734559.html","0399e88e8982cf72b8412ce0f87179f3"],["/archives/74e5e1ec.html","3df7777a181015df524d92e0e5bf9d36"],["/archives/7e9276a3.html","477a0ee49f0cfebf093f114e31910bba"],["/archives/8245da27.html","4ff679407e84df7beb3d2d45820ddc63"],["/archives/895003b5.html","f9e5e1bce12e0a7d150a1d5742cf7e5e"],["/archives/8a79afbb.html","06a37fb524db9dcb3bcc0763c3db8f48"],["/archives/8b73c6b7.html","55e40ac218bea14ceff42e917b1ccec1"],["/archives/a1078b2d.html","aa29cb7a151c17a4ba75063f504523f3"],["/archives/a61abc.html","81cd0a848bae1f1530cba21cfd0be12a"],["/archives/a844d9fc.html","a91d9e6c550ad5447fbe54921cfffbc1"],["/archives/a90c94cd.html","32ff6863f75e22f4c220ca01cf8b8f0b"],["/archives/ac792cf4.html","9f455ecb64f0e955923fd4a9fca319d5"],["/archives/aedd05c3.html","6bdc08ea2c5e53ed5e37800b6eed6ff7"],["/archives/bbc95d58.html","b370e5f0f73746ae78fe9ea4dee15900"],["/archives/bd7ef112.html","017a1b835632b926a33bd8619739834c"],["/archives/becc831a.html","51554454a1eb83500bf60b3d70e3b052"],["/archives/d1fc759.html","1468db456b482dd9c19c591fd1f026c5"],["/archives/e433f3d.html","297037a18a0168d3f18bf689e9ff55ea"],["/archives/e536ec4.html","ec450f02551ed89bf994f69b28620439"],["/archives/ec12b762.html","134a08f90efcdf5fd310d17a7c9fa943"],["/archives/ff156c72.html","584f3d6c65b36e1c8aa6549c14d88201"],["/archives/ff1701d7.html","1a9f486c8a8e8166748feddd40d4f969"],["/archives/index.html","6d30c208a308bfa5db31bc6506e5fd61"],["/archives/page/2/index.html","d3f556602215d02bd870ffd4b1477d19"],["/archives/page/3/index.html","297cd9ec5d982492e5d55f02afe42599"],["/archives/page/4/index.html","b8d33d21d27014e5a0c7f11df3f619df"],["/archives/page/5/index.html","c18159581ea28f777c3c5f1e71f6f809"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","514ca02ffc7f75ddaa013a2525d0fe49"],["/categories/Hexo魔改/index.html","61c9c0be992a622bf6758a929bc85350"],["/categories/Hexo魔改/page/2/index.html","f74bf31fd5eae3764bd05dc1874e56c8"],["/categories/OI/index.html","9ea03a5f5a072d37408d46f1faec0761"],["/categories/Windows/index.html","4375fca0cf0b88b1694d357e4ba21917"],["/categories/index.html","ad78b82d94d2ac525e840f883de3cb2f"],["/categories/个人/index.html","70eee3aa47454eac4bb21dd9ecf2852d"],["/categories/白嫖教程/index.html","27a7f2bd9d7628647c986a5539d366b6"],["/categories/社会/index.html","320dc92e6f2c32136dcd166e1c1c9d19"],["/categories/经验教程/index.html","a005db8a93725151f05a8dae0d1042c2"],["/categories/编程/index.html","3cf3cac52d0e0ec348a23f0d95ff7b3d"],["/categories/网络/index.html","44566391b82673f9482985023a59fdfc"],["/categories/避坑教程/index.html","0d05dd86a5d929f0e9b3bd9a9d5b60a7"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","8139d0055a35216288d87adfd5abd796"],["/fontawesome/index.html","519155993c6606a31e45f4443a78a46b"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","d4ffc9f730db88dc77345cba14fc67fc"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","d6724eb86c60e59fb64f5bd86c39823b"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","071ec881cbee60344a2c1f4b6880aa02"],["/license/index.html","e7f2d39ec9500040cba99e2cf7527bf0"],["/link/index.html","d0223555440bb5814fe5e639558dc4ed"],["/links/index.html","f8382009845f8e267174b399f9b8af2d"],["/messageboard/index.html","ebdad908f5640a413d668d4fcf0612ef"],["/musics/index.html","de922cdc6b2d89813618df86e5c830ef"],["/muyu/index.html","f70ccfad98ec10cd1a18b126759f5124"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","fa2354c05c674ff99f26f67617894b84"],["/page/2/index.html","4c3f9ae8d5533fef277908a3f1b6a045"],["/page/3/index.html","b31f6b22dd749e26409d769a75d1fc7f"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","8316cb96437bd0ed035620b7b7deac04"],["/sw-register.js","b5426c8ce108e6085edf5868a4e8b8d5"],["/tags/Hexo魔改/index.html","85517991f857aa5ab783eabf8ffaa9fe"],["/tags/Hexo魔改/page/2/index.html","ab7a1331ae40bff53df1034616bdcc89"],["/tags/OI/index.html","c8f9b45a03985c8c686d6bea4b52ac40"],["/tags/PyQt5/index.html","924e63d74e41a0aee5fe0b695ff0c9e4"],["/tags/Python/index.html","288ac89dab9bcf7dcade4fa83e9441e4"],["/tags/Windows/index.html","620e5fb61f38e2857de3df83ecdfbd0a"],["/tags/goorm/index.html","57aa6b1f5952c0398d9bd755b078ab99"],["/tags/index.html","bc09c7aae258e708b8268048323057ea"],["/tags/uClock/index.html","0e9604166614a8fa8edd8fc0affe9380"],["/tags/个人/index.html","228e53acc0aa044a67f4e1d67db5cb05"],["/tags/域名/index.html","1b333a4a32fff44aeb04a9e174c71b09"],["/tags/字符处理/index.html","c82da4cdfcc3f060495bd2a52f3ac969"],["/tags/服务器/index.html","40bb30acc96968ca38d87e2c89bc5ad0"],["/tags/模拟/index.html","4fc781692e44ebedeab50ece339f037f"],["/tags/白嫖/index.html","6255f4d918f9c8b3fe850efa9fb86b32"],["/tags/社会/index.html","779a4217f210d8bc6922fbe2f1b7b981"],["/tags/编程/index.html","40759ef2f5a68b9469ed1e9c60b999e9"],["/tags/网络/index.html","677eb76afde563f0c9f62b7413f25baa"],["/tags/翻墙/index.html","951727bdc9ed988ccfe48454a009235b"],["/tags/贪心/index.html","e4699512594a572bdc305dc694cef5aa"],["/tags/避坑/index.html","eeaeed2547ad39139f4192eac2bdada5"],["/tags/高精度/index.html","54d217e047b46448d172f393fc50480e"],["/tags/魔改日记/index.html","bb2b1b5fc001f00927e9fdcce21255ea"],["/tools/index.html","0b3a2bb1beb9eb783688fe0e11bb49d0"],["/update/index.html","4191b34c1ff266267e486726c17ebce9"],["/zaobao/index.html","4bc4c3a8176986cf0532c6b636e1ca69"]];
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
