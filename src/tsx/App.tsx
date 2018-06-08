import * as React from 'react';
import SwipeableTemporaryDrawer from './components/drawer/SwipeableTemporaryDrawer';
import MapContainer from './components/map/MapContainer';

export default class App extends React.Component {
    render() {
        return(
            <div><SwipeableTemporaryDrawer/>
                <MapContainer/>
            </div>
        );
    }
}