(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f}),n.d(t,"pageQuery",function(){return d});var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(165),s=n.n(l),c=n(173),u=n(197),p=n(163),m=n.n(p),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.pageContext.tag,t=this.props.data.allMarkdownRemark.edges;return o.a.createElement(c.a,null,o.a.createElement("main",{className:"main-container"},o.a.createElement(s.a,{title:'Posts tagged as "'+e+'" | '+m.a.siteTitle}),o.a.createElement("h1",null,"Category: ",e),o.a.createElement(u.a,{postEdges:t})))},t}(o.a.Component),d="3824571933"},163:function(e,t,n){n(37);var a={siteTitle:"Rebecca's Developer Blog",siteTitleShort:"RE Dev Blog",siteTitleAlt:"Rebecca's Developer Blog",siteLogo:"/my-dev-blog/img/rebecca-web.jpg",siteUrl:"https://rebeccaeilering.github.io",pathPrefix:"/my-dev-blog",siteDescription:"This is a blog about my developer experience. Learning, thoughts, and whatever.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Web Development",dateFromFormat:"MM/DD/YYYY",dateFormat:"MM/DD/YYYY",userName:"Rebecca Eilering",userEmail:"rebeccaeilering@gmail.com",userTwitter:"rebeccaeilering",userLocation:"Springfield, IL",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"I'm a front-end web developer",userLinks:[{label:"GitHub",url:"https://github.com/rebeccaeilering/",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/rebeccaeilering",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:rebeccaeilering@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2020 Rebecca's Developer Blog",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===a.pathPrefix?a.pathPrefix="":a.pathPrefix="/"+a.pathPrefix.replace(/^\/|\/$/g,""),"/"===a.siteUrl.substr(-1)&&(a.siteUrl=a.siteUrl.slice(0,-1)),a.siteRss&&"/"!==a.siteRss[0]&&(a.siteRss="/"+a.siteRss),e.exports=a},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(165),s=n.n(l),c=n(163),u=n.n(c),p=n(57),m=(n(169),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return o.a.createElement("a",{key:e.label,href:e.url},t?e.label:"")})},n.render=function(){return this.props.config.userLinks?o.a.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(i.Component)),f=(n(170),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=u.a.siteRss,t=u.a.copyright;return t?o.a.createElement("footer",null,o.a.createElement("div",{className:"container"},o.a.createElement("span",null,t),o.a.createElement("div",{className:"social-links"},o.a.createElement(p.Link,{to:e},"Subscribe"),o.a.createElement(m,{config:u.a,labeled:!0})))):null},t}(i.Component)),d=(n(171),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){return o.a.createElement("header",null,o.a.createElement("div",{className:"container"},o.a.createElement("a",{className:"site-title",href:"/my-dev-blog"},u.a.siteTitle),o.a.createElement("a",{className:"header-btn",href:"/my-dev-blog/about"},"About")))},t}(i.Component));n(172);n.d(t,"a",function(){return h});var h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"wrapper"},o.a.createElement(s.a,null,o.a.createElement("meta",{name:"description",content:u.a.siteDescription})),o.a.createElement(d,null),e,o.a.createElement(f,null))},t}(o.a.Component)},197:function(e,t,n){"use strict";var a=n(8),r=n.n(a),i=n(0),o=n.n(i),l=n(57),s=(n(198),function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},n.render=function(){return this.getPostList().map(function(e){return o.a.createElement("article",null,o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("h2",null,e.title)),o.a.createElement("span",null,e.date),o.a.createElement("p",null,e.excerpt),o.a.createElement(l.Link,{to:e.path,key:e.title},o.a.createElement("span",{className:"readmore",title:"{post.title}"},"Read More")))})},t}(o.a.Component));t.a=s},198:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-tag-jsx-4e3874059e6e40d3ee24.js.map