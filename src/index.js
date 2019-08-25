import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './map'
import Marker from './marker'

class App extends Component {
  constructor() {
    super();
    this.createInfoWindow = this.createInfoWindow.bind(this)
  }

  coords = [
    {
      lat: 41.2082, lng: 28.9784
    },
    {
      lat: 41.4082, lng: 28.9784
    },
    {
      lat: 40.4082, lng: 28.9784
    },
  ];

  render() {
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        }}
      >
        {
          this.coords.map((coord) => <Marker coord={coord} />)
        }
      </Map>
    );
  }
}

render(<App />, document.getElementById('root'));
