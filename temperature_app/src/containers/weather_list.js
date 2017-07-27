import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';


class WeatherList extends Component {

    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
          <tr key={name}>
              <td>
                <GoogleMap lat={lat} lon={lon}></GoogleMap>
                {name}
              </td>
              <td>
                  <Chart data={temps} units="K" color="blue" height={120} width={180}></Chart>
              </td>
              <td>
                  <Chart data={pressure} units="hPa" color="red" height={120} width={180}></Chart>
              </td>
              <td>
                  <Chart data={humidity} units="%" color="green" height={120} width={180}></Chart>
              </td>

          </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>
                        Ciudad
                    </th>
                    <th>
                        Temperatura (Kelvin)
                    </th>
                    <th>
                        Presión (hPa)
                    </th>
                    <th>
                        Humedad (%)
                    </th>

                </tr>
                </thead>
                <tbody>
                    { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}


function mapStateToProps({ weather }) {
    return {
             weather
    };
    //It's the same as weather: weather but in ES6

    //we use "weather" because in reducers/index.js we set "weather" with the response that we'd like to have
}

export default connect(mapStateToProps)(WeatherList);