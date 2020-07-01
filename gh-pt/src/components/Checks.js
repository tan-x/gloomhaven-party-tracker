import React from 'react';
import StatContext from '../Context'

export default class Checks extends React.Component {
	constructor(props) {
        super(props);
        const statContext = this.context;
		this.state = { checks: props.checks };
		this.checkRem = this.state.checks % 3;
		console.log(this.state.checks);
        this.iterator = 0;
        this.addCheck = this.addCheck.bind(this)
    }
    
    static contextType = StatContext;

	renderPlayerChecks() {
        const statContext = this.context;
        let checks = statContext[0][this.props.route].checks;
        let checkRem = checks % 3;
        console.log(checks);
        // const checkRem = checks % 3;
		const checkarray = [];
		for (let i = 0; i < 18; i+=3) {
            if (checks >= 3) {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                    </div>
                
                );
                checks -= 3;
            } else if (checks > 0 && checkRem === 1) {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} />
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} />
                    </div>
                );
                checks -= 1;
            } else if (checks > 0 && checkRem === 2) {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} />
                    </div>
                );
                checks -= 2;
            } else {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} />
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} />
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} />
                    </div>
                );
            }
			
		}
		return <>{checkarray}</>;
	}

	addCheck(e) {
        const statContext = this.context;
        const checks = statContext[0][this.props.route].checks;
        if (e.target.checked && e.target.id == checks) {
            this.checkRem = (checks + 1) % 3;
            const newStats = Object.assign({}, statContext[0]);
            newStats[this.props.route].checks = checks + 1;
            statContext[1](newStats);
            console.log(statContext[0][this.props.route].checks)
        } else if (!e.target.checked && e.target.id == checks - 1) {
            this.checkRem = (checks - 1) % 3;
            const newStats = Object.assign({}, statContext[0]);
            newStats[this.props.route].checks = checks - 1;
            statContext[1](newStats);
        }
	}

	render() {
		return <>
            {this.renderPlayerChecks()}
            <button
							className='additem'
							onClick={this.props.save}
						>Save</button>
        </>
	}
}
