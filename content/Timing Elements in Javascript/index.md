---
title:  "Timing Elements in JavaScript" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 10/29/2019
tags:
    - javascript
    - front-end development
    - web development
---

Most of the time you want an element to appear on a web page when it loads but sometimes you may want to delay an elment from loading. This is pretty simple.

``` javascript
setTimeout(function () {
  if (heading.innerText === 'Tips') {
    heading.classList.add('added');
  }
},2000);
```

