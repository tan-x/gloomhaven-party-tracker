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
import woodBk from '../assets/woodgrain.jpg';
import xp from '../xpicon.svg';

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
  
    function handleListItemClick(event, index) {
    }
  
    return (
      <Slide direction="down" in={props.open} mountOnEnter unmountOnExit>
        <div className="drawer">
          <div className="drawer-dimmer">
          <List component="nav" aria-label="main mailbox folders">
            <ListItem
              button
              onClick={event => handleListItemClick(event, 0)}
            >
              <img src={xp} className="header-class-logo"/>
              <h3 className="menuItem"> Add Character</h3>
            </ListItem>
            <ListItem
              button
              onClick={event => handleListItemClick(event, 1)}
            >
              <img src={xp} className="header-class-logo"/>
              <h3 className="menuItem"> Party Manager</h3>
            </ListItem>
            <ListItem
              button
              onClick={event => handleListItemClick(event, 2)}
            >
              <img src={xp} className="header-class-logo"/>
              <h3 className="menuItem"> Character List</h3>
            </ListItem>
            <ListItem
              button
              onClick={event => handleListItemClick(event, 3)}
            >
              <img src={xp} className="header-class-logo"/>
              <h3 className="menuItem">Logout</h3>
            </ListItem>
          </List>
          </div>
        </div>
      </Slide>
    );
  }