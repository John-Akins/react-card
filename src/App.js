import React, {Component} from 'react';
import Card from './Card'
import './App.css';
import InfoCard from './InfoCard';

const M = window.M;

class App extends Component {
  constructor(props) {
    M.AutoInit() // Initialize MaterializeCSS
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      openStatus: "open"
    }
    console.log('hola')
  }

  toggleModal() {
    this.setState((prevState) => {
      console.log(prevState.openStatus);
      let newStatus = prevState.openStatus === "open" ? "close" : "open"
      return {
        openStatus: newStatus
      }
    })
    M.AutoInit() // Initialize MaterializeCSS
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h5>
             User Card
          </h5>
        </header>
        <Card onClick={this.toggleModal}/>
        <InfoCard openStatus={this.openStatus}/>
      </div>
    );
  }
}

export default App;
