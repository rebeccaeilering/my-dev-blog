---
title:  "Making Tables Responsive" 
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 06/29/2020
published: false
tags:
    - html
    - javascript
    - responsive design
    - tables
    - css
---

Tables have always been a pain point when it comes to responsive design. They will display nicely on desktop but they become a problem once screens get more narrow. Why are tables a problem? Tables are made up of rows and columns and for the table to stay legible, it needs to keep it's table layout. The problem is the more columns a table has the more room it needs when it comes to width. At some point it runs out of width because a browser window only is so wide. When it comes to desktop there's more width to work with but for mobile there isn't so much. Mobile views tend to be at more of a portrait orientation with a very narrow width. This makes it very difficult to display tables.

The solution is to change the layout of the table but still make it easy to understand. How to do this? Typically layout issues can be handled with CSS and media queries and this is no different but we also need JavaScript to deal with some of the text content.

First the mobile design is to take more of a column layout. The table rows will be stacked into a column. Then inside the row will be each cell that will also be stacked into a column. So then the question is what do we do with the labels? We need to know what the content in the cell is referring to. This is where the JavaScript comes in.

On mobile devices we want to take the table headings and place it next to the coresponding content in each cell.

(get a screenshot of a mobile table layout and a link to my style guide)

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

  