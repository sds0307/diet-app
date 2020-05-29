import React from "react";
import Grid from '@material-ui/core/Grid';
import FoodItemsTable from './FoodItemsTable';
import AddFoodItem from './AddFoodItem';
import ManageIcons from './ManageIcons';
import Paper from '@material-ui/core/Paper';
import './Content.css';

type MyProps = {};
type MyState = {"isItemSelected" : boolean, "food" : any[]};

const food: any[] = [
  { name: 'Eggs', count: 1, measurement: 'qty', calories: 20, carbs: 2, protiens: 6,  fat: 1 },
  { name: 'Milk', count: 100, measurement: 'gms', calories: 70, carbs: 5, protiens: 3,  fat: 0 },
  { name: 'Chicken', count: 200, measurement: 'gms', calories: 500, carbs: 20, protiens: 30,  fat: 15 },
  { name: 'Rice', count: 100, measurement: 'gms', calories: 200, carbs: 28, protiens: 5,  fat: 3 }
 ];

export default class Content extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = {isItemSelected: false, food: food};
      this.rowSelected = this.rowSelected.bind(this);
      this.addFoodToTable = this.addFoodToTable.bind(this);
    }

    rowSelected(currentRowsSelected: any, allRowsSelected: any) {
      console.log('currentRowsSelected: ', currentRowsSelected);
      console.log('allRowsSelected: ', allRowsSelected);
      this.setState({
        isItemSelected: allRowsSelected.length ? true : false
      });
    }

    addFoodToTable(newFood : any) {
      const newList = this.state.food.concat(
        { name: newFood.name, 
          count: Number(newFood.count), 
          measurement: newFood.measurement, 
          calories: Number(newFood.calories), 
          carbs: Number(newFood.carbs), 
          protiens: Number(newFood.protiens),  
          fat: Number(newFood.fat) 
        });
      this.setState({
        food: newList
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
                <FoodItemsTable onSelect={this.rowSelected} data={this.state.food}/>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className="Paper">
                <AddFoodItem onAdd={this.addFoodToTable}/>
              </Paper>
            </Grid>
        </Grid>
      )
    }
  }