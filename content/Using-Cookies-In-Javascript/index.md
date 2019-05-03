---
title:  "Using Cookies in JavaScript" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 11/28/2018
tags:
    - cookies
    - javascript
    - plugins
    - web development
    - front end development
---

Let me preface this with I don't know a whole lot about browser cookies. I've only added cookies to JavaScript a couple times. However, I've found a solution that is simple to use if you still use jQuery.

So far I have only used cookies a couple times. Mostly it's been for used with popups. The idea is the pop up only opens once per user each day so the person isn't constantly closing popups every single time they go to pages on the website. Once is enough. Then it resets after a day.

I don't do this all the time so every single time I have to Google this and go though various Stack Overflow posts to figure this out. 

We use jQuery where I work and evertime I add a cookie I pull in a plugin called [Javascript Cookie](https://github.com/js-cookie/js-cookie){:target="_blank"}. I just use the CDN script to pull in the plugin after the jquery script.

```html
<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
```

To set the cookie all you do create a cookie is:

```javascript
Cookies.set('name', 'value');
```

To set with an expiration that is valid across the whole site you:

```javascript
Cookies.set('name', 'value', { expires: 7 });
```

To read the cookie you:

```javascript
Cookies.get('name')
```

Of course it isn't that simple. Everyone's scripts are going to be different and everyone is going to use the script in a different way.

In my case, I created a variable for my cookie. Then I would set up a conditional to see if a cookie has not been set. If a cookie has not been set and the user scrolls down the page more than 600px then I will set the cookie. Note I added another conditional inside the scroll conditional so if the user scrolls back up the pop up doesn't show again. 

So to set my cookie I did this:

```javascript
...
var popCookie = Cookies.get('popupCookie'); // cookie variable
if(!popCookie) { // determine if popCookie has been set. If it hasn't...
    $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll >= 600) { // scroll down more than 600px
        if(!(Cookies.get('popupCookie'))) { // determine if popCookie has been set. If it hasn't...
        $('.overlay').addClass('active');
        $('.subscribe-modal').addClass('active');
        Cookies.set('popupCookie', true, {expires: 1}); // set the cookie and it will expire in 1 day
        }
    }
  ...
};
```

So in order to deal with the cookie monster I just pull in a plugin and figure out how to use it in my code.



