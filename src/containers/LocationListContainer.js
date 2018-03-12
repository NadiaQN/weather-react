import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCity } from './../actions';
import LocationList from './../components/LocationList';


class LocationListContainer extends Component {
    hadlerSelectionLocation = city => {
        this.props.setCity(city);
    }
    render() {
        return(
            <LocationList cities={this.props.cities} onSelectedLocation={this.hadlerSelectionLocation} />
        )
    }
}

// Esta función nos permite trabajar con las acciones
const mapDispatchToPropsActions = (dispatch) => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);