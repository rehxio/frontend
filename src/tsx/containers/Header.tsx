import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { SideMenuStore } from '../stores/SideMenuStore';
import { LoginStore } from '../stores/LoginStore';
import * as FontAwesome from 'react-icons/lib/fa';
import Button from '@material-ui/core/Button';
import * as ButtonBar from '../../css/ButtonBar.css';
import { MapStore } from '../stores/MapStore';


export interface HeaderProps {
	sideMenuStore?: SideMenuStore;
	loginStore?: LoginStore;
	mapStore?: MapStore;
}

@inject('sideMenuStore', 'loginStore', 'mapStore')
@observer
export default class Header extends React.Component<HeaderProps, {}> {
	constructor(props) {
		super(props);
		this.toggleDrawer = this.toggleDrawer.bind(this);
		this.updateLocation = this.updateLocation.bind(this);
		this.moveUpdate = this.moveUpdate.bind(this);
		this.parkRemainder = this.parkRemainder.bind(this);
		this.parkSuggestions = this.parkSuggestions.bind(this);
	}

	toggleDrawer() {
		this.props.sideMenuStore.toggleDrawer();
	}

	updateLocation() {

	}

	moveUpdate() {
		this.props.mapStore.setOffLocation();
	}

	parkRemainder() {
		this.props.mapStore.parkRemainder();
	}

	parkSuggestions() {
		this.props.mapStore.parkSuggestion();
	}



	render() {
			if (this.props.loginStore.modalVisible === true) {
				return <div></div>;
			} else {
				return <div>
					<nav className={ButtonBar.menuButton}>
						<Button onClick={this.toggleDrawer}><FontAwesome.FaBars size={30} /></Button>
							<div className={ButtonBar.topButton}>
								<button className={ButtonBar.funcButton} onClick={this.updateLocation}><span>Aparcar</span></button>
								<button className={ButtonBar.funcButton} onClick={this.moveUpdate}><span>Salir</span></button>
								<button className={ButtonBar.funcButton} onClick={this.parkRemainder}><span>¿Donde aparqué?</span></button>
								<button className={ButtonBar.should} onClick={this.parkSuggestions}><span>¿Donde debería aparcar?</span></button>
							</div>
					</nav>
				</div>;
			}
	}
}