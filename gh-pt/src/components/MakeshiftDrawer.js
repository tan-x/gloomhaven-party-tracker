import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import woodBk from '../assets/woodgrain.jpg'

const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '40%',
        // background: 'black',
        position: 'absolute',
        top: 0,
        left: 0,
        background: woodBk,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%',
    }
}))

export default function MakeshiftDrawer(props) {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    function handleListItemClick(event, index) {
      setSelectedIndex(index);
    }
  
    return (
      <Slide direction="top" in={props.open}  >
        <div className="drawer">
          <div className="drawer-dimmer">
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              selected={selectedIndex === 0}
              onClick={event => handleListItemClick(event, 0)}
            >
              <ListItemText primary="Add Character" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 1}
              onClick={event => handleListItemClick(event, 1)}
            >
              <ListItemText primary="Party Manager" />
            </ListItem>
          </List>
          <Divider />
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItem
              button
              selected={selectedIndex === 2}
              onClick={event => handleListItemClick(event, 2)}
            >
              <ListItemText primary="Character List" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={event => handleListItemClick(event, 3)}
            >
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
          </div>
        </div>
      </Slide>
    );
  }