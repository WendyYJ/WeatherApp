import React from 'react';

function Navigation(props) {
    return (
        <nav>
        <div className = "navigation">
          <input onKeyDown = {(e) => props.enterCity(e)} className="search-input" />
          <button onClick = {props.searchCity} className="search-btn" tabIndex="0"><i className="fa fa-search"></i></button>
          <button  onClick = {(e) => props.selectUnit(e)} className="temp-switch">
            <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
            <sup>&deg;</sup>C
          </button>
        </div>
      </nav>
    );
}

export default Navigation;