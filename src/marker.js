import React, { Component } from 'react';
import { render } from 'react-dom';
import InfoWindow from './infoWindow';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
        content: '<div id="infoWindow" />',
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
    infoWindow.addListener('domready', e => {
      render(<InfoWindow />, document.getElementById('infoWindow'))
    })
    infoWindow.open(map)
    console.log('Would you like to createInfoWindow?');
  }

  componentDidMount() {
    const marker = new window.google.maps.Marker({
      position: { lat: this.props.coord.lat, lng: this.props.coord.lng },
      map: this.props.map,
      title: 'Hello below Istanbul!'
    });
    console.log('marker created');
    console.log(marker);
    marker.addListener('click', (e) => {
      this.createInfoWindow(e, this.props.map)
    })
  }

  render() {
    return null;
  }
}

export default Marker
