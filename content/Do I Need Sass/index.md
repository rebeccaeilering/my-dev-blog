---
title:  "Do I Need Sass?" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: css
date: 12/09/2019
published: true
tags:
    - css
    - web development
    - front end development
    - sass
    - scss
---

No. Okay, that's it. Post is complete. Have a nice day.

Hold on. Why? Isn't Sass awesome? It's awesome nature is in the name itself. Sass stands for Syntactically Awesome Style Sheets. So yeah, it's awesome.

I like using Sass and I think it has introduced a lot of great tools for styling HTML documents. It's been so awesome that some of it's features are in native CSS now. That is awesome.

Do I *need* it? Nah. It's nice though. Variables and nesting of elements are great. Partials and modules is great for organizing styles. Mixins are great to streamline some processes that are annoying and repetitive too. There are some other features of Sass I don't really use. I rarely use operators but or use the Extend/Inheritance functionality (maybe I should but I forget about it).

That said *still* do I *need* it? Nah. I think for my job it's very useful becuase some code bases are very large because the site is large - lots of pages, layouts, components. It makes organization so much easier and speeds up development cause I'm not constantly looking up media queries or auto-prefixers. However, for my own personal projects, they are so small that I don't need most of the features. 

Plus, for a tiny personal project Sass adds a lot of technical debt. What do I mean by technical debt? 

Lets say I'm making a tiny website about my cat. It may only be one page that say's "My cat is awesome!" and features some pictures of my cat's handsome appearance. This isn't complicated. I should just need a HTML file, a css file, a folder for my images, and maybe a javascript file if I want it to rain cat treats everytime you hover your cursor over his cute little snoot. I can do all that in a few minutes. Then I just start making.

Lets say I want to use Sass for this tiny project? Well first I need to make sure I have Node.js (if not I have to download and install) and then use npm to install or just install it directly on my computer. I could also run it though an application like Prepros (which means I need to download and install PrePros) if I want a GUI to do the processing for me. Then (if not using a GUI) I need to run a command to watch for changes, compile and re-compile. I don't know but to me when I just want to start on a tiny project that may take a couple hours I don't want to do all that. I just want to start.

I also feel even less of a need for Sass when I can use css custom properties for variables. I can use the native css property `calc()` to do math. Plus when there's not a lot of css, nesting, partials, modules, and extending isn't important to me. Custom properties isn't supported by IE11 but for my tiny personal projects, I'm not worried about that.

I look at it this way, if I don't need a build tool (like Gulp or Grunt) then I don't need Sass. I'm only going to use a build tool if it's a large project. I'm only going to use Sass if it's a large project. So in the end, I've included Sass in my build tool configuration and that's when I'll use it.

