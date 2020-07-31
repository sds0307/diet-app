import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import React from 'react';

export default function ManageIcons(props: any) {
    if (props.isItemSelected) {
        return (
            <div>
                <Fab color="primary" aria-label="edit">
                    <EditIcon onClick={() => props.showAddModal()} />
                </Fab>
            </div>
        );
    } else {
        return (
            <div>
                <Fab color="primary" aria-label="add">
                    <AddIcon onClick={() => props.showAddModal()} />
                </Fab>
            </div>
        );
    }
}
