import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Kartochka from "../../Kartochka/Kartochka";

//сетка координат
export class CKletka {
    row: number
    col: number
    constructor(x: number, y: number) {
        this.row = x+1;
        this.col = y+1;
    }
}

interface IProps {
    kletka: CKletka
}
 // описание клески 
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        kletka: {
            width: "100px",
            height: "100px",
            backgroundColor:"white",
            border: "solid",
            borderColor:"black"
        },
    }),
);

export default function Kletka(props: IProps) {

    const classes = useStyles();

    const clickHandler = () => {
        console.log(`col: ${props.kletka.col} row: ${props.kletka.row}`);
    };

    return (
        <div className={classes.kletka} onClick={clickHandler}>
                    </div>
    )
}
