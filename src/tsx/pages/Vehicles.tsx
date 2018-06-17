import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { VehicleStore } from '../stores/VehicleStore';

export interface VehiclesProps {
  vehicleStore?: VehicleStore;
}

@inject('vehicleStore')
@observer
export default class Vehicles extends React.Component<VehiclesProps, {}> {
  constructor(props: VehiclesProps) {
    super(props);

    this.newVehicle = this.newVehicle.bind(this);
  }

  componentDidMount() {
    this.props.vehicleStore.loadVehicles();
  }

  newVehicle() {
    this.props.vehicleStore.newVehicle('Nuevo' + Math.random());
  }

  render() {
    const { vehicles } = this.props.vehicleStore;
    return <div>
      <h1>Mis vehículos</h1>
      <button onClick={this.newVehicle}>New</button>
      <ul>
        {vehicles.map(vehicle => <li>{vehicle.identifier}</li>)}
      </ul>
    </div>;
  }
}
