import React from 'react';
import './App.css';
import Header from './component/Header';
import Navitation from './component/Navigation';
import Main from './component/Main';
import Footer from './component/Footer';
import axios from 'axios';
import { format } from 'date-fns';
//import CircularProgress from '@material-ui/core/CircularProgress';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       current:{},
       forecast:[],
       showLimit:5,
       unit:'C',
       city:'Brisbane'
    };
  }
 componentDidMount() {
    axios.get(`https://jr-weather-api.herokuapp.com/api/weather?cc=Australia&city=${this.state.city}`)
      .then(response => {
        this.showTemperature(response);
      })
      .catch(error => {
        alert("city name is not in Australia or invalid")
      });
  }

 showTemperature = (response) => {
    const current = response.data.data.current;
    const forecastBefore = response.data.data.forecast.slice(0,this.state.showLimit);
    const forecast = forecastBefore.map(forecast => {
    const date = new Date(forecast.time * 1000);
    const day = format(date,'EEE');
    const newTime = format(date,'HH:MM');
    return {
                ...forecast,
                current,
                day,
                newTime
            }
    })
    //this.setState({forecast,current});
    this.setState (state => ({
      forecast,
      current
    }));
 }
 selectShow = (e,value) => {
    e.target.classList.add('switch-active');
    if(this.state.showLimit !== 10 && value === 10) {
      const showLimit = 10;
      this.setState({showLimit});
      document.querySelector('.forecast__switch_0').classList.remove('switch-active');
      this.componentDidMount();

    } else if(this.state.showLimit !== 5 && value === 5) {
      const showLimit = 5;
      this.setState({showLimit});
      document.querySelector('.forecast__switch_1').classList.remove('switch-active');
      this.componentDidMount();
    }
 }
 selectUnit = (e) => {
   let unit;
   this.state.unit === 'C'? unit = 'F' : unit = 'C';
   this.setState ({unit});
   document.querySelector('.temp-switch').innerHTML = 
        "<i class='fa fa-thermometer-empty' aria-hidden='true'></i><sup>&deg;</sup>" + unit;
 }

 searchCity = () => {
    if (this.state.city === document.querySelector('.search-input').value) return;
    this.getInputCity();
 }

 enterCity = (e) => {
    if(e.key === "Enter") {
      this.getInputCity();
    }
 }

 getInputCity() {
  const city = document.querySelector('.search-input').value;
      this.setState({city:city}, ()=>{
        this.componentDidMount();
    })
 }
  render() {
    return (
      <div className="weather-channel__container">
        <Header />
        <Navitation enterCity = {this.enterCity} searchCity = {this.searchCity} selectUnit = {this.selectUnit} />
        <Main city = {this.state.city} unit = {this.state.unit} selectShow = {this.selectShow} forecast = {this.state.forecast} current = {this.state.current}/>
        <Footer />
      </div>
    )
  }
  
}

export default App;
