import { action, observable } from 'mobx';

export class LoginStore {
	@observable modalVisible = true;
	@action toggleLogin() {
		this.modalVisible = !this.modalVisible;
	}

	@observable checkLogin;
	@action validateLogin() {
		fetch('http://127.0.0.1:3000/user/login')
		.then(response => response.json())
		.catch(err => alert('Usuario o contraseña incorrecto.'));
	}
}