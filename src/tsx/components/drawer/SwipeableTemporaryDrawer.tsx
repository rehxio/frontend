import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import * as SwipeableDrawerStyle from './SwipeableDrawerStyles.css';
import * as FontAwesome from 'react-icons/lib/fa';

const styles = {
  drawer: {
    background: 'antiquewhite',
    height: '100%'
  },
  UserIcon: {
    width: 175,
    height: 175,
    margin: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export interface SwipeableTemporaryDrawerState {
  open: boolean;
}

export interface SwipeableTemporaryDrawerProps {
  classes: any;
}

class SwipeableTemporaryDrawer extends React.Component <SwipeableTemporaryDrawerProps, SwipeableTemporaryDrawerState> {
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

  render() {
    const { classes } = this.props;
    return <div>
      <Button onClick={this.toggleDrawer}><FontAwesome.FaBars size={30}/></Button>
      <SwipeableDrawer open={this.state.open} onClose={this.toggleDrawer} onOpen={this.toggleDrawer}>
        <div className={classes.drawer} tabIndex={0} role='button' /*onClick={this.toggleDrawer} onKeyDown={this.toggleDrawer}*/>
        <div className={classes.UserIcon}><FontAwesome.FaUser size={90}/></div>
        <Divider/>
          <div className={classes.list}>
            <Button className={SwipeableDrawerStyle.button}>Perfil</Button>
              <br/>
            <Button className={SwipeableDrawerStyle.button}>Vehículos</Button>
              <br/>
            <Button className={SwipeableDrawerStyle.button}>Info</Button>
            <br/>
            <Button className={SwipeableDrawerStyle.button}>Top Sites</Button>
          </div>
          <Divider/>
          <div className={classes.info}>
          <Button>
            <FontAwesome.FaGithub size={30}/>
          </Button>
          <Button>
            <FontAwesome.FaTwitter size={30}/>
          </Button>
          <Button>
          <FontAwesome.FaFacebookSquare size={30}/>
          </Button>
          </div>
        </div>
      </SwipeableDrawer>
    </div>;
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);