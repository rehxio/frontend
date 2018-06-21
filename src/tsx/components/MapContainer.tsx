import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React = require('react');
import * as keys from '../../../config/pass';
import { MapStore } from '../stores/MapStore';
import { observer, inject } from 'mobx-react';

export interface MapContainerProps {
	google: any;
	mapStore?: MapStore;
}


const style = {
	width: '98.99vw',
	height: '91.4vh',
};

@inject('mapStore')
@observer
class MapContainer extends React.Component<MapContainerProps, {}> {

	constructor(props) {
		super(props);
	}


	componentDidMount() {
	}


	render() {
		return (
			<Map google={this.props.google}
				style={style}
				initialCenter={{
					lat: 28.1235459,
					lng: -15.436257399999931
				}}
				center={{
					lat: this.props.mapStore.lat,
					lng: this.props.mapStore.lng
				}}
				zoom={this.props.mapStore.zoom}
				onClick={'this.onMapClicked'}
			>

				{this.props.mapStore.markers.map(marker => <Marker key={marker.id}
					position={{ lat: marker.lat, lng: marker.lng }} />)}
				{this.props.mapStore.parkMarkers.map(marker => <Marker key={marker.id}
					position={{ lat: marker.lat, lng: marker.lng }} />)}

			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: keys.apikey
})(MapContainer);