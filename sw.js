/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","158d687fe5f962c7c3edc118012ace37"],["/archives/2022/07/index.html","b80bec8df7dade098e69d8f8335afbb0"],["/archives/2022/08/index.html","36e6efe24a8b030c2e30d74db0f66221"],["/archives/2022/08/page/2/index.html","c868c07d687346b6b4efb9bf6b4053c7"],["/archives/2022/09/index.html","49804eb68af3a81e5cac723a5e5ad87e"],["/archives/2022/10/index.html","a1dc38695229f7fb526c6cdc54a71806"],["/archives/2022/11/index.html","6dab75872bc1c9c5aa1807e579e89c27"],["/archives/2022/12/index.html","399f8bebd14be9e69da261494492fbb6"],["/archives/2022/index.html","1d8ecd3d8a02304cbb6796457bb5eee0"],["/archives/2022/page/2/index.html","17bba7e8f51dca5caf381862c06517d7"],["/archives/2022/page/3/index.html","876f553b3962c70b3b2b0889fcc1dcb4"],["/archives/2022/page/4/index.html","ffe1772d03fb3de873994d8cb4e2873f"],["/archives/2022/page/5/index.html","54c1606b9f319112081cdaa3e77db763"],["/archives/index.html","42d23ff110b6c3c44dca33ef722c2af9"],["/archives/page/2/index.html","98f5e34194cfe852b2a000c7a6416132"],["/archives/page/3/index.html","d49ca20d881301291c9fe093531c7617"],["/archives/page/4/index.html","52487a61f72a67a7d1c29fb2c65d4d6e"],["/archives/page/5/index.html","c99d371fdb1e18250398ad71f92c867f"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","3b7d5eedd92843be43325172e997acd4"],["/categories/Hexo魔改/index.html","051ec0f63d629a8234d3e93926d9a6c5"],["/categories/Hexo魔改/page/2/index.html","e66168cb8d096c2667ea460a9ccccfd6"],["/categories/OI/index.html","52c03adffffb505a6451f226718fe0fe"],["/categories/Windows/index.html","c47cdee2eb0aac3fe81968bf2c48cb7a"],["/categories/index.html","d4795086beaebe17171ed5bde4b2a23b"],["/categories/个人/index.html","41c68f3e3bd6ca01ec70f52b4c9d7f94"],["/categories/白嫖教程/index.html","23b211e743736bc60404da3ceb200428"],["/categories/社会/index.html","6247742a616ebb8600ac4721d5ceda8b"],["/categories/经验教程/index.html","c9fc2f8ef0558157590efccc0a8639c6"],["/categories/编程/index.html","886bd083b4fe789248ee2bc2154aede1"],["/categories/网络/index.html","61b1f10d00befa71d6d11e9672819f31"],["/categories/避坑教程/index.html","004e82345162bf30f5dc3c5e6f461066"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","2aa499ac43e3da4e4e970ec996ea04ad"],["/fontawesome/index.html","607c263d8f5ea8488d7e0c308ef1afcb"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","e19c8846338aa5fbb9e0c2a7af25b565"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","370c5e463544fc74dc728edb2774ce54"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","ca7b4223f7b443b8af7ffa6a67e1a388"],["/license/index.html","1a792e7fcd275192409ef35ce6e27a1f"],["/link/index.html","ac1451303918de7166cd1a2d12f4ec03"],["/links/index.html","d0b5386033500fc2c31b45a6f06ed62f"],["/messageboard/index.html","f0daf88b6828df8962b9117a2b313492"],["/musics/index.html","c43fc923a99254bf498e48a67fde2d32"],["/muyu/index.html","7725f46a6241cd573475b08c4573949e"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","161b1a7c575bcf2899afcb4b2b732b41"],["/page/2/index.html","2d4455e65c2349f6e2176889a11aed1a"],["/page/3/index.html","2e5d9a2c25fcb1f6bd669e836f22de84"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","87d3e13c390ebe768539252393237be9"],["/posts/14740f7c/index.html","62fad23b91fe2cc678f38ae57919f46c"],["/posts/1b850b16/index.html","38dde651885108460f0348ff3022dc26"],["/posts/29b0359b/index.html","800ceec5b8d9281b5010f5f3e3f4d51d"],["/posts/30bce1d1/index.html","79a5d53635b56b61c8e4330e467dab4b"],["/posts/3ee11b0f/index.html","709ff9c17b4ff748b09896cfb6f7b8b2"],["/posts/45897d5c/index.html","ae4527ac6e8a88adf5d04885f6d343d9"],["/posts/4ae2ec41/index.html","b76e9ef0369104e67601068af7a765c6"],["/posts/4bd8701b/index.html","1866a90c8314dadf958324e44ca7c824"],["/posts/4ebac27c/index.html","d6539a6969c6e323f16d00738ab58131"],["/posts/53e6b356/index.html","bdaae1015d6e2567f40b3f46e1a3ce1b"],["/posts/583ff077/index.html","92ff18c5d70fc9377d0ce3cc83bbebee"],["/posts/5d71c71f/index.html","faef07b1b81103da66a2ef6632214465"],["/posts/5e2c4b67/index.html","3d5ee3317bb8ff06c07107313f4d3c77"],["/posts/614f1131/index.html","07591a5c5c7963bac6f6e26cd21ce194"],["/posts/61b9829e/index.html","759e7dca3b1ebfd54641c99a51c39034"],["/posts/65ad2601/index.html","4271f20523634ab8450198c9e4cd8c7d"],["/posts/670e47f/index.html","e5d9952a954424e8eca4fda35727421d"],["/posts/69707535/index.html","a57dba3cab2da933417d3cdc846f2c6d"],["/posts/6d1af91/index.html","f9d2301bb2a294a920623d3d45c4212d"],["/posts/6deceee9/index.html","9c0793d85161640d1694d0be45134430"],["/posts/70734559/index.html","9d32538c55b7e272daa224df407a96ae"],["/posts/74e5e1ec/index.html","c4f9e365156c70d4b8ee45106c8337b2"],["/posts/7e9276a3/index.html","59f2eee9510d11cf41ebfdbdc360ed0d"],["/posts/8245da27/index.html","194530089595f6a47b1517d8b9748405"],["/posts/895003b5/index.html","63a531e2b6ce432b1745e6365391464c"],["/posts/8a79afbb/index.html","37106d8acffdcba50d97b6c98d1046dd"],["/posts/8b73c6b7/index.html","46052e07a503a47ab6290576f3f00d70"],["/posts/a1078b2d/index.html","2ee62a9ec24f6306b1dcf796e87800c6"],["/posts/a61abc/index.html","a3bb91d6a56eef0f47dffb047c70613a"],["/posts/a844d9fc/index.html","70ca50a668bc6365f19ba492a7bebfa2"],["/posts/a90c94cd/index.html","78d7ba19ae82fd96dcacc69fd3437213"],["/posts/ac792cf4/index.html","7e7bad630b13d631f93c8577e8c4f013"],["/posts/aedd05c3/index.html","4d60103417e55e6b3cd5819dbf9763fd"],["/posts/bbc95d58/index.html","1896bee1e23c8a01f8e83463d7a57bb4"],["/posts/bd7ef112/index.html","fc6a93494482c1cf5775846ecd476e62"],["/posts/becc831a/index.html","02d18b9fc5b4524027096384c0692620"],["/posts/d1fc759/index.html","45cdd50af1879f12a0ba9d33ea6e3150"],["/posts/e433f3d/index.html","39532400092a7211a4c41d9434eacde6"],["/posts/e536ec4/index.html","f974c1ade67099da2c63f1be6145b6ab"],["/posts/ec12b762/index.html","d8112d76ffbfbcdad7a4539dfc44dbfd"],["/posts/ff156c72/index.html","b3279bf3c01d1dd87c4d95a66580ae09"],["/posts/ff1701d7/index.html","8cea48d98d6171d7b344ce788705700e"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","e6bb41c4e459229f2dcc06c9be74465f"],["/sw-register.js","73992d2a6cc2062e3ff95a9428d07451"],["/tags/Hexo魔改/index.html","1078e33987e08777c98cca662b25cdac"],["/tags/Hexo魔改/page/2/index.html","52fcb2988a2e85d53e5d23c6f6972776"],["/tags/OI/index.html","a35ebc50c9d0b62852283c91cdf063d7"],["/tags/PyQt5/index.html","0d0fd1ad8ea319b62a5be9010ea1672b"],["/tags/Python/index.html","dfe0c1af8eb15ad1b38955b316214774"],["/tags/Windows/index.html","b73ff93ece4fcf20195dd3efc0a2e651"],["/tags/goorm/index.html","d6b288162d0882c700a11d33bcd249e7"],["/tags/index.html","033ac4610c89652b8516feb878941045"],["/tags/uClock/index.html","adcfca060f7ebc62d35b857984724bfc"],["/tags/个人/index.html","c73c2f3bd44d3279c57606481391367f"],["/tags/域名/index.html","04f0c1e0dc79d68de3c2d13b33b53725"],["/tags/字符处理/index.html","f4f4b0095133630098682a3b57ae87dd"],["/tags/服务器/index.html","1c44b06632b4703998a450af47733936"],["/tags/模拟/index.html","5f9012c98f570efb877bbdf5c53a8a4d"],["/tags/白嫖/index.html","f26df1778704fe4f8e0ffc90482b473f"],["/tags/社会/index.html","69e7aa6c7b9ed61894c796c293431cc7"],["/tags/编程/index.html","1dd8c5a66824108e53e674145d2a1be3"],["/tags/网络/index.html","64757f70b00525dd0b7d54d2eaa0113c"],["/tags/翻墙/index.html","8843c00b7a5059fc3ea67dd42e8f094d"],["/tags/贪心/index.html","79c81e22830c3772e715a944f1ba260f"],["/tags/避坑/index.html","693dede046e9b98141117b0041e5d579"],["/tags/高精度/index.html","8d4c53523e45b43166780a3819d5f276"],["/tags/魔改日记/index.html","9d906da843ed59eec829b880e392b35f"],["/tools/index.html","e2180e0d9e9e1ff4dc03e32b92b6e5f1"],["/update/index.html","d652f65921687674add03322830674a1"],["/zaobao/index.html","d6da995d1f5882316f3f35ce7baa0bfc"]];
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
