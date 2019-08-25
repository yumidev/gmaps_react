import React, { Component } from 'react';
import { render } from 'react-dom';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    if (!!map) {
      this.mapObj = map;
    }
    this.settingLoaded(map);
  }

  settingLoaded(map) {
    if (map)
      this.setState({loaded: true});
    else
      console.log('What happend');
  }

  renderChildren(map) {
    console.log('Hiiii renklj;;');
    return React.Children.map(this.props.children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: map
      });
    });
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important.
      //We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  mapObj = null;

  render() {
    console.log('Telling you loaded');
    console.log(this.state.loaded);
    return (
      <div style={{ width: 500, height: 500 }} id={this.props.id}>
        {this.state.loaded ? this.renderChildren(this.mapObj) : null}
      </div>
    );
  }
}

export default Map
