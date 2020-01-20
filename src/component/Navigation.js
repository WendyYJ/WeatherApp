import React from 'react';

function Navigation(props) {
    const checkEnter = (e) => {
      if(e.key === "Enter") {
        props.searchCity();
      }
    }
    return (
        <nav>
        <div className = "navigation">
          <input onChange = {(e) => props.showSearchValue(e)} onKeyDown = {(e) => checkEnter(e)} className="search-input" value= {props.searchValue} />
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