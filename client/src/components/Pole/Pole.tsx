import React, { Component } from 'react'
import Kletka, { CKletka } from './Kletka/Kletka';
// import Cards from '././Card/card';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//генерация поля, наполнения массива клетками//
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


//отрисовка в соответствии с описанием клетки//
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
  
    render() {
        const field = generateField(6, 9); //задаем кол-во строк и столбцов соответственно//
        const items = field.map((row: CKletka[]) => {

            //тут размер и расстояние//
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
    }
}
