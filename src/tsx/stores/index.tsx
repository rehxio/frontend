import { LoginStore } from './LoginStore';
import { SideMenuStore } from './SideMenuStore';
import { VehicleStore } from './VehicleStore';

const stores = {
  loginStore: new LoginStore(),
  sideMenuStore: new SideMenuStore(),
  vehicleStore: new VehicleStore()
};

export default stores;
