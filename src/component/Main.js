import React from 'react';
import Condition from '../component/Weather_condition';
import Forecast from '../component/Weather_forecast';

function Main(props) {
    return (
        <main>
            <Condition city = {props.city} unit = {props.unit} current = {props.current}/>
            <Forecast unit = {props.unit} selectShow = {props.selectShow} forecast = {props.forecast} />
        </main>
    );
}

export default Main;