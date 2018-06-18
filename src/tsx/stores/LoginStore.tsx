import { action, observable } from 'mobx';
import * as superagent from 'superagent';

/**
 * Esta es la constante en la que guardaremos los datos de sesión del usuario en las cookies (localstorage)
 * @type {string}
 */

export const USER_TOKEN = 'USER_TOKEN';

export class LoginStore {
	@observable userToken: string;
	@observable modalVisible = true;

	constructor() {
		this.userToken = window.localStorage.getItem(USER_TOKEN);
		this.modalVisible = !this.userToken;
	}

	@action toggleLogin() {
		this.modalVisible = !this.modalVisible;
	}

	@observable checkLogin;

	@action setUserToken(userToken: string) {
		this.userToken = userToken;
		this.modalVisible = false;
		window.localStorage.setItem(USER_TOKEN, userToken);
	}

	@action validateLogin(name: string, password: string) {
		superagent
			.post('http://127.0.0.1:3000/user/login')
			.send({ name, password })
			.then(response => this.setUserToken(response.body.token))
			.catch(err => {
				console.error('Error en validateLogin', err);
				alert('Usuario o contraseña incorrecto.');
			});
	}
}