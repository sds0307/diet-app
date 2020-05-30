import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Food } from './IFood';

type MyProps = {
  "onAdd" : any, 
  "onEdit" : any, 
  "isEditMode" : boolean, 
  "selectedFood": Food, 
  "key": number,
  "closeModal": any
};
type MyState = {"food" : Food};

export const Heading = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 24px;
`;

//export default function AddFoodItem() {
  export default class AddFoodItem extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = {
        food: {...this.props.selectedFood}
      };
    }

  onSubmit = (e: any) => {
    e.preventDefault();
    console.log('food: ', this.state.food);
    if (this.props.isEditMode) {
      this.props.onEdit(this.state.food);
    } else {
      this.props.onAdd(this.state.food);
    }
    
  };

  updateFood = (food: Food) => {
    this.setState({
      food: food
    })
  }

  handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newState = Object.assign({}, this.state);
    newState.food.measurement = event.target.value as string;
    this.setState(newState);
  };

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newState = Object.assign({}, this.state);
    newState.food.name = event.target.value;
    this.setState(newState);
  };

  handleCountChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newState = Object.assign({}, this.state);
    newState.food.count = event.target.value as number;
    this.setState(newState);
  };

  handleCarbsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newState = Object.assign({}, this.state);
    newState.food.carbs = event.target.value as number;
    this.setState(newState);
  };

  handleProtiensChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newState = Object.assign({}, this.state);
    newState.food.protiens = event.target.value as number;
    this.setState(newState);
  };

  handleCaloriesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newState = Object.assign({}, this.state);
    newState.food.calories = event.target.value as number;
    this.setState(newState);
  };

  handleFatsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    let newState = Object.assign({}, this.state);
    newState.food.fat = event.target.value as number;
    this.setState(newState);
  };

  render() {
    let text;
    if (this.props.isEditMode) {
      text = 'Edit';
    } else {
      text = 'Add';
    }

      return (
        <div>
            <Heading>
              <Typography variant="h6" gutterBottom>
                {text} New Food Item
              </Typography>
            </Heading>
            <Heading>
              <form onSubmit={this.onSubmit} autoComplete="off">
                <div>
                  <TextField
                    required
                    value={this.state.food.name}
                    onChange={this.handleNameChange}
                    id="name"
                    label="Name"
                    helperText="Name of the food item"
                  />
                </div>
                <div>
                  <TextField
                    required
                    value={this.state.food.count}
                    onChange={this.handleCountChange}
                    type="number"
                    id="count"
                    label="Count"
                  />
                  <FormControl>
                    <InputLabel id="measurement">Measurement</InputLabel>
                    <Select
                      labelId="measurement-select-label"
                      id="measurement-select"
                      value={this.state.food.measurement}
                      onChange={this.handleSelectChange}
                    >
                      <MenuItem value={'qty'}>Quantity</MenuItem>
                      <MenuItem value={'gms'}>Grams</MenuItem>
                      <MenuItem value={'lbs'}>Pounds</MenuItem>
                      <MenuItem value={'l'}>Litres</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    required
                    value={this.state.food.calories}
                    onChange={this.handleCaloriesChange}
                    type="number"
                    id="calories"
                    label="Calories (g)"
                  />
                  <TextField
                    required
                    value={this.state.food.protiens}
                    onChange={this.handleProtiensChange}
                    type="number"
                    id="protiens"
                    label="Protiens (g)"
                  />
                  <TextField
                    required
                    value={this.state.food.carbs}
                    onChange={this.handleCarbsChange}
                    type="number"
                    id="carbs"
                    label="Carbs (g)"
                  />
                  <TextField
                    required
                    value={this.state.food.fat}
                    onChange={this.handleFatsChange}
                    type="number"
                    id="fats"
                    label="Fats (g)"
                  />
                </div>
                <br/>
                <Button type="submit" variant="contained" color="primary">
                  ADD
                </Button>
                <span>&nbsp;</span>
                <Button variant="contained" color="primary" onClick={() => this.props.closeModal()}>
                  CANCEL
                </Button>
              </form>
            </Heading>
        </div>
      );
  }
  }