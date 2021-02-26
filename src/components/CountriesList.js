import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'
import countriesJson from './countries.json'
import CountryDetails from './CountryDetails'

class CountriesList extends Component {
    state = {
        countries: countriesJson
    }
    render() {
        return (
            <div className="columns">
                <div className="column">
                {this.props.countries.map((country, index) => {
                    return<div key={index}><Link to ={`/${country.cca2}`}>{country.name.common}</Link></div>
                })
                }
                </div>
                <div className="column">
                   <Route path='/country/:id' component={CountryDetails} />
                </div>
            </div>
        )
    }
}


export default CountriesList