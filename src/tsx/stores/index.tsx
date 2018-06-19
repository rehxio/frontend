import { LoginStore } from './LoginStore';
import { SideMenuStore } from './SideMenuStore';
import { VehicleStore } from './VehicleStore';
import { ProfileStore } from './ProfileStore';

const stores = {
	loginStore: new LoginStore(),
	sideMenuStore: new SideMenuStore(),
	vehicleStore: new VehicleStore(),
	profileStore: new ProfileStore()
};

export default stores;