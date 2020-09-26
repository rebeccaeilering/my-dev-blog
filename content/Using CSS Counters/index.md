---
title:  "Using CSS Counters" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: css
date: 09/25/2020
published: true
tags:
    - css
    - front-end development
    - web development
---

Recently I had a ticket come in for a survey form and there was some custom styling I had to do for it. The main thing I had to do was add numbers in a circle in front of each question. In addtion there would be a vertical line below the number and to the left of the answers that would span the height of the answers. These are not hard coded and are built through the CMS so I can't change the structure of the HTML. The most I could do is add classes to the input elements.

I had no idea what to do here until I talked to a colleague of mine. He suggested a counter. I thought he was talking about a JavaScript counter. Nope, he was talking about a CSS Counter. I had no idea these existed. What I would do is I would add a class to each input that the counter styling would be applied to. It was actually fairly easy. 

Basically CSS Counters allow you to adjust the appearance of content based on it's location in the HTML document. This allows you to automatically number HTML elements.

What I'm going to do is add a class like ```.counter``` to each form element. Then in the stylesheet I'm going to add a property to the selector called ```counter-increment``` and give it a name. Then using a pseudo element like ```::before``` or ```::after```, I add the counter function as a the content property's value.

So it would look like this in the CSS:

``` css
.counter {
  counter-increment: listCounter;
}

.counter::before {
  content:  counter(listCounter);
}
```

That's it. A number gets added to each form element that has the class of ```.counter``` and then I add the additional styling needed. 

More information see the MDN documentation.

[MDN: Using CSS Counters](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters)