import * as React from 'react';
import * as styles from '../../css/login.css';
import { inject, observer } from 'mobx-react';
import { LoginStore } from '../stores/LoginStore';

export interface LoginProps {
	loginStore?: LoginStore;
}

export interface LoginState {
	name?: string;
	password?: string;
}

@inject('loginStore')
@observer
export default class Login extends React.Component<LoginProps, LoginState> {
	constructor(props) {
		super(props);

		this.state = {
			name: '',
			password: ''
		};

		this.toggleLogin = this.toggleLogin.bind(this);
		this.catchUser = this.catchUser.bind(this);
		this.checkLogin = this.checkLogin.bind(this);
	}

	toggleLogin() {
		this.props.loginStore.toggleLogin();
	}

	catchUser(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	checkLogin(event) {
		event.preventDefault();
		this.props.loginStore.checkLogin(this.state.name, this.state.password);
	}

	render() {
		return <div className={styles.index}>
					<div className={styles.page}>
						<div className={styles.login}>
							<h1>Bienvenido a Where Is Your Car</h1>
							<form>
								<p><label>Usuario: </label><input name='name' type='text' value={this.state.name} onChange={this.catchUser} /></p>
								<p><label>Contraseña: </label><input name='password' type='password' value={this.state.password} onChange={this.catchUser} /></p>
								<button type='submit' onClick={this.checkLogin}>Iniciar</button>
							</form>
						</div>
					</div>
				</div>;
	}
}