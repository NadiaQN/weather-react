import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import './App.css';



const cities =  [
  'Santiago', 
  'Buenos Aires', 
  'Bogotá', 
  'Ciudad de México', 
  'Madrid', 
  'Rio de Janeiro'
];

class App extends Component {
  constructor() {
    super();  
    this.state = {
      city: null
  }
}
  hadlerSelectionLocation = city => {
    this.setState({ city });
    console.log(`hadlerSelectionLocation ${city}`)
  }
  render() {
    const { city } = this.state;
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='Belu'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList cities={cities} onSelectedLocation={this.hadlerSelectionLocation}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  {
                    city === null ? <h2>No se seleccionó ciudad</h2> : <ForecastExtended city={city}></ForecastExtended>
                  }
                </div>
              </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider> 
    );
  }
}


export default App;
