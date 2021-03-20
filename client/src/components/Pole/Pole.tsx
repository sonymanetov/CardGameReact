import React, { Component, useState } from 'react'
import Kletka, { CKletka } from './Kletka/Kletka';
import Kartochka from '../Kartochka/Kartochka';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ICard } from '../Kartochka/KardTS';
import { Console } from 'console';


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
const drawRow = (row: CKletka[], clickHandler: any) => {
    return row.map((kletka: CKletka) => {
        return (
            <Grid item>
                <Kletka kletka = {kletka} callBack = {clickHandler} />
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
    opisanie:"Персонаж перемещается на 3 клетки"    
    },
    {name:"Броня",
    img:"Bronya",
    opisanie:"Дает 50 брони"    
    },
    {name:"Дробовик",
    img:"",
    opisanie:"Наносит 80 урона на расстоянии 3-х клеток"    
    },
    {name:"Автомат",
    img:"",
    opisanie:"Наносит 50 урона на расстоянии 5-х клеток"    
    },
    {name:"Винтовка",
    img:"",
    opisanie:"Наносит 30 урона на расстоянии 8-х клеток"    
    },
]

// export default class Pole extends Component {
    export default function Pole() {
    // render() {


    const player1 = {x: 0, y: 0};
    const player2 = {x: 8, y: 5};
    let plArray = [player1, player2];

    const [players, setPlayers] = useState(plArray);

        const clickHandler = (kletka: CKletka) => {
            console.log(JSON.stringify(kletka));
            plArray[0] = {x: kletka.col, y: kletka.row}
            setPlayers([plArray[0]]);
        }
        
        const field = generateField(6, 9); //задаем кол-во строк и столбцов соответственно//
        for(let player of players) {
            field[player.y][player.x] = new CKletka(player.y, player.x, true)
        }
        const items = field.map((row: CKletka[]) => {

            //тут размер расположение//
            return (
                <Grid container item xs={12} spacing={0}  justify="center"> 
                    {drawRow(row, clickHandler)}
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
    // }
}
