import api from "../services/apiServices";
class CurrencyTable {
    constructor(api) {
        this.api = api;
        this.list = document.querySelector('.container__table');
    }

    createTable() {
        const fragment = document.createDocumentFragment();

        api.currency().then(el => {
            el.forEach(currency => {
                const tr = document.createElement('tr');
                const tdCcy = document.createElement('td');
                const tdSale = document.createElement('td');
                const tdBuy = document.createElement('td');

                tdCcy.textContent = currency.ccy;
                tdSale.textContent += currency.sale;
                tdBuy.textContent += currency.buy;

                tr.appendChild(tdCcy);
                tr.appendChild(tdSale);
                tr.appendChild(tdBuy);

                fragment.appendChild(tr);
            });
            this.list.appendChild(fragment);
        });
    }
}

const currencyTable = new CurrencyTable(api);

export default currencyTable;