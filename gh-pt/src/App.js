import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';
import Header from './components/Header';
import Card from './components/Card';
import Modal from './components/Modal';
import Perks from './components/Perks';
import Items from './components/Items';
import stats from './stats';
import './App.css';

class App extends React.Component {
  state = {show: false, modalRoute: ''};
  showModal = e => {
    this.setState({show: !this.state.show, modalRoute: e.name, charRoute: e.id});
  };
  hideModal = e => {
    this.setState({show: !this.state.show})
  }
  // const [perkVisible, setPerkVisible] = useState({visible: false});
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header/>
        <div className="body">
          <Card name="Tormir" level="3" class="Red Guard" classimg="redGuard" onclick={e => {this.showModal(e.target)}}></Card>
          <Card name="Malek" level="3" class="Hatchet" classimg="hatchet" onclick={e => {this.showModal(e.target)}}></Card>
          <Modal show={this.state.show} onclose={e => {this.hideModal()}}>
            {this.state.modalRoute === 'items' ? 
            <Items route={this.state.charRoute}/> : 
            <Perks route={this.state.charRoute}/>}
          </Modal>
        </div>
        {/* <div className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          </div> */}
      </ThemeProvider>
    );
  }
}

export default App;
