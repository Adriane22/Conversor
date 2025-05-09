const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value); // Converte para número
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const dolarToday = 6.2;
    const euroToday = 8.4;
    const gbpToday = 7.2; 
    const bitcoinToday = 99.9; // Exemplo de taxa para Bitcoin

    if (isNaN(inputCurrencyValue) || inputCurrencyValue <= 0) {
        currencyValueToConvert.innerHTML = "R$ 0,00";
        return;
    }
    

    // Atualiza o valor a ser convertido
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue);

    // Converte e exibe o valor convertido
    let convertedValue;
    switch (currencySelect.value) {
        case "dolar":
            convertedValue = inputCurrencyValue / dolarToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(convertedValue);
            break;
        case "euro":
            convertedValue = inputCurrencyValue / euroToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
            }).format(convertedValue);
            break;
        case "libra":
            convertedValue = inputCurrencyValue / gbpToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP",
            }).format(convertedValue);
            break;
        case "bitcoin":
            convertedValue = inputCurrencyValue / bitcoinToday;
            currencyValueConverted.innerHTML = "₿ " + (convertedValue).toFixed(6);
            break;
        default:
            currencyValueConverted.innerHTML = "Moeda inválida.";
            break;
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".currency-image");

    switch (currencySelect.value) {
        case "dolar":
            currencyName.innerHTML = "Dólar Americano";
            currencyImage.src = "./assets/Estados Unidos.png";
            break;
        case "euro":
            currencyName.innerHTML = "Euro";
            currencyImage.src = "./assets/Euro.png";
            break;
        case "libra":
            currencyName.innerHTML = "Libra Esterlina";
            currencyImage.src = "./assets/Libra.png";
            break;
        case "bitcoin":
            currencyName.innerHTML = "Bitcoin";
            currencyImage.src = "./assets/Bitcoin.png"; 
            break;
        default:
            currencyName.innerHTML = "Moeda Inválida";
            break;
    }

    // Converte o valor assim que a moeda muda
    convertValues();
}

// Adiciona os ouvintes de eventos
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);



