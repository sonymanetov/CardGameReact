import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Kartochka from "../../Kartochka/Kartochka";

export class CKletka {
    row: number
    col: number
    constructor(x: number, y: number) {
        this.col = x;
        this.row = y;
    }
}

interface IProps {
    kletka: CKletka
}

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
        console.log(`row: ${props.kletka.row} col: ${props.kletka.col}`);
    };

    return (
        <div className={classes.kletka} onClick={clickHandler}>
                    </div>
    )
}
