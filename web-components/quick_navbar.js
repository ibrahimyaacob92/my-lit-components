import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class quickNavbar extends LitElement{
    // limitation on the styling the select (dropdown) elements
    static get properties(){
        return{
         
        } 
    }

    constructor(){
        super()
        console.log(this.addLeftElement)
    }

    static get styles(){
        return css`
            nav{
                position:relative;
                background-color: rgb(52, 52, 58);
                color: rgb(220, 220, 220);
                padding: 10px 25px;
                display:flex;
                justify-content:space-between;
                align-items:center;
                font-size:0.9rem
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
                display:block !important;
            }

            ::slotted(a:hover){
                color:white;
                cursor:pointer;
            }

            ::slotted(input[type=text]){
                border:1px grey solid;
                background-color:inherit;
                height:1.5rem;
                color:inherit;
                outline:none;
                border-radius:5px;
                padding:0 7px;
                display:block !important;
            }

            ::slotted(input[type=text]:focus){
                background-color:inherit;
                border:1px lightgrey solid;
            }
            
            ::slotted(select){
                height:1.5rem;
                background-color:inherit;
                color:inherit;
                border-radius:5px;
                padding:0 7px;
                outline:none;
                display:block !important;
            }
            
            ::slotted(select:focus){
                border:1px lightgrey solid;
            }

            ::slotted(img){
                display:block !important;
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
                    padding:3px;
                    display:block;
                }
                ::slotted(img){
                    width:100%;
                    padding:3px;
                    display:block;
                }
                ::slotted(select){
                    display:none !important;
                }
                ::slotted(input[type=text]){
                    display:none !important;
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

    addATag(href, innerHTML, position, id, clickEvent){
        let child = document.createElement('a')
        child.href = href
        child.slot = position
        child.id = id
        child.innerHTML = innerHTML
        if (clickEvent){
            child.addEventListener('click', clickEvent)
        }
        this.appendChild(child)
    }

    addSearchBar(placeholder, position, id, inputEvent){
        let child = document.createElement('input')
        child.type = "text"
        child.placeholder = placeholder
        child.slot = position
        child.id = id
        if (inputEvent){
            child.addEventListener('input', inputEvent)
        }
        this.appendChild(child)
    }

    addImg(source, height, width, position, id, clickEvent){
        let child = document.createElement('img')
        child.source = source
        child.height = height
        child.width = width
        child.slot = position
        child.id = id
        if (clickEvent){
            child.addEventListener('click', clickEvent)
        }
        this.appendChild(child)
    }
    
    addDropDown(optionList, position, id , changeEvent){
        let child = document.createElement('select')
        for(let option of optionList){
            child.innerHTML += `<option>${option}</option>`
        }
        child.slot = position
        child.id = id
        if(changeEvent){
            child.addEventListener('change',changeEvent)
        }
        this.appendChild(child)
    }

}

customElements.define('quick-navbar',quickNavbar)