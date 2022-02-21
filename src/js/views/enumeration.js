import api from "../services/apiServices";

class EnumerationOBJ {
    constructor(api) {
        this.api = api;
        this.select = document.querySelector('#currency');
    }

    createElementUI() {
        const fragment = document.createDocumentFragment();
        api.currency().then(el => {
            el.forEach(currency => {
                const option = document.createElement('option');

                option.textContent = currency.ccy;
                fragment.appendChild(option);
            });
            this.select.appendChild(fragment);
        });
    } 
}

const enumeration = new EnumerationOBJ(api);

export default enumeration;