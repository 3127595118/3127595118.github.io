/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","0ef4ca7208408229ca888dee0c721482"],["/archives/11eb4aac.html","5d8e81f72f9392dbfbc925ec453301be"],["/archives/14740f7c.html","cfa31258309dee301993536a74f4c4fd"],["/archives/1b850b16.html","ed1edc5b646dbcb816488b0990b0521e"],["/archives/2022/07/index.html","812e488c7e6572678d0b4784dc6c789a"],["/archives/2022/08/index.html","c19bcbcc3604d092d0754ef842bcc9b5"],["/archives/2022/08/page/2/index.html","3ae3528791e8a8389c9035d659488349"],["/archives/2022/09/index.html","e6fe59123eb24672f7f04d36c720165b"],["/archives/2022/10/index.html","6536326e83e1b8a3e7ade858fda62860"],["/archives/2022/11/index.html","1ddde9d0bdd8e9172db6421b8a05b0fd"],["/archives/2022/12/index.html","cb7811a30e34d454edb6856c49a907ed"],["/archives/2022/index.html","6a5f8cde9a60b2c942999624d0d1ab58"],["/archives/2022/page/2/index.html","f850ac40356519341ed1ac223363eae8"],["/archives/2022/page/3/index.html","6ea6b12843c196c18c531c59be383157"],["/archives/2022/page/4/index.html","b7cd4572987a8c2652956edabea85847"],["/archives/2022/page/5/index.html","e6caef408f82c8d1a91bac9033ad869a"],["/archives/29b0359b.html","5e0cedc3bd5bb42e7f5bcdd6660174a0"],["/archives/30bce1d1.html","87169d0b242be113cd5969d127dee42b"],["/archives/3ee11b0f.html","6d65577856dd3b5f463c74722d3eb1ca"],["/archives/45897d5c.html","56e6f6147ea70400dd86f4fd5fe91f31"],["/archives/4ae2ec41.html","7606cec47e5989451ae24a7668589259"],["/archives/4bd8701b.html","d427a91f306e591a60016939417b7aa4"],["/archives/4ebac27c.html","4c394c60748998fbd13b447c51579dd1"],["/archives/53e6b356.html","6d3cbf9789d3096e7aa866f9a566afe8"],["/archives/583ff077.html","ecdd9ec00bca8ca8545060e39079b6a7"],["/archives/5d71c71f.html","c5e351cbf1686fd8d2f9ba287e4bf919"],["/archives/5e2c4b67.html","2c45b1fdf85f76da55bd71558de336ab"],["/archives/614f1131.html","8e5805cf245e41e17d08225f98c93d74"],["/archives/61b9829e.html","b8b75cf283aafc7569303f37d7867b96"],["/archives/65ad2601.html","976cb767e81b1cbbbdee824d3a1ff1ce"],["/archives/670e47f.html","bd8da9a550fee38a78232ff3c201c673"],["/archives/69707535.html","0fd8c94e3b69568c944270312ce6aca6"],["/archives/6d1af91.html","69771ea1bc935e60ea3779fb2498afb3"],["/archives/6deceee9.html","5bd119d6c65cb8f1b76aaa6a33fa9087"],["/archives/70734559.html","bbc4efde6f1cefbdd1ab1943154be227"],["/archives/74e5e1ec.html","bb5c4468be7bb6caa1615ecd4a18e688"],["/archives/7e9276a3.html","ce338504dca6356b3c6922bb5b297c8c"],["/archives/8245da27.html","daff64dfcd38f1a69b724dd1916dd062"],["/archives/895003b5.html","e6e80214d27b889239968889cc5a71f0"],["/archives/8a79afbb.html","1292c40a093d56c262c868df7849b8d2"],["/archives/8b73c6b7.html","7671fe24dc85361dee1722ca410afcab"],["/archives/a1078b2d.html","5be5038ef02b8afa865578b42548e9da"],["/archives/a61abc.html","7061fedab1e08853f4b2106face935b5"],["/archives/a844d9fc.html","79a4ee19482ef8ea18c11ac983a3eff5"],["/archives/a90c94cd.html","b078f681bc6a2f6888470289ed4dbd60"],["/archives/ac792cf4.html","92bbf13192e2631e5f98a31d80d1d0ff"],["/archives/aedd05c3.html","ae109699dc6c3ff588a2606e49e34d38"],["/archives/bbc95d58.html","782b24b64682d4cd905451c393391a78"],["/archives/bd7ef112.html","47a622e02f8c47492ac38d8fba8b4353"],["/archives/becc831a.html","8a71077a3fd0c45da895489070784198"],["/archives/d1fc759.html","b31c3ba5b4f5b8a54a678b0df0ab2db6"],["/archives/e433f3d.html","f627fd1ea89980c8a88227c22576a19a"],["/archives/e536ec4.html","f172fce6ade9910ca40513c782296127"],["/archives/ec12b762.html","c9cb0aee69e1f65393fdeb3df349479c"],["/archives/ff156c72.html","c7e33991641f4e1fe3e176c70a8ae556"],["/archives/ff1701d7.html","5b3fccabda48c3d14490016508ab5bbd"],["/archives/index.html","fce451eceb6b923fae6a159ead7e3da9"],["/archives/page/2/index.html","1bf32fef5a5ce6ea2d72a3311ba48f0c"],["/archives/page/3/index.html","4a5a6f9ef40041399a10f73f30ce250e"],["/archives/page/4/index.html","a8ac3499db77fe62bedb62defc843745"],["/archives/page/5/index.html","02778ec9aa40d433d6a012a4cc0be1ac"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","10b8737bdb3e1e7149b1e58e464a1b03"],["/categories/Hexo魔改/index.html","0b752cb1c8f7a5d4136861636d69b4f6"],["/categories/Hexo魔改/page/2/index.html","8707bddfc31692a9c0b60696ce9c6cc4"],["/categories/OI/index.html","6c65c5d3f88994768f9bd370f607bbe5"],["/categories/Windows/index.html","2fa6ce4de8e861ded3275ab4f15d7f7e"],["/categories/index.html","826b89fd722ae9f335ac574a7390b212"],["/categories/个人/index.html","2de8deebdbe2fd94e2adc13150896e01"],["/categories/白嫖教程/index.html","53894704b43aece98657fb05ef39efa5"],["/categories/社会/index.html","2107201352d2291f76b6f7caba3dfd2e"],["/categories/经验教程/index.html","3ad411e6228ecb772a829a6518b48894"],["/categories/编程/index.html","fd7dbae0a9e05b0fb0ae485dda559c50"],["/categories/网络/index.html","9561e79e9df2e1238d01d9f00fb7d99a"],["/categories/避坑教程/index.html","dfbd2775459c1d917ed8fc0942187c35"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","930ad4dfebfebe991608b8fd13298cdf"],["/fontawesome/index.html","1677616f1e46a7be37aef77dfb01a4bb"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","ebc02ac5308c4c4d20f5039ea16e6dbe"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","9bfb2f3677c5bba468da77ebfdc85da4"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","a8674b8f5e7f5e1dfd62000d80f31361"],["/license/index.html","612fa006d1f5a62ab61dd305ac475859"],["/link/index.html","ab8adbdb50aaac7bb5543ad8e99a929b"],["/links/index.html","4179aafe03fc52fa67330d434167fa33"],["/messageboard/index.html","25bc0a353da137aae59c4513540cfa72"],["/musics/index.html","74d1047c705806a2cd23e0c5f5046954"],["/muyu/index.html","3630655836d92be4baacd0ea1a5842a1"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","7aef5e89c0e8145ff703a87d1dcbc746"],["/page/2/index.html","0fe25905e192428dfbc2ab40850ce25b"],["/page/3/index.html","b405826388de6ab569337c52950a4d9b"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","345fa4ed6601b23dc8742b6e7907d81a"],["/sw-register.js","bfbdf5bb5b4ac1f09084856570f460f8"],["/tags/Hexo魔改/index.html","2b73364c13ec75f7b201d7e20d9e17fa"],["/tags/Hexo魔改/page/2/index.html","dbe7f1628e4956e63acd9def59dc7829"],["/tags/OI/index.html","7432a2ee45693fc84a5a80531061d29c"],["/tags/PyQt5/index.html","4782adfd192a979a8f449df02aae34f2"],["/tags/Python/index.html","d73e552d0f6febf38fc9631cc425b595"],["/tags/Windows/index.html","ccf0514e50465157fca0750cbb29a579"],["/tags/goorm/index.html","d1fff1b0b2bd40ac46f0665500dd6377"],["/tags/index.html","5b86e79325bcb426d2f402cd03ccecdb"],["/tags/uClock/index.html","de7d72d3193fd2bc430020b1ccb13d78"],["/tags/个人/index.html","bfea78deacd8fd59ae87aeb56f3d0404"],["/tags/域名/index.html","7bd10c56027a2dcadca33d049e89ab7c"],["/tags/字符处理/index.html","f0f28749ba11525523fb612cf7ea0505"],["/tags/服务器/index.html","c478dc199d95e591ed5e8b16de22eb31"],["/tags/模拟/index.html","88901d6cf03aed9aed1b799fee48e51e"],["/tags/白嫖/index.html","4271127350bc5215653b15ef83c39f2e"],["/tags/社会/index.html","03ce74ad36594b8331df838da74d9e63"],["/tags/编程/index.html","d2e131fa441cd29b824ac0bd78ceaeff"],["/tags/网络/index.html","adbc3a7855282912a214ec0c197d6187"],["/tags/翻墙/index.html","c147324f2114feb81878d77bb6e4d5ac"],["/tags/贪心/index.html","b7d1694d54800a88b6f905f6f23d6390"],["/tags/避坑/index.html","bae391d759e1d810038ad2b675a99f35"],["/tags/高精度/index.html","c3f7f4017220f5a7ba4af3bc8d85d0b2"],["/tags/魔改日记/index.html","fe9a81d743354dfacc01e1299ccb817a"],["/tools/index.html","1ea0e454362605759d17a700e64c377d"],["/update/index.html","dccd2a566b12de602f06b14db68d59f4"],["/zaobao/index.html","f0380dceacd5b1207bb1eda841b80c70"]];
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
