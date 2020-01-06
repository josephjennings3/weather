import React from 'react';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "40d0ad0e6f7d35d5b62c3c36489451a3";

class App extends React.Component {
  
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter correct values",
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className="sizer">
          <p>.</p>
          <div className="container">
            <div className="left">
              <Titles />
            </div>
            <div className="right">
              <Form className="form" getWeather={this.getWeather}/>
              <Weather 
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
