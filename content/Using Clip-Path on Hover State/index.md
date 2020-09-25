---
title:  "Using Clip-Path on Hover State" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: css
date: 10/02/2020
published: false
tags:
    - css
    - front-end development
    - web development
---

The clip-path css property is a fun one. It's essentially setting a mask on an element. From MDN, "The `clip-path` CSS property creates a clipping region that set what part of an element should be shown. Parts that are inside the region are shown, while those outside are hidden.

For the example below, I'm using `clip-path` for the rectangle shape and for the hover state shape. I want to note, a div will be a rectangle if you set width and height values so why use `clip-path` to set the rectangle shape? It's becuase I'm going to use the transition property to animate the element on hover. You can use `clip-path: none;` for a rectangle but the animation will not work.

For `clip-path` there are many values that may be used but I'm using the polygon function `polygon()`. I can set coordinates values for each point on an x and y axis that will be animated. 

Simply put, for the default state, I set the `clip-path` value's polygon coordionates that show as a rectangle. Then on `:hover` I set the `clip-path` value's polygon coordionates to show as a chevron type shape.

Then I use a `transition` property to animate it: `transition: clip-path .5s ease-in-out;`. That's it.

You can find more information here [MDN:Clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)


<iframe height="400" style="width: 100%;" scrolling="no" title="Clip-Path Hovers" src="https://codepen.io/rebeccaeilering/embed/jOWqRyj?height=400&theme-id=light&default-tab=css,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/rebeccaeilering/pen/jOWqRyj'>Clip-Path Hovers</a> by Rebecca Eilering
  (<a href='https://codepen.io/rebeccaeilering'>@rebeccaeilering</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>