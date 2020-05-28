import React from "react";
import styled from "styled-components";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
  }),
);

const onSubmit = () => {
  window.alert('Submit success');
};

export const Heading = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 24px;
`;

export default function AddFoodItem() {
  const classes = useStyles();
  const [measurement, setMeasurement] = React.useState('1');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMeasurement(event.target.value as string);
  };

      return (
        <div>
            <Heading>
              <Typography variant="h6" gutterBottom>
                Add New Food Item
              </Typography>
            </Heading>
            <Heading>
              <form className={classes.root} onSubmit={onSubmit} autoComplete="off">
                <div>
                  <TextField
                    required
                    id="name"
                    label="Name"
                    helperText="Name of the food item"
                  />
                </div>
                <div>
                  <TextField
                    required
                    type="number"
                    id="count"
                    label="Count"
                  />
                  <FormControl className={classes.formControl}>
                    <InputLabel id="measurement">Measurement</InputLabel>
                    <Select
                      labelId="measurement-select-label"
                      id="measurement-select"
                      value={measurement}
                      onChange={handleChange}
                    >
                      <MenuItem value={'1'}>Quantity</MenuItem>
                      <MenuItem value={'2'}>Grams</MenuItem>
                      <MenuItem value={'3'}>Pounds</MenuItem>
                      <MenuItem value={'4'}>Litres</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div>
                  <TextField
                    required
                    type="number"
                    id="calories"
                    label="Calories (g)"
                  />
                  <TextField
                    required
                    type="number"
                    id="protiens"
                    label="Protiens (g)"
                  />
                  <TextField
                    required
                    type="number"
                    id="carbs"
                    label="Carbs (g)"
                  />
                  <TextField
                    required
                    type="number"
                    id="fats"
                    label="Fats (g)"
                  />
                </div>
                <br/>
                <Button type="submit" variant="contained" color="primary">
                  ADD
                </Button>
              </form>
            </Heading>
        </div>
      );
  }