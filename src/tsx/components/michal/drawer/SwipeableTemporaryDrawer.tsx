import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import * as SwipeableDrawerStyle from './SwipeableDrawerStyles.css';
import * as FontAwesome from 'react-icons/lib/fa';
import MapContainer from '../map/MapContainer';



const styles = {
	drawer: {
		background: '#80d7ff',
		height: '100%'
	},
	UserIcon: {
		width: 175,
		height: 175,
		margin: 'auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'black'
	},
	list: {
		width: 250,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto'
	},
	info: {
		display: 'flex',
		margin: 'auto',
		height: '51%',
		justifyContent: 'flex-end',
		alignItems: 'flex-end'
	}
};

export interface SwipeableTemporaryDrawerState {
	open: boolean;
}

export interface SwipeableTemporaryDrawerProps {
	classes: any;
}

class SwipeableTemporaryDrawer extends React.Component<SwipeableTemporaryDrawerProps, SwipeableTemporaryDrawerState> {
	constructor(props: SwipeableTemporaryDrawerProps) {
		super(props);
		this.state = {
			open: false
		};
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer() {
		this.setState({ open: !this.state.open });
	}

	onChange() {

	}


	render() {
		const { classes } = this.props;
		return <div>
			<div className={SwipeableDrawerStyle.topStuff}>
				<div className={SwipeableDrawerStyle.menuButton}>
					<Button onClick={this.toggleDrawer}><FontAwesome.FaBars size={30} /></Button>
				</div>
				<div className={SwipeableDrawerStyle.topButton}>
					<button onClick={this.onChange} className={SwipeableDrawerStyle.funcButton}><span>Park</span></button>
					<button className={SwipeableDrawerStyle.funcButton}><span>Move</span></button>
					<button className={SwipeableDrawerStyle.funcButton}><span>Where did I park?</span></button>
					<button className={SwipeableDrawerStyle.funcButton} style={{ fontSize: '14px' }}><span>Where should I park?<FontAwesome.FaStar /></span></button>
				</div>
			</div>
			<SwipeableDrawer open={this.state.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
				<div className={classes.drawer} tabIndex={0} role='button' onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}>
					<div className={classes.UserIcon}><FontAwesome.FaUser size={40} /></div>
					<Divider />
					<div className={classes.list}>
						<Button className={SwipeableDrawerStyle.drawerButton}>Perfil</Button>
						<br />
						<Button className={SwipeableDrawerStyle.drawerButton}>Vehículos</Button>
						<br />
						<Button className={SwipeableDrawerStyle.drawerButton}>Info</Button>
						<br />
						<Button className={SwipeableDrawerStyle.drawerButton}>Top Sites</Button>
					</div>
					<Divider />
					<div className={classes.info}>
						<Button size={'small'}>
							<FontAwesome.FaGithub size={20} style={{ color: 'black' }} />
						</Button>
						<Button size={'small'}>
							<FontAwesome.FaTwitter size={20} style={{ color: 'black' }} />
						</Button>
						<Button size={'small'}>
							<FontAwesome.FaFacebookSquare size={20} style={{ color: 'black' }} />
						</Button>
						<Button size={'small'}>
							<FontAwesome.FaInfoCircle size={20} style={{ color: 'black' }} />
						</Button>
					</div>
				</div>
			</SwipeableDrawer>
		</div>;
	}
}

export default withStyles(styles)(SwipeableTemporaryDrawer);