import * as React from 'react';
import SwipeableTemporaryDrawer from './components/drawer/SwipeableTemporaryDrawer';
import MapContainer from './components/map/MapContainer';

export interface AppState {
    zoom?: any;
    lat?: any;
    lng?: any;
}

export default class App extends React.Component<{}, AppState> {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <div><SwipeableTemporaryDrawer/>
                <MapContainer
                />
            </div>
        );
    }
}