import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';

export default function ManageIcons(props : any) {
    if(props.isItemSelected) {
        return (
            <div>
                <Fab color="primary" aria-label="edit">
                    <EditIcon />
                </Fab>
            </div> 
        );
    } else {
        return (
            <div>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </div> 
        );
    }
    
}