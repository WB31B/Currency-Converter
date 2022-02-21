const input = document.querySelector('#input-currency');
const btn = document.querySelector('.btn');

let click = btn.addEventListener('click', e => {
    let inputData = input.value;

    if (inputData == '') {
        return;
    }
    console.log(inputData);
});

export default click;