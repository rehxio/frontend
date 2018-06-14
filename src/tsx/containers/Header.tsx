import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { SideMenuStore } from '../stores/SideMenuStore';
import * as FontAwesome from 'react-icons/lib/fa';
import Button from '@material-ui/core/Button';
import * as ButtonBar from '../../css/ButtonBar.css';


export interface HeaderProps {
	sideMenuStore?: SideMenuStore;
}

@inject('loginStore')
@observer
export default class Header extends React.Component<HeaderProps, {}> {
	constructor(props) {
		super(props);
		this.toggleDrawer = this.toggleDrawer.bind(this);
	}

	toggleDrawer() {
		this.props.sideMenuStore.toggleDrawer();
	}

	onChange() {

	}

	render() {
		return <div>
					<nav className={ButtonBar.menuButton}>
						<Button onClick={this.toggleDrawer}><FontAwesome.FaBars size={30} /></Button>
							<div className={ButtonBar.topButton}>
								<button onClick={this.onChange} className={ButtonBar.funcButton}><span>Park</span></button>
								<button className={ButtonBar.funcButton}><span>Move</span></button>
								<button className={ButtonBar.funcButton}><span>Where did I park?</span></button>
								<button className={ButtonBar.should}><span>Where should I park?<FontAwesome.FaStar /></span></button>
							</div>
					</nav>
				</div>;
	}
}