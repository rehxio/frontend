import { LoginStore } from './LoginStore';
import { SideMenuStore } from './SideMenuStore';

const stores = {
	loginStore: new LoginStore(),
	sideMenuStore: new SideMenuStore()
};

export default stores;