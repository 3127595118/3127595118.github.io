/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","378214f0b9d4cac7012a705411bd7bc8"],["/archives/2022/07/index.html","4e649c750ccfdf53ed2b5612521bbcee"],["/archives/2022/08/index.html","9bee5b6b03c53244be057ef7dc1366f9"],["/archives/2022/08/page/2/index.html","872c87b0d8cd42a6ce8dad35091ea0f3"],["/archives/2022/09/index.html","7456600677fb9d9f33e73913a3136575"],["/archives/2022/10/index.html","94d820dc0b1f8ece79090e7e724de544"],["/archives/2022/11/index.html","2931f60c52bc9427a365d118c941abc2"],["/archives/2022/12/index.html","9921fdc676b11478042d164c52ffe291"],["/archives/2022/index.html","d98b7633d61426c03aa977f5d1648d78"],["/archives/2022/page/2/index.html","abf8d801deb1d6f332e3153bbe5628f3"],["/archives/2022/page/3/index.html","924b641db4a8b1a669ba430e6bf2f94b"],["/archives/2022/page/4/index.html","b8614143d9797a98df71d5ba13be3a20"],["/archives/2022/page/5/index.html","aed73d5bd5b856df4a20cfb3f6c12f6c"],["/archives/index.html","50181f933736a2bfce95cccc4523a181"],["/archives/page/2/index.html","80d9b65cf767c0b50c969381163b096a"],["/archives/page/3/index.html","c48ecf8e5eed807cba3c145414a97bab"],["/archives/page/4/index.html","00855ffec71a0ab6970f5840f7579e28"],["/archives/page/5/index.html","77ddf1e3ad5ae18e65bba1665babe540"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","e47c5645c573ca8572938aa32278cd08"],["/categories/Hexo魔改/index.html","8a064a1e19cee78e646be1685d2adbce"],["/categories/Hexo魔改/page/2/index.html","208d6346fdcee12586657fad470aa639"],["/categories/OI/index.html","16acb29e8d8fff2a8b1337e935b0bbad"],["/categories/Windows/index.html","7b2d010f83cff6ffb27d9c83a1fc4813"],["/categories/index.html","167d08b732512f6d8ed8027a5ae7fb23"],["/categories/个人/index.html","aeeb62ede7df2579c3f876a6277d1cad"],["/categories/白嫖教程/index.html","8bd9edcbc85e3ff053f6235df1bc6a84"],["/categories/社会/index.html","779e798808be69c57f4ae49dd1f6f18d"],["/categories/经验教程/index.html","48b5da0cf2eef2b4bece45d26a572c37"],["/categories/编程/index.html","65b8f261f35508ec72dfb35a1521c177"],["/categories/网络/index.html","44b9b7742db77f1e8609d7ee403b1a31"],["/categories/避坑教程/index.html","c3247ae4d35eccd861be5c3f200bb602"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","0c1ecd9f419fa0aa09b829aa1a087443"],["/fontawesome/index.html","87244117091a58b2f41cbc53670f931e"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","db1702d2284e98db30d2de7e15e8f46d"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","067e4d5ff9ff4c38bddccb99620bbe76"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","43ca6e1fbe7d3649387308b4fa563a26"],["/license/index.html","1877bc196743df5eccdf9cff70c4018c"],["/link/index.html","85022246853b4d8c08f7ba1d1f5a4753"],["/links/index.html","855b2bbe9460cd4de40c879e5179b47b"],["/messageboard/index.html","107dd735ca8d3da9b75a2f90fca2f49f"],["/musics/index.html","31a4fa6ca9c7bf18632fd05ad29aaf5a"],["/muyu/index.html","f7163e87f6c48e9524c98afb60cff48a"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","3ed9f05d96d843d84c4111e535e82704"],["/page/2/index.html","4676d43455b44dae85f8bde058828586"],["/page/3/index.html","b0b4f375dcdbeede325d1e1b840dc9f0"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","4c70cdbeef06d059f98e89c55efb4c5e"],["/posts/14740f7c/index.html","8b8f6561b3e4b8f8e79ebbb8f903d1aa"],["/posts/1b850b16/index.html","4b4701718a3f8173349baec8be6b1196"],["/posts/29b0359b/index.html","2b9f7d55cc0cfc02a85378b3260da082"],["/posts/30bce1d1/index.html","92f0a338979c7515e94f79a831eb2902"],["/posts/3ee11b0f/index.html","531911cdbc43605f7e1a44301c3c4316"],["/posts/45897d5c/index.html","6fa1c553f9165b9f2faa19089d7dd8d5"],["/posts/4ae2ec41/index.html","b26d6cf70ccbff19f37c35192e8bec00"],["/posts/4bd8701b/index.html","7872bfb0dcb9e440bb2e51d3de9520a3"],["/posts/4ebac27c/index.html","9cefd4ae488e20443f0309e1d852b511"],["/posts/53e6b356/index.html","6288f3d1d478dbbc5dd30a99211f7c24"],["/posts/583ff077/index.html","d834cb5d340a498d7c58e315f2a32375"],["/posts/5d71c71f/index.html","c253568635e3b6dc76d12a11f4563eb0"],["/posts/5e2c4b67/index.html","8822dc7d77815f6f3972c3957fd9d86e"],["/posts/614f1131/index.html","14bec0914035cf41ffc7eca8b32111a7"],["/posts/61b9829e/index.html","eb52b140ab54693eced3c3441d950dcf"],["/posts/65ad2601/index.html","6ca8152f0a69a3d2bd6ab110700f9aeb"],["/posts/670e47f/index.html","9efe1477b929568cecff4f6bdb9ce612"],["/posts/69707535/index.html","6bf5ced60b85ea460bb76a73990f7ca3"],["/posts/6d1af91/index.html","8c6d923283c3c702d21b0d9411f4ad41"],["/posts/6deceee9/index.html","83dec3c072c3521bcac1168bcbb36942"],["/posts/70734559/index.html","49010bc627f358c639e4770f3ca75324"],["/posts/74e5e1ec/index.html","d54e5bb30edd952a0734a4e0a5b81a31"],["/posts/7e9276a3/index.html","8ce69980c5eb2fafe59ef5c2633c4cbe"],["/posts/8245da27/index.html","1ee81eca036e6797eb0ce40aba1457c2"],["/posts/895003b5/index.html","559082c6ec389b2c4a7a2dd2b17b0cc9"],["/posts/8a79afbb/index.html","04682e6a5e7831f0e164a53f826912d1"],["/posts/8b73c6b7/index.html","54258fd6db7b261c9c22f10a2642e988"],["/posts/a1078b2d/index.html","70a7b6a3ec51218f25f7062cb526f519"],["/posts/a61abc/index.html","d9210a8a443a04fef4843acf95db230e"],["/posts/a844d9fc/index.html","d9e34842b2f7815ef100c9bbaf10cdb9"],["/posts/a90c94cd/index.html","9ed64346daedb93705c3ada394dd7a99"],["/posts/ac792cf4/index.html","9e1a07283ba49b318fa7d9a16ac6496f"],["/posts/aedd05c3/index.html","afab32594bec0d693dc80291f0ca48ec"],["/posts/bbc95d58/index.html","2aa11c393f0af15b4f2305dc8e281d70"],["/posts/bd7ef112/index.html","d2a3de2d0a3f99b61ccef3dc0708cafa"],["/posts/becc831a/index.html","c78b0a6ab7a3d1657552262ff1200ab3"],["/posts/d1fc759/index.html","54e3df1c79d5120fec3c895d93ea119f"],["/posts/e433f3d/index.html","f91d0f3f1418a6350d17aea741375a19"],["/posts/e536ec4/index.html","b72e847777de09fdcc0fbb64264dcc06"],["/posts/ec12b762/index.html","2324953ecb307bfc4f30c0be6611ab28"],["/posts/ff156c72/index.html","58376739ee9dcc522f2f571de568c068"],["/posts/ff1701d7/index.html","2626cb3234bc841274aed3077ea5b53c"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","a34f928efa715b3ecd9ceff47c47c029"],["/sw-register.js","11069197ba8e36be3cd5bbdd8bc3b542"],["/tags/Hexo魔改/index.html","77d8b24d024fe3ca919e0bc063a4107d"],["/tags/Hexo魔改/page/2/index.html","736a5cf53c6327473e3044df92ff69e6"],["/tags/OI/index.html","8fb5d4ae2462cb18a5adf1cce7219c3c"],["/tags/PyQt5/index.html","e22dc1decb84e66cb7cfdeec11ed2276"],["/tags/Python/index.html","1f5cd78a82536555e910a3c86f19703d"],["/tags/Windows/index.html","d07b449e428e48c1ec12443a5969f201"],["/tags/goorm/index.html","651ea44bb52133038a20d369ac37d27f"],["/tags/index.html","c5b4df72e588a641b2d801251f283192"],["/tags/uClock/index.html","f05f542b4031d9b209fdb48716661ff3"],["/tags/个人/index.html","98f981f8addcfacf06c6c7e7dee4f4e0"],["/tags/域名/index.html","56f71af36ff9b4e3f8b06a8b92b7c6ef"],["/tags/字符处理/index.html","58c3244860d2074f292fe9282263cbe9"],["/tags/服务器/index.html","c4e52f710960a79f54b4852c76065632"],["/tags/模拟/index.html","9ea5e87208f297333f3234dae7167477"],["/tags/白嫖/index.html","dccc5433622575a7393ca030e716d77f"],["/tags/社会/index.html","712f78e234569dedd7feec72ff59b9a4"],["/tags/编程/index.html","1138546ae85c22374fdf3606204e1318"],["/tags/网络/index.html","25ff7ad501a4e9d9836120eab732cac8"],["/tags/翻墙/index.html","001afc9294ed4f303934e835c766b3d2"],["/tags/贪心/index.html","87f682348f5bae11739bf156f1eb39ea"],["/tags/避坑/index.html","622d6e46794ec62b98bc4fa80e2c8640"],["/tags/高精度/index.html","a4daa223bba073f6cdd803fbd37da35f"],["/tags/魔改日记/index.html","0b2d08a111a0bedfb0861a4a71226875"],["/tools/index.html","ac6e82f3c132ec10bd99acd0f1fa80b1"],["/update/index.html","38cff32b20c094b5ef834527362780a6"],["/zaobao/index.html","eeb0afe3522fcc0e1f5a7069dbd2b706"]];
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
