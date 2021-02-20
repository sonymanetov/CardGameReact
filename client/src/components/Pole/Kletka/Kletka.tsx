import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

//объ€вление класса и полей//
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

export default class Kletka extends Component<IProps> {

    constructor(props: IProps) {
        super(props);
    }

    //тут клетка определ€ет, что тыкнули на неЄ//
    clickHandler = () => {
        console.log(`row: ${this.props.kletka.row} col: ${this.props.kletka.col}`);
    };

    //внешний вид и мастшабирование клетки//
    render() {
        return (
            <div>
                <Button onClick={this.clickHandler} style={{ height: "100px" }}>______ ______</Button>
            </div>
        )
    }
}
