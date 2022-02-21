import enumeration from "./views/enumeration";
import { currencyConvert } from "./views/input";

document.addEventListener('DOMContentLoaded', e => {
    currencyConvert();

    enumeration.createElementUI();
});