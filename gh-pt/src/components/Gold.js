import React, { useState } from 'react';
import StatContext from '../Context'

export default class Perks extends React.Component {
    constructor(props) {
        super();
        this.inputRef = React.createRef();
    }

    static contextType = StatContext;

    render() {
        return (
            <StatContext.Consumer>
                {([stats, setStats]) => {
                    return (
                        <>
                        <h2 className='modal-header'>Gold</h2>
                        <h2>{stats[this.props.route].gold}</h2>
                        <div className='goldSubmit'>
                            <input type="number" id="gold" name="goldAdd" ref={this.inputRef}/>
                            <div className='perk-row gold-row'>
                                <button className="addGold" name="subGold" onClick={() => {
                                    if (this.inputRef.current.value) {
                                        let newGold = stats[this.props.route].gold - parseInt(this.inputRef.current.value);
                                        if (newGold < 0) {
                                            newGold = 0;
                                        }
                                        const newStats = Object.assign({}, stats);
                                        newStats[this.props.route].gold = newGold;
                                        setStats(newStats);
                                    }
                                }}>-</button>
                                <button className="addGold" name="addGold" onClick={() => {
                                    if (this.inputRef.current.value) {
                                        let newGold = stats[this.props.route].gold + parseInt(this.inputRef.current.value);
                                        const newStats = Object.assign({}, stats);
                                        newStats[this.props.route].gold = newGold;
                                        setStats(newStats);
                                    }
                                }}>+</button>
                            </div>
                        </div>
                        </>
                    )
                }}
            </StatContext.Consumer>
        )
    }
}