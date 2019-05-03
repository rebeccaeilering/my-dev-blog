---
title:  "Using a Data Attribute in Javascript to Edit a Pseudo-Element" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 02/02/2019
tags:
    - javascript
    - data attributes
    - pseudo element
    - web development
    - front end development
---

I ran into an issue where I had to remove a style from some dynamically generated code. I couldn't remove a class from one item because I didn't have access to change the generated HTML. I had six `.photo` elements. When the user clicks on that element, the click triggers a modal that contains a video embed URL from YouTube. The client only had four videos at the moment, so they wanted me to remove the play button graphic (that was styled with the psuedo-elemnent `::before` so it was overlaid the `.photo` element) and disable the modal for the two items that didn't have video embed URLs. 

This sounded like a job for some JavaScript. 

What all the `.photo` elements had in common was they had a data attribute that contained the embed URL for the video. All would have a different attribute value. The data attribute did have a default video in case there wasn't a video embed URL loaded but the client didn't want it to be used. However, I figured it would be of use to me. All the elements that didn't have a new video embed URL loaded would have the same data attribute value. So I figured that would be my target so I could alter the CSS and disable the modal.

In addition, I wanted to add a `display: none;` style to the `::before` pseudo element. I decided to add a class to my css that would be appended to the `.photo` element. Then in the CSS, add another `::before` pseudo element to the new class. I don't know if that is the best way, but it works for what I want to do.

The HTML and CSS looked started like this:

```html
<div class="photo" data-videourl="https://www.youtube.com/embed/8C5mhJq8UNs"></div>
```

```css
.photo::before {
  content: '';
  background-image: url('file/path')no-repeat center;
  width: 150px;
  height: 150px;
}
```

The JavaScript was actually really simple. 

```javascript
  $('.photo[data-videourl="https://www.youtube.com/embed/8C5mhJq8UNs"]').addClass("no-play").off();;
```

For any `.photo` element that had the `data-videourl` attribute, a `.no-play` class that will have a `::before` pseudo-element with a `display: none;` style. This will override the `::before` pseudo-element attached to the `.photo` element. That's the cascade at work. That removed the play graphic overlay that was on `.photo` element.

After the JavaScript runs, the HTML and CSS looks like this:

```html
<div class="photo no-play" data-videourl="https://www.youtube.com/embed/8C5mhJq8UNs"></div>
```

```css
.photo::before {
  content: '';
  background-image: url('file/path')no-repeat center;
  width: 150px;
  height: 150px;
}

.no-play {
  cursor: default; /* I wanted to remove the pointer because the element wouldn't be clickable */
}

.no-play::before {
  display: none;
}
```

The jQuery `.off()` method is then chained to the end to remove the click event handler that was being used to fire off the modal. Here's more info on that [here](http://api.jquery.com/off/).


I learned a few things:

1. How to use data attribues in JavaScript
2. How to deal with pseudo elements with JavaScript
3. How to disable a click event

