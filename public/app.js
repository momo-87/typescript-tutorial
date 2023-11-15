import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('momo', 'work on the mario website', 500);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
