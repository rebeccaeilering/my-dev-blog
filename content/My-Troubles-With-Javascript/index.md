---
title:  "My Troubles With JavaScript"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 09/17/2018
published: true
tags:
    - jquery
    - struggles
    - web development
    - front end development
---

JavaScript is very hard for me. I struggle with it. That is not to say I never use it. I do. I use it quite frequently. Honestly, I use jQuery more than I use plain JavaScript. I don't think jQuery is better or worse than regular JavaScript. I do use it a lot at my job so I try to use it for personal stuff too so I get more practice. It's just part of our builds and probably will be for awhile. 

I know frameworks are the rage. React, Vue, Angular. I'm sure they are all great. I have played around with React and Vue but I don't use them for anything because I think I need to get a better footing with the fundamentals of JavaScript.

I'm not sure what my issue is. I know I don't have issues with simple things. Like this. This is pretty simple.

We generate some content dynamically in our CMS and use placeholders so users can add content. So with this, I built some repeating code that would display logos in a slider. However, the user doesn't have a logo for every company that was to be featured. Some would just display as text. Unfortunately, if the user just leaves the logo content empty, in some browsers, there would be a broken image icon because the browser is trying to read {% raw %}{{logo}}{% endraw %} as the image source. Obviously that isn't what an image path would look like.

{% raw %}
```javascript
$(function(){
  $('.sample img[src="{{logo}}"]').remove();
});
```
{% endraw %}

What I wanted to do was run a function to remove the image tag when there was an image src of {% raw %}{{logo}}{% endraw %}. That's pretty simple.

Another really simple thing I did was write a little script to remove an anchor tag that has an image tag inside. However, I didn't want to remove the image tag. Again, I have to do this because this is dynamic content being pulled into some repeating code. The client was using a template for many pages to display staff members. One page she didn't want the images to link but was using the same template. I didn't think they's appreciate me telling them to delete that content so I could create a new template. Then they could re-enter the content again.

Instead I wrote another simple script to take care of this.

```javascript
$(".sample a:has(img)").each(function() { 
    $(this).replaceWith($(this).children()); 
  });
```
Basically, I targeted the content inside of a div with a specific class. Inside that class the script looks for an anchor tag with an img tag inside. Then it removes the anchor tag and replaces it with the img but without the anchor. 

These were some very simple bits of JavaScript (jQuery) that helped me out of some jams. They are small victories while I struggle with more complex/advanced things. Maybe I shouldn't have called this Troubles with JavaScript. I should have called this Small Victories with JavaScript. 