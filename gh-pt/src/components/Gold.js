import React, { useState } from 'react';
import stats from '../stats';

export default class Perks extends React.Component {
    constructor(props) {
        super();
        this.state = {gold: stats[props.route].gold};
        this.inputRef = React.createRef();
        this.changeGold = this.changeGold.bind(this);
    }
    // const [gold, setGold] = useState(stats[props.route].gold);
    changeGold() {
        if (this.inputRef.current.value) {
            let newGold = this.state.gold + parseInt(this.inputRef.current.value);
            this.setState({gold: newGold});
        }
        console.log('test');
        // let newGold = this.state.gold + this.inputRef.current.value;
        // this.state = {gold: newGold}
    }

    render() {
        return (
            <>
                <h2 className='modal-header'>Gold</h2>
                <h3>{this.state.gold}</h3>
                <div className='goldSubmit'>
                    <input type="number" id="goldAdd" name="goldAdd" ref={this.inputRef}/>
                    <button className="addGold" name="addGold" onClick={() => {this.changeGold()}}>Add Gold</button>
                </div>
            </>
        )
    }
    
}