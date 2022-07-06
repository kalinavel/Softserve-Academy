export default class View{
    DOM = {
        wrapper : document.querySelector('.wrapper')
    };

    constructor(){
        
    }

    render(d){
        const str = d.map(this.#renderCard).join('');
        this.DOM.wrapper.innerHTML = str;
    }

    #renderCard = ({id, product_name, size, color, price_usd, subtype, manufacturer}) => {            
        return `<div class="card is-flex-grow-1 m-3 is-align-items-center">
            <div class="card-image">
            <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
            </figure>
            </div>
            <div class="card-content">
            <div class="media">
                <div class="media-left">
                <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                </figure>
                </div>
                <div class="media-content">
                <p class="title is-4">${ product_name }</p>
                <p class="subtitle is-6">${ manufacturer }</p>
                </div>
            </div>
        
            <div class="content">
                <p>Type : ${ subtype }</p>
                <p>Size : ${ size }</p>
                <p>Color : ${ color }</p>
                <p>Price(USD) : ${ price_usd }</p>
            </div>
            </div>
        </div>`;
    }
}