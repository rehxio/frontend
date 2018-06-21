import { action, observable } from 'mobx';
import { strictEqual } from 'assert';
import * as superagent from 'superagent';

export class SideMenuStore {
	@observable open = false;
	@observable userName: string;

	constructor() {
		this.userName = 'Michal';
	}

	@action setName() {
		superagent
			.get('http://127.0.0.1:3000/user/profile')
			.set()
			.then(response => {
				this.userName = response.name;
			})
			.catch(err => console.log('No se puede cargar el perfin', err));
	}

	@action toggleDrawer() {
		this.open = !this.open;
		console.log(this.open);
	}
}