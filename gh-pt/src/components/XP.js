import React, { useState } from 'react';
import stats from '../stats';
import xpicon from '../xpicon.svg';

export default class Perks extends React.Component{
    constructor(props) {
        super()
        this.state = {xp: stats[props.route].xp, level:stats[props.route].level};
        this.inputRef = React.createRef();
        this.changeXP = this.changeXP.bind(this);
    }
    // const [gold, setGold] = useState(stats[props.route].gold);
    changeXP() {
        if (this.inputRef.current.value) {
            let newXP = this.state.xp + parseInt(this.inputRef.current.value);
            this.setState({...this.state, xp: newXP});
        }
    }
    render() {
        return (
            <>
                <h2 className='modal-header'>XP</h2>
                <h3 className='modal-modalLvl'>Level {this.state.level}</h3>
                <div className='xpdiv'>
                    <img src={xpicon} className="xpicon" alt="xp" />
                    <h2 className='xpnum'>{this.state.xp}</h2>
                </div>
                <div className='goldSubmit'>
                    <input type="number" id="gold" name="goldAdd" ref={this.inputRef}/>
                    <button onClick={() => {this.changeXP()}}>XP</button>
                </div>
                
            </>
        )
    }
}