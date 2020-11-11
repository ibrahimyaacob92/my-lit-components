// Square iconed button with active state - it also launch an event on click
// CSS Variables = [themeColor]
import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class iconButton extends LitElement{
    
    static get properties(){
        return{
            label:{type:String},
            svgLink:{type:String},
            appName:{type:String, reflect:true},
            toolTipText:{type:String},
            active:{type:Boolean, reflect:true},
            eventName:{type:String}
        }
    }
    
    constructor(){
        super()
        this.eventName = "launchApp"
        this.active = false
        window.addEventListener(this.eventName, this.unFocus.bind(this))
    }
    
    static get styles(){
        return css`
            div{
                width:46px;
                height:50px;
                background-color:var(--themeColor, grey);
                border-left: var(--themeColor, grey) solid 3px;
                text-align:center;
                padding: 2px;
            
            }
            div:hover{
                cursor:pointer;
                background-color:white;
            }

            span{
                font-size:10px;   
            }
            
            div[active=true]{
                background:white;
                outline: none;
                border-left: lightgreen solid 3px;
            }
            
            img{
                vertical-align: middle;
            }
        `
    }

    render(){
        return html`
            <div active=${this.active} @click=${this.launchApp}>
                <img part=icon width="35px" height="35px" src=${this.svgLink} alt="">
                <span part="label">${this.label}</span>
            </div>
        `
    }

    launchApp(){
        console.log(this.eventName)
        this.dispatchEvent(new CustomEvent(this.eventName ,{
            bubbles:true,
            composed:true,
            detail:{
                content:this.appName
            }
        }))
        console.log(this.appName + " event dispatched")
        this.active = true;
    }

    unFocus(e){
        if (e.detail.content != this.appName){
            this.active = false
        }
    }
}

customElements.define('icon-btn',iconButton)
