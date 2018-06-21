import { action, observable } from 'mobx';
import * as superagent from 'superagent';
import { USER_TOKEN } from './LoginStore';
import { reportObserved } from 'mobx/lib/core/observable';

export class MapStore {


	@observable lat: number;
	@observable lng: number;
	@observable zoom: number;

	@observable markers: [{
		lat: number,
		lng: number,
		id: string
	}];

	@observable parkMarkers: [{
		lat: number,
		lng: number,
		id: string
	}];

	constructor() {
		this.zoom = 8;
		this.markers = [{
			lat: 0,
			lng: 0,
			id: '0'
		}];
		this.parkMarkers = [{
			lat: 0,
			lng: 0,
			id: '0'
		}];
	}

	addCurrentMarker(lat, lng, id) {
		if (this.markers !== undefined) {
			this.markers.push({ lat, lng, id });
		}
		console.log(this.markers);
	}

	addParkMarkers(lat, lng, id) {
		if (this.parkMarkers !== undefined) {
			this.parkMarkers.push({ lat, lng, id });
		}
	}


	@action geolocation() {
		navigator.geolocation.getCurrentPosition(position => {
			this.lat = position.coords.latitude;
			this.lng = position.coords.longitude;
			this.zoom = 14;
			this.addCurrentMarker(this.lat, this.lng, '0'); // FIXME arreglar id
		});
		superagent
			.post('http://127.0.0.1:3000/park')
			.send(this.lat, this.lng)
			.then(alert('Ubicación guardada'))
			.catch(err => alert('No se ha podido determinar la ubicación'));
	}


	@action setOffLocation() {
		this.lat = 28.1235459;
		this.lng = -15.436257399999931;
		this.zoom = 8;
		superagent
			.post('http://127.0.0.1:3000/offpark')
			.send()
			.then(response => response) // FIXME
			.catch(err => alert('no se ha podido desacivar la localizacion'));
	}

	@action parkRemainder() {
		superagent
			.get('http://127.0.0.1:3000/mypark')
			.set()
			.then(response => {
				this.lat = response.body.lat;
				this.lng = response.body.lng;
			})
			.catch(err => alert('no se ha podido recordar su ubicación'));
	}

	@action parkSuggestion() {
		superagent
			.get('http://127.0.0.1:3000/mysuggestions')
			.set()
			.then(response => {
				response.map(coords => this.addParkMarkers(coords.lat, coords.lng, '0')); // FIXME areglar id
			})
			.catch(err => console.log('no se han podido cargar las ubicaciones'));
	}
}