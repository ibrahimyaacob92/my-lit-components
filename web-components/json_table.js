

import {LitElement, html, css} from 'https://unpkg.com/lit-element@2.4.0/lit-element.js?module'

class table extends LitElement{
    static get properties(){
        return{
            dataArray:{type:Array},
            higlightColor:{type:String},
            clickToCopy:{type:Boolean},
            sortable:{type:Boolean}
        }
    }

    constructor(){
        super()
        this.dataArray = [{"one":11,"two":22},{"one":111,"two":222}]
    }

    static get styles(){
        return css`
            .row{
                float:left
            }
            .cell{
                padding:5px;
                border: grey solid 1px;
            }
            .cell:hover{
                background-color:yellow;
            }
        `
    }

    render(){
        var table = html`
        <div class="table">${this.dataArray.map((objects) => html`
            <div class="row">${Object.entries(objects).map((item) => html`
                <div class="cell">${item[1]}</div>
                `)}
            </div>`)}
        </div>`

        // console.log(table)

        return table
    }
}

customElements.define('json-table',table)