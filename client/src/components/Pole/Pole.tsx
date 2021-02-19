import React, { Component } from 'react'
import Kletka from './Kletka/Kletka';
// import Cards from '././Card/card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function FormRow() {
  //столбцы 6*9
    return (
      <React.Fragment>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper ><Kletka /></Paper>
        </Grid>
      </React.Fragment>
    );
  }

export default class Pole extends Component {
// строки
    render() {
        return (
            <>
          <Grid container spacing={1}>
        <Grid container item xs={6} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={1}>
          <FormRow />
        </Grid>
        <Grid container item xs={6} spacing={1}>
          <FormRow />
        </Grid>
          </Grid>

            </>
        )
    }
}
