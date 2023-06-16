const selectors = {
    span: document.querySelector('#value'),
    btn_minus: document.querySelector('[data-action="decrement"]'),
    btn_plus: document.querySelector('[data-action="increment"]'),
}
selectors.btn_plus.addEventListener('click', handlerStepPlus);
selectors.btn_minus.addEventListener('click', handlerStepMinus);
let value = 0;
function handlerStepPlus() {
    value += 1;
    selectors.span.textContent = value;
}
function handlerStepMinus() {
    value -=1
     selectors.span.textContent = value;
}