import React, { useState } from 'react';
import StatContext from '../Context'
import xpicon from '../xpicon.svg';

export default class Perks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.inputRef = React.createRef();
    }

    static contextType = StatContext;

    render() {
        return (
            <StatContext.Consumer>
                {([stats, setStats]) => {
                    return (
                        <>
                        <h2 className='modal-header'>XP</h2>
                        <h3 className='modal-modalLvl'>Level {stats[this.props.route].level}</h3>
                        <div className='xpdiv'>
                            <img src={xpicon} className="xpicon" alt="xp" />
                            <h2 className='xpnum'>{stats[this.props.route].xp}</h2>
                        </div>
                        <div className='goldSubmit'>
                            <input type="number" id="gold" name="goldAdd" ref={this.inputRef}/>
                            <button onClick={() => {
                                if (this.inputRef.current.value) {
                                    let newXP = stats[this.props.route].xp + parseInt(this.inputRef.current.value);
                                    const newStats = Object.assign({}, stats);
                                    newStats[this.props.route].xp = newXP;
                                    setStats(newStats);
                                }
                            }}>XP</button>
                        </div>
                        </>
                    )
                }}
            </StatContext.Consumer>
        )
    }
}