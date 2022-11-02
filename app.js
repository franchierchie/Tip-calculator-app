const bill = document.querySelector('#bill');
const tip = document.querySelectorAll('.tip-option');
const tipButton = document.querySelectorAll('.tip-btn');
const people = document.querySelector('#people');
const tipAmount = document.querySelector('.tip-amount-display');
const totalAmount = document.querySelector('.total-amount-display');
const resetBtn = document.querySelector('.reset-btn');
const errorMsg = document.querySelectorAll('.error-msg');

let tipSelected;



const tipCalculator = () => {
    let total = Math.floor(bill.value);
    let numberPeople = Math.floor(people.value);
    let tipPerson = total * tipSelected;

    // console.log(tipSelected);
    // tipSelected = Math.floor(tipButton[i].innerHTML.replace('%', '')) / 100;
    // tipSelected = Math.floor(tip[5].value) / 100;

    let totalPerson = (total + tipPerson) / numberPeople;

    tipAmount.innerHTML = tipPerson.toFixed(2);
    totalAmount.innerHTML = totalPerson.toFixed(2);
}



window.addEventListener('load', () => {
    tipAmount.innerHTML = '0.00';
    totalAmount.innerHTML = '0.00';
});

bill.addEventListener('input', () => {
    if (bill.value < 0) {
        errorMsg[0].innerHTML = 'Cannot be less than zero';
        bill.classList.add('error');
    } else {
        errorMsg[0].innerHTML = '';
        bill.classList.remove('error');
    }
    tipCalculator();
});

tip[5].addEventListener('input', () => {
    if (tip[5].value < 0) {
        errorMsg[1].innerHTML = 'Cannot be less than zero';
        tip[5].classList.add('error');
    } else {
        errorMsg[1].innerHTML = '';
        tip[5].classList.remove('error');
    }

    for (let i = 0; i < tipButton.length; i++) {
        tipButton[i].classList.remove('active');
    }
    tipSelected = Math.floor(tip[5].value) / 100;
    tipCalculator();
});

for (let i = 0; i < tipButton.length; i++) {
    tipButton[i].addEventListener('click', () => {
        tipButton.forEach(tipButton => {
            tipButton.classList.remove('active');
        })
        tip[5].value = '';
        tipSelected = Math.floor(tipButton[i].innerHTML.replace('%', '')) / 100;
        tipButton[i].classList.add('active');
        tipCalculator();
    });
}

people.addEventListener('input', () => {
    if (people.value < 0) {
        errorMsg[2].innerHTML = 'Cannot be less than zero';
        people.classList.add('error');
    } else {
        errorMsg[2].innerHTML = '';
        people.classList.remove('error');
    }
    tipCalculator();
});

resetBtn.addEventListener('click', () => {
    tipAmount.innerHTML = '0.00';
    totalAmount.innerHTML = '0.00';
    bill.value = '';
    tip[5].value = '';
    people.value = '';
    tip.forEach(tipElement => {
        tipElement.classList.remove('active');
    })
});