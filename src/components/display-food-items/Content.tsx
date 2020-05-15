import React from "react";
import Grid from '@material-ui/core/Grid';
import FoodItemsTable from './FoodItemsTable';
import ManageIcons from './ManageIcons';
import Paper from '@material-ui/core/Paper';
import './Content.css';

type MyProps = {};
type MyState = {"isItemSelected" : boolean};

export default class Content extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = {isItemSelected: false};
      this.rowSelected = this.rowSelected.bind(this);
    }

    rowSelected(currentRowsSelected: any, allRowsSelected: any) {
      console.log('currentRowsSelected: ', currentRowsSelected);
      console.log('allRowsSelected: ', allRowsSelected);
      this.setState({
        isItemSelected: allRowsSelected.length ? true : false
      });
    }

    render() {
      return (
        <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <ManageIcons isItemSelected={this.state.isItemSelected} />
            </Grid>
            {/* Food Items */}
            <Grid item xs={12}>
              <Paper className="Paper">
                <FoodItemsTable onSelect={this.rowSelected}/>
              </Paper>
            </Grid>
        </Grid>
      )
    }
  }