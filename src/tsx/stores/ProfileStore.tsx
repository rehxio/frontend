import { action, observable } from 'mobx';
import * as superagent from 'superagent';
import { USER_TOKEN } from './LoginStore';

export class ProfileStore {

	@observable profile = String;

	@action loadProfile() {
		const token = window.localStorage.getItem(USER_TOKEN);
		superagent
			.get('http://127.0.0.1:3000/user/profile')
			.set('Authorization', `Bearer ${token}`)
			.then(response => {
				this.profile = response.name;
			})
			.catch(err => console.log('No se puede cargar el perfin', err));
	}
}
