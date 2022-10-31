'use strict';


const currencyOneElm = document.querySelector('#currencyOne');
const currencyTwoElm = document.querySelector('#currencyTwo');


const amoutOneElm = document.querySelector('#amoutOne');
const amoutTwoElm = document.querySelector('#amoutTwo');

const currencyOneVsTwoElm = document.querySelector('#currencyOneVsTwo');

const curOneElm = document.querySelector('#curOne')
const curTwoElm = document.querySelector('#curTwo')

function calculate()
{
	const currency_one = currencyOneElm.value;
	const currency_two = currencyTwoElm.value;

	let amout1 = amoutOneElm.value;
	let amount2 = amoutTwoElm.value;


	fetch(`https://v6.exchangerate-api.com/v6/c67b54bd8876d8f244a15e1e/latest/${currency_one}`)
	.then(response => response.json())
	.then(data => 
	{
		// console.log(data)
		const rate = data.conversion_rates[currency_two];
		// console.log(rate)
		curOneElm.innerText = `${amout1} ${currency_one} equal`;
		curTwoElm.innerText = `  ${rate} ${currency_two}`
		// currencyOneVsTwoElm.innerText = `1 ${currency_one} equal ${rate} ${currency_two}`;
		
		amount2 = (amout1 * rate).toFixed(2)
		// amoutTwoElm.value = (amoutOneElm.value * rate).toFixed(2)
		amoutTwoElm.value = amount2
	})
}

calculate()

currencyOneElm.addEventListener('change',calculate)
currencyTwoElm.addEventListener('change',calculate)
amoutOneElm.addEventListener('input',calculate)
amoutTwoElm.addEventListener('input',calculate)



