import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import CircularProgress from 'material-ui/CircularProgress';
import './style.css';

const api_key = 'e04a04790893259dbbeafe6c3d0d3c09';
const url = 'http://api.openweathermap.org/data/2.5/weather';

class WeatherLocation extends Component {
    constructor ( {city} ) {
        super();
        this.state = {
            city,
            data: null
        }  
        console.log('Constructor');   
    }

    componentWillMount() {
        console.log('ComponentWillMount')
        const {city} = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}&units=metric`;
        fetch(api_weather).then(data => {
            console.log(data);
            return data.json();
        }).then(weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data })
            console.log(weather_data);
        })
    }

    render = () => {
        const { onWeatherLocationClick } = this.props;
        const  {city, data} = this.state;
        return (
        <div className='weatherLocation' onClick={onWeatherLocationClick}>
            <Location city={city} />
                {data !== null ? <WeatherData data={data} /> : <CircularProgress size={60} thickness={7} />}
        </div>
        )
    }
};

WeatherLocation.propTypes = {
    city: PropTypes.string,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;