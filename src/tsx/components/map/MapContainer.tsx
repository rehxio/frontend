import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React = require('react');

export interface MapContainerProps {
    marker: any[];
    google: any;
}

const style = {
    width: '100%',
    height: '100%'
  };

class MapContainer extends React.Component<MapContainerProps, {}> {

    onMapClicked() {
        console.log('Mapa');
    }

    onMarkerClick() {
        console.log('marca');
    }


/*
onMarkerClick = (props, marker, e) =>
this.setState({
  selectedPlace: props,
  activeMarker: marker,
  showingInfoWindow: true
})

onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
*/

onInfoWindowClose() {}

selectedPlace() {}



render() {
    return (
      <Map google={this.props.google}
          style={style}
          center={{
            lat: 48.1486,
            lng: -17.1077
          }}
          zoom={15}
          onClick={this.onMapClicked}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA3ZJbujACSYHgvYWSeDxNvrgg_DqMVE7w'
})(MapContainer);