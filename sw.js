/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","87cfce3b7c6610fd43219775329cf65e"],["/archives/2022/07/index.html","60112a760e13614dc38a5423364a00a9"],["/archives/2022/08/index.html","7b748c48693a512fa96f3cc2a700df02"],["/archives/2022/08/page/2/index.html","564c8219f2ba8fc3759cf10b35beb894"],["/archives/2022/09/index.html","a399502276979ee85735d086a29751c4"],["/archives/2022/10/index.html","bf9a497bb34c3cfc39d5c40776903559"],["/archives/2022/11/index.html","11d052bc93a07aef0b0fe64d0d47dc62"],["/archives/2022/12/index.html","c6bf892f45a511a4d986b4360638923f"],["/archives/2022/index.html","bb6d688bc758bcf04d16f8d9d7661da9"],["/archives/2022/page/2/index.html","119a057a4544bdee6e90b21fa2ff1ba2"],["/archives/2022/page/3/index.html","7417cce81d904d26da9d6cc3d8c7001f"],["/archives/2022/page/4/index.html","9aaffee570ed4eb9b6b60148fc6aa323"],["/archives/2022/page/5/index.html","73f1e41fb5500844f839de2b1ceca438"],["/archives/index.html","a55cf5c14dde080b34e680c3ab868a99"],["/archives/page/2/index.html","58ecb54a06e5a24790c07c8f3b5dbef4"],["/archives/page/3/index.html","48e89c562b38053204d8f2aefaf5f149"],["/archives/page/4/index.html","65f689f16d2d8e238e3fb6524f220707"],["/archives/page/5/index.html","dd7d9de16bf3b598d4af4eaa5d2743f1"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","a1f090881171196653bb311072dd2d7f"],["/categories/Hexo魔改/index.html","df9fc2ccdd63fced6a10a9b8dad9dd63"],["/categories/Hexo魔改/page/2/index.html","2f2f2b3b7a0ceaabe7b6622756d3e27f"],["/categories/OI/index.html","118f18035fd58d58dad14881d236e911"],["/categories/Windows/index.html","dae9a383c5d4436b0619762e1bcbdb0d"],["/categories/index.html","55f5d17e6a5e2d71d8956882357e04fe"],["/categories/个人/index.html","cf2093a05ff091f78d62ab32937f5737"],["/categories/白嫖教程/index.html","e91297b56d3365687a89ff51f2ea90a8"],["/categories/社会/index.html","83ef69dd8d9f2c78879602905f0fbdb6"],["/categories/经验教程/index.html","a9e2df93f273c91cf51a4661274ca876"],["/categories/编程/index.html","32bfcad0107fe810a4ece1c7f5637848"],["/categories/网络/index.html","d606ac4e548f22e96297f5fb81cc6314"],["/categories/避坑教程/index.html","1f9dd52ca69c0502487657a2f3f2d2d2"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","d229e1b0ccfa7abb2bc9162f24496540"],["/fontawesome/index.html","21fed5bbe86afc6cb3ed6076d416e9b4"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","1dcd2109279955e865637d450fc7221b"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","eb0f7eb2802f67a78aa9f7deff6a40ab"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","c51cfa795ae51de0535bd316a615c6a4"],["/license/index.html","38100b98cc5a12e95f6a7b54e50f3a82"],["/link/index.html","e95d7a53fa75ae1c0ead152b7876d992"],["/links/index.html","f2a1afdf47afdbc22eb1f26a1d63967b"],["/messageboard/index.html","538689a306ee1ea54492cc3ff764054f"],["/musics/index.html","4d38d7ee65cbdb240b1ed676c2dd4786"],["/muyu/index.html","b1a0d8b9d5e99655be6fdd1a931a83b8"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","15ee699342a62793e8171e8a63ea2f9d"],["/page/2/index.html","c468a9b79dac14835ae491e16ed10611"],["/page/3/index.html","9fd150275044a5d2150df25207b9812d"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","0924198be2cac00fcf50f7328876ae15"],["/posts/14740f7c/index.html","cc012061d62541fe53ac5b7e4d11d1d3"],["/posts/1b850b16/index.html","cbf51adecc957daf990a3f5b3e111126"],["/posts/29b0359b/index.html","e9f3ad69d7f89c3ddbc3305c65b97218"],["/posts/30bce1d1/index.html","6e60352d687c88920c5115b02c4c7761"],["/posts/3ee11b0f/index.html","bff5b5a166a43005cf03de0572dd59f6"],["/posts/45897d5c/index.html","87bc15672a8ac483b70d871c76a24f00"],["/posts/4ae2ec41/index.html","a9bbaa04e0fd91accf2266adaa27e786"],["/posts/4bd8701b/index.html","937fcb2356001659af9664ff379e692e"],["/posts/4ebac27c/index.html","ca6049eaec79c06bc5e1fec219069baa"],["/posts/53e6b356/index.html","b192f038b7478145632bf94a90210664"],["/posts/583ff077/index.html","989dc0ba4649b8669a9f0061965b6ade"],["/posts/5d71c71f/index.html","515dad38b38443f728a5ebb5d825cd0e"],["/posts/5e2c4b67/index.html","59da2b76bb3686ef63096d9fa4bfe6b4"],["/posts/614f1131/index.html","7beb2f93d5c9654f6f300ecf56fc2b2d"],["/posts/61b9829e/index.html","d8917c748ccc88eec13992558167ddc3"],["/posts/65ad2601/index.html","863785cf5ab91a7fb9a44dbb1d1edbb4"],["/posts/670e47f/index.html","8abf1bcdf63a32cbe70875f2db177df8"],["/posts/69707535/index.html","fb389139437b2e3b0b2c5cc92c54df9e"],["/posts/6d1af91/index.html","f7e9cd8f5ea2e7b6fe5297786068bd49"],["/posts/6deceee9/index.html","ff07980eb7566f07ee47eef6116c0e1d"],["/posts/70734559/index.html","42fb9ab13718c325e35b1e9f87ca204c"],["/posts/74e5e1ec/index.html","8935abb2cab5a1c63487c91e1a33a224"],["/posts/7e9276a3/index.html","7a281034bd87ebba7dae84922b209439"],["/posts/8245da27/index.html","25a3eb3ba1080d2bb0cec118f6e97f3d"],["/posts/895003b5/index.html","4dd4323b5254bd9ad77463af114bf13f"],["/posts/8a79afbb/index.html","bb8d22c41a6e119b5e84c46a39c16a69"],["/posts/8b73c6b7/index.html","6316854ee15298dc6c2193db31e99495"],["/posts/a1078b2d/index.html","ae19279627cd08d3ee8c16b5e5f525d1"],["/posts/a61abc/index.html","3f3563aa425db985e162d6d8d2d82595"],["/posts/a844d9fc/index.html","0851f11deb91013ce0865e467683f19e"],["/posts/a90c94cd/index.html","c75099c10cb646083d5bfec406794d3a"],["/posts/ac792cf4/index.html","d5b062a5ebb4f3d9424ed61a347f5ebd"],["/posts/aedd05c3/index.html","cc6f27fb7447f43f3de7c93e924b4a76"],["/posts/bbc95d58/index.html","03d631cea4c39c37e0b8fd61a0eaf27a"],["/posts/bd7ef112/index.html","288c5bbafa25673dea3b7eb681c1fc8b"],["/posts/becc831a/index.html","d4ace553fe1643adcc6a49dc68eb1af3"],["/posts/d1fc759/index.html","2c2e4f8d40168223fcd56d8e5d377282"],["/posts/e433f3d/index.html","890b94eb46793959421fb82574e111d6"],["/posts/e536ec4/index.html","7eecab6040e34da4ce7bee43a36e67f5"],["/posts/ec12b762/index.html","ed31db11e34a95ed219554305cf49b4d"],["/posts/ff156c72/index.html","54f5837d2e7281cb1971f9ad514e7119"],["/posts/ff1701d7/index.html","213bf739fe0abb099c7262ec0e9bf39b"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","ae1233d92df9a1ad4abedf8a07ad933b"],["/sw-register.js","5e49c4a287878d8364e8f05fcb73489b"],["/tags/Hexo魔改/index.html","9e09df819170da43849b013a722ea6e2"],["/tags/Hexo魔改/page/2/index.html","0ef9a7cb0b7166dc02cf1efd8c1136fc"],["/tags/OI/index.html","0a531c5b5678edf2b148d7be3e89406f"],["/tags/PyQt5/index.html","289c9cdd0ad0a6764dc0569c568a68ff"],["/tags/Python/index.html","45b5909f51038e68f37b66428a3654e1"],["/tags/Windows/index.html","f9f1e65e1c026de0b29692b1f5898fd9"],["/tags/goorm/index.html","f45364aae6ec471edd6eb847f1cf9b92"],["/tags/index.html","61259623ac2b65bbdbb9a7b1dbe5207e"],["/tags/uClock/index.html","d30028433828c6d25a9d5ccba7523d44"],["/tags/个人/index.html","8e757ceb029d4dcda715893be1fe1ec8"],["/tags/域名/index.html","c7667db53f6d7532179aaea9e722c2c3"],["/tags/字符处理/index.html","374094dcc31359b2568963c88d695cbb"],["/tags/服务器/index.html","5ad9dc4bbc24d99fa77efe046d5afef5"],["/tags/模拟/index.html","be20d947f9e2e3cc383df381dbceb612"],["/tags/白嫖/index.html","a3950101225cc085ddb2470b28d8a7fe"],["/tags/社会/index.html","0fb1ff8833878202f21bbb771a8f2fe5"],["/tags/编程/index.html","be7f973f04c716873752ded19c4c6a8c"],["/tags/网络/index.html","5a97827f1a77ecd9296eb38713664249"],["/tags/翻墙/index.html","ff73c0ed18d267a2c20136264f1d3ea6"],["/tags/贪心/index.html","1eca9c275b50a0190322e2f1507931ad"],["/tags/避坑/index.html","29ecea8ec3f18cb9ba03d08ab204450c"],["/tags/高精度/index.html","fe2d349d6e62a167f00ca87d5e051ece"],["/tags/魔改日记/index.html","203c10885bfa469b384ea62bc29d7301"],["/tools/index.html","588124a8f16a785bf13bb7fa1f4de03c"],["/update/index.html","854d9b117ed6a7aa8e86b6b35f222854"],["/zaobao/index.html","4e6ecf62ecf61c4cbc7b1d5e1ab94f99"]];
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
