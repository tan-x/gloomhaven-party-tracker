import React from 'react';
import StatContext from './Context';
import { GlobalStyles } from './global';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import stats from './stats';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {show: false, modalRoute: '', stats: stats, setStats: this.setStats};
  }
  
  setStats = (newStats) => {
    this.setState({...this.state, stats: newStats});
  }

  showModal = e => {
    this.setState({show: !this.state.show, modalRoute: e.name, charRoute: e.id});
    console.log(e);
  };
  hideModal = e => {
    this.state.show && this.setState({show: !this.state.show});    
  }

  render() {
    return (
      <StatContext.Provider value={[this.state.stats, this.setStats]}>
        <GlobalStyles />
        <Header/>
        <div className="body">
          <div className="scrollview" onClick={() => {this.hideModal()}}>
            <Card stats={this.state.stats} name="Tormir" class="Red Guard" classimg="redGuard" onclick={e => {this.showModal(e.target)}}></Card>
            <Card stats={this.state.stats} name="Malek" class="Hatchet" classimg="hatchet" onclick={e => {this.showModal(e.target)}}></Card>
          </div>
        </div>
        <Modal stats={this.state.stats} show={this.state.show} onclose={e => {this.hideModal()}} modalRoute={this.state.modalRoute} charRoute={this.state.charRoute}/>
      </StatContext.Provider>
    );
  }
}

export default App;
