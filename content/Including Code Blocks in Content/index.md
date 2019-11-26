---
title:  "Including Code Examples in Content" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: html
date: 12/07/2019
tags:
    - html
    - web development
    - front end development
    - css
---

As a web developer I like to include little code examples/snippets in my content sometimes. It's not too difficult but it's a bit quirky.

First of all, for this blog, I'm using Gatsby and my posts are written in Markdown. I'm using a package called Gatsby-Remark-Prismjs which is nice becuase it includes syntax highlighting and the Markdown code for it is simple. It takes care of a lot of the quirkiness. I just use three backticks and the language right after like ` ```javascript `. Specifying the language determines the code highlighting. Then insert the code and close with three backticks ` ``` `. This is good for blocks of code. For inline code, I just add the code and surround it with backticks like ` `<pre>` `. 

If you're not using Gatsby and just writing in plain HTML and CSS code examples are not quite as simple. First syntax highlighting is nearly impossible (you may use[Prism.js](https://prismjs.com/) to help with this). However, you can format the code so it looks decent.

First you're going to use `<pre>` and `<code>` tags. Then style with css. 

The `<pre>` tag tells the browser that this is preformatted text and it's a block element. This is to tell the browser to leave white space intact and not wrap. I'll usually use `<code>` for inline examples that will wrap (because it's an inline element).

I like to use `<pre>` and `<code>` together for blocks though because I want it to be a block element and semantic and keep most of the preformatted structure. I probably could just use `<pre>` by itself but to me using both is more semantic. `<pre>` just refers to preformatted text and that doesn't always mean it's code. Adding the `<code>` tag specifically tells me that there's code in the preformatted text. Plus, I think it gives me more flexibility with styling.

There may be times I want to use `<code>` as an inline element and I want to use it as a child to the `<pre>` tag for semantics and I don't want the code text to be styled the same.

The issue with preformatted text is making it responsive. Anything inside the `<pre>` tag is going to retain it's text structure (even if the text is in a `<code>` tag that is inline - it's not going to wrap) and on narrow screens or containers the text will overflow and that's not good. So there's a couple choices. In the css add either `white-space: pre-wrap;` or `overflow-x: scroll`.

`white-space: pre-wrap;` is going to make the text wrap. This is nice for responsiveness. For wide screens the text with retain it's preformated state and for smaller screens/containers it will wrap. The only issue I see here is for code, how it's formatted is important to it's readability and forcing it to wrap may make it harder to read. On an aesthetic level this looks better and more responsive.

`overflow-x: scroll` will preserve the preformatted text for all screens but when the text overflows a scroll bar is added. This is good for code readability but many don't like scroll bars for aesthetic reasons.
