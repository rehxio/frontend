import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import * as SideMenuStyle from '../../css/Sidemenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { SideMenuStore } from '../stores/SideMenuStore';
import { Link } from 'react-router-dom';

export interface SideMenuProps {
	sideMenuStore?: SideMenuStore;
	classes?: any;
}

@inject('sideMenuStore')
@observer
export default class SideMenu extends React.Component<SideMenuProps, {}> {
	constructor(props: SideMenuProps) {
		super(props);
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer() {
		this.props.sideMenuStore.toggleDrawer();
	}

	render() {
		return (
			<div>
				<SwipeableDrawer open={this.props.sideMenuStore.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
					<div className={SideMenuStyle.drawer} tabIndex={0} role='button' onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
						<div className={SideMenuStyle.UserIcon}><FontAwesome.FaUser size={90} /></div>
						<Divider />
						<div className={SideMenuStyle.list}>
							<Button className={SideMenuStyle.button}>Perfil</Button>
							<br />
							<Link to='/vehicles'><Button className={SideMenuStyle.button}>Vehículos</Button></Link>
						</div>
						<Divider />
						<div className={SideMenuStyle.info}>
							<Button>
								<FontAwesome.FaGithub size={30} />
							</Button>
							<Button>
								<FontAwesome.FaTwitter size={30} />
							</Button>
							<Button>
								<FontAwesome.FaFacebookSquare size={30} />
							</Button>
						</div>
					</div>
				</SwipeableDrawer>
			</div >
		);
	}
}

