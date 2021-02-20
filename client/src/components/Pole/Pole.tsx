import React, { Component } from 'react'
import Kletka, { CKletka } from './Kletka/Kletka';
// import Cards from '././Card/card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const generateField = (rows: number, columns: number) => {
    let array: CKletka[][] = [];
    for (let i = 0; i < rows; i++) {
        array.push([]);
        for (let j = 0; j < columns; j++) {
            array[i].push(new CKletka(i, j));
        }
    }
    return array;
}


//function FormRow() {
//  //столбцы 8 штук
//    return (
//      <React.Fragment>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//        <Grid item xs={3}>
//          <Paper ><Kletka /></Paper>
//        </Grid>
//      </React.Fragment>
//    );
//  }

const drawRow = (row: CKletka[]) => {
    return row.map((kletka: CKletka) => {
        return (
            <Grid item>
                <Kletka kletka={kletka} />
            </Grid >
        );
    });
}


export default class Pole extends Component {
// строки 6 штук 
    
    render() {
        const field = generateField(6, 9);
        const items = field.map((row: CKletka[]) => {
            return (
                <Grid container item xs={12} spacing={1}>
                    {drawRow(row)}
                </Grid>
            );
        });



        return (
            <Grid container spacing={1}>
                {items}
            </Grid>
            )
        //(
        //    <>
        //  <Grid container spacing={1}>
        //<Grid container item xs={6} spacing={1}>
        //  <FormRow />
        //</Grid>
        //<Grid container item xs={6} spacing={1}>
        //  <FormRow />
        //</Grid>
        //<Grid container item xs={6} spacing={1}>
        //  <FormRow />
        //</Grid>
        //<Grid container item xs={6} spacing={1}>
        //  <FormRow />
        //</Grid>
        //  </Grid>
        //    </>
        //)
    }
}
