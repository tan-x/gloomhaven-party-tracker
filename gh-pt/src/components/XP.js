import React, { useState } from 'react';
import stats from '../stats';

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
                <h3>Level {this.state.level}</h3>
                <h3>{this.state.xp}</h3>
                <div className='goldSubmit'>
                    <input type="number" id="goldAdd" name="goldAdd" ref={this.inputRef}/>
                    <button onClick={() => {this.changeXP()}}>XP</button>
                </div>
                
            </>
        )
    }
}