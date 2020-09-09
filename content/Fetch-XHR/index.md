---
title:  "Using Fetch vs XHR"
cover: "https://unsplash.it/1152/300/?random?TheButterflyoftheEdge"
category: javascript
date: 04/10/2019
published: true
tags:
    - xhr
    - fetch api
    - json
    - front-end development
    - web development
---

I have no idea how to work databases. I'm highly intimidated by them. I have been using JSON for data in personal projects but I certainly wouldn't say they are databases. However, JSON allows me to do some more dynamic stuff and create personal projects I find to be more interesting and useful. 

Though without much server side or database knowledge, I find some of my personal projects limiting. However, I don't want to be full stack (yet) and want to focus on a limited amount of things specific to HTML, CSS, and JavaScript. On the flipside, I don't just want to make static websites that don't do anything other than present info like a brochure. Seems boring to me.

It seems a bit ridiculous but I've been working on a project to create a searchable inventory of 45s (7 inch vinyl singles played on record players) for over two years. Maybe it's three years at this point. I don't know. My biggest hangup has been documenting the singles into the JSON file. This is literally typing in each record and the info associated with it (artist, song on the a side, song on the b side) and it's boring boring boring. The other part is pulling in and parsing the JSON. That hasn't taken 2-3 years to figure out (thank goodness). Then there is the styling but that's not an issue for me. It's taking so long because of laziness.

Originally for this project I was using XHR (XMLHttpRequest) to pull in and parse the data from my JSON file. Recently, I decided to refactor the code to use the Fetch API to handle that functionality. Both work just fine from what I can tell.

Here is the XHR code:

```javascript
const xhttp = new XMLHttpRequest();
xhttp.open("GET", "records.json", true);
xhttp.onload = function displayRecords() {
    if(this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(xhttp.responseText);
        let records = response.records;
        records.sort(function(a, b){
            let x = a.artist;
            let y = b.artist;
                        if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        });
        let output = '';
        for(i = 0; i < records.length; i++) {
            output += 
            '<div class="artist-song close">' +
                '<h3 class="title">' + records[i].artist + '</h3>' +
                '<p>' + 'A Side: ' + records[i].aside + '<br>' + 'B Side: ' + records[i].bside + '</p>' +
                '<button class="btn-more"><span class="fas fa-angle-down"></span></button>' +
                '<div class="info-sec">' +
                '<h4>Additional Information</h4>' +
                '</div>' +
            '</div>';
        }
        document.getElementById('records').innerHTML = output;
    } 
};
xhttp.send();
```

Here is the fetch code:

```javascript
fetch('records.json')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    data.records.sort(function(a, b){
        let x = a.artist;
        let y = b.artist;
                    if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    });
    let output = '';
    for(i = 0; i < data.records.length; i++) {
        output += 
        '<div class="artist-song close">' +
            '<h3 class="title">' + data.records[i].artist + '</h3>' +
            '<p>' + 'A Side: ' + data.records[i].aside + '<br>' + 'B Side: ' + data.records[i].bside + '</p>' +
            '<button class="btn-more"><span class="fas fa-angle-down"></span></button>' +
            '<div class="info-sec">' +
            '<h4>Additional Information</h4>' +
            '</div>' +
        '</div>';
    }
    document.getElementById('records').innerHTML = output;
})
.catch(function(error) {
    error.innerText = "Error!"
})
```

To me the fetch code looks more simple and easier to read. It probably will work fine for my little personal project.

There may be some caveats though. I've read that XHR is better at error handling. Fetch gets more complicated if you try to deal with errors. It seems that Fetch doesn't care whether your request succeeded. It only care about receiving a response from the server. Also, if you have to support Internet Explorer then you can't use Fetch. Personally, I don't support IE but at my job we do so I can't use it there. 

Here's a better explanation of this issue. If you see the Fetch code after all the error handling code added, it doesn't seem more simple than XHR.

[Using Fetch (CSS Tricks)](https://css-tricks.com/using-fetch/#article-header-id-6)
