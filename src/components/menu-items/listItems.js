import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BallotIcon from '@material-ui/icons/Ballot';

export const mainListItems = (
    <div>
        <ListItem button onClick={() => (window.location.href = '/')}>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => (window.location.href = '/demo')}>
            <ListItemIcon>
                <BallotIcon />
            </ListItemIcon>
            <ListItemText primary="Demo" />
        </ListItem>
        <ListItem button onClick={() => (window.location.href = '/signin')}>
            <ListItemIcon>
                <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
        </ListItem>
    </div>
);
