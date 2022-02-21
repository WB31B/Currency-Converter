import { select, btn, input } from "../variables/variables";
import api from "../services/apiServices";

export function btnClick() {
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

export function selectIndex() {
    select.addEventListener('change', e => {
        let index = select.selectedIndex;
        
        api.currency().then(el => {
            
        })
    }); 
}

export function currencyConvert() {
    btnClick();
    selectIndex();
}