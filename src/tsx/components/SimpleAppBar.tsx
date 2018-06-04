import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flexGrow: 1
  }
};

export interface SimpleAppBarProps {
  classes: any;
}

class SimpleAppBar extends React.Component<SimpleAppBarProps, {}> {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <Typography variant='title' color='inherit'>
            Title
          </Typography>
        </Toolbar>
      </AppBar>
    </div>;
  }
}

export default withStyles(styles)(SimpleAppBar);