const form = document.getElementById('converter-form');
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertBtn = document.getElementById('convert-btn');
const resultPara = document.getElementById('result');

convertBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  let result;

  switch (fromUnit) {
    case 'C':
      switch (toUnit) {
        case 'F':
          result = (temperature * 9/5) + 32;
          break;
        case 'K':
          result = temperature + 273.15;
          break;
        default:
          result = temperature;
      }
      break;
    case 'F':
      switch (toUnit) {
        case 'C':
          result = (temperature - 32) * 5/9;
          break;
        case 'K':
          result = (temperature - 32) * 5/9 + 273.15;
          break;
        default:
          result = temperature;
      }
      break;
    case 'K':
      switch (toUnit) {
        case 'C':
          result = temperature - 273.15;
          break;
        case 'F':
          result = (temperature - 273.15) * 9/5 + 32;
          break;
        default:
          result = temperature;
      }
      break;
    default:
      result = 'Invalid input';
  }

  resultPara.textContent = `Value: ${result.toFixed(2)}  ${toUnit} `;
});