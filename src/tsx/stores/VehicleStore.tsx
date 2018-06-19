import { action, observable, remove } from 'mobx';
import * as superagent from 'superagent';
import { USER_TOKEN } from './LoginStore';

export class VehicleStore {
	@observable vehicles = [];

	@action loadVehicles() {
		const token = window.localStorage.getItem(USER_TOKEN);
		superagent.get('http://127.0.0.1:3000/vehicle/all')
			.set('Authorization', `Bearer ${token}`)
			.then(response => {
				this.vehicles = response.body;
			})
			.catch(err => console.error('No se han podido obtener los vehículos', err));
	}

	@action newVehicle(identifier: string) {
		const token = window.localStorage.getItem(USER_TOKEN);
		superagent.post('http://127.0.0.1:3000/vehicle/add')
			.set('Authorization', `Bearer ${token}`)
			.send({ identifier })
			.then(response => {
				console.log('New vehicle', response, identifier);
				this.loadVehicles();
			})
			.catch(err => console.error('No se han podido obtener los vehículos', err));
	}

	// TODO hacer la función remove
	@action remove(identifier: string) {
	}
}