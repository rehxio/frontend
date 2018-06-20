import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import * as SideMenuStyle from '../../css/Sidemenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { SideMenuStore } from '../stores/SideMenuStore';
import { Link } from 'react-router-dom';
import Icon from '@material-ui/core/Icon';

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
						<div className={SideMenuStyle.userIcon}><FontAwesome.FaUser size={90} /></div>
						<Divider />
						<Link to='/'>
							<Button variant='contained' className={SideMenuStyle.button}>
								<FontAwesome.FaHome size={25} /> Home
							</Button>
						</Link>
						<Divider />
						<div className={SideMenuStyle.list}>
						<Link to='/Profile'><Button className={SideMenuStyle.button}>Perfil</Button></Link>
							<br />
							<Link to='/vehicles'><Button className={SideMenuStyle.button}>Vehículos</Button></Link>
						</div>
						<Divider />
						<div className={SideMenuStyle.info}>
							<Button className={SideMenuStyle.infoButton}>
								<FontAwesome.FaTwitter size={15} />
							</Button>
							<Button className={SideMenuStyle.infoButton}>
								<FontAwesome.FaQuestion size={15} />
							</Button>
						</div>
					</div>
				</SwipeableDrawer>
			</div >
		);
	}
}

