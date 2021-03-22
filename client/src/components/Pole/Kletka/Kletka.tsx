import React, { Component, useState } from 'react'
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Kartochka from "../../Kartochka/Kartochka";
import LeftPlayerImg from '../../../assets/PlayerLeftImg.png';
import { callbackify } from 'util';

//сетка координат
export class CKletka {
    row: number
    col: number
    player ? : boolean
    constructor(x: number, y: number, player = false) {
        this.row = x;
        this.col = y;
        this.player = player;
    }
}

interface IProps {
    kletka: CKletka,
    callBack: any
}
 // описание клетки 
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

    const[isClicked, setIsClicked] = useState(false);

    const classes = useStyles();
    if (props.kletka.player) { console.log('here');}

    const clickHandler = () => {
        console.log(`col: ${props.kletka.col} row: ${props.kletka.row}`);
        props.callBack(props.kletka);
        setIsClicked(!isClicked);
    };

    return (
        <div className={classes.kletka} onClick={clickHandler} >
        { props.kletka.player && 
        <img src={LeftPlayerImg} /> }
                    </div>
    )
}
