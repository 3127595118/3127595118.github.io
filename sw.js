/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","2ed7907c486460a375f486ae6aafed5f"],["/archives/11eb4aac.html","dc1cc85934fe63c7b312a354208ac228"],["/archives/14740f7c.html","2d1e07353679642eff8ff6418ebbfcdf"],["/archives/1b850b16.html","3eb41e1d72bedfffb11727cee50ef813"],["/archives/2022/07/index.html","3b0b46920c5c13001f0fe3d865314340"],["/archives/2022/08/index.html","4485af10aaf392416cdc53c4c8943d98"],["/archives/2022/08/page/2/index.html","356cda84a4ed9a9659b50005a8c4d657"],["/archives/2022/09/index.html","20015d4a0c8c834c6f8f8a6630f1f74c"],["/archives/2022/10/index.html","77ffa0e997278340d427b9714af7944d"],["/archives/2022/11/index.html","b5531c47663c70440cbca6d8669b0650"],["/archives/2022/12/index.html","5f245f7b0488ab2a67578af653721bde"],["/archives/2022/index.html","32a25221ec097736eea995fb019974f1"],["/archives/2022/page/2/index.html","564946a1226b8fd8e8fa932de1ff305d"],["/archives/2022/page/3/index.html","8a4adcbce9638d913aba8af2e71905ac"],["/archives/2022/page/4/index.html","941539207d8795983c84e30c6eb095dd"],["/archives/2022/page/5/index.html","034774811624e4d8c9d61c83f90cda80"],["/archives/29b0359b.html","922a390a289e4e11b24604be5f162699"],["/archives/30bce1d1.html","4008639c7aca8a7ee4d0e31c7d7303b3"],["/archives/3ee11b0f.html","b3ea190048e9a818a9a0abc4d7ba16da"],["/archives/45897d5c.html","53ca593a527ad871ebbdcf34ece8007f"],["/archives/4ae2ec41.html","6fade777927779e86be99deccaa3a93c"],["/archives/4bd8701b.html","6d57a82424a30d62e4c70f52f67a2646"],["/archives/4ebac27c.html","245a6f773ce6ac8615cabf233aad7d08"],["/archives/53e6b356.html","942c8f82f78b05e959de3e88b9bbda8e"],["/archives/583ff077.html","b92222a2a9b9bbeb2bdeff4c6f4fbaab"],["/archives/5d71c71f.html","2f9813b4c5087a1ffb47395d0156bab5"],["/archives/5e2c4b67.html","296f216f78176c5d6cedbae71ac282d3"],["/archives/614f1131.html","2aee3589f2ccea110b3822268bd9a4ad"],["/archives/61b9829e.html","7a64a58466e1850d512516fe8a1bc838"],["/archives/65ad2601.html","a54b914e81ec27cb669f252606c723fc"],["/archives/670e47f.html","7cbc0d4d621f5ae079871d96d284617c"],["/archives/69707535.html","f1eb39eec3c1fb556498dda82a8e4efd"],["/archives/6d1af91.html","6a5ccff0a67e4f2977c82909af78c7e8"],["/archives/6deceee9.html","c9de1769816bacf9a99068f0e8b5543b"],["/archives/70734559.html","56c47a1d36f1cfd479acbe79980b7efd"],["/archives/74e5e1ec.html","f0c276d12a2c9e09c6e49c2950b60e9a"],["/archives/7e9276a3.html","d7c94a0f1c7e5666009a811af613a84e"],["/archives/8245da27.html","86b362574ce312a5751f9c4252d2b73d"],["/archives/895003b5.html","c2aa78e0b5718b86f512f4fd08791288"],["/archives/8a79afbb.html","41feb3a4be9c00b92056557d285ce01b"],["/archives/8b73c6b7.html","849056db42d5ed722aafebaa1f7ce577"],["/archives/a1078b2d.html","d93ecd5f4269fe52736c9a781d2d8e37"],["/archives/a61abc.html","9027439ecb0dfba7216a50d6434ff624"],["/archives/a844d9fc.html","a905898e54e73343d89ce3b2d99d8f81"],["/archives/a90c94cd.html","6624796bc7b0f16872d8a03a36446b7f"],["/archives/ac792cf4.html","fb328d310b9e570184432805773fcd7d"],["/archives/aedd05c3.html","b0409c82f6cbcfed6a8a1d084058e1d2"],["/archives/bbc95d58.html","075cb7fb40466761a36aeeb780974356"],["/archives/bd7ef112.html","c79d15ee8352591b75b403f501479ef2"],["/archives/becc831a.html","fcdfd2393aba43dde01601848e1970de"],["/archives/d1fc759.html","7bff35734464d2cf9b9f01ebc9e12335"],["/archives/e433f3d.html","dbf12de470de0d6760d32501d5f840d9"],["/archives/e536ec4.html","628d2bb83fa3522561f79e80ef414d71"],["/archives/ec12b762.html","d3c386cfc5f4f81f658f9c49c319c4e5"],["/archives/ff156c72.html","5b4a8c86a27e78453738387075d6dd6a"],["/archives/ff1701d7.html","43334859eec9ed6fd0c31f6cdaf566f2"],["/archives/index.html","59b8859842327861781342fcde7e1fc1"],["/archives/page/2/index.html","f2c14b9b65dda114ecdc045ad0563d37"],["/archives/page/3/index.html","4d89d59bb1b4c31d1ce17ea3075bdf0b"],["/archives/page/4/index.html","6ec801b2fe0789c1fb73c41cca5d9144"],["/archives/page/5/index.html","a108c1c25e56ede5d240a8bc79050c4f"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","c1be568a4cd7bdd7241174e62b857753"],["/categories/Hexo魔改/index.html","8d6e0cc4f12b45cad02dad279427795b"],["/categories/Hexo魔改/page/2/index.html","02699167ac62992d62f21ab796cac2a5"],["/categories/OI/index.html","42cc0d4aa0c9d573b9a02faa7d6b5e1e"],["/categories/Windows/index.html","bcf913126a5bc0372a7897e710f745e9"],["/categories/index.html","d50b1ce6c6f5ddb62b31d74f2de339ef"],["/categories/个人/index.html","24ec9a59b3b742f3dbe89a59b6375610"],["/categories/白嫖教程/index.html","4ed209a10dee7b46733d7f496b47b5ed"],["/categories/社会/index.html","0565b56ba84bf461ac90cfe3bd36a88d"],["/categories/经验教程/index.html","c76445fef1de3ced0a3a5dacdaaeecfa"],["/categories/编程/index.html","f41872a2525623c855057bb903b98024"],["/categories/网络/index.html","16fc1c767bbdf2fcdaf7a100f3fb8bef"],["/categories/避坑教程/index.html","090489264e3f0bd1ca33a641fb9d7a06"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","9867e5f24717e56b121ed31f0c7956fc"],["/fontawesome/index.html","108db7f39d67a3f2a88249cfbb4f159e"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","a3b978683fb84872027d95357e8af90c"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","cb3ec9eb5bdc228be9d9795a64b0b910"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","41df2f4c975316b3f381bbd4db952c5e"],["/license/index.html","63d0cafc23885f8ad3d6d559ced23cf0"],["/link/index.html","f27653b732947e9dc5eff1bfeadf0034"],["/links/index.html","3473d0ba76feec10786e49863895ae5f"],["/messageboard/index.html","10cc20b15e5504aa17f7b1436f924073"],["/musics/index.html","33999609efe62d954eb9e45200018f1d"],["/muyu/index.html","50a8d7b79cc32cccad03df5ca77e2136"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","771fa84db3cc74f1c67832d256ff7b3c"],["/page/2/index.html","674c9320b1082d1aeb4e175a7fc59291"],["/page/3/index.html","e9e6c6039c5448bef5a7909b9e6a6801"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","b2ae44ff919f3abffae7171bbec0f03d"],["/sw-register.js","bbdf32b8a68d4a7e1e7eb59c0a0f8ad9"],["/tags/Hexo魔改/index.html","450b48d675251da16c627671362ef236"],["/tags/Hexo魔改/page/2/index.html","406ca935e9274751a14bab3cc264ff3b"],["/tags/OI/index.html","f7d87b153ac3d54c0250d62b6e4a3724"],["/tags/PyQt5/index.html","35dbcdde54c223eca43b908ddb864f74"],["/tags/Python/index.html","6f76d841bfb70dc8ceb6980ed14f7e0e"],["/tags/Windows/index.html","b0017a6288b7f672a255d6f6455c7c1a"],["/tags/goorm/index.html","274c58b78cc63b3b3b36b607041c1cca"],["/tags/index.html","56ed294158830e704ebede0d418e3d64"],["/tags/uClock/index.html","0c7eb4a9feb2b3abd4d6dc98e54082ac"],["/tags/个人/index.html","f85ca7708682f0b6bb12dcf894e94ac1"],["/tags/域名/index.html","2fa7d5c05812c37893748445560e9352"],["/tags/字符处理/index.html","b8ed4f61cbe6d5f5cd6e7e641848ec4b"],["/tags/服务器/index.html","785fc409d8d4319f487ed74045aec40c"],["/tags/模拟/index.html","2abd51d132dc25074b89a0a79d8bfc6d"],["/tags/白嫖/index.html","0d6172e143fb1adc2075bb716ab95774"],["/tags/社会/index.html","de3037b3d6afd5f7900eb0b852736e2e"],["/tags/编程/index.html","a414918d710b58297612da30ab52e8e3"],["/tags/网络/index.html","07475560a2efd0a54c03112f5f21f9ea"],["/tags/翻墙/index.html","49a3dcbe691615a172eab795ee101ede"],["/tags/贪心/index.html","a57c78934328765fa8451e9101ec50ad"],["/tags/避坑/index.html","ad89d8c169e1ea9b6cc0e2ec8796c9c6"],["/tags/高精度/index.html","2de1d64c3ae5d878253f623bcb4f7c76"],["/tags/魔改日记/index.html","eda595f48f29a0e565560fa83636daab"],["/tools/index.html","249d9e9c82ac5172eb1fa8ae45704280"],["/update/index.html","b13c999611304d391c0b558de68d436a"],["/zaobao/index.html","092de16a6231bc6da4ff9599c3ac262b"]];
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
