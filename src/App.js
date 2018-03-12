import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
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

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={12}>
              <AppBar title='App Weather'/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationListContainer cities={cities}/>
            </Col>
            <Col xs={12} md={6}>
              <Paper zDepth={4}>
                <div className='detail'>
                  <ForecastExtendedContainer/>
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


