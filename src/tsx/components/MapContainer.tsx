import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React = require('react');
import * as keys from '../../../config/pass';
import { MapStore } from '../stores/MapStore';
import { observer, inject } from 'mobx-react';

export interface MapContainerProps {
	google: any;
	zoom?: any;
	mapStore?: MapStore;
}

export interface MarkersState {
	latitude: number;
	longitude: number;
	id: string;
}

export interface MapContainerState {
	ownMarkers?: MarkersState[];
	parkMarkers?: MarkersState[];
	zoom?: any;
}

const style = {
	width: '98.99vw',
	height: '91.4vh',
};

@inject('mapStore')
@observer
class MapContainer extends React.Component<MapContainerProps, MapContainerState> {

	constructor(props) {
		super(props);
		this.state = {
			zoom: this.props.zoom,
			ownMarkers: [],
			parkMarkers: []
		};
	}



	addParkMarker(id) {
		const newParkMarkers = this.state.parkMarkers;
		if (newParkMarkers !== undefined) {
			newParkMarkers.push({ latitude: this.props.mapStore.lat, longitude: this.props.mapStore.lng, id });
			this.setState({
				parkMarkers: newParkMarkers
			});
		}
	}


	addCurrentMarker(lat, lng, id) {
		const newOwnMarkers = this.state.ownMarkers;
		if (newOwnMarkers !== undefined) {
			newOwnMarkers.push({ latitude: lat, longitude: lng, id });
			this.setState({
				ownMarkers: newOwnMarkers
			});
		}
	}


	render() {
		return (
			<Map google={this.props.google}
				style={style}
				center={{
					lat: this.props.mapStore.lat,
					lng: this.props.mapStore.lng
				}}
				onClick={'this.onMapClicked'}
			>

				{this.state.ownMarkers.map(marker => <Marker key={marker.id}
					position={{ lat: marker.latitude, lng: marker.longitude }} />)}
				{this.state.parkMarkers.map(marker => <Marker key={marker.id}
					position={{ lat: marker.latitude, lng: marker.longitude }} />)}

			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: keys.apikey
})(MapContainer);