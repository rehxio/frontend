import { action, observable } from 'mobx';
import * as superagent from 'superagent';
import { USER_TOKEN } from './LoginStore';
import { reportObserved } from 'mobx/lib/core/observable';

export class MapStore {

	@observable lat: number;
	@observable lng: number;


	@action geolocation() {
		navigator.geolocation.getCurrentPosition(position => {
			this.lat = position.coords.latitude;
			this.lng = position.coords.longitude;
		});
		superagent
		.post('http://127.0.0.1:3000/park')
		.send(this.lat, this.lng)
		.then(alert('Ubicación guardada'))
		.catch(err => alert('No se ha podido determinar la ubicación'));
		console.log('estoy en mapstore geolocation');
	}

	@action setOffLocation() {
		superagent
		.post('http://127.0.0.1:3000/offpark')
		.send()
		.then(response => response) // FIXME
		.catch(err => alert('no se ha podido desacivar la localizacion'));
		console.log('estoy en setOffLocation');
	}
}