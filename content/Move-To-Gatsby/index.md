---
title:  "Moving My Blog to Gatsby"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: gatsby
date: 05/05/2019
tags: 
    - javascript
    - static site generator
    - web development
    - gatsby
    - jekyll
    - react
---

For a couple weeks my blog completely disappeared resulting in the link to my blog from my website being broke.

This resulted from my purchase of a new MacBook Air(MBA) and not being able to get Jekyll installed. The problem wasn't Jekyll itself but with Ruby. My MBA runs MacOS Mojove and a version of Ruby that doesn't meet Jekyll's minimum system requirements. I tried following the directions on the [https://jekyllrb.com/docs/installation/macos/](Jekyll website's documentation) and didn't understand it. I understook installing Homebrew and got a version of Ruby installed. However, I now have two version installed and can't figure out how to run the correct on.

I specifically don't understand this:
```
// add the brew ruby path to your shell config
export PATH=/usr/local/opt/ruby/bin:$PATH
```

I don't understand this either:
```
// append your path file with the following, replacing the X.X with the first two digits of your Ruby version
export PATH=$HOME/.gem/ruby/X.X.0/bin:$PATH
```

Anyway, my level of frustration was high and I just decided to kill it. Start over. I wiped out the repo and rendered the site as dead.

## Move to Gatsby

On my new computer, I had no issues with Gatsby. After all it's just javascript. I installed node.js and then the Gatsby CLI and I was ready. It all works so I have been transferring my everything from my Jekyll build to the Gatsby build.

Overall it's been simple and relatively painless. I don't have a huge amount of posts so that wasn't a problem. The biggest job was just getting the structure and styling in place.  Again, this wasn't that difficult and in the meantime I made a few changes.

## Thoughts of Jekyll

I did like it and when I started using it the Liquid code sort of reminded my of PHP and at my previous job we built sites on PHP. Since starting my new job, I haven't touched PHP. However, my biggest hurdle with Jekyll was Ruby. I just don't know much about it and it's not a learning path I was wanting to take. In the end, my investment in javascript is high and for me it just makes more sense to build in the javascript/React/Gatsby ecosystem. It's just more relevant to me.

I don't think Jekyll is bad but I do feel like there are more hurdles if you're not familiar with Liquid or Ruby. 

## How I Built This

When I built my blog on Jekyll I just modified the default theme which is called Minima. It doesn't have a lot of features built in. I had to build my own categories functionality. I wasn't doing a huge amount of customization. I was just adding features and functionality as I went along.

When moving to Gatsby, I suppose I could have just built from the starter theme which I think is about as minimal as the default theme. Actually, I think the Gatsby starter is even more minimal. That said, I decided to add a different starter theme. I am using [https://github.com/Vagr9K/gatsby-advanced-starter](Gatsby-Advanced-Starter). The main thing was it has all the blog functionality but very little styling and html structure. It probably has more features that I need but I also like how it has SEO and social features built in.



