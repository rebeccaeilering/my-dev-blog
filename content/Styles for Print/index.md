---
title: Styles Aren't Just for the Browser
cover: /img/cover.jpg
category: css
date: 11/08/2020
tags:
    - css
    - front-end development
    - web development
    - print
---

Until recently, I never thought much about printing out a web page. I guess it's something people do. I know you can. I just never do. That said, I never thought about creating styling for print. I thought it would be more difficult than it actually was.

First, I found this great resource from Smashing Magazine [A Guide To The State Of Print Stylesheets In 2018](https://www.smashingmagazine.com/2018/05/print-stylesheets-in-2018/). 

## Why create print stylesheets?

I think the biggest thing I notice is that it cleans the document up a bit. Websites have navigation, sidebars, advertisements, large images and graphics, videos and other elements that are not going to translate well or are irrelevant to a print document. For example, you probably don't want to print an embedded YouTube video. What's the point of that? You can't play it on paper. For print, we really just want the meat of the content.

### What about links?

While links are not functional when in print we don't want to remove those in all instances. Using css we can insert link urls into the text as a reference. Like a YouTube video, links don't function on paper. However, the person printing the document may want a reference to the url just so they know there's more info on another website and it's not just underlined text.

## How to get started?

I'm going to pretend you want to keep your print stlyes seperate from the rest of your styles. You don't have to it's just in my situation I did. First you need to enable a print stylesheet. Just like a regular external stylesheet you need to link to the css document in the head. However, you add a media attribute with print as the value.

``` html
<link rel="stylesheet" media="print" href="print.css">
```

In your css file. Add a media query.

``` css
@media print {
    /* styles in here */
}
```

## Workflow

Once I have my print stylesheet set up and linked to, then I get started.

First, I figure out what I want to hide and apply a ```display:none;``` to those elements.

In addition, I may want to add some content. I mentioned displaying link urls as a reference. You do something like this to add the urls to print:

``` css
a[href]:after {
    content: " (" attr(href) ") ";
}
```

You can create a margin for all the printed pages by using the ```@page``` rule.

``` css 
@page {
    margin: 30px;
}
```

In addtion to that, the changes for print styling are case-by-case. Every site will be different. You may need to edit colors, padding, margins, and other properites to get your print styles the way you like them.


## Testing

You can do two things. You can click to print and bring up a print preview and see how they render. However, you can use your dev tools to emulate print media. 

1. Launch Dev Tools
2. Click the 3 vertical dots in the top right. This is the Customize and Control DevTools button.
3. Go to More Tools and select the Rendering option.
4. Go to the bottom of your Dev Tools screens and you'll see a new tab called Rendering. Click that.
5. The very last select called Emulate CSS media. Select the print option. 
6. Your page should display like it would if it's print.

[Using Chrome's Element Inspector in Print Preview Mode?](https://stackoverflow.com/questions/9540990/using-chromes-element-inspector-in-print-preview-mode)

## Conclusion

Print styles are often overlooked. In fact this very site doesn't have any print styling. I probably should get something going for that. That said, I feel like very few would want to print my posts out so I wonder if it's worth my time. However, if you do believe this has some value to your website's users you should put some effort into print styling.


