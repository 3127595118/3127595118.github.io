/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","001ffb47871dd9fca7ad593dd76ec6aa"],["/archives/2022/07/index.html","07004bdbb97fcba80450901f5c25d184"],["/archives/2022/08/index.html","b0b2b6c095b2be690c2e55334e12916d"],["/archives/2022/08/page/2/index.html","3ed610e811a3ede7009af97d016588c9"],["/archives/2022/09/index.html","4ade65d9eeed73aa988918ce869afdd0"],["/archives/2022/10/index.html","0a3758d19cff6002bedf57d4e49e80a5"],["/archives/2022/11/index.html","b8f5141da904701f41bcb5823cd443b9"],["/archives/2022/12/index.html","e247d65ca765c04efa00bfcd5c54ef80"],["/archives/2022/12/page/2/index.html","6ff115d273b9f7f181f0d19ab1d807c7"],["/archives/2022/index.html","841c285846f8b94982611f05f755393b"],["/archives/2022/page/2/index.html","76d7e279dd796c7238a337a2b2b307c0"],["/archives/2022/page/3/index.html","08e83e963ce9287c269f6b6264df2b07"],["/archives/2022/page/4/index.html","90c76637fc0d96370a2b77efbfc39191"],["/archives/2022/page/5/index.html","b9b3d54f2a0f693ce04d7a556b596c2e"],["/archives/index.html","b6c42d86186a60e80f78c450ca9d3481"],["/archives/page/2/index.html","25f7e97173df72fa7e144eb5501e4bae"],["/archives/page/3/index.html","ae81e4588c6dd8dac345ce9b4ccca0aa"],["/archives/page/4/index.html","0a56c8434d53306b6d343f60cb668b3a"],["/archives/page/5/index.html","ea84b1d6deee94b513d5930401a7e337"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","91ab26cd2a2fe2d9b21bb517edfea19c"],["/categories/Hexo魔改/index.html","b26d964cac84135923b744326d62d6a3"],["/categories/Hexo魔改/page/2/index.html","6a2e95ff25c27e39d8e38a97e3c288db"],["/categories/OI/index.html","5b261d27becfdfb97cdf4275d5dc8fc7"],["/categories/Windows/index.html","743099851c37d34468ac9ec0764b8c97"],["/categories/index.html","89fb3f105e63a96cb3ab97c91cf5965b"],["/categories/个人/index.html","c31502c0a4cf7666a9d0e180015abc92"],["/categories/白嫖教程/index.html","79fb400f18b89f4b25f866fdb8851911"],["/categories/社会/index.html","9add88caabc96b71badaa3cdbe383ca1"],["/categories/经验教程/index.html","98244fbc7b7b35344039f7c33350a276"],["/categories/编程/index.html","95a4f5700838e72c4e597b1d2da9a315"],["/categories/网络/index.html","daaf5f30847eaa3ddcb9125450e2dbd6"],["/categories/避坑教程/index.html","0b338f2afb6c788300295ae9446086af"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/cheesy_pick-up_lines.css","ae49a440c9ab2f4d7701482536e6a9c0"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/custom/poem.css","17bddda78c8e0afa4a97512ad7607c88"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/style.css","a45f2a64f7cd849d3e5230fd79e9e820"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","a6ebd5fa6704a20f6b13694bd707a624"],["/fcircle/index.html","c9f00627bdf50760d30d81df433cee37"],["/fontawesome/index.html","4dc5e4daba69956b3c0dee21498c2f17"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/gushi/index.html","2dcc2a648ab65ebbe8a6bead824b3fc0"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/cd.png","6ea30972e5a4cf9a4aab96a4d8b2e82c"],["/img/cd_tou.png","59405021bc4d52cadd758edda09b8ea5"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","ccfcf24ed19dcf02603e48fab670eb4f"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","88e79f49b54f6d0f47000ac1278c3ee1"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/card_weibo.js","e767fb3744bf3afdcd4ec86059a59f42"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","47a60169723628cf4cd739a75dff58ce"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/custom/cheesy_pick-up_lines.js","0128a71b81f2f4e1a208ddfb86cd1fd1"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","84e973e32ebfd8f3676f1aec8603a319"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","d727c987cd64d54c2424a9eb9364c05a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/universe.js","df3e74f701dfc1379342871273c8c014"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/weibo.js","f581bce55a11983ada18e0aad9659b17"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","6219bb9881901919c26e02daf61c6ea2"],["/license/index.html","a503f258bec11103eae2eac66ab80bd1"],["/link/index.html","bf2a23ffb36842437c2799adac74d1dd"],["/links/index.html","8692d8d9587833782016258d65c63f03"],["/messageboard/index.html","d02038a0eb5e6cfc0c21f8f900e98b37"],["/muyu/index.html","0ea3af1ac97c05044a82228136a8a981"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","9a8b57a44928d6290b69ed1cddc96b26"],["/page/2/index.html","c1af27c04a33d86ba7f3efdf27eeeb70"],["/page/3/index.html","2fe64ba2b3be707a45f365e191f8aa6d"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/posts/0/index.html","2e545b933ec3708f535d04404c299c28"],["/posts/11eb4aac/index.html","717be265daa069cae5cdf9b002bba8cb"],["/posts/140ab620/index.html","9fc86dd92bb85e8d7508cf3936067152"],["/posts/14740f7c/index.html","5d43e9e42267c299c1394b6204be0436"],["/posts/1b850b16/index.html","747902128c51fb528b7d91ab81f5d127"],["/posts/29b0359b/index.html","1287c9887d2fde3690f4602b0682c07a"],["/posts/30bce1d1/index.html","893a8614e88742504feda4cb1eaa48c6"],["/posts/3ee11b0f/index.html","c6f8eb72f5e73e57019dc79ba4194a3c"],["/posts/45897d5c/index.html","535d3b92d9ac531807ce5d5c999d4f3e"],["/posts/4ae2ec41/index.html","41efb743dcf4ebaaa6d3ba9933081073"],["/posts/4bd8701b/index.html","8ef684c8854693d0e7106e9918563129"],["/posts/4ebac27c/index.html","db83c5f7a53a278ddf145088169f9c52"],["/posts/53e6b356/index.html","ca138c49baa80b1f4e92dbe4c3fe9c38"],["/posts/583ff077/index.html","b55445dbb88668ec09ac743bcefbe7dd"],["/posts/5d71c71f/index.html","ce49a1f6da55c94e2c72447ed6403ee5"],["/posts/5e2c4b67/index.html","43e4ee2736c8085ccc5093f183670dc9"],["/posts/614f1131/index.html","c7d985f2a1902de6663a88e000062859"],["/posts/61b9829e/index.html","c637eeeb3d88a75c2e1a70342b2ddfaf"],["/posts/65ad2601/index.html","24665850b3385665e8feda34846a5762"],["/posts/670e47f/index.html","5c86931cfd7de7e8ab6784d2a21a3d35"],["/posts/69707535/index.html","ead86124a86dd1e6c2ef43f6253407de"],["/posts/6d1af91/index.html","99747c35daeb2e5704c3a4914f4b6f42"],["/posts/6deceee9/index.html","47fae4918f3f7bdd446aea6640227ece"],["/posts/70734559/index.html","04aad6e3fb027848ce0ef0c78fadfa8a"],["/posts/74e5e1ec/index.html","5b2baa0c9eb7eb3307d3bd296177a4f8"],["/posts/7e9276a3/index.html","deda83cbad0db6b341942071f4752df5"],["/posts/8245da27/index.html","9e74f2369245914669db12db589e56c9"],["/posts/895003b5/index.html","0e4f8217f46d05102e693869bbcd795a"],["/posts/8a79afbb/index.html","69fd243268b654c0d22ef46c69f84799"],["/posts/8b73c6b7/index.html","02141a76c8dc19fdbc1733881a94e78c"],["/posts/a1078b2d/index.html","6a82279fc363b574a8762cff5ff60076"],["/posts/a61abc/index.html","83f2951867d83ba05b399579b7445d78"],["/posts/a844d9fc/index.html","78bb0455cd6ed6261618dcf5e6d33ade"],["/posts/a90c94cd/index.html","b75304646b5184ea7b3a01833de5e299"],["/posts/ac792cf4/index.html","fdef629865ab4cedc830a22bc69a2e7e"],["/posts/aedd05c3/index.html","af5b247072380e427d89e6c8a2de02f6"],["/posts/bbc95d58/index.html","acf7e237899de1ec1fa9cfa4f9e140ed"],["/posts/bd7ef112/index.html","b36c7d5e075889871c87ff68d655453f"],["/posts/becc831a/index.html","fbbd4505ff478285a2c9bbfe87504426"],["/posts/d1fc759/index.html","e2bab575524b39e381d76ac5a13c835c"],["/posts/e433f3d/index.html","0012c9a34c6b73dddabed319e40f083e"],["/posts/e536ec4/index.html","958b66362ab37833c15d72970a53ecd7"],["/posts/ec12b762/index.html","b076f712dac47232236eb24bcf35a67c"],["/posts/ff156c72/index.html","6ef0b20aba69cbeb56ec40baf1c104c1"],["/posts/ff1701d7/index.html","c8cb0e231051d4056ec81855efbf868a"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","6e7f5d01d80e2cd6e1baab759f83ef9f"],["/sw-register.js","463bcd24a8f1b56281224a246159f9b3"],["/tags/Hexo魔改/index.html","83a10b1d822004f6b15d170437241c01"],["/tags/Hexo魔改/page/2/index.html","b4e0911292293b2f09b579f6cdac8098"],["/tags/OI/index.html","aa8ef545ac1f0cf301c30313c22ff682"],["/tags/PyQt5/index.html","383e8d9d56a1eb0585d4ac0c217e10da"],["/tags/Python/index.html","c6670d469160a4a43e3258a25079fb67"],["/tags/Windows/index.html","ca08a0b1754a51be4590ccd421db9bb4"],["/tags/goorm/index.html","45155b050c45e8d654fe7ddadd7fe622"],["/tags/index.html","01b6189de3746fd8fde2616226a0583d"],["/tags/uClock/index.html","69b8cffa0e800f7311eb9095eb9ef82b"],["/tags/个人/index.html","78df84a6239baf9e4d079ebf38ec4a49"],["/tags/域名/index.html","b3087379f1aae14993aba4df1a4278a9"],["/tags/字符处理/index.html","198ab4ecbeccfbeccfd17c04c736d0b3"],["/tags/服务器/index.html","d0473e607ad93556f4cdebc3ea22942e"],["/tags/模拟/index.html","8e83e904fce1daf83609176b03172fb9"],["/tags/白嫖/index.html","6b6aab5e570c1beb50d038e1c40c19f5"],["/tags/社会/index.html","a2e95ad3f7979fa21a86e98c5817e2dd"],["/tags/编程/index.html","8426f12842db0e5fb89bae16ec421ab8"],["/tags/网络/index.html","e07cf67ee09655bbd04b50e6c3a7a1e4"],["/tags/翻墙/index.html","4c312ad260d175f73b9daeb7d75f54be"],["/tags/贪心/index.html","275f2e34f9565a7bc2fbb36fa6b8834e"],["/tags/避坑/index.html","cf8d967247787f700f25abcdd20c20e2"],["/tags/高精度/index.html","ac18b4b7e3a6c8ebfb60c5cc5087c74c"],["/tags/魔改日记/index.html","9e7564a3b9f8387241ed598710abb952"],["/tools/index.html","16e3fec8dd2b6e3c305dfe36afc37d05"],["/update/index.html","0e77537d333c1f3d15a09086ddcdecdf"],["/update/links/index.html","33477d14181350b91750b82797646f35"],["/zaobao/index.html","7c93a39e40989e61c5b28d43ee93acb8"],["/zaobao/links/index.html","03cb8b76afa088e05b59a61629ac689f"]];
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
