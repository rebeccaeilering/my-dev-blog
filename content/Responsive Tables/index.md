---
title:  "Making Tables Responsive" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 07/03/2020
published: true
tags:
    - html
    - javascript
    - responsive design
    - tables
    - css
    - data attributes
---

Tables have always been a pain point when it comes to responsive design. They will display nicely (sometimes) on desktop but they become a problem once screens get more narrow. Why are tables a problem? Tables are made up of rows and columns and for the table to stay legible, it needs to keep it's table layout. The problem is the more columns a table has the more room it needs when it comes to width. At some point it runs out of width because a browser window only is so wide. When it comes to desktop there's more width to work with but for mobile there isn't so much. Mobile views tend to be at more of a portrait orientation with a very narrow width. This makes it very difficult to display tables.

The solution is to change the layout of the table but still make it easy to understand. How to do this? Typically layout issues can be handled with CSS and media queries but we also need JavaScript to deal with some of the text content.

First the mobile design is to take more of a column layout. The table rows will be stacked into a column. Then inside the row will be each cell that will also be stacked into a column. So then the question is what do we do with the labels? We need to know what the content in the cell is referring to. This is where the JavaScript comes in.

On mobile devices I want to take the table headings and place it next to the coresponding content in each cell.

Desktop

<img src="/my-dev-blog/img/table-desktop-1.png" alt="" />

Mobile

<img src="/my-dev-blog/img/table-mobile-1.png" alt="" />

You may see this in action here on my [style guide page](https://rebeccaeilering.me/style-guide.html) on my website.

``` JavaScript
  const headertext = [],
  headers = document.querySelectorAll("table th"),
  tablebody = document.querySelector("table tbody");
  for(let i = 0; i < headers.length; i++) {
    const current = headers[i];
    headertext.push(current.textContent.replace(/\r?\n|\r/,""));
  } 
  for (let i = 0, row; row = tablebody.rows[i]; i++) {
    for (let j = 0, col; col = row.cells[j]; j++) {
      col.setAttribute("data-th", headertext[j]);
    } 
  }
```

  Let's pick this apart.

  First I set a variable for an empty array for the text contained in each `<th>` tag. This is called `headertext`.

  I also set a variable for all the `<th>` elements. These will be in a NodeList if you console.log the variable. I also set put the `<tbody>` element into a variable.

  Then what I'm going to do is loop through all the `<th>` elements stored in the `headers` variable. This loop is going to grab the text content inside the `<th>` tags and push them into the array called `headertext`. This text is going to be used for the `data-th` data attribute.

  Next I will loop through all the table's row elements (`<tr>`) and loop through the cell elements (`<td>`) within the `<tr>` elements. This is to set the `data-th` attribute on each `<td>` element and fill it with the text stored in the `headertext` variable.

  This data attribute is important because it's going to be used in the css. The `:before` pseudo-element on the `<td>` tag's content property is going to be filled in with the text in the `data-th` attribute.

  ``` CSS
    table td:before {
      content: attr(data-th);
    }
  ```

  That's about it. From there, the table may be styled however you wish. I tried to style it so it makes sense and is easy to understand. 

  