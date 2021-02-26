import React, { Component } from 'react'

class CountryDetails extends Component {
    state = {
        countries
    }

    getCountry = () => {
        let {id} = this.props.match.params.cca2
        .then(()=> {
            let country = {
            id: country.cca2,
            name: this.common,
            capital: this.capital,
            area: this.area
           }
           this.setState({
               country: country
           })
        })
    }



    render() {
        const { country: {name, capital, area}, country } = this.state
        return (
            <div>
                Country CountryDetails
               
                   <h1>{name}</h1>
                   <h3>Capital {capital}</h3>
                   <h3>Area {area}</h3>
                   <img src='https://www.countryflags.io/:id/flat/64.png'/>

                
            </div>
        )
    }
}

export default CountryDetails
