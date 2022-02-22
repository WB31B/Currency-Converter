import api from "../services/apiServices";
import { currencySaleAnswer } from "../variables/variables";

export function inputDataSale(data, index) {
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
    api.currencySale().then(el => {
        createConvertUI(data, index, el);
    });
}

// Create elements on web-application
function createConvertUI(data, index, el) {
    let resCurrency = data / el[index].sale;
    return currencySaleAnswer.textContent = 'Convert Buy: ' + resCurrency.toFixed(9);
}
