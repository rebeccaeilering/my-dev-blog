---
title:  "Timing Elements in JavaScript" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 11/08/2019
tags:
    - javascript
    - front-end development
    - web development
---

Most of the time you want an element to appear on a web page when it loads but sometimes you may want to delay an element from loading. In addition, you may want to delay an event from firing. This is pretty simple with a `setTimeout()` method.

``` javascript
setTimeout(function () {
  // Stuff happens in here
},2000); // delay
```

Recently I used it to sync the loading of some html elements to events in a short video. I used the setTimeout method to run a function that added a class to  a couple elements. Then I used css to update the opacity and create a transition.



