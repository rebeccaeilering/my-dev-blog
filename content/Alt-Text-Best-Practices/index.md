---
title:  "Alt Text Best Practices"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: accessibility
date: 02/25/2019
tags:
    - html
    - alt attribute
    - images
    - web development
    - front end development
---

Alt text values seems to be confusing for a lot of users. One method many use is to cover all bases is to add an alt text value to every single image within an image tag. However, that isn't really the best way to deal with alt values. It can result in a lot of redundancy that can be annoying for those with screen readers. Even worse is to ignore the alt attribute all together. 

This is a good article that explains how to use the alt attribute: [Accessibility: Image Alt Text Best Practices](https://support.siteimprove.com/hc/en-gb/articles/115000013031-Accessibility-Image-Alt-text-best-practices)

I don't was to rehash everything in the article. In short, the main thing is you need to determine if an image is decorative or if it contains information or text that is meaningful to the user. If an image is decorative, it doesn't need alt a text value but it still needs an empty alt attribute `alt=""`. 

What is considered decorative? If an image doesn't add important contextual information or meaning, then it's decorative. If you can remove the image and not lose any information that would be important for users, then it's just there to make the page look better or more visually interesting. It's not informational or vital to the user.

Here's an example of a decorative image:

```html
<div class="staff">
  <img src="img-john-smith.jpg" alt=""> // Just a photo of John Smith
  <h2>John Smith</h2>
  <p>Senior Web Developer</p>
  <a href="mailto:johnsmith@corpwebsites.com">Email Me!</a>
</div>
```

If the image of John Smith breaks for some reason, the user isn't going to miss out on important information. If we fill out the alt attribute with "portrait of John Smith", that isn't going to help a person that has a disability that affects their sight. It's not important to know what he looks like. 

Here's an example of a image that is NOT decorative:

```html
<div class="staff">
  <img src="img-john-smith.jpg" alt=""> // A photo of John Smith with his name, title, and contact
</div>
```

Lets say this image has his name, title and email address in the image. This image contains information that is useful to the user. If this image breaks then a person that has a disability that affects their sight will not be able to know who that person is, what their title is or their contact info. An alt text value would he helpful here.

Here's the same block of code that has an alt value:

```html
<div class="staff">
  <img src="img-john-smith.jpg" alt="John Smith, web developer. Email johnsmith@corpwebsites.com">
</div>
```

I want to note that ideally, you should avoid text in images but sometimes it's unavoidable. If your image includes text, it's a good idea to give the alt attribute a value.

Here is something i didn't know. If the image has a function, such as it acts as a link, the alt text should convey the action rather than a description of the image. This is only the case if the image isn't accompanied by text within the anchor tag. If the image has visible anchor text, then the image still needs the alt attribute but it doesn't need to be filled in.

Example without text:

```html
<a href="mailto:johnsmith@corpwebsites.com">
  <img src="email-john-smith.jpg" alt="Email John Smith"> // Photo of John Smith with an email icon
</a>
```

Example with text:

```html
<a href="mailto:johnsmith@corpwebsites.com">
  <img src="email-john-smith.jpg" alt=""> // Photo of John Smith with an email icon
  Email John Smith
</a>
```

When it comes to alt text, there isn't a "one solution fits all" approach other than all images need an alt attribute. However, evalulate the images added and determine if they need a text value or not. 


