---
title:  "Using the URL to Change HTML Attributes" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 10/29/2019
published: true
tags:
    - jquery
    - attributes
---

I don't use a whole lot of JavaScript on a day-to-day basis. This week was an exception. There were a couple occasions I had to make sure some elements only show on certain pages and creating new templates would be overkill. It would be easier to use the URL to target certain pages and then make changes to the code.

I want to replace the href and title value of an already existing anchor tag/button. This button is on all the subpages but we need to change the href and title on just a small group of subpages and leave the rest alone.

My first line of thought is to make a new template with the button that has the new url and title values and then change the template for all the pages. I need to make a new master template and the companion master.vb file. Then since the button is in a widget.ascx file I also need to make a new one of those plus it's companion ascx.vb file. OMG, that's a lot of work and a lot of reapeated code. To change one line of HTML we need four new files and then change the template for nearly 20 pages? This is crazy and super ineffecient.

I can do what I need to in just a few lines of JavaScript. 

Here's the code (but I'm changing urls, class names and title text so I'm not sharing code that is specific to work projects). On all the pages there is a button to signup to a newsletter. However, for the dog and cat pages there's a different sign up form. All these pages use the same subpage template. None of the HTML code needs to be touched.

HTML:

```html
<div class="sign-up">
  <a href="/animals/newsletter-signup/" title="Sign up for our newsletter">Newsletter Signup</a>
</div>
```

JavaScript:

```javascript
$(document).ready(function () {
  if(window.location.href.indexOf("cats") > -1) {
    $('.sign-up a').attr({href: '/animals/cat-newsletter-signup/', title: 'Sign up for our cat newsletter'});
  } else if(window.location.href.indexOf("dogs") > -1) {
    $('.sign-up a').attr({href: '/animals/dog-newsletter-signup/', title: 'Sign up for our dog newsletter'});
  }
});
```

So what is happening here?

First, we have to wait until the document is ready. The DOM is loaded. 

Second, we are looking for a specific part of a URL in the conditional's argument. `Window.location.href` is a DOMstring that contains the entire URL. Adding the `indexOf()` method is going to return the first occurance of the specified value in a string. In this case the value is either going to be cats or dogs. If the method returns a -1, the value doesn't exist. Essentialy `window.location.href.indexOf("cats") > -1` is saying if the value of cats exists in the URL then we do something.

Next, we need to target the element that needs to be changed. We need to change a couple attributes of an anchor tag inside of a div that has the class of `.sign-up`. To do this we use the `.attr()` method.

If you only want to add or change one attribute value you'd do something like this:
`.attr('href', '/animals/cats/newsletter-signup/' )`
The first part, href, is the attribute's name. The second part is the attribute's value.

If you want to add or change multiple attributes at the same time you put them into an object using curly brackets like so:
`.attr({href: '/animals/dogs/newsletter-signup/', title: 'Sign up for our dog newsletter'})`

That's really about it. 

##References

[jQuery Docs .attr()](https://api.jquery.com/attr/)

[indexOf() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

[Window.location MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)

[Location properties MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location)

[What's a DOMString?](https://developer.mozilla.org/en-US/docs/Web/API/DOMString)
