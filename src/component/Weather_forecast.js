import React from 'react';
import ForecastRow from '../component/Forecast_row';


function Weather_forecast(props){
  
    return (
      <section className="weather-forecast">
        <div className="forecast__switch">
          <button onClick = {(e) => props.selectShow(e,5)} className="forecast__switch_0 switch-active">5 items</button>
          <button onClick = {(e) => props.selectShow(e,10)} className="forecast__switch_1">10 items</button>
        </div> 
         {
           props.forecast.map(forecast => {
             return(
              <ForecastRow 
                key = {forecast.day + forecast.newTime} 
                day = {forecast.day} 
                time = {forecast.newTime}  
                high = {props.unit === 'C' ? forecast.maxCelsius : forecast.maxFahrenheit} 
                unit = {forecast.unit} 
                low = {props.unit === 'C' ? forecast.minCelsius : forecast.minFahrenheit} 
              />
             )
           })
         }
      </section>
      );
}

export default Weather_forecast;