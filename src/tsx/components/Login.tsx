import * as React from 'react';
import * as styles from '../../css/login.css';
import { inject, observer } from 'mobx-react';
import { LoginStore } from '../stores/LoginStore';

export interface HeaderProps {
	loginStore?: LoginStore;
}

@inject('loginStore')
@observer
export default class Login extends React.Component<HeaderProps, {}> {
	constructor(props) {
		super(props);
		this.toggleLogin = this.toggleLogin.bind(this);
	}

	toggleLogin() {
		this.props.loginStore.toggleLogin();
	}

	checkLogin() {
		this.props.loginStore.checkLogin();
	}

	render() {
		return <div className={styles.page}>
					<div className={styles.login}>
						<h1>Bienvenido a Where Is Your Car</h1>
						<form>
							<p><label>Usuario: </label><input /></p>
							<p><label>Contraseña: </label><input type='password' /></p>
							<button type='submit' onClick={this.checkLogin}>Iniciar</button>
						</form>
					</div>
				</div>;
	}
}