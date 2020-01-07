---
title:  "Confusion When Merging Branches" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: git
date: 11/03/2018
published: true
tags:
    - web development
    - branching
---

This is honestly just a personal reminder for me. I always get confused when I need to merge branches. Every single time I have to do a search to look it up. I can't remember which branch I need to be on when merging. I want to merge new branch with the original (my staging branch) so which branch do I do the merge from? The new branch or the original? I probably overthink this.

To put it simply:

{% raw %}
```
// on branch A (my staging branch)
// create new branch called new-stuff
$ git checkout -b new-stuff
// make changes, additions etc
$ git commit -m "made some changes"
// go merge new-stuff into A
$ git checkout A
$ git merge new-stuff
```
{% endraw %}

I like this page for reference:

[Git Merge Tutorial from Atlassian](https://www.atlassian.com/git/tutorials/using-branches/git-merge){:target="_blank"}

I think this Tutorial is easy to understand with good diagrams, step-by-step directions, and command line examples.