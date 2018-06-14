import { action, observable } from 'mobx';

export class SideMenuStore {
	@observable open = false;
	@action toggleDrawer() {
		this.open = !this.open;
		console.log(this.open);
	}
}