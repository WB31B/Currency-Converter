import api from "../services/apiServices";

class EnumerationOBJ {
    constructor(api) {
        this.api = api;
        this.select = document.querySelector('#currencySale');
    }

    createElementUISale() {
        const fragment = document.createDocumentFragment();
        api.currencySale().then(el => {
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

const enumerationSale = new EnumerationOBJ(api);

export default enumerationSale;