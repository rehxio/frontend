import { action, observable } from 'mobx';
import * as superagent from 'superagent';

export class LoginStore {
	@observable modalVisible = false; // esto va a true
	@action toggleLogin() {
		this.modalVisible = !this.modalVisible;
	}

	@action checkLogin(name: string, password: string) {
		// FIXME falta pasar los datos
		console.log(name, password);
		superagent
		.post('http://127.0.0.1:3000/user/login')
		.send({ name , password })
		.end((err, res) => {
			if (!err) {
				this.modalVisible = false;
			} else {
				console.log(err);
				this.modalVisible = true;
				alert('Usuario o contraseña incorrecto.');
			}
		});
	}
}