

let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const valueEl = document.querySelector('#value');


decrementBtn.addEventListener('click', decrementEventListener);

incrementBtn.addEventListener('click', incrementEventListener);

function decrementEventListener()  {
    counterValue -= 1;
    valueEl.innerHTML = `${counterValue}`;
}

function incrementEventListener() {
    counterValue += 1;
    valueEl.innerHTML = `${counterValue}`;

}

