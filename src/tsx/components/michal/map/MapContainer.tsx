import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React = require('react');



export interface MapContainerProps {
  google: any;
  lat?: any;
  lng?: any;
  zoom?: any;
}


export interface MarkersState {
  latitude: number;
  longitude: number;
}

export interface MapContainerState {
  ownMarkers?: MarkersState[];
  parkMarkers?: MarkersState[];
  lat?: any;
  lng?: any;
  zoom?: any;
}

const style = {
  width: '100%',
  height: '90%',
};


class MapContainer extends React.Component<MapContainerProps, MapContainerState> {

  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      zoom: this.props.zoom,
      ownMarkers: [],
      parkMarkers: []
    };
  }



  onMapClicked = () => {
    console.log(this.state.lat);
  }

  getLocation() {
    return navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      this.addCurrentMarker(this.state.lat, this.state.lng);
    });
  }


  addParkMarker(lat, lng) {
    const newParkMarkers = this.state.parkMarkers;
    if (newParkMarkers !== undefined) {
      newParkMarkers.push({ latitude: lat, longitude: lng });
      this.setState({
        parkMarkers: newParkMarkers
      });
    }
  }


  addCurrentMarker(lat, lng) {
    const newOwnMarkers = this.state.ownMarkers;
    if (newOwnMarkers !== undefined) {
      newOwnMarkers.push({ latitude: lat, longitude: lng });
      this.setState({
        ownMarkers: newOwnMarkers
      });
    }
  }


  componentDidMount() {
    this.getLocation();
  }



  render() {
    return (
      <Map google={this.props.google}
        style={style}
        center={{
          lat: this.state.lat,
          lng: this.state.lng
        }}
        onClick={this.onMapClicked}

      >
        {this.state.ownMarkers.map(marker => <Marker position={{ lat: marker.latitude, lng: marker.longitude }} />)}
        {this.state.parkMarkers.map(marker => <Marker position={{ lat: marker.latitude, lng: marker.longitude }} />)}

      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3ZJbujACSYHgvYWSeDxNvrgg_DqMVE7w'
})(MapContainer);