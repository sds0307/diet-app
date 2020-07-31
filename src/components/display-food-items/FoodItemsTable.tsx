import MUIDataTable from 'mui-datatables';
import React from 'react';

type MyProps = { onSelect: any; data: any[] };
type MyState = { columns: any[]; options: any };

const data: MyState = {
    columns: [
        {
            name: 'name',
            label: 'Name',
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: 'count',
            label: 'Count',
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: 'measurement',
            label: 'Measurement',
            options: {
                filter: false,
                sort: false,
            },
        },
        {
            name: 'calories',
            label: 'Calories (g)',
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: 'carbs',
            label: 'Carbs (g)',
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: 'protiens',
            label: 'Protiens (g)',
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: 'fat',
            label: 'Fat (g)',
            options: {
                filter: false,
                sort: true,
            },
        },
    ],
    options: {
        filterType: 'checkbox',
        selectableRows: 'single',
        filter: false,
        print: false,
        download: false,
        viewColumns: false,
        onRowsSelect: null,
    },
};

export default class FoodItemsTable extends React.Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);
        data.options.onRowsSelect = props.onSelect;
        this.state = data;
    }

    render() {
        return (
            <MUIDataTable
                title={'Food Items'}
                data={this.props.data}
                columns={this.state.columns}
                options={this.state.options}
            />
        );
    }
}
