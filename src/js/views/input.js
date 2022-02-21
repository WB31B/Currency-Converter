import { select, btn, input } from "../variables/variables";
import api from "../services/apiServices";

function btnClick() {
    btn.addEventListener('click', e => {
        let inputData = input.value;
    
        if (inputData == '') {
            return;
        } else if (isNaN(inputData)) {
            alert('Пожалуйста, введите число!');
            return;
        }
        console.log(inputData);
    });
}

function selectIndex() {
    select.addEventListener('change', e => {
        let index = select.selectedIndex;

        // Option has index and elements object have index
        api.currency().then(el => {
            const saleIndexOfOblect = el[index].sale; // Sale 
            console.log(saleIndexOfOblect);
        })
    }); 
}

export function currencyConvert() {
    btnClick();
    selectIndex()
}