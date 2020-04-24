import React from "react";
import MUIDataTable from "mui-datatables";

type MyProps = {};
type MyState = { "columns" : any[], "data" : any[], "options": any};

const rowSelected = function(currentRowsSelected: any, allRowsSelected: any) {
  console.log('currentRowsSelected: ', currentRowsSelected);
  console.log('allRowsSelected: ', allRowsSelected);
}

const data : MyState = {
  columns: [
      {
       name: "name",
       label: "Name",
       options: {
        filter: false,
        sort: true,
       }
      },
      {
       name: "count",
       label: "Count",
       options: {
        filter: false,
        sort: false,
       }
      },
      {
       name: "measurement",
       label: "Measurement",
       options: {
        filter: false,
        sort: false,
       }
      },
      {
       name: "calories",
       label: "Calories (g)",
       options: {
        filter: false,
        sort: true,
       }
      },
      {
          name: "carbs",
          label: "Carbs (g)",
          options: {
           filter: false,
           sort: true,
          }
         },
         {
          name: "protiens",
          label: "Protiens (g)",
          options: {
           filter: false,
           sort: true,
          }
         },
         {
          name: "fat",
          label: "Fat (g)",
          options: {
           filter: false,
           sort: true,
          }
         },
     ],
  data: [
      { name: 'Eggs', count: 1, measurement: 'qty', calories: 20, carbs: 2, protiens: 6,  fat: 1 },
      { name: 'Milk', count: 100, measurement: 'gms', calories: 70, carbs: 5, protiens: 3,  fat: 0 },
      { name: 'Chicken', count: 200, measurement: 'gms', calories: 500, carbs: 20, protiens: 30,  fat: 15 },
      { name: 'Rice', count: 100, measurement: 'gms', calories: 200, carbs: 28, protiens: 5,  fat: 3 }
     ],
  options : {
      filterType: 'checkbox',
      selectableRows: 'single',
      filter: false,
      print: false,
      download: false,
      viewColumns : false,
      onRowsSelect : rowSelected
    }
}

export default class FoodItemsTable extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = data;
    }

    
  
    render() {
      return (
        <MUIDataTable
            title={"Food Items"}
            data={this.state.data}
            columns={this.state.columns}
            options={this.state.options}
        />
      )
    }
  }