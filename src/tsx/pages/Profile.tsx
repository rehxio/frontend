import * as React from 'react';
import { inject, observer } from 'mobx-react';

import { SideMenuStore } from '../stores/SideMenuStore';
import { ProfileStore } from '../stores/ProfileStore';
import SideMenu from '../components/SideMenu';

export interface ProfileProps {
	profileStore?: ProfileStore;
	sideMenuStore?: SideMenuStore;
}

@inject('profileStore' , 'sideMenuStore')
@observer
export default class Profile extends React.Component<ProfileProps, {}> {

	constructor(props: ProfileProps) {
		super(props);
	}

	render() {
		const { profile } = this.props.profileStore;
		return (
			<div>
				{this.props.sideMenuStore.open && <SideMenu/>}
				<h1>Tu Perfil</h1>
				<ul>
					<h4>Nombre: </h4>{profile}
				</ul>
			</div>
		);
	}
}