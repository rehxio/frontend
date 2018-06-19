import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { VehicleStore } from '../stores/VehicleStore';
import { SideMenuStore } from '../stores/SideMenuStore';
import SideMenu from '../components/SideMenu';
import * as VehicleStyle from '../../css/Vehicles.css';
import Button from '@material-ui/core/Button';

export interface VehiclesProps {
	vehicleStore?: VehicleStore;
	sideMenuStore?: SideMenuStore;
}

@inject('vehicleStore', 'sideMenuStore')
@observer
export default class Vehicles extends React.Component<VehiclesProps, {}> {
	constructor(props: VehiclesProps) {
		super(props);

		this.newVehicle = this.newVehicle.bind(this);
		this.removeVehicle = this.removeVehicle.bind(this);
	}

	componentDidMount() {
		this.props.vehicleStore.loadVehicles();
	}

	newVehicle() {
		this.props.vehicleStore.newVehicle('Nuevo ' + Math.random());
	}

	removeVehicle() {
		// TODO hacer la función remove
		this.props.vehicleStore.remove('');
	}

	render() {
		const { vehicles } = this.props.vehicleStore;
		return <div>
			{this.props.sideMenuStore.open && <SideMenu />}
			<div>
				<div className={VehicleStyle.title}>
					<h1>Mis vehículos</h1>
				</div>
				<div className={VehicleStyle.containerbuttons}>
					<div className={VehicleStyle.containeradd}>
						<Button variant='contained' className={VehicleStyle.buttons} onClick={this.newVehicle}>Add Vehicle</Button>
					</div>
					<div className={VehicleStyle.containerremove}>
						<Button variant='contained' className={VehicleStyle.buttons} onClick={this.removeVehicle}>Remove Vehicle</Button>
					</div>
				</div>
			</div>
			<ul>
				{vehicles.map(vehicle => <li>{vehicle.identifier}</li>)}
			</ul>
		</div>;
	}
}