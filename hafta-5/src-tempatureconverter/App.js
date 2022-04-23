import React, { useState } from 'react';

const App = () => {
	const [temperatureValue, setTemperatureValue] = useState(10);
	const [temperatureColor, setTemperatureColor] = useState('cold');



	const increaseTemperature = () => {
		const newTemperature = temperatureValue + 1;
		setTemperatureValue(newTemperature);
		if (newTemperature >= 15 && newTemperature <= 17) {
			setTemperatureColor('warm');
		}
    else if (newTemperature >= 17) {
      setTemperatureColor('hot');
    }
    else if (newTemperature <= 15) {
      setTemperatureColor('cold');
    } 
  
	};


	const decreaseTemperature = () => {
		const newTemperature = temperatureValue - 1;
		setTemperatureValue(newTemperature);
    if (newTemperature <= 15) {
      setTemperatureColor('cold');
    } 
    else if (newTemperature >= 15 && newTemperature <= 17) {
			setTemperatureColor('warm');
		}
    else if (newTemperature >= 17) {
      setTemperatureColor('hot');
    }
	};

  
  const fTemperature = ((temperatureValue * 9 / 5) + 32);
//   if (fTemperature < 50) {
//     setTemperatureColor('cold');
//   }
//   else {  setTemperatureColor('hot');
// }
  const kTemperature = (temperatureValue + 273);
//   if (kTemperature < 288) {
//     setTemperatureColor('cold');
//   } 
//   else {  setTemperatureColor('hot');
// }


	return (
    <div className="App" >
      <h2 color="#fff">Temperature Converter</h2>
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
        <div className={`temperature-fah ${temperatureColor}`}>{fTemperature}°F</div>
        <div className={`temperature-kelvin ${temperatureColor}`}>{kTemperature}°K</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseTemperature}>+</button>
				<button onClick={decreaseTemperature}>-</button>
			</div>
    </div>
    </div>
	);
};

export default App;