import React from "react";
import Grid from '@material-ui/core/Grid';
import FoodItemsTable from './FoodItemsTable';
import AddFoodItem from './AddFoodItem';
import ManageIcons from './ManageIcons';
import Paper from '@material-ui/core/Paper';
import './Content.css';
import { Food } from './IFood';

type MyProps = {};
type MyState = {
  "isItemSelected" : boolean, 
  "food" : Food[],
  "selectedFood": Food,
  "showAdd": boolean
};

const food: Food[] = [
  { id: 1, name: 'Eggs', count: 1, measurement: 'qty', calories: 20, carbs: 2, protiens: 6,  fat: 1 },
  { id: 2, name: 'Milk', count: 100, measurement: 'gms', calories: 70, carbs: 5, protiens: 3,  fat: 0 },
  { id: 3, name: 'Chicken', count: 200, measurement: 'gms', calories: 500, carbs: 20, protiens: 30,  fat: 15 },
  { id: 4, name: 'Rice', count: 100, measurement: 'gms', calories: 200, carbs: 28, protiens: 5,  fat: 3 }
 ];

 const defaultFood: Food = {
    id: undefined,
    name: undefined,
    count: undefined,
    measurement: 'qty',
    calories: undefined,
    protiens: undefined,
    carbs: undefined,
    fat: undefined
 }

export default class Content extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = {
        isItemSelected: false, 
        food: food, 
        selectedFood: defaultFood,
        showAdd: false
      };
      this.rowSelected = this.rowSelected.bind(this);
      this.addFoodToTable = this.addFoodToTable.bind(this);
      this.editFoodToTable = this.editFoodToTable.bind(this);
      this.showAddModal = this.showAddModal.bind(this);
      this.closeAddModal = this.closeAddModal.bind(this);
    }

    rowSelected(currentRowsSelected: any, allRowsSelected: any) {
      console.log('currentRowsSelected: ', currentRowsSelected);
      console.log('allRowsSelected: ', allRowsSelected);

      if(allRowsSelected.length) {
        this.setState({
          isItemSelected: true,
          selectedFood: this.state.food[allRowsSelected[0].index]
        });
      } else {
        this.setState({
          isItemSelected: false,
          selectedFood: defaultFood
        });
      }
    }

    addFoodToTable(newFood : any) {
      const newList = this.state.food.concat(
        { 
          id: this.state.food.length + 1,
          name: newFood.name, 
          count: Number(newFood.count), 
          measurement: newFood.measurement, 
          calories: Number(newFood.calories), 
          carbs: Number(newFood.carbs), 
          protiens: Number(newFood.protiens),  
          fat: Number(newFood.fat) 
        });
      this.setState({
        food: newList,
        showAdd: false
      });
    }

    editFoodToTable(newFood : Food) {

      const newList = this.state.food.map((item) => {
        if (item.id === newFood.id) {
          const updatedItem = {
            ...newFood
          };
          return updatedItem;
        }
        return item;
      });

      this.setState({
        food: newList,
        showAdd: false,
        isItemSelected: false,
        selectedFood: defaultFood
      });
    }

    showAddModal() {
      if(this.state.showAdd==false) {
        this.setState({
          showAdd: true
        });
      }
    }

    closeAddModal() {
      if(this.state.showAdd==true) {
        this.setState({
          showAdd: false,
          isItemSelected: false,
          selectedFood: defaultFood
        });
      }
    }

    render() {
      let add, table;
      if (this.state.showAdd) {
        table = <div />
        add = <Grid item xs={12}>
                <Paper className="Paper">
                  <AddFoodItem 
                    onAdd={this.addFoodToTable} 
                    onEdit={this.editFoodToTable} 
                    isEditMode={this.state.isItemSelected}
                    selectedFood={this.state.selectedFood}
                    closeModal={this.closeAddModal}
                    key={1}
                  />
                </Paper>
              </Grid>;
      } else {
        table = 
        <Grid item xs={12}>
          <Paper className="Paper">
            <FoodItemsTable onSelect={this.rowSelected} data={this.state.food}/>
          </Paper>
        </Grid>
        add = <div />
      }
      return (
        <Grid container spacing={3}>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <ManageIcons isItemSelected={this.state.isItemSelected} showAddModal={this.showAddModal} />
            </Grid>
            {table}
            {add}
        </Grid>
      )
    }
  }