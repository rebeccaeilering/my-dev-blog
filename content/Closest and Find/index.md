---
title: Traversing the DOM Tree with Closest and Find Methods
cover: /img/cover.jpg
category: javascript
date: 02/20/2020
published: false
tags:
    - web development
    - front end development
    - javascript
    - DOM
    - jquery
    - closest
    - find
---

Recently I had to figure out how to traverse up the DOM tree so I could target a sibling of a HTML element that was two levels up the DOM (grandparent). The `.parent()` method could travel a single level up the DOM tree to find the parent element. That wouldn't work because I need to go two levels up. 

What I needed is the `.closest()` method. What I needed to do was traverse up the DOM and find the first parent element that matches the selector (the element in the parenthesis).

Once I found that element then I would store it in a variable. Then I used the `.find()` method to search through the all descendant elements of the selector. From what I can tell I would be able to use the `.children()` method, which only travels a single level down, in this instance.

1. find(): It will search through the matched elements’ child, grandchild, great-grandchild, etc,... All levels down.

2. children(): It will search through the matched elements’ child only. Single level down.

<iframe height="394" style="width: 100%;" scrolling="no" title="15015ac5b02dc6030d40755de9ca2988" src="https://codepen.io/rebeccaeilering/embed/15015ac5b02dc6030d40755de9ca2988?height=394&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/rebeccaeilering/pen/15015ac5b02dc6030d40755de9ca2988'>15015ac5b02dc6030d40755de9ca2988</a> by Rebecca Eilering
  (<a href='https://codepen.io/rebeccaeilering'>@rebeccaeilering</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

This example shows that when I click on an element that has the class of `.name` I want to traverse up the DOM tree to find the first parent element that matches the class `.item`. I will store that in a variable called parentItem. Then I will traverse down the DOM tree (all levels inside the parent element which is what's stored in parentItem variable.) to find the element that has the class of `.desc` and then toggle that element.

I could have used the `children()` method too because I only had one level to traverse.