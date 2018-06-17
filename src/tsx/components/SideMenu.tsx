import * as React from 'react';
import { observer, inject } from 'mobx-react';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import * as SideMenuStyle from '../../css/Sidemenu.css';
import * as FontAwesome from 'react-icons/lib/fa';
import { SideMenuStore } from '../stores/SideMenuStore';

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
		console.log(this.props.sideMenuStore.open);
	}

	render() {
		return <div>
			<SwipeableDrawer open={this.props.sideMenuStore.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
				<div className={SideMenuStyle.drawer} tabIndex={0} role='button' onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
					<div className={SideMenuStyle.userIcon}><FontAwesome.FaUser size={90}/></div>
					<Divider />
					<div className={SideMenuStyle.list}>
						<Button className={SideMenuStyle.button}>Perfil</Button>
						<br />
						<Button className={SideMenuStyle.button}>Vehículos</Button>
						<br />
						<Button className={SideMenuStyle.button}>Info</Button>
						<br />
						<Button className={SideMenuStyle.button}>Top Sites</Button>
					</div>
					<Divider />
					<div className={SideMenuStyle.info}>
						<Button size={'small'}>
							<FontAwesome.FaGithub size={15} />
						</Button>
						<Button size={'small'}>
							<FontAwesome.FaTwitter size={15} />
						</Button>
						<Button size={'small'}>
							<FontAwesome.FaFacebookSquare size={15} />
						</Button>
						<Button size={'small'}>
							<FontAwesome.FaQuestion size={15} />
						</Button>
					</div>
				</div>
			</SwipeableDrawer>
		</div >;
	}
}

