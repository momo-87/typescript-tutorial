import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('momo', 'plumbing work', 250);
// docTwo = new Payment('Mael', 'web work', 500);
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('momo', 'work on the mario website', 500);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
