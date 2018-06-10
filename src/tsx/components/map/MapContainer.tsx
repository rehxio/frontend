import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React = require('react');

export interface MapContainerProps {
    marker: any[];
    google: any;
}

export interface MapContainerState {
    lat: any;
    lng: any;
    zoom: any;
}
const style = {
    width: 'auto'
  };

class MapContainer extends React.Component<MapContainerProps, MapContainerState> {

    constructor(props) {
      super(props);
      this.state = {
        lat: 19.9274,
        lng: 13.2836,
        zoom: 9
      };
      }


    onMapClicked = () => {
        console.log(this.state.lat);
    }

    onMarkerClick = () => {
        console.log('marca');
    }

    getLocation = () => {
      return navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
        console.log(position.coords.latitude); // Posicion que te da el getCurrentPosition
        console.log(this.state.lat); // Posicion que le asignas al this.state.lat de la func getCurrentPosition
      });
    }


render() {
  this.getLocation();
    return (
      <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: this.state.lat,
            lng: this.state.lng
          }}
          zoom={this.state.zoom}>

          <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        <InfoWindow></InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3ZJbujACSYHgvYWSeDxNvrgg_DqMVE7w'
})(MapContainer);