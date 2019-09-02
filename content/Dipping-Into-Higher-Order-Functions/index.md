---
title:  "Dipping Into Higher Order Functions" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 09/02/2019
tags:
    - javascript
    - web development
    - front end development
    - higher order functions
---

This is something that intimidates me a lot. I've done lots of simple functions - mostly ones with event listeners. Even the name intimidates me. It sounds much to advanced for my art educated brain.

## What is a higher order function? 

It's a function that accepts and/or returns another function.

I did this one. The first function does some math. It takes a value and multiplies it by 2. Then I pass this function into another function that interacts with the DOM to grab an input value when the Enter button is pressed, store it in a variable and then outputs the calculated number into a string.

```javascript
function multiplier(factor) {
  return x => x * factor;
};

let doubler = multiplier(2);

const input = document.getElementById('number');
const answer = document.getElementById('answer');

input.addEventListener('keyup', () => {
  if (event.keyCode === 13) {
    const number = input.value;
    answer.textContent = 'Your doubled number is: ' + doubler(number);
    answer.classList.add('active');
  };
});
```

You can do your own just as I did here but JavaScript has higher order functions built into the language too. Here's a few commonly used ones:

## Map()

Map() executes a callback function once for each element in a array, in order and constructs a new array. 

[More info on map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## Filter()

Filter() creates a new array with all the elements that pass a test provided by the callback function. In short it will filter items out. 

[More info on filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## Reduce()

Reduce() executes a callback function on each element of an array, resulting in a single output value.

[More info on reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)




