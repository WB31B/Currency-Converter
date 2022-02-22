import { select, btn, input } from "../variables/variables";
import api from "../services/apiServices";

function btnClick() {
    let saleIndexOfOblect;
    let result;

    btn.addEventListener('click', e => {
        let index = select.selectedIndex;
        let inputData = input.value;
    
        if (inputData == '') {
            return;
        } else if (isNaN(inputData)) {
            alert('Пожалуйста, введите число!');
            return;
        }
        console.log(index)
    
        api.currency().then(el => {
            saleIndexOfOblect = el[index].sale; // Sale 
        });

        result = saleIndexOfOblect * inputData;
        result = result.toFixed(2);

        createConvertUI(result);

    }); 
}

function createConvertUI(res) {
    const currency = document.querySelector('.currency');
    return currency.textContent = 'Convert: ' + res;
}

export function currencyConvert() {
    btnClick();
}