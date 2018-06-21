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

	componentDidMount() {
		this.props.sideMenuStore.setName.bind(this);
	}

	render() {
		return (
			<div>
				<SwipeableDrawer open={this.props.sideMenuStore.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
					<div className={SideMenuStyle.drawer} tabIndex={0} role='button' onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
						<div className={SideMenuStyle.userIcon}><FontAwesome.FaUser size={20} />{this.props.sideMenuStore.userName}</div>
						<Divider />
						<Button variant='contained' className={SideMenuStyle.button}>
							<Link to='/'>
								<FontAwesome.FaHome size={25} /> Home
							</Link>
						</Button>
						<Divider />
						<div className={SideMenuStyle.list}>
							<Button className={SideMenuStyle.button}><Link to='/Profile'>Perfil</Link></Button>
							<br />
							<Button className={SideMenuStyle.button}><Link to='/vehicles'>Vehículos</Link></Button>
						</div>
						<Divider />
						<div className={SideMenuStyle.info}>
							<Button className={SideMenuStyle.infoButton}>
								<a target='_blank' href='https://twitter.com/car_where'><FontAwesome.FaTwitter size={15} /></a>
							</Button>
							<Button className={SideMenuStyle.infoButton} type='button'>
								<Link to='/info'><FontAwesome.FaQuestion size={15} /></Link>
							</Button>
						</div>
					</div>
				</SwipeableDrawer>
			</div >
		);
	}
}

