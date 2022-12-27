/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","3269fbfd24c0688d3e6574c1773918fd"],["/archives/11eb4aac.html","8584ee931cd7ab0f194f6d5a864a8ec8"],["/archives/14740f7c.html","4312aefddf5cffeac4eacc02597ea113"],["/archives/1b850b16.html","2186d4e6b559497a1105dcf8d7464eea"],["/archives/2022/07/index.html","bfa1088aa91ec57c72b5dcea7bfd643d"],["/archives/2022/08/index.html","bfd6bac6e4aba01aa01b05e69cfaed6d"],["/archives/2022/08/page/2/index.html","204a0a9f31456ccbbb536724155d9952"],["/archives/2022/09/index.html","6d001d2c2b52876ce6848a14b3f3eae9"],["/archives/2022/10/index.html","d6d2efcdbf24e12da2ac928719b864b0"],["/archives/2022/11/index.html","e6189cd71e194a55825e21903fc88459"],["/archives/2022/12/index.html","613800aa83511463fec49af7c075b404"],["/archives/2022/index.html","f8d985b1b026a531e66c1c8155e98f61"],["/archives/2022/page/2/index.html","1f323bcf19633744adea9738bc32341b"],["/archives/2022/page/3/index.html","028f8e6887f9dfc8b14cac94cf2f8d5f"],["/archives/2022/page/4/index.html","f0fc6f16cd37cae992782b95115b4b99"],["/archives/2022/page/5/index.html","3fdbaa911d430544db58d227c49151f5"],["/archives/29b0359b.html","a962e5647af6139a42cb1d3103fd2481"],["/archives/30bce1d1.html","e978a2c01f4ef0e97b0e96eae62d9ce0"],["/archives/3ee11b0f.html","5570cea950eb06dfb6bf92fb08d9cede"],["/archives/45897d5c.html","bbb7b823f9080556edd692e38673b5d9"],["/archives/4ae2ec41.html","18ab44003b31aa3a0c14df5d1e548113"],["/archives/4bd8701b.html","e281f8cf2894d0e8d67e9a2773f8ce6d"],["/archives/4ebac27c.html","0a285c56aaf7c621720a1d54f6e7f39a"],["/archives/53e6b356.html","e84686c087a04f188a68478e98800af7"],["/archives/583ff077.html","bd9556246bdf1146950f64e23818ebb1"],["/archives/5d71c71f.html","a566e883b56fb4777c37644559f9a924"],["/archives/5e2c4b67.html","a7f92d0c0c540f85f779e018476f6e01"],["/archives/614f1131.html","cde42f7fc84a0bdd723059e0cdee4a25"],["/archives/61b9829e.html","64125af83bd9470dd300a1a1fe4df9a7"],["/archives/65ad2601.html","88a34b3047e37d263a006a7d765a1630"],["/archives/670e47f.html","7244823bea23ef74bab5e93867ea0855"],["/archives/69707535.html","fbcb965dd4a8551a430a85a33859555c"],["/archives/6d1af91.html","b8d056cc3b3f8e6e1b2f71e1ce45ad29"],["/archives/6deceee9.html","3ba6f752cb7fe78736f91da0c0abc9c2"],["/archives/70734559.html","fecc364d4fe9fdf119af135f08e8e61a"],["/archives/74e5e1ec.html","3fe96068379969675306e03577f5dd5d"],["/archives/7e9276a3.html","bba412dc87340777f50a60128d5c4563"],["/archives/8245da27.html","9ef4d7b752581319cad321fa639d63f4"],["/archives/895003b5.html","784ba8e91c4733dd38aebe55c2629c8c"],["/archives/8a79afbb.html","978314f7a3b3adcfaf1e853a60677a5d"],["/archives/8b73c6b7.html","5731903fa2849d51a337f227f31b7d53"],["/archives/a1078b2d.html","c4a9bd4e595136e5c2d529f3fca24137"],["/archives/a61abc.html","c808f03d0ab28f64e36a0786dcfd3a02"],["/archives/a844d9fc.html","ec26e081e18fd5c77ed61952c342dfe3"],["/archives/a90c94cd.html","229f762db7ae6d626498565b5fd0c83e"],["/archives/ac792cf4.html","feb87b7ad73615e44258cfc7fcf2729f"],["/archives/aedd05c3.html","7c877d0e247a730ba43415a243f1da40"],["/archives/bbc95d58.html","01c22f508d0288e3e1a8d197f7a5e944"],["/archives/bd7ef112.html","d65576c7ce8bb8657f4753694eb76cfb"],["/archives/becc831a.html","bc0ee32afc229e8cb79bc06304a0c049"],["/archives/d1fc759.html","1d94a49a3d851aecf49adae28b0e0b9e"],["/archives/e433f3d.html","c7ca273cbff14f83bf114707057707c8"],["/archives/e536ec4.html","4f1018561dd5ca2e2199757696fdfe8a"],["/archives/ec12b762.html","64133fc69f1c9a3433ce1b8df4725bdc"],["/archives/ff156c72.html","baec896db612d368278f81dc847dae44"],["/archives/ff1701d7.html","ef937d996092a3c938611bceb82c6805"],["/archives/index.html","22860a67d7a3224e7413da9aa4794820"],["/archives/page/2/index.html","83586fb4108f89737c694556df8b5619"],["/archives/page/3/index.html","3fb7cefab54ad0a68eae7ddadfb1e6bf"],["/archives/page/4/index.html","98ce70365cbcd6669e8b367c4e1d441f"],["/archives/page/5/index.html","8d6d79b3ea8dd4993b60253f8960d407"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","f4e0d6db54a621b4b638119e365ef411"],["/categories/Hexo魔改/index.html","4a530720e7d4df4acdc72b922438b366"],["/categories/Hexo魔改/page/2/index.html","a0b369753d9061b8250af4ab35d20470"],["/categories/OI/index.html","96e971c92aa63b6ee783a798099c0d39"],["/categories/Windows/index.html","293241d3379736d0ca9b398e644437e3"],["/categories/index.html","fbb0a1b808472f5b50bc48f10ef1bcf9"],["/categories/个人/index.html","4aaa3a690de60314fd5e437890c78069"],["/categories/白嫖教程/index.html","2c60c1d36d21aee81ba9fa2d555592fb"],["/categories/社会/index.html","db2b0fb2d7bed65be38b59eb0cb6092c"],["/categories/经验教程/index.html","801f657eb14b6ccbee8432bd3eddcf59"],["/categories/编程/index.html","762297b15c7842c95a74b6647632cc62"],["/categories/网络/index.html","c0c2d79cad77a973969a9850f0526c0c"],["/categories/避坑教程/index.html","acb7589e3cedf1fea7e08a273638070e"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","93619ba028f51a38e03f6fe93c6a8607"],["/fontawesome/index.html","772a5f677eb5749291caa7559ce38eb6"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","b6ebfad98e4456266ef500e216a9dff1"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","6dea6ae892b921b57e021bcf5ea96420"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","1804e69a5be1c0bb9400c349f779e17f"],["/license/index.html","f42049c68ef48579a94e20913bf54768"],["/link/index.html","f572c494f1ee942756d905910cee40bc"],["/links/index.html","b10fd995fd08afe377cf8f380adc8fc4"],["/messageboard/index.html","97fe29f23bcc0db58d6ba0062ab20da0"],["/musics/index.html","7f4e5addbeed03dc1e62b02798aa68ba"],["/muyu/index.html","13e2d4796d1dc8e8c16e2b78de875ea1"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","ced271dffd4d21133b6c01db98bc85b9"],["/page/2/index.html","ff6fe34554efda3e87c1f0ef65bb0df2"],["/page/3/index.html","a1f730e707f809cce0d92b02565b98ca"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","4e3a27f7cd6983b8972ea3a5448dbb1e"],["/sw-register.js","a204997515d3673059e35c48275cdfb8"],["/tags/Hexo魔改/index.html","b5cd4036a7591e18761de5ecd0aadedc"],["/tags/Hexo魔改/page/2/index.html","c56a5f696c0f1eb1ca0ee743b8ce50bd"],["/tags/OI/index.html","776ab1e9a86eff2b2812024e68f29e97"],["/tags/PyQt5/index.html","3cfacded3ef43a84f6fb84b458ed9688"],["/tags/Python/index.html","4b349745d81f7404f505056989ee698a"],["/tags/Windows/index.html","05adcd05f48e1dac58992a1f4856e1a9"],["/tags/goorm/index.html","42f2bf587205a259b566c205658b8c7b"],["/tags/index.html","df1fb3be4ebca1be49e5e80d6ae4bd6f"],["/tags/uClock/index.html","7cbd53b2fbd5d59f1d1eec35599069ac"],["/tags/个人/index.html","9477c9b2f7aa8f87b425bf319c327a1b"],["/tags/域名/index.html","5c11c7c263c8c0e22381cb0a6705987f"],["/tags/字符处理/index.html","9ebadb0dc0ff2810c7968a74d8f69fe9"],["/tags/服务器/index.html","326549a607b4a90122dc8a7cf62aea79"],["/tags/模拟/index.html","eddcd8ac4d2fdb22e40eeac1c8fb635c"],["/tags/白嫖/index.html","1ba746202f6463856f12a7f522751ece"],["/tags/社会/index.html","64a2b09aed13a04d9004f5b3fad9d837"],["/tags/编程/index.html","3f4d5afc1e3652513c8a742bb3050a51"],["/tags/网络/index.html","07562f5ffe8bf0906c611f10143103db"],["/tags/翻墙/index.html","89b698864598c43b43b15ea9acff2f1d"],["/tags/贪心/index.html","2c800b680a8c872d98febe4b0957d2e9"],["/tags/避坑/index.html","bd460a9362dd6a287c527ac0138acfea"],["/tags/高精度/index.html","fc233defcc6bd2d6d00e4c906f3ad61a"],["/tags/魔改日记/index.html","5ffea3bb350da58371ad423be35f64a5"],["/tools/index.html","27d5965464186f406fc1b80ffd6ba33b"],["/update/index.html","a69e22babb5111990c2745dd82c64160"],["/zaobao/index.html","ac8c4acd40c6d8b4798a312752defbd1"]];
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
