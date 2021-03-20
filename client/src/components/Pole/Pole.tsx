import React, { Component } from 'react'
import Kletka, { CKletka } from './Kletka/Kletka';
import Kartochka from '../Kartochka/Kartochka';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ICard } from '../Kartochka/KardTS';

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
                <Kletka kletka = {kletka} />
            </Grid >
        );
    });
}

const Cards : ICard[] =  [
    {name:"Аптечка",
    img:"heal",
    opisanie:"Востанавливает 50хп"    
    },
    {name:"Спринт",
    img:"Spead",
    opisanie:"Персонаж перемещается на 3 клеткт"    
    },
    {name:"Броня",
    img:"Bronya",
    opisanie:"Дает 50 брони"    
    },
    {name:"Дробовик",
    img:"",
    opisanie:"Наносит 80 урона на расстояние 3-х клеток"    
    },
    {name:"Автомат",
    img:"",
    opisanie:"Наносит 50 урона на расстояние 5-х клеток"    
    },
    {name:"Винтовка",
    img:"",
    opisanie:"Наносит 30 урона на расстояние 8-х клеток"    
    },
]

export default class Pole extends Component {
    render() {
        const field = generateField(6, 9); //задаем кол-во строк и столбцов соответственно//
        const items = field.map((row: CKletka[]) => {

            //тут размер расположение//
            return (
                <Grid container item xs={12} spacing={0}  justify="center"> 
                    {drawRow(row)}
                </Grid>

            );
        });

        return (
            <>
            <Grid container spacing={0} style={{margin:"20px"}}>
                {items}
            </Grid>
            <Grid container spacing={2} style={{margin:"200px"}}>
                {Cards.map((item) => {
                    return <Kartochka kartochka={item}/>;
                })
            }
            </Grid>
            
            </>
        )
    }
}
