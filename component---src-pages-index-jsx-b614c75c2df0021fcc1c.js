(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return g});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(164),s=n.n(l),c=n(171),p=n(196),m=n(235),u=n(163),f=n.n(u),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("div",{className:"main-container"},o.a.createElement(s.a,{title:f.a.siteTitle}),o.a.createElement(m.a,null),o.a.createElement("h1",null,"Latest Posts"),o.a.createElement(p.a,{postEdges:e})))},t}(o.a.Component);t.default=h;var g="1014838814"},163:function(e,t,n){n(37);var a={siteTitle:"Rebecca's Developer Blog",siteTitleShort:"Dev Blog",siteTitleAlt:"Rebecca's Developer Blog",siteLogo:"/logos/logo-1024.png",siteUrl:"https://rebeccaeilering.github.io",pathPrefix:"/my-dev-blog",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Web Development",dateFromFormat:"MM/DD/YYYY",dateFormat:"MM/DD/YYYY",userName:"Rebecca Eilering",userEmail:"rebeccaeilering@gmail.com",userTwitter:"",userLocation:"Springfield, IL",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"I'm a front end web developer",userLinks:[{label:"GitHub",url:"https://github.com/rebeccaeilering/",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/rebeccaeilering",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:rebeccaeilering@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2019 Rebecca's Developer Blog",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),e.exports=a},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(164),s=n.n(l),c=n(163),p=n.n(c),m=n(57),u=(n(167),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return o.a.createElement("a",{key:e.label,href:e.url},t?e.label:"")})},n.render=function(){return this.props.config.userLinks?o.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component)),f=(n(168),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=p.a.siteRss,t=p.a.copyright;return t?o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("span",null,t),o.a.createElement("div",{className:"social-links"},o.a.createElement(m.Link,{to:e},"Subscribe"),o.a.createElement(u,{config:p.a,labeled:!0})))):null},t}(i.Component)),h=(n(169),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("a",{class:"site-title",href:"/my-dev-blog"},p.a.siteTitle),o.a.createElement("nav",null,o.a.createElement("a",{className:"header-btn",href:"/my-dev-blog/about"},"About"))))},t}(i.Component));n(170);n.d(t,"a",function(){return g});var g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:p.a.siteDescription})),o.a.createElement(h,null),e,o.a.createElement(f,null))},t}(o.a.Component)},196:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(57),s=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){return this.getPostList().map(function(e){return o.a.createElement("article",null,o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("h3",null,e.title)),o.a.createElement("span",null,e.date),o.a.createElement("p",null,e.excerpt),o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("span",{className:"readmore"},"Read More")))})},t}(o.a.Component);t.a=s},204:function(e,t,n){var a,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var a=0;a<e.length;a++){var r=e[a];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(a>0&&(r=r.replace(/^[\/]+/,"")),r=a<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(a=i)?a.call(t,n,t,e):a)||(e.exports=r)},235:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(164),s=n.n(l),c=n(204),p=n.n(c),m=n(163),u=n.n(m),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,n,a,r=this.props,i=r.postNode,l=r.postPath,c=r.postSEO;if(c){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,n=m.cover,a=p()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,n=u.a.siteLogo;n=p()(u.a.siteUrl,u.a.pathPrefix,n);var f=p()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return c&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":a,name:e,image:n}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:n},description:t}),o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:n}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:c?a:f}),c?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:n}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:n}))},t}(i.Component);t.a=f}}]);
//# sourceMappingURL=component---src-pages-index-jsx-b614c75c2df0021fcc1c.js.map