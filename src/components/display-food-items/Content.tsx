import React from "react";
import Grid from '@material-ui/core/Grid';
import FoodItemsTable from './FoodItemsTable';
import ManageIcons from './ManageIcons';
import Paper from '@material-ui/core/Paper';
import './Content.css';

type MyProps = {};
type MyState = {};

const rowSelected = function(currentRowsSelected: any, allRowsSelected: any) {
  console.log('currentRowsSelected: ', currentRowsSelected);
  console.log('allRowsSelected: ', allRowsSelected);
}

export default class Content extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <ManageIcons isItemSelected="true"/>
            </Grid>
            {/* Food Items */}
            <Grid item xs={12}>
              <Paper className="Paper">
                <FoodItemsTable onSelect={rowSelected}/>
              </Paper>
            </Grid>
        </Grid>
      )
    }
  }