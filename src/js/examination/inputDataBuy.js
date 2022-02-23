import api from "../services/apiServices";
import { currencyBuyAnswer } from "../variables/variables";

export function inputDataBuy(data, index) {
    if (data === '' || data === ' ') {
        alert('Введите число!')
        return;
    } else if (isNaN(data)) {
        alert('Пожалуйста, введите число!');
        return;
    } else {
        resOption(data, index);
    }
}

function resOption(data, index) {
    api.currencyBuy().then(el => {
        createConvertUI(data, index, el);
    });
}

// Create elements on web-application
function createConvertUI(data, index, el) {
    let resCurrency = data / el[index].buy;
    return currencyBuyAnswer.textContent = 'Sale: ' + resCurrency.toFixed(5);
}
