const temInput = document.getElementById("temparature");
const fromunit = document.getElementById("fromUnit");
const button = document.getElementById("Convert");
const display = document.getElementById("display");


button.addEventListener('click',()=>{

    const temp = parseFloat(temInput.value);
    const selectfrom = fromunit.value;
     
    let ctem;

    if(selectfrom === 'celsius'){
        ctem = {
            celsius: temp,
            fahrenheit: (temp * 9/5) + 32,
            kelvin: temp + 273.15
        };
    }
    else if(selectfrom === 'Fahrenheit'){
        convertedTemperature = {
            celsius: (temp - 32) * 5/9,
            fahrenheit: temp,
            kelvin: (temp - 32) * 5/9 + 273.15
        };
    }
    else if(selectfrom === "Kelvin"){
        convertedTemperature = {
            celsius: temp - 273.15,
            fahrenheit: (temp - 273.15) * 9/5 + 32,
            kelvin: temp
        };
    }
    display.innerHTML = `<h2>Result</h2><br> Celsius: ${convertedTemperature.celsius.toFixed(2)}°C<br>
    Fahrenheit: ${convertedTemperature.fahrenheit.toFixed(2)}°F<br>
    Kelvin: ${convertedTemperature.kelvin.toFixed(2)}K`;
})