import React from 'react';
import stats from '../stats';

export default class Checks extends React.Component {
	constructor(props) {
		super(props);
		this.state = { checks: props.checks };
		this.checks = this.state.checks % 3;
		console.log(this.state.checks);
        this.iterator = 0;
        this.addCheck = this.addCheck.bind(this)
	}

	renderPlayerChecks() {
        console.log(this.state.checks);
		const checkarray = [];
		for (let i = 0; i < 19; i+=3) {
            if (i < (this.state.checks) && this.checks === 0) {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                    </div>
                );
            } else if (i <= (this.state.checks) && this.checks === 1) {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} />
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} />
                    </div>
                );
            } else if (i <= (this.state.checks) && this.checks === 2) {
                checkarray.push(
                    <div>
                        <input type='checkbox' className='checkbox checks' id={i} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+1} onChange={(e) => this.addCheck(e)} defaultChecked="true"/>
                        <input type='checkbox' className='checkbox checks' id={i+2} onChange={(e) => this.addCheck(e)} />
                    </div>
                );
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
		// let checks = this.state.checks % 3;
		// switch (checks) {
		//     case 0:
		//         return(
		//             <div>
		//                 <input type='checkbox' className='checkbox checks' onChange={() => this.addCheck()}/>
		//                 <input type='checkbox' className='checkbox checks'/>
		//                 <input type='checkbox' className='checkbox checks'/>
		//             </div>
		//         )
		//     case 1:
		//         return(
		//             <div>
		//                 <input type='checkbox' className='checkbox checks' checked/>
		//                 <input type='checkbox' className='checkbox checks' onChange={() => this.addCheck()}/>
		//                 <input type='checkbox' className='checkbox checks'/>
		//             </div>
		//         )
		//     case 2:
		//         return(
		//             <div>
		//                 <input type='checkbox' className='checkbox checks' checked/>
		//                 <input type='checkbox' className='checkbox checks' checked onChange={() => this.addCheck()}/>
		//                 <input type='checkbox' className='checkbox checks' onChange={() => this.addCheck()}/>
		//             </div>
		//         )
		//     case 3:
		//         return(
		//             <div>
		//                 <input type='checkbox' className='checkbox checks' checked/>
		//                 <input type='checkbox' className='checkbox checks' checked/>
		//                 <input type='checkbox' className='checkbox checks' checked/>
		//             </div>
		//         )
		// }
	}

	addCheck(e) {
        // console.log(e.target.checked);
        // console.log(e.target.id);
        // console.log(this.state.checks);
        if (e.target.checked && e.target.id == this.state.checks) {
            this.checks = (this.state.checks + 1) % 3;
            this.setState({...this.previousState, checks: this.state.checks + 1 });
        } else if (!e.target.checked && e.target.id == this.state.checks - 1) {
            this.setState({ checks: this.state.checks - 1 });
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
