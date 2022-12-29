/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","778d7337aa31e78249297cd05493ef99"],["/archives/2022/07/index.html","d32848e3db2bef99e139f0cc24d66c0e"],["/archives/2022/08/index.html","3e13c9f9b00051422369d3bb6372fc8b"],["/archives/2022/08/page/2/index.html","bb55ab8ff1ef3e89bac748680524f62e"],["/archives/2022/09/index.html","550f4a674b55099b2597e390a19d2753"],["/archives/2022/10/index.html","0080640094e269c012814ecccd036818"],["/archives/2022/11/index.html","cf7065ea21ef0b1a8380516102502284"],["/archives/2022/12/index.html","85255122d11509c9ffe2aa8cc9a76b07"],["/archives/2022/index.html","6ec4898099bf74f73b7357551793fd48"],["/archives/2022/page/2/index.html","5a503f1493b579beece19620b3d98d6d"],["/archives/2022/page/3/index.html","47207e2d5f0c0aa13bb7229fd14d2668"],["/archives/2022/page/4/index.html","46724c02f204f82ab8b3c7cd9c8d5d2c"],["/archives/2022/page/5/index.html","37c3d9aaa229bf8f37b508088e9673f4"],["/archives/index.html","f6d8daea7c013c52c8762225a6df4591"],["/archives/page/2/index.html","f2b43476755d697972eea620ece3e50d"],["/archives/page/3/index.html","03955177e3f1a9df4867376cb55980a7"],["/archives/page/4/index.html","610ebf58f15c6f39ecb293d06ed9569a"],["/archives/page/5/index.html","f98ecbcd7af71378f6911163544a0026"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","e051f6d076d0746761adcbca952d5000"],["/categories/Hexo魔改/index.html","45d208579eade38a953be522b56b551e"],["/categories/Hexo魔改/page/2/index.html","3db212bf0bcd64d80321c7bbe66ca94d"],["/categories/OI/index.html","33541f0d1bda618a392b74d810623365"],["/categories/Windows/index.html","0dd2099058949ae8e4dc32265b68d4f0"],["/categories/index.html","421d3ad899ea97f96c7d70084b0c9a96"],["/categories/个人/index.html","eaa831e8b170f2b10eb2769fd8d6e68c"],["/categories/白嫖教程/index.html","6fa8654b1a5cf495487552cb6ebffd1b"],["/categories/社会/index.html","82a922d0ac5fa1325bd19f23f1a9627d"],["/categories/经验教程/index.html","73b7ab6bd509d1e9b01b245bde39068d"],["/categories/编程/index.html","ea2b3b5913315e9fd1bb626ad5f9f230"],["/categories/网络/index.html","69564a00488c43bc8e7175ccf2643611"],["/categories/避坑教程/index.html","df9acba64f1ab447eb266637b8370cab"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/fcircle/index.html","126b412edff455428a5d5eec52f79a24"],["/fontawesome/index.html","8fc12a369fea63b89b772b3628e39fcc"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","62501ff759b9330ddb9aca09e7846cf0"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","7e6ae2a8025a7b6a8948bd4019686313"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","d53bb5ac2eec8a4388821681a3ce9c87"],["/license/index.html","635e5941b1d7ec3250cc158166707f68"],["/link/index.html","51701f9c1317e80d49fab31cb436b15c"],["/links/index.html","7659a486fe0bae17aba70e9732acd9c8"],["/messageboard/index.html","ab8662907e2b04898f55dc7c96e353e3"],["/musics/index.html","7bc81ae5540e1e1ecad2ddc70bfb8d25"],["/muyu/index.html","d581021f3050a4204427bcaa312dd226"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","3770ce1cccd337789962ca95fdceedd1"],["/page/2/index.html","501c0c2e5b334f318241c66ec64b641b"],["/page/3/index.html","2ef2f5227056a078f3af744bd0ba73c3"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","e3fe8fb16237a5519ecf856d68073c42"],["/posts/14740f7c/index.html","56d9b9282758bce2b6be142f22a2e3f5"],["/posts/1b850b16/index.html","f70672ba2759028dfa46072d0121e5dd"],["/posts/29b0359b/index.html","2b185fa3466a5a81abda6fcd6916e68e"],["/posts/30bce1d1/index.html","a4521808bb1c337c4e972338c870245b"],["/posts/3ee11b0f/index.html","2dc791bd6ca9220b8b97348bfb3ea00a"],["/posts/45897d5c/index.html","df8f7d994fdb57c5398f66dd3a752870"],["/posts/4ae2ec41/index.html","1f026a928f481d43fefeeaf91254cdaf"],["/posts/4bd8701b/index.html","e9fad1c2513b46a8523d3b5fd2949813"],["/posts/4ebac27c/index.html","c129dd1b3c5be5356a409c2a0e2fe06b"],["/posts/53e6b356/index.html","404c94f36edc217a92b0d513d865a16c"],["/posts/583ff077/index.html","fdcaf417f13a3e2ed7e322e770a8c969"],["/posts/5d71c71f/index.html","6813c98d809129febfe6508ee6d75471"],["/posts/5e2c4b67/index.html","4850a7bccce4c91e3da20aa52c5b8908"],["/posts/614f1131/index.html","9f682b6464688a7fffa1a00037079e1e"],["/posts/61b9829e/index.html","7d9a7c8e9002dc3e572defc757e6dd5f"],["/posts/65ad2601/index.html","4267d7ad576e4d8cd6d317ddc98a032b"],["/posts/670e47f/index.html","fa559dd54791c2872c312afe1c7834bc"],["/posts/69707535/index.html","f90ec231bd4d7cebeff16bcef4d6e364"],["/posts/6d1af91/index.html","1fc1ec6ae721fdce25c59968766c77cd"],["/posts/6deceee9/index.html","fc5954644db9f66046a397d6ee448a48"],["/posts/70734559/index.html","d31ee2af405276e67f442a5e7263e5a5"],["/posts/74e5e1ec/index.html","b5fd4a08854aee996b39d07fb87d1a35"],["/posts/7e9276a3/index.html","190ec3630b46530367dcfadcc88ed2c6"],["/posts/8245da27/index.html","1f3005259a7bd3fdb0a1c6747ff494d2"],["/posts/895003b5/index.html","7d85bae58aae1e5dcb81a30e17663f1f"],["/posts/8a79afbb/index.html","174070a84fdb8abe80e4262237a71738"],["/posts/8b73c6b7/index.html","6ad8bd92e6e9458018810defab0955a4"],["/posts/a1078b2d/index.html","4f5a32d7df3824b067294c90d7426942"],["/posts/a61abc/index.html","2c2b8397924f4eb559661825fc036dc6"],["/posts/a844d9fc/index.html","980bdaf3ff74aa0351fc4c4f975df27f"],["/posts/a90c94cd/index.html","e31598bf846c30102528207004c138e9"],["/posts/ac792cf4/index.html","84492ee305b0e931eb636f270cb03185"],["/posts/aedd05c3/index.html","de3f9a01d71323fb6631ad5addfeaccd"],["/posts/bbc95d58/index.html","0905346af1974cd7275e1add2fefdb7a"],["/posts/bd7ef112/index.html","e1e9965679c1bb2407d8e31913890ddd"],["/posts/becc831a/index.html","b92a418a0d969d1d5a1882303dd03564"],["/posts/d1fc759/index.html","54ec93a41f7baf3bbbe0cb0f0878d715"],["/posts/e433f3d/index.html","627ae717c00e9f435f1e7fa9cd4da6db"],["/posts/e536ec4/index.html","b1d4cdc5afa0982afe12c62b775daf76"],["/posts/ec12b762/index.html","3399933d24746817641b4a16147d59a7"],["/posts/ff156c72/index.html","2502795dc46532b2d2a7595d01673c93"],["/posts/ff1701d7/index.html","5416561ec96eed9b779c8ca6b0d25554"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","437addfb6165f97c5b4c9ca1ac3e4bb1"],["/sw-register.js","e417cfde89c896e18da7ed71bf3105bb"],["/tags/Hexo魔改/index.html","5e32cf5851f173c45d7c532a676f67bb"],["/tags/Hexo魔改/page/2/index.html","a97b1e12ba7f617ff1d08b5815cb80b0"],["/tags/OI/index.html","a6cd89f33fe3e06cf81626bde7e93249"],["/tags/PyQt5/index.html","aeaa05749f816f60b8b7a40a3feacd90"],["/tags/Python/index.html","c98c92d01f601b2da1c410383d09f7e8"],["/tags/Windows/index.html","a1896638fb276f4405d0bf14f76260d6"],["/tags/goorm/index.html","dcce304386207b496d5fc7fc5d4d9342"],["/tags/index.html","683a9800f6b07f8b04c0073e481d5e7e"],["/tags/uClock/index.html","5c52af8da1d7b639367047f454c7c732"],["/tags/个人/index.html","b61165d44a9719c685070795768932c0"],["/tags/域名/index.html","1bd7b208b2ae61ba600def020101551e"],["/tags/字符处理/index.html","9b007b35b67d116ba993bad80f110c1d"],["/tags/服务器/index.html","57a174cb8c86957594cddca31e4a3a39"],["/tags/模拟/index.html","22cf53cb79674d5b6ce3f277a66ecad8"],["/tags/白嫖/index.html","31e8071624ecf5fd36d73d84360d59ba"],["/tags/社会/index.html","bb6116d582030ef087d9292982bb9704"],["/tags/编程/index.html","d282924abf06e0387dfe37c8a32a2789"],["/tags/网络/index.html","99654e81b08c61a23cb27c0534958c54"],["/tags/翻墙/index.html","c72c4b7f1c2cc418d8583e796aede8f4"],["/tags/贪心/index.html","505d5c3dcff663e7b0803c2de0a665fb"],["/tags/避坑/index.html","ecd0084125c9c8515bef439856f54342"],["/tags/高精度/index.html","9ae19a8ffac74e56baccea8583874b32"],["/tags/魔改日记/index.html","a5658815c043bd82c8743ababf173cc4"],["/tools/index.html","920ab1baa76c70e13df846e504a60079"],["/update/index.html","4fef75c943406c13d515cd14d34306a5"],["/update/links/index.html","82d078820d9ff93740d9bc5e30aa1c7a"],["/zaobao/index.html","5ba957d5391826cd11ecbf5dd746f79e"],["/zaobao/links/index.html","7f9744c60bbdef10e9624ec2c0264864"]];
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
