import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';
import Medals from './components/Medals'; 
import NewCountry from './components/NewCountry';


class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 0 },
      { id: 2, name: 'China', gold: 3, silver: 2, bronze: 1 },
      { id: 3, name: 'Germany', gold: 0, silver: 1, bronze: 2 },
    ],
  };

  handleCountryIncrement = (id, medalType) => {
    this.setState((prevState) => ({
      countries: prevState.countries.map((country) =>
        country.id === id
          ? { ...country, [medalType]: country[medalType] + 1 }
          : country
      ),
    }));
  };

  handleCountryDecrement = (id, medalType) => {
    this.setState((prevState) => ({
      countries: prevState.countries.map((country) =>
        country.id === id
          ? { ...country, [medalType]: Math.max(0, country[medalType] - 1) }
          : country
      ),
    }));
  };

  handleAddCountry = (newCountryName) => {
    const newCountry = {
      id: this.state.countries.length + 1,
      name: newCountryName,
      gold: 0,
      silver: 0,
      bronze: 0,
    };

    this.setState((prevState) => ({
      countries: [...prevState.countries, newCountry],
    }));
  };

  handleDeleteCountry = (id) => {
    this.setState((prevState) => ({
      countries: prevState.countries.filter((country) => country.id !== id),
    }));
  };

  render() {
    const { countries } = this.state;

    return (
      <div>
        <Medals countries={countries} />
        <div className="App">
        <NewCountry onAddCountry={this.handleAddCountry} />
          {countries.map((country) => (
            <Country
              key={country.id}
              country={country}
              onIncrement={this.handleCountryIncrement}
              onDecrement={this.handleCountryDecrement}
              onDelete={this.handleDeleteCountry}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
