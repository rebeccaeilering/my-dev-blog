---
title:  "A Function Translated from jQuery to JavaScript"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 02/16/2019
tags:
    - jquery
    - javascript
    - web development
    - front end development
---
There has been a little personal project I've been working on for a couple years on and off. It's not that it's difficult to make. It's just difficult to find time and I need to do some data entry that I find boring so I just put it off. I just work on it when I can to add more data and improve it in little ways. 

The project is for me to have a way to inventory, filter by song or artist through the records I do own. I'd like to have something like this so I can easily find out if I own a particular record. I have a lot and sometimes when shopping I see something I like but then wonder if I already own it or not. There have been several occasions where I have bought a record I already own and then end up with duplicates. This is a waste of money. There are also times when I don't buy and find out I didn't have it and missed out on the purchase.

I also don't want to show every single record when the page loads. I just want to display 20 and then display 20 more when I click, "view more". Mostly I'm going to just use the filter fields and just display the items I'm looking for.

For the most part everything was in raw JavaScript but I had one function that was using jQuery because I couldn't figure it out in raw JavaScript. It was the displaying 20 more on button click. With jQuery it was a fairly simple task.

## Here is the function in jQuery

```JavaScript
var songs = document.querySelectorAll(".artist-song");
var showMore = document.getElementById("show-more");

$(function () {
    $('#show-more').click(function() {
        $('.artist-song:hidden').slice(0, 19).show();
        if ($('.artist-song').length === $('.artist-song:visible').length) {
            $('#show-more').hide();
        }
    });
});
```

Basically what is happening here is when the button with the `#show-more` id is clicked, a function will run. It will find the elements with the class `.artist-song` that are hidden. Then it will show the next 20 items. The conditional at the end is to hide the button with the `#show-more` id when all the elements with the `.artist-song` class are visible. The number visible elements are equal to the total number of elements. 

There's a little more here to unpack. jQuery abstracts a bunch what goes on "under the hood". Here is what jQuery is doing.

1. The `:hidden` selector is a jQuery thing that is determines if an element is hidden by assuming an element is hidden if it doesn't take up any space. 
2. The slice() method in jQuery, behind the scenes, creates an empty array. Then it loops through the elements to find the `.artist-songs` that are hidden. Then it pushes those hidden elements into the empty array. 
3. The numbers inside `slice(0,19)` are selecting the first 20 elements (0 in the argument being the start position and 19 being the end position in the array) in that array. The `show()` method attaches style of `display:block` on to those elements.
4. Every time the `#show-more` button is clicked, 1-3 will happen until the arguement in the conditional `$('.artist-song').length === $('.artist-song:visible').length` is true. Then the `hide()` method attaches a style 0f `display:none` to the `#show-more` button. This removes the button because there are no more elements to show.

## The solution in raw JavaScript

```JavaScript
showMore.addEventListener("click", handleClick);

function handleClick() {
  var hiddenSongs = [];
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].offsetWidth <= 0 && songs[i].offsetHeight <= 0) {
      hiddenSongs.push(songs[i]);
    }
  }
  for (let i = 0; i < 20; i++) {
    if (hiddenSongs[i]) {
      hiddenSongs[i].style.display = "block";
    } else {
      showMore.style.display = "none";
      break;
    }
  }
  hiddenSongs.length = 0;
}
```

The raw JavaScript is doing the same thing as the jQuery version but you see more of what is happening "under the hood". Here is what is happening in the raw JavaScript.

1. Inside the `handleClick()` function, the first thing to do is create an empty array that is stored in a variable.
2. Then loop through all the elements with the `.artist-songs` class. 
3. If the elements with the `.artist-songs` class are not visible they will be pushed into the hiddenSongs empty array. To determine which ones are not visible, a conditional with the argument `songs[i].offsetWidth <= 0 && songs[i].offsetHeight <= 0` is created. Then the `.push()` method pushes the hidden elements into the empty array.
4. Then run another loop through the hiddenSongs array and attach a style of `display:block` on to the first 20 elements. Once all the elemensts are visible a style 0f `display:none` to the `#show-more` button in order to hide it.
5. Then exit the loop.
6. Then empty the array

## Conclusion 

This was a very frustrating task for me but after getting some instruction from a user on [CodePen](https://codepen.io/), I have a better understanding of how the jQuery works and how the JavaScript works too. Every since I started dabbling in web development the second time around (2005), most of my experiences with JavaScript have been through jQuery. It seems more and more, developers are favoring raw JavaScript today and then using that knowledge to get into popular frameworks.

Here is the pen to illustrate. I want to note this isn't the full project code. This is an abbreviated version to show just enough to illustrate what the function I was having issues with does. 

<p class="codepen" data-height="434" data-theme-id="0" data-default-tab="html,result" data-user="rebeccaeilering" data-slug-hash="bzorPb" style="height: 434px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="List of Records With Show More on Click">
  <span>See the Pen <a href="https://codepen.io/rebeccaeilering/pen/bzorPb/">
  List of Records With Show More on Click</a> by Rebecca Eilering (<a href="https://codepen.io/rebeccaeilering">@rebeccaeilering</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

