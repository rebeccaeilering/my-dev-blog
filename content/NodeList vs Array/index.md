---
title: NodeList vs. Array
cover: /img/cover.jpg
category: javascript
date: 01/20/2020
published: false
tags:
    - web development
    - front end development
    - javascript
    - DOM
    - Arrays
---

NodeList

A collection of nodes.
A node is a single point in a node tree. For example, a HTML document is represented as a node tree. The DOM is used to access and manipulate the document.
Can iterate over using forEach() or a for loop.
Can be converted to an array.

Some are LIVE and some are STATIC
- Live: changes in the DOM will automatically update a collection such as parent's childNodes.
- Static: changes in the DOM doesn't affect the content of a collection. This is the case with querySelectorAll().

Whether is's static or live will determine how you iterate over the items of a nodeList.
https://developer.mozilla.org/en-US/docs/Web/API/NodeList


Array