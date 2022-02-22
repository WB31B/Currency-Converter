import '../css/style.css';
import enumerationSale from "./views/enumerationSale";
import enumerationBuy from './views/enumerationBuy';
import { currencyConvert } from "./views/input";

document.addEventListener('DOMContentLoaded', e => {
    currencyConvert();
    
    enumerationSale.createElementUISale();
    enumerationBuy.createElementUIBuy();
});