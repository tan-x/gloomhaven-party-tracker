import React from 'react';
import StatContext from '../Context'
import xpicon from '../xpicon.svg';

export default class Perks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {lvlup: 'lvlup-exit-active'};
        this.inputRef = React.createRef();
        this.lvlArray = [0, 45, 95, 150, 210, 275, 345, 420, 500];
    }

    static contextType = StatContext;

    levelUp() {
        this.setState({lvlup: 'lvlup-enter-active'});
        setTimeout(() => this.setState({lvlup: 'lvlup-exit-active'}), 2500)
    }

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
                                    let lvlIndex = stats[this.props.route].level - 1;
                                    let newLvl = this.lvlArray.findIndex((lvl, i) => newXP >= lvl && i > lvlIndex) + 1;
                                    const newStats = Object.assign({}, stats);
                                    newStats[this.props.route].xp = newXP;
                                    if (stats[this.props.route].level < newLvl) {
                                        newStats[this.props.route].level = newLvl;
                                        this.levelUp();
                                    }
                                    setStats(newStats);
                                }
                            }}>+XP</button>
                            <div>
                                <h2 className={this.state.lvlup}>Level Up!</h2>
                            </div>
                        </div>
                        </>
                    )
                }}
            </StatContext.Consumer>
        )
    }
}