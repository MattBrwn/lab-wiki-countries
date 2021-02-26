import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import countries from './countries.json'

import React, { Component } from 'react'
import CountriesList from './components/CountriesList';

 class CountryApp extends Component {
  
  state = {
    countries: countries
  }
  render() {
    const{countries} = this.state
    return (
      <div>
        <Navbar />
        <CountriesList countries = {countries} />
      </div>
    )
  }
}


export default CountryApp;
