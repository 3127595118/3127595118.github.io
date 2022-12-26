/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","ae16781223770eef5bacf260e00495a6"],["/archives/2022/07/index.html","37b14a2e3c80264975f5e4741f741cf4"],["/archives/2022/08/index.html","06dcd08f2e8e73e40f010e184cf721bb"],["/archives/2022/08/page/2/index.html","83e6b09548e64e948e2c998bc3604ebc"],["/archives/2022/09/index.html","9c0db62e85ea6548b58b79ec964ee574"],["/archives/2022/10/index.html","34aec44612c254fe4e4df258ff65c446"],["/archives/2022/11/index.html","b75825b9e75d447ed0baeb99da0b6cad"],["/archives/2022/12/index.html","4b980f463172ec02c329063e539e237d"],["/archives/2022/index.html","8286850e210f403ccd3cce79bb53343a"],["/archives/2022/page/2/index.html","1e4962f4679061f562a00858103dd248"],["/archives/2022/page/3/index.html","f15f38c7b2fdea98a6af8e5f5198e083"],["/archives/2022/page/4/index.html","6601563476ca9129df4a1b493c409d0c"],["/archives/2022/page/5/index.html","4787b58ee722b712c926a41cd345680f"],["/archives/index.html","aba0d9eb32407c56ad973dfe247f71e2"],["/archives/page/2/index.html","6d04b8aa6515fac3a718afca66e7f32a"],["/archives/page/3/index.html","7c375d5617e8aa53bb3d70e5cde78391"],["/archives/page/4/index.html","067fc1a091402a21beb195638f0d35ce"],["/archives/page/5/index.html","139ff74d4c943f0caf361a73c9a8d04f"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","ab56918adffcac84615b1309c4296bf7"],["/categories/Hexo魔改/index.html","3278140f4a8e6b5c9957208b5b7ceb59"],["/categories/Hexo魔改/page/2/index.html","5c938e243de41b43917820134531b49f"],["/categories/OI/index.html","4c43d8ab08f231d3d35af440c403e808"],["/categories/Windows/index.html","17f01cfd21e6d6999b814e02aa10ea3f"],["/categories/index.html","76504e94df80c1f49977d519e7a80e94"],["/categories/个人/index.html","b5a08d4f162fa7e9f7c9c349a4fc6a42"],["/categories/白嫖教程/index.html","e75981ee086469152fcbddab54859b79"],["/categories/社会/index.html","475dac1ad021918d45e0badbf536c5d5"],["/categories/经验教程/index.html","74b6e2ea9e46cb369b3d2dbdd7d1a298"],["/categories/编程/index.html","b80f31b20f81334ae9d604fe2ae27839"],["/categories/网络/index.html","4cade50502d7bc936424db73621f4c14"],["/categories/避坑教程/index.html","1504394fb2f4b268648f9a46a6e1dc33"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","fd96daabc30d5e243d0e3a3b420f8443"],["/fontawesome/index.html","6b813c3dce62eb0741c48e3ef0a7526b"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","a050089124f2faead83e3f3586dc9df5"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","82776f3cc3894f2170b3ecd6c9e445b9"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","e7ede198368ed5d5e195b3e3b36e0e2e"],["/license/index.html","96b5749e2f76c53fcd69652a4a105463"],["/link/index.html","1867c8c57d147f60222e6b0e699b8ddf"],["/links/index.html","3d99b3f0f5f8c3c160232fa9ab4191c0"],["/messageboard/index.html","6eca574e619d2bdf39a95990be43d2e9"],["/musics/index.html","f96dab61668639049942cbd31b267887"],["/muyu/index.html","20cc8ae633a95f686e124c387115ba66"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","d8c2211eace456286b395a06ebdd2cb1"],["/page/2/index.html","b330f012fcf5ab5e5a984aaaf7e4ed61"],["/page/3/index.html","cb44a2e7bdf6695d2d05dc48edaa7c00"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","9ad0335f693ebaf73d7c9e3ee6736629"],["/posts/14740f7c/index.html","73eb772e0e5250cd0b362b5228c2708e"],["/posts/1b850b16/index.html","1c1572f539d83062f88bc030f7091f91"],["/posts/29b0359b/index.html","b0a8665a10df37465ee93938a6433886"],["/posts/30bce1d1/index.html","9f10082988878188a84933475c382f48"],["/posts/3ee11b0f/index.html","c6772de714adeb89a8a63831532a09b7"],["/posts/45897d5c/index.html","16d6f65d98348f9594e87cf0598cb5f1"],["/posts/4ae2ec41/index.html","793ec7aa37585a77413ba047ae22d2c8"],["/posts/4bd8701b/index.html","9cf9c8ec92016e47494401a119c15577"],["/posts/4ebac27c/index.html","1254a2d901ed90784bf6a4498366e981"],["/posts/53e6b356/index.html","ea9759eb62cba22b398178657c91eedc"],["/posts/583ff077/index.html","2e7a42e00cc325889e22072ed81adf4e"],["/posts/5d71c71f/index.html","3912172f9c83c53cfc9005179e3f4143"],["/posts/5e2c4b67/index.html","127ca01cc03a413b9940f9f759d48d2f"],["/posts/614f1131/index.html","4236a5399bfce84a1cdf0b8d874ca1ce"],["/posts/61b9829e/index.html","e7c6158617277443c139a7238325a263"],["/posts/65ad2601/index.html","77c04ec827e4c4b1d29b2c6ba5b16be1"],["/posts/670e47f/index.html","f2e62317222775d1239d9c9634753cff"],["/posts/69707535/index.html","145ff11429ea753f711cb98b7762a1af"],["/posts/6d1af91/index.html","eb03a2a4b6453763a556aca18cdb5849"],["/posts/6deceee9/index.html","53a909d9f894fac3bdb7d1ff7655aa11"],["/posts/70734559/index.html","df4bc5a197f3363c161131045cef1cc7"],["/posts/74e5e1ec/index.html","63d027d151b89dbfbe8abb9dd9399047"],["/posts/7e9276a3/index.html","f8ed6c6f23054173beb7aacd9efa072b"],["/posts/8245da27/index.html","e0259dc34cb6648d15c1f9831dfaadf5"],["/posts/895003b5/index.html","641df96809d066d0ee05ec697b1f34da"],["/posts/8a79afbb/index.html","e05eae75460a2a784fbf184a95e851e3"],["/posts/8b73c6b7/index.html","14c4d7d674e5ab7af8641757193b4825"],["/posts/a1078b2d/index.html","cffe1c973bf51aeea41f07ee20f0a939"],["/posts/a61abc/index.html","357f63ad1ace2cff477e90851703418e"],["/posts/a844d9fc/index.html","c512a5fdfb6689a73a9c03e21eedca29"],["/posts/a90c94cd/index.html","b8b80f5f22bc4d6dd482b1e1fedcb3ef"],["/posts/ac792cf4/index.html","1bb196de6d8fbcfa4e1783e44be0cff8"],["/posts/aedd05c3/index.html","6667a6a64b03d962d1a1de4b58715a57"],["/posts/bbc95d58/index.html","0781728972fb52ee4e36f989d0a93949"],["/posts/bd7ef112/index.html","3eaa06c51e1f5e53552956e4e48d4c3a"],["/posts/becc831a/index.html","5450121d8c00244fa672f98fa24317f6"],["/posts/d1fc759/index.html","dc1ab54017b89a8cbae9d659ba9914c2"],["/posts/e433f3d/index.html","b236ac8d0d638eb52d368d19d64bac07"],["/posts/e536ec4/index.html","7c7a027a9545da690b4b7b454d3a014b"],["/posts/ec12b762/index.html","528c7098c7d5e72a63b669b55f0b45e4"],["/posts/ff156c72/index.html","cfc3cd2b8418578fb692863c793b406d"],["/posts/ff1701d7/index.html","87bb00b6b785a04a1cbb39963828c878"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","0d0a24547b9b9d393abbcbe46cccbb21"],["/sw-register.js","687a65a8f3fd37ad7986baf5397d1438"],["/tags/Hexo魔改/index.html","fb341b1b1b3556398b96e81d1192da43"],["/tags/Hexo魔改/page/2/index.html","a2f05d70e4fbb55521e051fb3dc70a65"],["/tags/OI/index.html","ffc35ea1942c135d2a876b75d4112751"],["/tags/PyQt5/index.html","7941384205e5d26f94db45d4f2760fa3"],["/tags/Python/index.html","f200287275d7e567ba166cf6b9236407"],["/tags/Windows/index.html","1f4856893b6da2cbd7cf5ac9983ea741"],["/tags/goorm/index.html","b0310b8c077cd160c46e98097120a37e"],["/tags/index.html","db3bf4549047b9726e546aa2cd7851a3"],["/tags/uClock/index.html","645d22612383f393da018388466d896f"],["/tags/个人/index.html","c3e35536d788b60d0ff0a6b26cc85066"],["/tags/域名/index.html","f416a3c4c36da63aca369f1caf719728"],["/tags/字符处理/index.html","fdc0e4777d8bb11c6eb74cf9743f04b0"],["/tags/服务器/index.html","359fa077faee938360ee94a4a86a9f40"],["/tags/模拟/index.html","8fd44aa89b9e1a7a57b867cd368e7b12"],["/tags/白嫖/index.html","fadd4883c57d6bdd82790ac53603b831"],["/tags/社会/index.html","6d68583bda38f39cc26efcb5546c5e34"],["/tags/编程/index.html","069508b52405e73fea82df1da5ae8fd3"],["/tags/网络/index.html","d888ddd245e9a175f26c8b84b874e2b6"],["/tags/翻墙/index.html","8605dc16566410b5980b911e420ac886"],["/tags/贪心/index.html","6021ddbb469d570e4f8ad247f299ace6"],["/tags/避坑/index.html","bad2b1e9d6a836e5bb3361ddded7bd5a"],["/tags/高精度/index.html","045100554910b5415ec7ee0956db6982"],["/tags/魔改日记/index.html","17bcc36edf0e1a2b511d06bb76ba5354"],["/tools/index.html","7dde92bb44df94f9f7e7d2b9e0c4de4d"],["/update/index.html","4bcbd5b5ee788228c04a92737bed1550"],["/zaobao/index.html","e95c963b3154ddb06d29f484f230af7c"]];
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
