(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return v});var r=n(8),a=n.n(r),i=n(200),o=n.n(i),l=n(0),c=n.n(l),u=n(165),s=n.n(u),f=n(57),p=n(173),m=n(197),d=n(253),g=n(163),h=n.n(g),x=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges,t=this.props.data.allMarkdownRemark.tags,n=this.props.data.allMarkdownRemark.category;return c.a.createElement(p.a,null,c.a.createElement("div",{className:"main-container home"},c.a.createElement(s.a,{title:h.a.siteTitle}),c.a.createElement(d.a,null),c.a.createElement("main",{className:"posts"},c.a.createElement("h1",null,"Rebecca's Latest Posts"),c.a.createElement(m.a,{postEdges:e})),c.a.createElement("div",{className:"sidebar"},c.a.createElement("div",null,c.a.createElement("h3",null,"Categories"),c.a.createElement("ul",{className:"tags-cat"},n.map(function(e){return c.a.createElement("li",{key:e.fieldValue},c.a.createElement(f.Link,{to:"/categories/"+o()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))),c.a.createElement("div",null,c.a.createElement("h3",null,"Tags"),c.a.createElement("ul",{className:"tags-cat"},t.map(function(e){return c.a.createElement("li",{key:e.fieldValue},c.a.createElement(f.Link,{to:"/tags/"+o()(e.fieldValue)+"/"},e.fieldValue," (",e.totalCount,")"))}))))))},t}(c.a.Component);t.default=x;var v="3651749714"},163:function(e,t,n){n(37);var r={siteTitle:"Rebecca's Developer Blog",siteTitleShort:"RE Dev Blog",siteTitleAlt:"Rebecca's Developer Blog",siteLogo:"/logos/logo-1024.png",siteUrl:"https://rebeccaeilering.github.io",pathPrefix:"/my-dev-blog",siteDescription:"This is a blog about my developer experience. Learning, thoughts, and whatever.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Web Development",dateFromFormat:"MM/DD/YYYY",dateFormat:"MM/DD/YYYY",userName:"Rebecca Eilering",userEmail:"rebeccaeilering@gmail.com",userTwitter:"rebeccaeilering",userLocation:"Springfield, IL",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"I'm a front-end web developer",userLinks:[{label:"GitHub",url:"https://github.com/rebeccaeilering/",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/rebeccaeilering",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:rebeccaeilering@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2020 Rebecca's Developer Blog",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===r.pathPrefix?r.pathPrefix="":r.pathPrefix="/"+r.pathPrefix.replace(/^\/|\/$/g,""),"/"===r.siteUrl.substr(-1)&&(r.siteUrl=r.siteUrl.slice(0,-1)),r.siteRss&&"/"!==r.siteRss[0]&&(r.siteRss="/"+r.siteRss),e.exports=r},164:function(e,t,n){var r=n(201),a="object"==typeof self&&self&&self.Object===Object&&self,i=r||a||Function("return this")();e.exports=i},167:function(e,t,n){var r=n(164).Symbol;e.exports=r},168:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){"use strict";var r=n(8),a=n.n(r),i=n(0),o=n.n(i),l=n(165),c=n.n(l),u=n(163),s=n.n(u),f=n(57),p=(n(169),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return o.a.createElement("a",{key:e.label,href:e.url},t?e.label:"")})},n.render=function(){return this.props.config.userLinks?o.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component)),m=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=s.a.siteRss,t=s.a.copyright;return t?o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("span",null,t),o.a.createElement("div",{className:"social-links"},o.a.createElement(f.Link,{to:e},"Subscribe"),o.a.createElement(p,{config:s.a,labeled:!0})))):null},t}(i.Component)),d=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"site-title",href:"/my-dev-blog"},s.a.siteTitle),o.a.createElement("a",{className:"header-btn",href:"/my-dev-blog/about"},"About")))},t}(i.Component));n(172);n.d(t,"a",function(){return g});var g=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:s.a.siteDescription})),o.a.createElement(d,null),e,o.a.createElement(m,null))},t}(o.a.Component)},175:function(e,t){var n=Array.isArray;e.exports=n},176:function(e,t,n){var r=n(167),a=n(222),i=n(223),o="[object Null]",l="[object Undefined]",c=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?l:o:c&&c in Object(e)?a(e):i(e)}},191:function(e,t,n){var r=n(219);e.exports=function(e){return null==e?"":r(e)}},197:function(e,t,n){"use strict";var r=n(8),a=n.n(r),i=n(0),o=n.n(i),l=n(57),c=(n(198),function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){return this.getPostList().map(function(e){return o.a.createElement("article",null,o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("h2",null,e.title)),o.a.createElement("span",null,e.date),o.a.createElement("p",null,e.excerpt),o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("span",{className:"readmore",title:"{post.title}"},"Read More")))})},t}(o.a.Component));t.a=c},198:function(e,t,n){},200:function(e,t,n){var r=n(214)(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()});e.exports=r},201:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(78))},208:function(e,t,n){var r,a,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)},214:function(e,t,n){var r=n(215),a=n(216),i=n(224),o=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(a(t).replace(o,"")),e,"")}}},215:function(e,t){e.exports=function(e,t,n,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++a]);++a<i;)n=t(n,e[a],a,e);return n}},216:function(e,t,n){var r=n(217),a=n(191),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=a(e))&&e.replace(i,r).replace(o,"")}},217:function(e,t,n){var r=n(218)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},218:function(e,t){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},219:function(e,t,n){var r=n(167),a=n(220),i=n(175),o=n(221),l=1/0,c=r?r.prototype:void 0,u=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return a(t,e)+"";if(o(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-l?"-0":n}},220:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}},221:function(e,t,n){var r=n(176),a=n(168),i="[object Symbol]";e.exports=function(e){return"symbol"==typeof e||a(e)&&r(e)==i}},222:function(e,t,n){var r=n(167),a=Object.prototype,i=a.hasOwnProperty,o=a.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(c){}var a=o.call(e);return r&&(t?e[l]=n:delete e[l]),a}},223:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},224:function(e,t,n){var r=n(225),a=n(226),i=n(191),o=n(227);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?a(e)?o(e):r(e):e.match(t)||[]}},225:function(e,t){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(n)||[]}},226:function(e,t){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return n.test(e)}},227:function(e,t){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",i="[\\u2700-\\u27bf]",o="[a-z\\xdf-\\xf6\\xf8-\\xff]",l="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",s="[A-Z\\xc0-\\xd6\\xd8-\\xde]",f="(?:"+o+"|"+l+")",p="(?:"+s+"|"+l+")",m="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",d="[\\ufe0e\\ufe0f]?"+m+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,u].join("|")+")[\\ufe0e\\ufe0f]?"+m+")*"),g="(?:"+[i,c,u].join("|")+")"+d,h=RegExp([s+"?"+o+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,s,"$"].join("|")+")",p+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,s+f,"$"].join("|")+")",s+"?"+f+"+(?:['’](?:d|ll|m|re|s|t|ve))?",s+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,g].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},253:function(e,t,n){"use strict";var r=n(8),a=n.n(r),i=n(0),o=n.n(i),l=n(165),c=n.n(l),u=n(208),s=n.n(u),f=n(163),p=n.n(f),m=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t,n,r,a=this.props,i=a.postNode,l=a.postPath,u=a.postSEO;if(u){var f=i.frontmatter;e=f.title,t=f.description?f.description:i.excerpt,n=f.cover,r=s()(p.a.siteUrl,p.a.pathPrefix,l)}else e=p.a.siteTitle,t=p.a.siteDescription,n=p.a.siteLogo;n=s()(p.a.siteUrl,p.a.pathPrefix,n);var m=s()(p.a.siteUrl,p.a.pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:m,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:""}];return u&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:m,name:e,alternateName:p.a.siteTitleAlt?p.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),o.a.createElement("meta",{property:"og:url",content:u?r:m}),u?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:p.a.siteFBAppID?p.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:p.a.userTwitter?p.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=m}}]);
//# sourceMappingURL=component---src-pages-index-jsx-691458b5f2c68d76c2fb.js.map