import "./web-components/icon_button.js"
import "./web-components/json_table.js"
import "./web-components/pretty_card.js"
import "./web-components/easy_carousel.js"


// Demo 2
var x = document.createElement('pretty-card')
x.title = "hello earth"
x.colorStat = "pink"
x.tags = ["tag1","tag2","tag4","tag33333"]

document.getElementById('demo2').appendChild(x)

// demo Carousel
var imageObject = [
    {
        title:"Card A",
        subtitle:"Card A is the most elegant Card",
        src:"./img/carousel1.jpg"
    },
    {
        title:"Card B",
        subtitle:"Card B is the most funniest Card",
        src:"./img/carousel2.jpg"
    },
    {
        title:"Card C",
        subtitle:"Card C is the most classy Card",
        src:"./img/carousel3.jpg"
    },
]
var carousel = document.createElement('easy-carousel')
carousel.cardDataArr = imageObject
document.getElementById('carousel').appendChild(carousel)
