---
title:  "Moving Text from One Tag to Another"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 03/11/2019
published: true
tags:
    - jquery
    - html
    - front-end development
    - web development
---

This was an issue I ran into when solving some accessibility issues. First of all, every page needs to have one h1 tag. Pages shouldn't have multiple h1 tags. In addition, there shouldn't be any empty heading tags. I find many people sometimes use heading or paragraph tags to space out content and this shouldn't be done. That would be an issue to be best dealt with by using CSS.

The first block of code is dealing with multiple h1 tags that are not hard coded. I couldn't just go into the content or html to delete. 

Basically this starts out by checking if the h1 tag exists inside the `.page-detail` div. If it does exist, we'll run the following code inside the conditional statement. Essentially the `.text()` method is pulling out the text inside the `.page-detail h1 span` and then we are storing it in a variable called `eventHeading`. Then we want to insert that text into the h1 tag that has the class of `.section-title`. We use the `.html()` method to pass in the `eventHeading` value. Finally, we want to remove the `.page-detail h1` from the DOM so there are no duplicate h1 tags. 

```javascript
   if($('.page-detail h1').length > 0) {
        var eventHeading = $('.page-detail h1 span').text();
        $('.section-title').html(eventHeading);
        $('.page-detail h1').remove();
    }
```

The second block of code is dealing with a page that has an empty h1 tag that needs to be generated from a class on the body tag because I can't manually add it. This one was a little more difficult because this involved grabbing a class from the body and turning that into text that would be inserted into an h1 tag.

This starts out by checking if the tag with the classes `.subpage.events` exists. If it does exist, the following code inside the conditional statement will be ran. What I want to do is grab the `.events` class (which is an attribute of the body tag), pull out the text and put it into an array. Since it's the second item, it has an index of 1. This is the purpose of `.split(' ')[1]`. This is stored in a variable called `eventListTitle`. Finally, this text is inserted into the h1 tag that has the class of `.section-title`. The `.html()` method is used to pass in the `eventHeading` value.

```javascript
    if($('.subpage.events').length > 0) {
        var eventListTitle = $('body').attr('class').split(' ')[1];
        $('.section-title').html(eventListTitle);
    }
```

These are not complicated blocks of code but they are certainly helpful if you can't modify the html for some reason. CSS would have been useful if I simply didn't want the elements to show without removing the HTML. instead, I needed to remove these completely from the DOM so that is where javascript became helpful.