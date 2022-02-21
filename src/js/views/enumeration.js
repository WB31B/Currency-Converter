import api from "../services/apiServices";

class EnumerationOBJ {
    constructor(api) {
        this.api = api;
        this.select = document.querySelector('#currency');
    }

    createElementUI() {
        const fragment = document.createDocumentFragment();
        api.currency().then(el => {
            let curent = 0;
            el.forEach(currency => {
                const option = document.createElement('option');
                currency.id = curent++;

                option.textContent = currency.ccy;
                fragment.appendChild(option);
            });
            this.select.appendChild(fragment);
        });
    } 
}

const enumeration = new EnumerationOBJ(api);

export default enumeration;