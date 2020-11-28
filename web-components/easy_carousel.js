// just pass an object of {title, subtitle, image}
import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class easyCarousel extends LitElement{

    static get properties(){
        return{
            cardDataArr:{type:Array,reflect:true},
            counter:{type:Number},
        }
    }

    constructor(){
        super()
        this.cardDataArr = []
        this.counter = 0
    }

    static get styles(){
        return css`
            #container{
                width:var(--corouselWidth, 500px);
                height:var(--corouselHeight, 320px);
                position:relative;
            }

            .nav{
                height:100%;
                width:15%;
                position: absolute;
                display:flex;
                justify-content:center;
                align-items:center;
                top:0;
                color: lightgrey;
                text-shadow: 0 0 20px black;
            }
            
            .nav:hover{
                cursor:pointer;
                background-color:rgba(255,255,255,0.1)

            }
            .card{
                position:absolute;
                animation-duration: .3s;
                animation-timing-function: ease-in-out;
            }

            @keyframes swipeLeft{
                from{opacity:0.5; left:-80px}
                to{opacity:1;left:0;}
            }
            
            @keyframes swipeRight{
                from{opacity:0.5; right:-80px;}
                to{opacity:1;right:0;}
            }
        `
    }

    render(){
        return html`
            <div id="container">${this.cardDataArr.map((cardData)=> html`
                <div class="card" hidden>
                    <carousel-card 
                        src=${cardData.src}
                        title=${cardData.title}
                        subtitle=${cardData.subtitle}>
                    </carousel-card>
                </div>
            `)}
                <div id="toLeft" class="nav" @click=${this.navigate}>
                    <span>prev</span>
                </div>
                <div id="toRight" style="right:0;" class="nav" @click=${this.navigate}>
                    <span>next</span>                
                </div>
            </div>
        `
    }

    firstUpdated(changeProperties){
        var cards = this.shadowRoot.querySelectorAll(".card")
        cards[this.counter].hidden = false 
        console.log(cards[this.counter].hidden)
        // document.getElementById("ASd").style.animationName
    }

    navigate(e){
        var cards = this.shadowRoot.querySelectorAll(".card")
        var animationName
        cards[this.counter].hidden = true
        var direction = e.composedPath()[0].id
        if (direction=="toRight"){
            this.counter = this.counter + 1
            animationName="swipeRight"
        }
        else{
            this.counter = this.counter -1
            animationName="swipeLeft"
        }
        if (this.counter > this.cardDataArr.length -1){
            this.counter = 0
        }else if(this.counter < 0){
            this.counter = this.cardDataArr.length -1
        }
        console.log(this.cardDataArr.length, this.counter)
        cards[this.counter].style.animationName = animationName
        cards[this.counter].hidden = false
        
    }
}

class carouselCard extends LitElement{
    static get properties(){
        return{
            src:{type:String},
            title:{type:String},
            subtitle:{type:String},
        }
    }

    constructor(){
        super()
    }

    static get styles(){
        return css`
            #container{
                width:var(--corouselWidth, 500px);
                height:var(--corouselHeight, 320px);
                position: relative;
                text-align:center;
                align-items:center;
            }

            #textSection{
                position:absolute;
                margin:0 auto;
                bottom:6%;
                width:100%;
                color:lightgrey;
                text-shadow: 0 0 20px black;
            }
            #title{
                font-weight:bold;
            }

            #subtitle{
                font-size:small;
            }

            p{
                margin:0;
                padding:0;
            }

            img{
                width:var(--corouselWidth, 500px);
                height:var(--corouselHeight, 320px);
                margin:0 auto;
            }`
    }

    render(){
        return html`
        <div id="container">
            <img src=${this.src}>
            <div id="textSection">
                <p id="title">${this.title}</p>
                <p id="subtitle">${this.subtitle}</p>
            </div>
        </div>
        `
    }
}

customElements.define('carousel-card',carouselCard)
customElements.define('easy-carousel',easyCarousel)