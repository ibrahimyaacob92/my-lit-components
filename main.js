import "./web-components/icon_button.js"
import "./web-components/json_table.js"
import "./web-components/pretty_card.js"



// Demo 2
var x = document.createElement('pretty-card')
x.title = "hello earth"
x.colorStat = "pink"
x.tags = ["tag1","tag2","tag4","tag33333"]

document.getElementById('demo2').appendChild(x)

document.getElementById('test-pretty').att