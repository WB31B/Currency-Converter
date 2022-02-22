import { currencyBuy, currencySale, btnSale, btnBuy, inputSale, inputBuy } from "../variables/variables";
import { inputDataBuy } from "../examination/inputDataBuy";
import { inputDataSale } from "../examination/inputDataSale";

function btnClick() {
    btnSale.addEventListener('click', e => {
        console.log('click');
        let index = currencySale.selectedIndex; // index option
        let text = inputSale.value; // value input

        inputDataSale(text, index); // Enumeration (if text has number -> true)
    }); 

    btnBuy.addEventListener('click', e => {
        console.log('click');
        let index = currencyBuy.selectedIndex; // index option
        let text = inputBuy.value; // value input

        inputDataBuy(text, index); // Enumeration (if text has number -> true)
    }); 
}

export function currencyConvert() {
    btnClick();
}