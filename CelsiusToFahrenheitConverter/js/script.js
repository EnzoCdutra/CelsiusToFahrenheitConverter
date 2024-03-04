function convertToCelsius() {
    let celsius = document.getElementById('celsius').value;
    let fahrenheit = Math.floor(celsius * (9/5) + 32);
    document.getElementById('result').innerText = `A temperatura em Fahrenheit é: ${fahrenheit} °F`;
}