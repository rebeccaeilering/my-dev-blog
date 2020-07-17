---
title:  "Targeting Middle HTML Element" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 07/20/2020
published: true
tags:
    - html
    - javascript
---

Recently, I had a task where I had to create video page where there are five videos. The third video would be large and in center and then have two videos to the right and to the left. This was a modification of an existing page that had seven videos. The fourth video is large and in center and then have 3 videos to the right and to the left. Another part of this is when the user clicks on the smaller elements, the element clicked on is put into the large center element.

There was already javascript in place for the seven video layout and since the five video layout would function the same way it only made sense to use the same code. Instead of hard coding in the index of the middle video we could determine the middle via javascript that way that index value is dynamic.

I'm not going to go on a deep dive on how all the code worked but I just want to focus on finding the middle element automatically.

This is pretty simple. First I want to get all the elements. In this case the paragraphs. What I did was a use a `.querySelectorAll` put put all the elements in a NodeList.

Then I just use some simple math to get the middle index by getting the length of the NodeList and dividing it in half. `Math.floor((para.length) / 2)` Obviously when you divide an odd number in half you're not going to get an whole number. You're going to get a number with a decimal. So for 5, half will be 2.5. I use `Math.floor` to round it down to 2. If it's for 7, half is 3.5. `Math.floor` to round it down to 3.

But wait. If the length is 5 wouldn't the middle index be 3? Rememeber in an array or NodeList, the first item is 0 and then you count up. This means the third element has an index of 2.

Below is a simple example on CodePen. 

<iframe height="400" style="width: 100%;" scrolling="no" title="1e35cb11e4ca7d9c3e5087c1b9067e7d" src="https://codepen.io/rebeccaeilering/embed/1e35cb11e4ca7d9c3e5087c1b9067e7d?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/rebeccaeilering/pen/1e35cb11e4ca7d9c3e5087c1b9067e7d'>1e35cb11e4ca7d9c3e5087c1b9067e7d</a> by Rebecca Eilering
  (<a href='https://codepen.io/rebeccaeilering'>@rebeccaeilering</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>