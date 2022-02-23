import '../css/style.css';
import enumerationSale from "./views/enumerationSale";
import enumerationBuy from './views/enumerationBuy';
import { currencyConvert } from "./views/input";
import currencyTable from "./views/currencyTable";

document.addEventListener('DOMContentLoaded', e => {
    currencyConvert();
    
    enumerationSale.createElementUISale();
    enumerationBuy.createElementUIBuy();

    currencyTable.createTable();
    
});