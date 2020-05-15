import React from "react";

type MyProps = {};
type MyState = {};


export default class AddFoodItem extends React.Component<MyProps, MyState> {
    constructor(props: any) {
      super(props);
      this.state = {};
    }

    render() {
      return (
        <div>
            <p>Add food item</p>
            <button>Cancel</button>
        </div>
      )
    }
  }