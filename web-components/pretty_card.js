import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class prettyCard extends LitElement{
    
    static get properties(){
        return{
            icon:{type:String},
            colorStat:{type:String},
            smallTitle:{type:String},
            title:{type:String},
            subtitle:{type:String},
            hiddenText:{type:String, reflect:true},
            tags:{type:Array},
            colorKey:{type:Object}
        }
    }

    constructor(){
        super()
        // console.log(this.title)
        this.colorStat = "purple"
        this.tags = []
        this.colorKey = {
            "red":"crimson",
            "green":"limegreen",
            "yellow":"gold",
            "purple":"purple",
            "pink":"pink",
            "blue":"royalblue"
        }
    }
    static get styles(){
        return css`

            #container{
                border: 0.5px lightgrey solid;
                padding:10px 10px 8px 10px;
                margin:10px 0px;
                border-left: 6px grey solid;
                display:flex;
                flex-direction: row;
                justify-content: space-between;
            }

            #container:hover{
                background-color:white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
            }

            #text-section{
                width:90%;
            }

            #button-section{
                width: auto;
            
            }
            
            #small-title{
                color:grey;
                font-size:12px;
            }
            #title{
                color:black;
            }

            #subtitle{
                color:black;
                font-size:smaller;
            }

            #hidden{
                color:green;
                font-size:smaller;
            }

            #tags{
                padding:5px 0;
                display:flex;
                font-size:smaller;
            }

            #tags span{
                border:grey 0.5px solid;
                padding: 3px 5px;
                margin-right:3px;
                border-radius:3px;
            }

            #tags span:hover{
                background-color:lightblue;
            }

            .clickable{
                cursor:pointer;
            }

        `
    }

    render(){
        return html`
            <div id="container" style="border-left-color:${this.colorKey[this.colorStat]}">
                <div id="text-section">
                    <div id="small-title">${this.smallTitle}</div>
                    <div id="title">${this.title}</div>
                    <div id="subtitle">${this.subtitle}</div>
                    <div id="hidden" hidden>${this.hiddenText}</div>
                    <div id="tags">${this.tags.map((tag)=> html`<span>${tag}</span>`)}</div>
                </div>
                <div id="button-section">
                    <div class="clickable" @click=${this.moreDetails}>...</div>
                </div>
            </div>
        `
    }

    firstUpdated(changedProperties) {
        // this will run after first time render
        console.log(this.tags)
    }

    moreDetails(){
        console.log(this)
        var hiddenDiv = this.shadowRoot.getElementById("hidden")
        if (hiddenDiv.hidden){
            hiddenDiv.hidden = false
        }else{
            hiddenDiv.hidden = true
        }
    }


}

customElements.define('pretty-card',prettyCard)