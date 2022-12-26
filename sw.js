/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","300f57240b4d0a73479286b0261b5c38"],["/archives/2022/07/index.html","3ad2fc44e6734b67cead30f88adfcfc5"],["/archives/2022/08/index.html","5ed1b813fce59142efeb79987a6b7dfd"],["/archives/2022/08/page/2/index.html","73b661b8d89269908c77c6fba49314bd"],["/archives/2022/09/index.html","bb63985f058c95fca2a72deb00311f33"],["/archives/2022/10/index.html","8d30ccb49fdb85f33a316ec36a87cb39"],["/archives/2022/11/index.html","588a19af3a4f60ee4c95a10ee51628d0"],["/archives/2022/12/index.html","cdd41cbd2dd75c4f9d8c870c64c7072e"],["/archives/2022/index.html","3f140b1b3946d05d08dbce4d93ac4bc8"],["/archives/2022/page/2/index.html","5ca364db8cad4e987a852dbb9c05716c"],["/archives/2022/page/3/index.html","e0b05ebef64651556498f20d122c08dd"],["/archives/2022/page/4/index.html","8024977ded8bcbb75fb8bf7304affa29"],["/archives/2022/page/5/index.html","0f934e4cdaa1046ee15a445a11a8bc56"],["/archives/index.html","39cef148eec8305245be88eb1dc54d87"],["/archives/page/2/index.html","afb3df1e71ebf902e7ef69338761f080"],["/archives/page/3/index.html","be1b9bc94900efc555c726075b3d3164"],["/archives/page/4/index.html","6f9b3943f7862c6d7c03a82f97361d3a"],["/archives/page/5/index.html","baeef1d338141bc9a7938761da122144"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","252808e6136d8a3a1d469c667e2a1d4a"],["/categories/Hexo魔改/index.html","c5ff06786f33bfceef139cb938f3dfb5"],["/categories/Hexo魔改/page/2/index.html","f54173f4b070f9bb5c544945eb542389"],["/categories/OI/index.html","cb40bebb6db69d8581422a66f9594051"],["/categories/Windows/index.html","3de40c718f8c82414cc815fba31aaaf3"],["/categories/index.html","6af19c39f1fbd0144809d8b41b91bdc5"],["/categories/个人/index.html","04516567d500dbd2999a574912d62c5b"],["/categories/白嫖教程/index.html","e3a46b3ed73764f1ba0fc34dfe7e6c24"],["/categories/社会/index.html","0a8ce68f057db5362408f8dfdc0cb7f5"],["/categories/经验教程/index.html","44dc9fe280c627c1da60d14418e4d17d"],["/categories/编程/index.html","e4ce438769a835ea8228765bf891bd6a"],["/categories/网络/index.html","a69d3f83f2afd59d73d5ac9764f077e1"],["/categories/避坑教程/index.html","c161cf1838f435cea8dc669be2111627"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","0307140bf250e957f9ab258eff619812"],["/fontawesome/index.html","155ada612078768397ec9dfbd2a725d9"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","7063ebc76d94261969870033c94b2c7d"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","179ac0478821dc08dca42e1b9313fd15"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","fbedf01873c6c3bd71f82c28042cac56"],["/license/index.html","a0e391a90fba2e647c504561daba5d5a"],["/link/index.html","a548a00de2bec7c434f9b4b3ce601c00"],["/links/index.html","7db120f63537941d239903b29b3fdddc"],["/messageboard/index.html","37c24a5c84761eb0ff2b3b562c221ca6"],["/musics/index.html","acfef5b6187f6aab496498ba9a894e73"],["/muyu/index.html","f99d1523f16aaea44c1b630bf2ded4fc"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","7308d8dcd75bf7a9c6e6ceb848f7ef66"],["/page/2/index.html","9be42d84fbab6a3247469b1d49cf2cee"],["/page/3/index.html","a62382f5f38e2fb5a00dce667a97f9e1"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/11eb4aac/index.html","85b1a41d824ca1fe7232c211d9b5d693"],["/posts/14740f7c/index.html","9bb258274025286c27e9d971b338a7e6"],["/posts/1b850b16/index.html","0a4e49c214ce53e48dbb98a49c3fdc10"],["/posts/29b0359b/index.html","f23ddc2b38965a5bdd0d1f3ee6f7b5f2"],["/posts/30bce1d1/index.html","b1aa582f8d350c80e2a8082980600537"],["/posts/3ee11b0f/index.html","2a803d8dbf6034c701060498d84e1044"],["/posts/45897d5c/index.html","82d525257dcc74e65b18c2fb39c100b3"],["/posts/4ae2ec41/index.html","74926859bc5c5bb3a99df104f073a6b9"],["/posts/4bd8701b/index.html","47ea3b6131c3526b592bba4b5ddb467e"],["/posts/4ebac27c/index.html","fb105f0ca382fa7f97575808f28f7653"],["/posts/53e6b356/index.html","941217445991678e128d3e020bf688bc"],["/posts/583ff077/index.html","5dda59200c4dfb7c0c3dd1f00194b4e8"],["/posts/5d71c71f/index.html","5f54a81ecd63eb23381164e66b6532e7"],["/posts/5e2c4b67/index.html","1fe519f0503e7f7f40e5a5dab4cee82b"],["/posts/614f1131/index.html","c99786ed559a91dc68b44725b4d9a7ae"],["/posts/61b9829e/index.html","40348c1bde4e756219585e7453b45bab"],["/posts/65ad2601/index.html","ad29efb4e32c8f2541e4b9e7da7819cc"],["/posts/670e47f/index.html","fbbc7212cc68c1e143527580fc0c5b1f"],["/posts/69707535/index.html","46064d86d8a2554eddd4bb9dae36190c"],["/posts/6d1af91/index.html","2f9008dea67452eb6bea8d3d067af917"],["/posts/6deceee9/index.html","b0c37f96af8a384b2a27a54ee34e967f"],["/posts/70734559/index.html","dcdb5758c57eea67143454759578853b"],["/posts/74e5e1ec/index.html","7d11c6cc93f32dc492520afc0623dcf9"],["/posts/7e9276a3/index.html","6ca7fc1ade74638e9e9f9a845830406c"],["/posts/8245da27/index.html","0aaced1d2b962d8534f7754f75e817b0"],["/posts/895003b5/index.html","91823b29eb570d86c650d3480ad1dd17"],["/posts/8a79afbb/index.html","27c007822b5c4cdcc5ead671240cf104"],["/posts/8b73c6b7/index.html","e49e8459d28245af972ef7aa28b19ab2"],["/posts/a1078b2d/index.html","246827f7197b2499ef507951e20766d3"],["/posts/a61abc/index.html","b2c06495bdea7e33d0f2c5b08245314a"],["/posts/a844d9fc/index.html","df5cdef257b0a5a2766c122b4098f7e8"],["/posts/a90c94cd/index.html","dda9a159aa28521f3f7130449ded49b8"],["/posts/ac792cf4/index.html","fcc0b90c638a4f697188714187c3f7c8"],["/posts/aedd05c3/index.html","5914bfce9e8f97036fc7bddafccab3ec"],["/posts/bbc95d58/index.html","b102b998b124f6f0c94c5ca84d345a35"],["/posts/bd7ef112/index.html","97c27ac2dba437be65896d775a253fcf"],["/posts/becc831a/index.html","f9929d87a060165e20efb7cb5de5eab4"],["/posts/d1fc759/index.html","b5529121a2d2f8eb594c827fe4ef229e"],["/posts/e433f3d/index.html","6493d89b51d27dbbe487d7f1cae8938a"],["/posts/e536ec4/index.html","12b16e07bb5ae616179ff20862df2ea0"],["/posts/ec12b762/index.html","73c60e4c023d0d39a59114ede8bdbe4d"],["/posts/ff156c72/index.html","1e0abfac94e9cc83e8f65e04bcf427e4"],["/posts/ff1701d7/index.html","3ccee810c86da613ec78414af679cd8e"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","9f83bbeee83608ff7ae9277a6acaf660"],["/sw-register.js","405fceaf455e4ae8858ed5d91ef3a182"],["/tags/Hexo魔改/index.html","2f88f1f3fa1cef332402c02601b16e11"],["/tags/Hexo魔改/page/2/index.html","f7fc5390c8e0128c9286c7af62f9d0dc"],["/tags/OI/index.html","c7ba2379843b5951cd7964928fc2704a"],["/tags/PyQt5/index.html","b3698cb5b347e41fc1c44b00d32952e8"],["/tags/Python/index.html","bda6f6385f39c72f790d9cddcf229dc7"],["/tags/Windows/index.html","643ce54a2b33302a613869f83fd7ca0d"],["/tags/goorm/index.html","578c9dde96b4fba6bc330ca8f804c6ef"],["/tags/index.html","c63ba27efb9ab72b7a62e5de537cbcb3"],["/tags/uClock/index.html","f5c5379d3174c8671afa66a564bf432c"],["/tags/个人/index.html","c85eed4820a2cc7ac74d9a9351f01f1c"],["/tags/域名/index.html","fddf56e07fe8ce8ca070ba080ffe0123"],["/tags/字符处理/index.html","4cf952e972e24f8ff67fc3cc032da6e8"],["/tags/服务器/index.html","7fd1e719b9cb64d20e369fb9aabc8b40"],["/tags/模拟/index.html","c370e6423311cd6b4bd7b13e52fc151f"],["/tags/白嫖/index.html","26ecf2d76690b41a5b1632128c16f93d"],["/tags/社会/index.html","c7e216b3b35024e0e5ec6edec401fb67"],["/tags/编程/index.html","8e716136fe54988f453fd6346af4c7c5"],["/tags/网络/index.html","946dcd835f17689237a6167eda029501"],["/tags/翻墙/index.html","3d2a68e3d2e0b0ade3380bd92fa8642a"],["/tags/贪心/index.html","626e891d51feb9b69a065f14f0a8df1e"],["/tags/避坑/index.html","e3ce7db404ea35041245657160352650"],["/tags/高精度/index.html","be9b1eb6f0696cede984b24e04d2ab22"],["/tags/魔改日记/index.html","42e6895cf2e7e87c42cd1c505ed1cba0"],["/tools/index.html","83a9cd149f3aeff28bf76ad72d91eeda"],["/update/index.html","ce06ac75abff038c60dcbd9886507533"],["/zaobao/index.html","c935abfafcdb7a6ea8d8851b59797253"]];
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
