/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d9dc59e819c0fa2684bfae4c637daacb"],["/about/index.html","60513ed7652e95ae68e5881e5b8dc8c7"],["/archives/11eb4aac.html","a381f52e9b2e59a7512efec2ae4f6b36"],["/archives/14740f7c.html","4cc42378a0143440c71169cc76ca0a17"],["/archives/1b850b16.html","e16458dec0b3b118feb131c3d17ae538"],["/archives/2022/07/index.html","27f209830a1bd5664516d96f6f7a43dc"],["/archives/2022/08/index.html","3e9781c39b6c86151c45305108776159"],["/archives/2022/08/page/2/index.html","8b45d5e70015432b47050f84b868dd0c"],["/archives/2022/09/index.html","b22fc963806cdf1521260ab16b68f168"],["/archives/2022/10/index.html","c1ae73a20f77fc87efb0fcaea04cc1e5"],["/archives/2022/11/index.html","e8e091a059a59ed404ca1d3cc12ac947"],["/archives/2022/12/index.html","179852e5baf797adb760fdd23b9121db"],["/archives/2022/index.html","4731fb292c1c50734a97c26fdee24be4"],["/archives/2022/page/2/index.html","29158b2c8685622cc2a83f01762408f1"],["/archives/2022/page/3/index.html","10b046a51d3f92fd22f1b7130ca83748"],["/archives/2022/page/4/index.html","c7a1226e9e09d559d86bdeda69e62bed"],["/archives/2022/page/5/index.html","ce950343de978d62764319dd8d5d83de"],["/archives/29b0359b.html","3d4e66efb3e6598487a205bb3f32b87d"],["/archives/30bce1d1.html","7ba67d80e23b0ff422f337af746ce85d"],["/archives/3ee11b0f.html","a5817c791a18e1edf908e687e0ea1e7e"],["/archives/45897d5c.html","8d3b7311465ef51d1b00902f9e805290"],["/archives/4ae2ec41.html","e10a847a95af183f849e93f983cb4b42"],["/archives/4bd8701b.html","a2668725faa3b8d0e37b64534a77aa66"],["/archives/4ebac27c.html","b108d6a8c0b1f2c42268abe226c36a38"],["/archives/53e6b356.html","809c07ecad0ecdb2b5858a24ca57d7b5"],["/archives/583ff077.html","9bec4ee646e73f0643bb7b5094073f80"],["/archives/5d71c71f.html","fda2e7642f6ace1108a50d31afbb728b"],["/archives/5e2c4b67.html","5cf97a3037f8edd018ff32f8485c0737"],["/archives/614f1131.html","b6ea0fc0a2813de7605ca974b149743d"],["/archives/61b9829e.html","ba9bd4fb0c023d32b403804166ba6408"],["/archives/65ad2601.html","de545c2200d734370e0edd9528051b96"],["/archives/670e47f.html","ffe586af595a84c4936e63817741e0fc"],["/archives/69707535.html","6fade303fb9126a28a6a005e9193fd91"],["/archives/6d1af91.html","934337b384179be3faa7536173f35a07"],["/archives/6deceee9.html","bfa543007b54d123a5555a5a643bc96d"],["/archives/70734559.html","c8c851b2ebea3495db605971a3e405d7"],["/archives/74e5e1ec.html","3c462c0df5ec820e54387d89d50e4946"],["/archives/7e9276a3.html","f5b1779c298baa8565d810480ff145f1"],["/archives/8245da27.html","479e568eade3e8e4d4a6577cbc2dbe28"],["/archives/895003b5.html","6d0521f0384501456acd90c9c0addcd4"],["/archives/8a79afbb.html","a00c479ac6456f1b04e6cf47c5bf2da3"],["/archives/8b73c6b7.html","9871a30dfb3b3380df12687a927879c4"],["/archives/a1078b2d.html","8075d3983b048ebb46efa090822713df"],["/archives/a61abc.html","bf1bbceca284e04d0d4ccd5053c6896b"],["/archives/a844d9fc.html","38e4e8a9c2c627e95bc89e6051ec97c1"],["/archives/a90c94cd.html","e762e5431fb2af0f184cd6dac5d685eb"],["/archives/ac792cf4.html","d4765a43aa5183018f11dd94a2a0525a"],["/archives/aedd05c3.html","2f73b96be879221764120bfdd0efe9ce"],["/archives/bbc95d58.html","e94e5ae8e41e634b80db065b44730611"],["/archives/bd7ef112.html","71246bd6a4f9d52af8cccb6deae90403"],["/archives/becc831a.html","7a4424a349c55548bd2e3f2a6d0cfccb"],["/archives/d1fc759.html","d62ee323da6c0b34a8c4f274d7dbe17c"],["/archives/e433f3d.html","11ee51924a302a5cc00764d1aaee0736"],["/archives/e536ec4.html","922721794d6920ed954ad998b087370f"],["/archives/ec12b762.html","291f2cd6603ee2fad08bf18f426f3a87"],["/archives/ff156c72.html","825b43ff9ddc49360603e87423a5bfee"],["/archives/ff1701d7.html","1a302d8a68b12b440cc66ce7040b58fd"],["/archives/index.html","54876202b6ec92d3f707d95276ecff14"],["/archives/page/2/index.html","a562e052881e801258985641cb946105"],["/archives/page/3/index.html","0272a8152a6c6bd7e955fa9bef6a9e9e"],["/archives/page/4/index.html","60dcb61601f7305dfadcb206130546c8"],["/archives/page/5/index.html","e0195897e600fda448ebe654ae18d23c"],["/assets/douban-loading.gif","daf8e4819910f704578aa9eef1e8f96c"],["/bangumis/index.html","8e521cde66b8a6944ff75392c58aecc3"],["/categories/Hexo魔改/index.html","0573cba578c3cb411a3f435ab40716c5"],["/categories/Hexo魔改/page/2/index.html","3d3a3b7a06f573117c0153d4ccb5a4e2"],["/categories/OI/index.html","0e251ac698f7860ad902d13abde8b1ec"],["/categories/Windows/index.html","e552fcc011a36faee89355e8b6585a7e"],["/categories/index.html","ecf115246ab112471687f337f0554f12"],["/categories/个人/index.html","fb42f0f7e32bc83b58c1f604efbf745f"],["/categories/白嫖教程/index.html","189692689182e04c102f24fbbf69e4ff"],["/categories/社会/index.html","279393fc996a7630104fe5f3841d5e87"],["/categories/经验教程/index.html","4e39128a402e9c2942db9166cfd17fcb"],["/categories/编程/index.html","a928e8e8b5b964fd65cfff4fff5cb89d"],["/categories/网络/index.html","f83c67b5b002061e062d6c514cff2ea3"],["/categories/避坑教程/index.html","3afc8124d6629c192d360b93c5cff676"],["/css/ariasakablog.css","07c1b74e3585fc5a2be79bd7ecb9fc15"],["/css/commentBarrage.css","556753b8ac5d7f9d37007d6a7e37e078"],["/css/danmaku.css","812cb74d4fddefc66f00f48686e4137e"],["/css/iconfont.css","5055ebcf02646fdaa4da13f4fe354b08"],["/css/iconfont.ttf","8f80d63cc7e56b252ef8fec5670f26c0"],["/css/iconfont.woff","7abbf230e11a38ff6e24c53ef729071a"],["/css/index.css","9cec16da65a1cbcaa6d9c885a836c9c5"],["/css/people.css","c6e05c4e5b7239993cc3d75a2073b65a"],["/css/stylessimple.css","3722969db09cdec4c8585794434f6008"],["/css/swiper.min.css","51bd10bd84e86e4ec60afba88566ca7e"],["/css/swiperstyle.css","f9f6edbec62a7829b9042d00cc9f2132"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fcircle/index.html","0a1ea7c63bf665bdbaae68b30ff2296c"],["/fontawesome/index.html","a7057780336af9879d8f1d96b024504c"],["/googlee2a292c45f2bba42.html","f71c154ae5e75284c4470d5d2bf91dbb"],["/img/1.jpg","2bf668a472418fedc1606842967960d7"],["/img/144.png","a46336e25045fef419f29e6fdaa046e7"],["/img/16.png","0264b3c5870d4f020e37deb2ab99b3e7"],["/img/1666416625095-iPhone X.png","8b13a6ccc8778139cece7749df586894"],["/img/1666416702650-Macbook Pro 2016 (1).png","09e83a1dc567ef33378ba7032f1ceed5"],["/img/1666416764216-Nexus 9.png","01d5bfc88776dc5207e789c581b592ec"],["/img/180.png","dd2e511115b4772c7aac290c4231d133"],["/img/192.png","93fd0968e987da06e8f6d53f42317083"],["/img/20200904222157.png","c800ff1939026d9f041540efe6aaec32"],["/img/20200924153652.png","c44b643e2ff6827e3609abe30a1e2d7b"],["/img/256.png","cb79076360bc07fdd2b596a8651f4f2a"],["/img/36.png","3e44e6374031ce70a31220070ec023cc"],["/img/48.png","9e14cbf6308cd278593bcacf782c94c4"],["/img/512.png","d6cf5c09d8eb6982ec2b5cca24467bda"],["/img/72.png","cf0538d664e0d23a95577ca255ab2f52"],["/img/72645310.jpg","176403e4498889a779f12d74f0c14ae5"],["/img/96.png","e86cce1de941c51f50f44a97208333c4"],["/img/O35HOG22090681654187900371.jpg","f49a8999c50b0f8da3028bfc78d53b30"],["/img/ad.png","d36966ab08750e858f61903c97f8dcfc"],["/img/apple-touch-icon.png","dd2e511115b4772c7aac290c4231d133"],["/img/avatar.jpg","59fe6e404a4d0b44f5062d4eeec55623"],["/img/buYgVO22990681624844309044.jpg","b40ce797a2e0d16a4fd6ca64f38fae61"],["/img/comment.png","70884b3f858d20f425a132f746e9aa8e"],["/img/favicon.jpg","e0685055e2582a569ccfbb350874b373"],["/img/friend_404.gif","daf8e4819910f704578aa9eef1e8f96c"],["/img/nyancat.gif","60b7d212a715795108f8a288aa980696"],["/img/siteshot.png","e419b61e87d14ff9aeee8dbb55b5e0ab"],["/img/uTools_1666416859497-iMac.png","7c2e3b194dd70fa464244ba836ab7337"],["/index.html","8dc2f27671c9c1db7af23a122fd6d6d1"],["/js/aplayersave.js","7dcd0ab95cdeb7e5f9e975389bed5569"],["/js/baiduhistory.js","d69f23bf4fc591ad5f1bb37eeab5bc74"],["/js/bbtalk.js","5f8dbf718d7515a069ff6a8bd0512519"],["/js/bbtalklunbo.js","543e3f2cb9895ef84f6c77cdbed6b4e0"],["/js/browser.js","29e3047f4f019a09588a1d5b655b9ec7"],["/js/calendar.js","70e44f134116d87fae98a9839c80cad2"],["/js/cate.js","d4bec48b7a6dcfac7344ccd6df41a49a"],["/js/commentBarrage.js","a4b151a517f55a5ea16afb1e47e9e570"],["/js/commentsCount.js","b3de825114870ad5d065b043e33849ae"],["/js/copy.js","d4a436030bbdca815dbf6d25af2525e1"],["/js/countup.js","ac5341fdcb5757d947af5b44539ce708"],["/js/cursor.js","439b5ffa0a6b5ac64a606cd4bed6c3af"],["/js/danmaku.js","be8c97344ba5b4a8a861d2abbe042ee9"],["/js/day.js","61c2b8d42649076c9904e61ccb7117bd"],["/js/dianzan.js","9c3f49f0e431e142d9e4df8eb690b490"],["/js/dis.js","374b2b9feef2c1948643966a3ba53300"],["/js/dist/baiduhistory.dev.js","2b77799a7995b059e3c17b492c37bf8d"],["/js/dist/bbtalk.dev.js","bbddb1a52a9adc1b6b5bb214ced0e11e"],["/js/dist/bbtalklunbo.dev.js","c73c08286b9d9f552a08fd9bd609bbad"],["/js/dist/calendar.dev.js","8908ebc3d3f6a28272b2c9271450a7c0"],["/js/dist/fixbugpjax.dev.js","8252e22246b66171e7386a77f7fd04b7"],["/js/dist/gongnong.dev.js","91905bda8e8a7231fbf071b6d4caefec"],["/js/dist/heimu.dev.js","92abbb326a69467dd4969c205e9244ae"],["/js/dist/links.dev.js","39bb755c60d6603da72f2a0abd93304a"],["/js/dist/main.dev.js","36b43b257dc93149836c91c488a01f48"],["/js/dist/resizeTop.dev.js","ecb8f67723fa175c42b82be6acb60dcf"],["/js/dist/seo.dev.js","b70ad91dffd1ed5dcafd52b71625251f"],["/js/dist/twikoo.all.min.dev.js","2bdbb341c9855d04b3b7f2a063c0f49f"],["/js/fixbugpjax.js","06eb27b22b760961caedd88288ec4264"],["/js/fixed_card_widget.js","02eeacd95bff79855f204fe9d4aa35e7"],["/js/fps.js","7ab4765d471138acfeb36bdeb15c7d6b"],["/js/gitalker.js","dd7c79607f32326a5469c48782e54aa4"],["/js/heimu.js","7dccfc3b0bb211b913d224d059e4303b"],["/js/hide.show.js","f998b75b002c853d942c3fb798c48dc7"],["/js/languages.js","538b160f8ccb8f13c5b1dd467dfd847c"],["/js/latest.js","bb62220e4945507825f0d1a1960193e5"],["/js/local-search.js","de5fe9081389c0b3adcf4738f91c9a19"],["/js/lunar.js","656bf74bdb7d357f960c89fc08c0ef7e"],["/js/lyxTalk.js","eb24ca9ff627acc4326d66d1af793b1b"],["/js/main.js","3342e29906da0b51118f009802aa37f8"],["/js/nav.js","d5ce205562199aaf07754f973cc5a65f"],["/js/noie.js","51656eed5cbc7e34efc86e106f3bddac"],["/js/owo.js","c6ce7924a8a1d2ddf08b20c102cb7419"],["/js/people.js","32c6104ef2dadab3f0fdc7a3181ec38c"],["/js/random.js","35e1b0ff04f7955044f48e479f33920f"],["/js/randomFriend.js","3706a60a62ca0f283a628d079b6ea12f"],["/js/resizeTop.js","2b6d046ef8aef629258b8ddfbae0c3ef"],["/js/rightmenu.js","314fe94f1c087487775af8665c1e9338"],["/js/sakura.js","ef039298c93e1e26cff04d51c8e75358"],["/js/search/algolia.js","af567f93a5504310fe16fe368a4ee89e"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/seo.js","1df07e416df6dc852284f3ca110230ab"],["/js/settings.js","a1d2ed7c2dccb38c955a9dd352c4350f"],["/js/sitetime.js","4de735d628edf18f6a616a12399d250a"],["/js/smooth-scrolling.js","21aed466d6ef12c0de4ede3b3a1f1d98"],["/js/sw-toolbox.js","9758b06dc5bd653fd81c515fad362a63"],["/js/swiperinit.js","0f2c16fb9c9816f71d23d1cca9c1a228"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/twikoo.all.min.js","6f25a183556536d766f02219d3c2c5b8"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/js/welcome.js","f80656a6667cd2f6ab5bfe2b2e1404b4"],["/js/welcomeconsole.js","d7c5968395a92646dd5bd7facbf3b5bf"],["/kongtiao/index.html","889e0ec8d0f3b76ad0690fbf1d3461f9"],["/license/index.html","e68717bcd1ff54770b3903f9ab7acefe"],["/link/index.html","6fb5a90dcc97d5e8b0deea3c27a1f390"],["/links/index.html","c53b601adb24424900a0039cd8d0b3aa"],["/messageboard/index.html","09e726c74524c058e982d35c42b0ca11"],["/musics/index.html","c13801235733dfa08fa18a49612ee9ec"],["/muyu/index.html","06065154a6fa617ee84915333ec615af"],["/noie.html","6c5324ddb9cc1b3f75c8c53f87c67e10"],["/othersite/index.html","5712b22c045956137409dadcd90de8b9"],["/page/2/index.html","e7491466666785cfeca061bd43bda429"],["/page/3/index.html","e5424d243ea50c36439f4bafc35e4ae7"],["/people.html","e63f34fb21ff4035f68785dca8b237b6"],["/projects.html","2c265e0ec7e241b4dca809d71f46e390"],["/speaks/index.html","de05b056038e0a050b055e3f7927cfb7"],["/sw-register.js","31a5a950a8094ddaa822d3a9209478c1"],["/tags/Hexo魔改/index.html","b4ede901d72acd05447f0414642511f9"],["/tags/Hexo魔改/page/2/index.html","2e4d89e1c90afa6a7981ebd911b032e0"],["/tags/OI/index.html","a987da3d3d24b442e93bd4811372b462"],["/tags/PyQt5/index.html","5e8f6ca09bc7f90b7c24979d9bd143ab"],["/tags/Python/index.html","228799f17827529c9403a230b9513d56"],["/tags/Windows/index.html","fb21f1d639228da31baf95dc1e4cf250"],["/tags/goorm/index.html","1981efcc1ea711aac24e86bcfc60a258"],["/tags/index.html","0ccff8e2afb44350f189b9d671f970dc"],["/tags/uClock/index.html","15051103dcfac4ac06218de67e199189"],["/tags/个人/index.html","a4b5a7009c1e8677d0558728e6fbe2e3"],["/tags/域名/index.html","d6f91bc70bc8892bd2f6f6c35e796b25"],["/tags/字符处理/index.html","85412aacbd9bf1cb6ae857c28c7c7c4e"],["/tags/服务器/index.html","750880e4ae0fe89231e62244e70e775f"],["/tags/模拟/index.html","8e715e71d1ebd704d5bd66f2fb7f8de4"],["/tags/白嫖/index.html","95d9bf209fac34da672aeb6f4dbaaa2a"],["/tags/社会/index.html","518cf68cc72a7a14a65d39a443b250f6"],["/tags/编程/index.html","ca01643e2349edb39456506d1f6d8194"],["/tags/网络/index.html","4621de0b0679d7b2854391759778f219"],["/tags/翻墙/index.html","098c7de506080091eadc9da64f6d672a"],["/tags/贪心/index.html","fd4618dd2c72b04f77aaf44d78484c4a"],["/tags/避坑/index.html","97a37f4ce51a8cee1e2d642979b5a958"],["/tags/高精度/index.html","f99fce5df9028b14045c8e6cf48ca878"],["/tags/魔改日记/index.html","66811649655da104bffb9cfdadde6bcb"],["/tools/index.html","eec433671cecc8845187510dfde27135"],["/update/index.html","46e8ae6f0d742937baa439123d3ec9c6"],["/zaobao/index.html","1f42f142025ae0bd653f8208645fd2f3"]];
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
