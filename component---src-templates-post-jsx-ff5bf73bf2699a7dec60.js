(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{161:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a.n(n),i=a(200),o=a.n(i),l=a(0),c=a.n(l),s=a(165),p=a.n(s),m=a(173),u=a(57),f=a(302),g=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.config.userTwitter,t=this.props.expanded;return c.a.createElement(f.Follow,{username:e,options:{count:!!t||"none"}})},t}(l.Component),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.tags;return c.a.createElement("div",{className:"post-tag-container"},c.a.createElement("p",null,"Tags: ",e&&e.map(function(e){return c.a.createElement(u.Link,{key:e,to:"/tags/"+o()(e)},e)})))},t}(l.Component),d=a(437),E=a(438),y=a(439),b=a(440),v=a(441),w=a(442),N=a(443),k=a(444),D=a(445),x=a(446),T=a(447),C=a(448),L=a(449),P=a(208),R=a.n(P),A=a(163),I=a.n(A),S=(a(383),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props,t=e.postNode,a=e.postPath,n=e.mobile,r=t.frontmatter,i=R()(I.a.siteUrl,I.a.pathPrefix,a),o=n?24:36,l=function(e){return c.a.createElement("div",{className:"share-count"},function(e){return e>0?e:""}(e))};return c.a.createElement("div",{className:"social-links"},c.a.createElement("p",null,"Share:"),c.a.createElement(d.a,{url:i,title:r.title,"aria-label":"Reddit"},c.a.createElement(E.a,{round:!0,size:o}),c.a.createElement(y.a,{url:i},function(e){return l(e)})),c.a.createElement(b.a,{url:i,title:r.title,"aria-label":"Twitter"},c.a.createElement(v.a,{round:!0,size:o})),c.a.createElement(w.a,{url:i,quote:t.excerpt,"aria-label":"Facebook"},c.a.createElement(N.a,{round:!0,size:o}),c.a.createElement(k.a,{url:i},function(e){return l(e)})),c.a.createElement(D.a,{url:i,title:r.title,description:t.excerpt,"aria-label":"Linkedin"},c.a.createElement(x.a,{round:!0,size:o}),c.a.createElement(T.a,{url:i},function(e){return l(e)})),c.a.createElement(C.a,{url:i,"aria-label":"Telegram"},c.a.createElement(L.a,{round:!0,size:o})))},t}(l.Component)),B=a(253);a(433),a(434);a.d(t,"default",function(){return U}),a.d(t,"pageQuery",function(){return F});var U=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,a=t.frontmatter;return a.id||(a.id=e),a.category_id||(a.category_id=I.a.postDefaultCategoryID),c.a.createElement(m.a,null,c.a.createElement(p.a,null,c.a.createElement("title",null,a.title+" | "+I.a.siteTitle)),c.a.createElement(B.a,{postPath:e,postNode:t,postSEO:!0}),c.a.createElement("main",{className:"main-container"},c.a.createElement("article",{className:"post-container"},c.a.createElement("h1",null,a.title),c.a.createElement("span",null,a.date),c.a.createElement("p",null,"Category: ",c.a.createElement(u.Link,{key:a.category,to:"/categories/"+o()(a.category)},a.category)),c.a.createElement("div",{className:"post-content",dangerouslySetInnerHTML:{__html:t.html}}),c.a.createElement("div",{className:"post-meta"},c.a.createElement(h,{tags:a.tags}),c.a.createElement(S,{postPath:e,postNode:t})),c.a.createElement(g,{config:I.a}))))},t}(c.a.Component),F="3288223027"},163:function(e,t,a){a(37);var n={siteTitle:"Rebecca's Developer Blog",siteTitleShort:"RE Dev Blog",siteTitleAlt:"Rebecca's Developer Blog",siteLogo:"/img/rebecca-web.jpg",siteUrl:"https://rebeccaeilering.github.io",pathPrefix:"/my-dev-blog",siteDescription:"This is a blog about my developer experience. Learning, thoughts, and whatever.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Web Development",dateFromFormat:"MM/DD/YYYY",dateFormat:"MM/DD/YYYY",userName:"Rebecca Eilering",userEmail:"rebeccaeilering@gmail.com",userTwitter:"rebeccaeilering",userLocation:"Springfield, IL",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"I'm a front-end web developer",userLinks:[{label:"GitHub",url:"https://github.com/rebeccaeilering/",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/rebeccaeilering",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:rebeccaeilering@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2020 Rebecca's Developer Blog",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),e.exports=n},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(165),c=a.n(l),s=a(163),p=a.n(s),m=a(57),u=(a(169),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return o.a.createElement("a",{key:e.label,href:e.url},t?e.label:"")})},a.render=function(){return this.props.config.userLinks?o.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component)),f=(a(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=p.a.siteRss,t=p.a.copyright;return t?o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("span",null,t),o.a.createElement("div",{className:"social-links"},o.a.createElement(m.Link,{to:e},"Subscribe"),o.a.createElement(u,{config:p.a,labeled:!0})))):null},t}(i.Component)),g=(a(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"site-title",href:"/my-dev-blog"},p.a.siteTitle),o.a.createElement("a",{className:"header-btn",href:"/my-dev-blog/about"},"About")))},t}(i.Component));a(172);a.d(t,"a",function(){return h});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:p.a.siteDescription})),o.a.createElement(g,null),e,o.a.createElement(f,null))},t}(o.a.Component)},253:function(e,t,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),l=a(165),c=a.n(l),s=a(208),p=a.n(s),m=a(163),u=a.n(m),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,l=r.postPath,s=r.postSEO;if(s){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,a=m.cover,n=p()(u.a.siteUrl,u.a.pathPrefix,l)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=p()(u.a.siteUrl,u.a.pathPrefix,a);var f=p()(u.a.siteUrl,u.a.pathPrefix),g=[{"@context":"http://schema.org","@type":"WebSite",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return s&&g.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:f,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g)),o.a.createElement("meta",{property:"og:url",content:s?n:f}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=f},383:function(e,t,a){},433:function(e,t,a){},434:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-ff5bf73bf2699a7dec60.js.map