import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import Perks from './components/Perks';
import Items from './components/Items';
import XP from './components/XP';
import Gold from './components/Gold';
import stats from './stats';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {show: false, modalRoute: ''};
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
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
        <div className="body">
          <div className="scrollview" onClick={() => {this.hideModal()}}>
            <Card name="Tormir" class="Red Guard" classimg="redGuard" onclick={e => {this.showModal(e.target)}}></Card>
            <Card name="Malek" class="Hatchet" classimg="hatchet" onclick={e => {this.showModal(e.target)}}></Card>
          </div>
        </div>
        <Modal show={this.state.show} onclose={e => {this.hideModal()}} modalRoute={this.state.modalRoute} charRoute={this.state.charRoute}/>
      </ThemeProvider>
    );
  }
}

export default App;
