---
title:  "The Basics of HTML5 Semanitic Elements"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: accessibility
date: 11/01/2019
published: true
tags:
    - html
    - front-end development
    - web development
---

A long time ago it was pretty standard to create layouts with tables. Then we moved on to using divs to create layouts. This was certainly better than tables but no consideration was given to accessibility. However, today, accessibility is very important to create websites that will be accessible by all. This means making it so a website allows assistive technologies to read your site and adapt it so those with a variety of disabilities can access the content of a website.

You can still create website layouts with nothing but div tags (I don't recommend it). You could make the div layouts more friendly to screen readers and other assistive technologies by using role attributes to create landmarks that are used by assistive technologies. You may still do that but using semantic sectioning elements such as `<main>`, `<header>`,`<nav>`,`<footer>`, `<section>`, `<article>`, `<aside>` to organize your content is a better option. 

Why is it better? First as a developer, it is easier to read. Instead of a sea of nested div tags that don't have any meaning, you have names for tags that have a clear meaning. When scanning code it sure is easier finding a footer tag than it is to find a div tag with a class or id with the name "footer". Secondly, some of the semantic sectioning elements behave like landmark roles. Landmark roles help assisstive technologies identify and navigate to sections of an HTML document. In the end by using semantic sectioning elements you use less code to do the same thing. For example, `<main>...</main>` vs `<div role="main">...</div>`. However, in some cases you may have to do something like this `<main role="main">...</main>` if you support legacy browsers like Internet Explorer.

So what do the following do?

##Main

The `<main>` element is where the dominant content of the document's body lives. The content should be unique to the document. Repeated content such as navigations, sidebars, etc,... shouldn't be in the main tag. You shouldn't have more than one main tag. The main element is a landmark.

[Learn more about the Main tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)

##Header

The `<header>` element is for introductory content or navigation aids. Many times this will contain heading text, logo, search. This doesn't go inside the main tag but it can be used as a child element inside a section or article tag. Headers when they are not child elements do act as landmarks. If the header is a child element inside a section or article tag they do no act as landmarks.

[Learn more about the Header tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)

##Nav

The `<nav>` element is a section of a page that provides a block of navigation links. A document may have more than one of these elements so for accessibility purposes an `aria-labeledby` attribute may be used to help differentiate the nav elements when assitive technologies are used.

[Learn more about the Nav tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)

##Section

The `<section>` element is great for content that is part of (a section of) a larger block of content. Typically if you use a section, you'll have more than one section (not always though). Many mistakenly use this element as a generic container - like a `<div>`. A section element is to be used if the content should logically appear in the outline of the HTML document. Sections should have a heading as a child element. Sections may contain `<header>` and `<footer>` tags but it's not nessessary. Sections may also contain articles. 

A section is not a landmark but it becomes one when a heading is used along with an `aria-label`, `aria-labelledby`, or `title` attribute.

[Learn more about the Section tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)

##Article

The `<article>` element is often confused with the `<section>` element. The `<article>` element is a self-contained composition in a document that may be reusable/repeatable. Many times this is used for blog posts or news articles. How I usually think of it is that an article can be independent and taken outside the context of the page and still make sense.

Sections and articles may be nested inside an article. Header and footer tags can be used inside of articles too. In addtion, articles should have a heading as a child element.

Articles are not landmarks and should be within a landmark. Commonly this would be within the main element. 

[Learn more about the Article tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)

##Aside

The `<aside>` element is often confusing too. It's not another term for sidebar but many times it is used for a sidebar. It's often used as call-outs, definitions, and other auxiliary content. This landmark contains content that is indirectly related to the documents main content. If the content is not in any way related to the main content a `<div>` element may be more appropriate.

An Aside can have an header and footer but can't contain another aside element.

Before HTML5, `<aside>` would be written like `<div role="complimentary">`.

[Learn more about the Aside tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)

##Footer

The `<footer>` element is commonly at the bottom of a page ouside of the main content. This will typically contain copyright info, social media links, author/company information. This may also be used in other sectioning elements like articles to include author info or other meta data.

[Learn more about the Footer tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)

##Concluding Thoughts

This can be very confusing as there is a lot going on here and a lot of it is contextual. Much of this requires some judgement calls and is why HTML, while simple at the surface, turns more complicated when you need to make a semantic document that is accessible. 

I want to add that everything above is simplified and there's more to those elements than I explain. This is why I'm including a link to the MDN documents that will provide additional information. I am no authority or expert at this as I am still learning the complexities. I still get things wrong.
