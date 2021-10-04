const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]');
const elementEUR = document.querySelector('[data-value="EUR"]');
const elementGBP = document.querySelector('[data-value="GBP"]');

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

getCurrencies();

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result)
    console.log(result.Valute.USD.Value)

    rates.USD = result.Valute.USD
    rates.EUR = result.Valute.EUR
    rates.GBP = result.Valute.GBP

    console.log(rates)

    elementUSD.textContent = rates.USD.Value.toFixed(2)
    elementEUR.textContent = rates.EUR.Value.toFixed(2)
    elementGBP.textContent = rates.GBP.Value.toFixed(2)
}

input.oninput = converValue;
select.oninput = converValue;

function converValue() {
    result.value = (parseFloat(input.value)/ rates[select.value].Value).toFixed(2);
}