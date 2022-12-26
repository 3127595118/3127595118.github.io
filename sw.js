/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","195fcfd3318cb7cd25620438da11342d"],["/archives/2022/07/index.html","bc8b59cbcf490b223bc57623dbcd820e"],["/archives/2022/08/index.html","71689c72042b084f4ff147d63a142a6e"],["/archives/2022/08/page/2/index.html","839d53446554a9f88fbd638418d7179c"],["/archives/2022/09/index.html","cc46b85e167572ecca89ae7867e84686"],["/archives/2022/10/index.html","9ccb789b32b87ca9e3e4fb46d081605b"],["/archives/2022/11/index.html","ed5c9b2f22578ba5f254fdd75a84ca4a"],["/archives/2022/12/index.html","a1a58c120adc658cab111dd66a78b0ba"],["/archives/2022/index.html","f9616c96212109394618536af522881b"],["/archives/2022/page/2/index.html","af564e38b336bb3ca003c727c6309ccd"],["/archives/2022/page/3/index.html","4996ab4e2823c4e7c163727976b8c4bf"],["/archives/2022/page/4/index.html","e803cbcaddbc733a7ad942c0f8ab2eea"],["/archives/2022/page/5/index.html","9cad035c923ea52cf3497e45b27225e9"],["/archives/index.html","1d5e46e8104c70f7026e80763ef5fcf1"],["/archives/page/2/index.html","ed8942b4df9fa952ffe9dfe44ed4c580"],["/archives/page/3/index.html","d27fec0e7c0a73833756caaf43558004"],["/archives/page/4/index.html","70a98eb4675b290278af80d16dee5a58"],["/archives/page/5/index.html","04427edf7a1b370b1fd2ea681d830cc2"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","1b9e67da75214a6efde7ebb05440635f"],["/categories/Hexo魔改/index.html","bcf67ec80e6b55684d491159b9b1807a"],["/categories/Hexo魔改/page/2/index.html","15556f615269f040daa7ed889a6255a1"],["/categories/OI/index.html","85e3e4dce8e38e12213291ac07831d53"],["/categories/Windows/index.html","6676aa5772acca1d7bc1108d2037cd55"],["/categories/index.html","5ed8a60455997b56a7bdce60500d7b3e"],["/categories/个人/index.html","007be3e4521d2f95f3f75b6f49a43bb8"],["/categories/白嫖教程/index.html","ac1d9495fec7a274cadef2b1c74efd8c"],["/categories/社会/index.html","a3171f50413a0f8b15ef80127991916b"],["/categories/经验教程/index.html","711a7f8eedf471b8d057348e891a05b6"],["/categories/编程/index.html","415491c76123a6596c9def458588738b"],["/categories/网络/index.html","05ca79cf6d4a04084cded44fe3ceccc2"],["/categories/避坑教程/index.html","13f7a05cf1b7b8ee15c855d34fc92fef"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/nav_menu.css","a7a7e8a3cfedae6b9f420b2ee63df06f"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","8fb1b51227830974a7959ff3a7e5f7a1"],["/fontawesome/index.html","311e2caaf3994af5cbf452df39fd6c1a"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","f2673a8ea17726f8bb4e9b58dcd06d2d"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","f12644ceca00482cf5bb02177d65b455"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/pjax1.js","0b704c5a871a2107a99a128182a284fc"],["/js/random.js","402ff1b60c4564defd8834448310f750"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","1c2878ab6a5ee675a04059ff615be9dc"],["/license/index.html","db82da720c04cd152b8532f251efc583"],["/link/index.html","756032ab9d859ef9f814cf4dbafb4a9c"],["/links/index.html","5a226834167b305dc8923a56ea94d8f5"],["/messageboard/index.html","0371e8258b37d2e7e9c4fc6e8eaa6983"],["/musics/index.html","76914bab2f049d604a883185d6097bc0"],["/muyu/index.html","9913dd8b8994de15f03d2eebb1c5e702"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","06167a183e65814a90ce00873ec13928"],["/page/2/index.html","054e2393684d8eb3946920853ef6b94b"],["/page/3/index.html","2d9840e62e378769c6fa74b4b1d46dfd"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","c49c9bbca07daa3aef336aff6a9573b2"],["/posts/14740f7c/index.html","0a2285a45e269e5fb6ee3cbceb7fc4cd"],["/posts/1b850b16/index.html","dccef7b3b3f300dfe87627b4b0fb7df4"],["/posts/29b0359b/index.html","b1bf17c58201c6018bf504ffb3bc5f6b"],["/posts/30bce1d1/index.html","ef240a190c9cc5a08274579653db0d1d"],["/posts/3ee11b0f/index.html","6ef2991b08b5e3adbcf891931e06d405"],["/posts/45897d5c/index.html","85a31462b426add59721e5f77ec97dd2"],["/posts/4ae2ec41/index.html","48c054c671ea7ff7c8871a11f1135d79"],["/posts/4bd8701b/index.html","ee7c13167091fbb1579cb7690908e18a"],["/posts/4ebac27c/index.html","a6bb4d6ea46d809ec009dd3e0767d961"],["/posts/53e6b356/index.html","282b0c1b483bd858d82ae270398a3794"],["/posts/583ff077/index.html","6a2e7e3f321a75035c084be7811b0610"],["/posts/5d71c71f/index.html","b62eab54944ec4b38d68aba846ae3480"],["/posts/5e2c4b67/index.html","1a74fcaf6ee7ec4ad3cc73c0dcf92d37"],["/posts/614f1131/index.html","1e5ebbf45b2df1ca3d405e2a72719f80"],["/posts/61b9829e/index.html","4e586ce658178a77efe931d6d1662e01"],["/posts/65ad2601/index.html","21fca59c328bdb5850c6060b646d8826"],["/posts/670e47f/index.html","3b37e07087ceab33ff21326db341f122"],["/posts/69707535/index.html","af477903c031bbe4779998c9f73540e9"],["/posts/6d1af91/index.html","528223534f7df62128f9ffde5d3adeff"],["/posts/6deceee9/index.html","675f265383852baea782bd7d45742cd7"],["/posts/70734559/index.html","cedef00f6e2914ea94403c29dba5d7bf"],["/posts/74e5e1ec/index.html","f5f2a05a1a00d8fad9757ee604425163"],["/posts/7e9276a3/index.html","dbf758d9ba4aa07224710b5e9b970423"],["/posts/8245da27/index.html","4eca591514b123c71138cd82ee0c0516"],["/posts/895003b5/index.html","6ca951d14b8eaaa512f659750b192897"],["/posts/8a79afbb/index.html","e830d97dfd273c1d29725da51cad2e11"],["/posts/8b73c6b7/index.html","f70aa28bfb2659514f8950e206afa7de"],["/posts/a1078b2d/index.html","29dec01243da8c31b30376a449ed80b1"],["/posts/a61abc/index.html","e1c7b8ed8a71c03a2ae13764235fe4ab"],["/posts/a844d9fc/index.html","4acbd1837caec18c4a651028da7163ee"],["/posts/a90c94cd/index.html","595d7ea56ff46504970358e8f66e912e"],["/posts/ac792cf4/index.html","512229ff90e948738fd71000ccb27a5a"],["/posts/aedd05c3/index.html","5bbc8ce68e229af40f15df4fef568322"],["/posts/bbc95d58/index.html","36bd9a435b476047ab40f4cb85a7472a"],["/posts/bd7ef112/index.html","c34ff106ec1f8a960931855b6d4e70ac"],["/posts/becc831a/index.html","c0246d2e1b80413419bdbbf9af0cba98"],["/posts/d1fc759/index.html","4144b35e160e95845ae2e1f7a8df0cbc"],["/posts/e433f3d/index.html","5d49697e06d8dd8b92881cac69e418e7"],["/posts/e536ec4/index.html","65dfa1f11c9861f00c50151659c9ae4a"],["/posts/ec12b762/index.html","608a562e6ff3f998d08e87ffcb01c940"],["/posts/ff156c72/index.html","9137d6b73f193c2aba8143b0694e270d"],["/posts/ff1701d7/index.html","9022d2b69ebcdff06eb690c67a9b11cd"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","6f2710915d61cb753086409c3b77708a"],["/sw-register.js","dd081033026babe6525965a8b69e6a27"],["/tags/Hexo魔改/index.html","8ceb7878d229f084dd79db52cc1bf2e4"],["/tags/Hexo魔改/page/2/index.html","4efca6bb6a0d5d745a65f707676178e6"],["/tags/OI/index.html","7226781275acf611f1be217a93f1b965"],["/tags/PyQt5/index.html","64745a0cb5ca5e6bd4b928a7bee1cb7d"],["/tags/Python/index.html","c0ced2379824245a120a08c40484ae9d"],["/tags/Windows/index.html","27d644fc45048c776ac0d0a7e785ba4d"],["/tags/goorm/index.html","7db82bfc14ad2881fe3f7ffaac13d490"],["/tags/index.html","d34d5b1dec1dabb876434f474a9e74bb"],["/tags/uClock/index.html","39869f7deaa0c860c817b9ca2de35586"],["/tags/个人/index.html","c9275e0d396a816080ff9612659edba8"],["/tags/域名/index.html","11e3ccb0745a300c115e192cb7eee54a"],["/tags/字符处理/index.html","417b76d846c139149d0e3a652c3b9664"],["/tags/服务器/index.html","97ec64c274bd5b64436e8e0194e330bb"],["/tags/模拟/index.html","1e73716937192b80622ab10f310f855b"],["/tags/白嫖/index.html","3b548e6171d3e2efbeb87f689714ab1b"],["/tags/社会/index.html","038a756dbda551e5ef0e292f4cf50bf4"],["/tags/编程/index.html","643e4844c4acdb968c713c935cc7a089"],["/tags/网络/index.html","6053fefbac04c8900f167917572511d8"],["/tags/翻墙/index.html","c4ee7b9eb142c8efa92f2f99efa95ed6"],["/tags/贪心/index.html","65ad36b4c14ea22766ae5b2c031de53c"],["/tags/避坑/index.html","717e71972ce6787c9eb4421ce9e55506"],["/tags/高精度/index.html","a1ee7161af96c92a26be9ae32a2aa3d2"],["/tags/魔改日记/index.html","f4cc9cf79c4f23b65de83f3d3d10e17b"],["/tools/index.html","403d5fa82e69e5bc84110deea828dae1"],["/update/index.html","b9a52c198c92bb61de73b944f37e23af"],["/zaobao/index.html","d4ca1af6e9d6d565ba2485eba13ab640"]];
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
