---
title:  "First Impressions of Gatsby" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: gatsby
date: 11/18/2018
tags: 
    - javascript
    - static site generator
    - web development
    - gatsby
    - jekyll
    - react
---

There's been a lot of talk about the static site generator called Gatsby. It is React based and powered with GraphQL. I supposed out of all the static site generators, Gatsby is the rock star. Static site generators are not foreign to me. This blog is built with Jekyll and for the most part I'm happy with it. So in some ways they are similar but they are also very different.

I went through the Gatsby tutorials to build a simple blog this weekend and this is what I think.

## How are they similar?

In general, Jekyll and Gatsby are similar on the surface. 

* If you are going to be blogging, and it seems like these platforms are popular for blogging, both employ the use of Markdown for writing posts.

* Both have built in servers that you may run for development so you can see your changes in the browser as it's being developed.

* Both have large and active communities and you can download starter themes and plugins that other developers have created.

* Both are easy to deploy using services such as Netlify and Surge. You can deploy from the command line. 

* Both build the site as static files and can be deployed without a traditional server. Instead, it can be hosted on a CDN. That's where the term "serverless" comes in. That means front end oriented people like me don't have to mess around with server stuff. So less server management. 

* Both are considered JAM Stack type of sites. (JavaScript, API, Markdown = JAM)

I think static site generators are great for blogs, documentation and small personal websites.

## How are they different?

* Both are great for blogging but Gatsby promotes themselves as a "static Progressive Web App (PWA) generator" too. This means there is code and data spitting. It will only load the critical CSS, HTML, data and Javascript when the site first loads. Then once loaded and assets, data, code will only be loaded as needed. This makes the sites very fast. Gatsby utilizes Service Workers out-of-the-box. 

* Gatsby uses Node.js as it's engine and then everything built with React (JavaScript) while Jekyll uses a Ruby engine and if you know traditional HTML, CSS and can figure out the Liquid Templating Language, you will have no issues. I'd say Jekyll is a little easier to get into right away. I think there's more of a learning curve for Gatsby. To use Jekyll you do have to have Ruby installed on your machine.

* I think Gatsby is the hot one right now because it uses React. I would desribe React as a framework that allows you to build websites and apps using reusable components. Pretty much everything in Gatsby is built with Javascript. Everything. Yes, you will use HTML and CSS but it will be used within JavaScript. If you've never used React, this will seem weird, jarring and even completely off-putting. It breaks a lot of rules I was taught, such as mixing CSS in JavaScript and writing all your HTML inside JavaScript. It almost takes out the cascade of of CSS. I have been saying, "WTF" a lot. However, I think the point is to keep everything compartmentalized within the components so they may be used anywhere without breaking stuff. Basically the hope is that there will be fewer errors. Some people love this and some people hate this. I'll keep an open mind.

* Gatsby utilizes GraphQL to utilize data and Jekyll gets data via YAML, JSON, and CSV files along with the Liquid Templating Language to access the data. I'm not familiar with GraphQL at all so that's going to be a learning curve for me. It kind of reminds me of JSON in that everything is in curly brackets and is nested. It's really too early for me to say more or determine if I like it or not. For me Jekyll is easier because I'm already familiar with JSON and YAML. 

* Gatsby's templating is done with JavaScript via React. For example, you create a component for a header and then you import the component with the React syntax. Jekyll's templating is more traditional. I would make an includes folder and create a header.html file and then pull into my default layout with the liquid syntax. Liquid sort of reminds me of PHP - which I'm familiar with. Again, it's really too early for me to say more or determine if I like it or not. For me Jekyll is easier because it's method of templating is more familiar to me.

* Gatsby seems more modern with it's use of Webpack, Babel, ES6 and 7, JSX right out of the box. 

* While Jekyll and Gatsby offer starter themes and plugins, Gatsby has a component ecosystem too. Jekyll doesn't offer this because it isn't component based.

* Jekyll is super close to Github so it is super simple to deploy with Github Pages so you can have a website for free as easy as making a commit to your github repository for your project. I deployed this blog using Github pages. You don't have to push live using Github pages. Just like with React you may host it on a traditional server or you can use Netlify or Surge. I use Netlify for my personal website and I think it's super simple. Surge is easy too but I haven't used it as much.

* Gatsby includes programmatic design as you can pull in design elements with npm and then use in the site. Gatsby offers native support for design systems and component libraries. You can export React components in to applications like Sketch. I think you can with Figma too. I'm not sure about Adobe XD. 

## What's my conclusion?

I doubt I covered everything. Heck, I may have got some things wrong. I'm new to this! Gatsby and React are very interesting and I want to continue to experiment and play with it. I think I need to improve my JavaScript skills more but I'm sure I could create a simple blog or website using Gatsby now using one of the many themes available. I'm certainly not going to give up on Jekyll. I find it easier to use for my needs. The biggest obstacle was getting familiar with Liquid but even that isn't too difficult. 

I will say this, with how hot JavaScript and React are, its not a bad idea to familiarize yourself with Gatsby and React. React seems to have legs. JavaScipt seems to be taking over everything. Hail our new overlords!

If you are familiar with React and are more of a JavaScrip whiz, Gatsby may be the way to go. 

In the end, my conclusion is that one isn't better than the other universally. I think it depends on your skill set and your needs. Use what is best for you. 

