import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

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


const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});