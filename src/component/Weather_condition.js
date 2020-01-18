import React from 'react';
import umberella from '../icon/icon-umberella.png';
import wind from '../icon/icon-wind.png';
import compass from '../icon/icon-compass.png';

function Weather_condition(props) {
    return(
        <section className ="weather-condition">
<div className ="weather-condition__location">{props.city}</div>
          <div className = "clear">Clear</div>
          <div className ="weather-condition__temp">{props.unit === 'C'? (Math.round(props.current.minCelsius + props.current.maxCelsius)/2) : 
            (Math.round(props.current.minFahrenheit + props.current.maxFahrenheit)/2)} {props.unit}</div>
          <div className ="weather-condition__desc">
            <div>
              <img src= {umberella} alt = "umbrella"/>
              <span className ="citem">{props.current.humidity}%</span>
            </div>
            <div>
              <img src= {wind} alt = "wind"/> <span className ="citem">{props.current.windSpeed} km/h</span>
            </div>
            <div>
              <img src= {compass} alt = "compass"/> <span className ="citem">{props.current.windDirection}</span>
            </div>
          </div>
        </section>

    );
}

export default Weather_condition;