import React, { useState } from 'react';
import stats from '../stats';

export default class Perks extends React.Component {
    constructor(props) {
        super();
        this.state = {gold: stats[props.route].gold};
        this.inputRef = React.createRef();
        this.addGold = this.addGold.bind(this);
        this.subGold = this.subGold.bind(this);
    }

    addGold() {
        if (this.inputRef.current.value) {
            let newGold = this.state.gold + parseInt(this.inputRef.current.value);
            this.setState({gold: newGold});
        }
    }

    subGold() {
        if (this.inputRef.current.value) {
            let newGold = this.state.gold - parseInt(this.inputRef.current.value);
            if (newGold < 0) {
                newGold = 0;
            }
            this.setState({gold: newGold});
        }
    }

    render() {
        return (
            <>
                <h2 className='modal-header'>Gold</h2>
                <h2>{this.state.gold}</h2>
                <div className='goldSubmit'>
                    <input type="number" id="gold" name="goldAdd" ref={this.inputRef}/>
                    <div className='perk-row gold-row'>
                        <button className="addGold" name="addGold" onClick={() => {this.subGold()}}>-</button>
                        <button className="addGold" name="subGold" onClick={() => {this.addGold()}}>+</button>
                    </div>
                </div>
            </>
        )
    }
    
}