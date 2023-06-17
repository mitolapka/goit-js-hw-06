const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
text.style.fontSize =input.value + 'px';
input.addEventListener('input', () => { 
    const size = input.value + 'px';
    text.style.fontSize = size;
})