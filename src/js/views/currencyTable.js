import api from "../services/apiServices";

class CurrencyTable {
    constructor(api) {
        this.api = api;
        this.list = document.querySelector('.container__list');
    }

    createTable() {
        const fragment = document.createDocumentFragment();

        api.currency().then(el => {
            el.forEach(currency => {
                const li = document.createElement('li');

                li.textContent = `
                    Currency: ${currency.ccy} - 
                    Sale: ${currency.sale} -
                    Buy: ${currency.buy}`;
                li.classList.add('container__item');

                fragment.appendChild(li);
            });
            this.list.appendChild(fragment);
        });
    }
}

const currencyTable = new CurrencyTable(api);

export default currencyTable;