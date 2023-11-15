// interface
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'momo',
    age: 30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        return amount;
    }
}

const greetPerson = (person: IsPerson): void => {
    console.log('hello ', person.name);
}

greetPerson(me);

import { Invoice } from './classes/Invoice.js';

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('momo', 'work on the mario website', 500);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);



const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})