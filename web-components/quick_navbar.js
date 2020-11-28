import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class quickNavbar extends LitElement{
    
    static get properties(){
        return{
            
        } 
    }

    constructor(){
        super()
    }

    static get styles(){
        return css`
            nav{
                position:relative;
                background-color: rgb(52, 52, 58);
                color: rgb(220, 220, 220);
                padding: 10px;
                display:flex;
                justify-content:space-between;
                align-items:center;
            }

            div{
                display:flex;
                gap:10px;
                align-items:center;
            }

            #center{
                position:absolute;
                left: 50%;
                transform: translate(-50%,-0%)
            }

            ::slotted(a){
                color:inherit;
                text-decoration: none;
            }

            ::slotted(input[type=text]){
                border:1px lightgrey solid;
                background-color:inherit;
                height:1.5rem;
                color:inherit;
                outline:none;
                border-radius:5px;
                padding:0 7px;
            }

            ::slotted(input[type=text]:focus){
                background-color:inherit
            }

            ::slotted(a:hover){
                color:red;
                cursor:pointer;
            }

            @media screen and (max-width:600px){
                nav{
                    display:block;
                    width:100%;
                    text-align:center;
                }
                div{
                    display:block;
                }
                #center{
                    position:relative;
                }
                ::slotted(a){
                    width:100%;
                    display:block;
                }
                ::slotted(input[type=text]){
                    display:none;
                }
            }
        `
    }

    render(){
        return html`
            <nav part="nav">
                <div id="center">
                    <slot name="center" part="text"></slot>
                </div>
                <div id="left">
                    <slot name="left" part="text"></slot>
                </div>
                <div id="right">
                    <slot name="right" part="text"></slot>
                </div>
            </nav>
        `
    }
}

customElements.define('quick-navbar',quickNavbar)