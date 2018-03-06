import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LocationList from './components/LocationList';


const cities =  [
  'Santiago', 
  'Buenos Aires', 
  'Bogotá', 
  'Ciudad de México', 
  'Madrid', 
  'Rio de Janeiro'
];

class App extends Component {
  hadlerSelectionLocation = city => {
    console.log('hadlerSelectionLocation')
  }
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <LocationList cities={cities} onSelectedLocation={this.hadlerSelectionLocation}/>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
