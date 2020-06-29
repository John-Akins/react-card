import React, {Component} from 'react';
import './App.css';

class Card extends Component {
  render ()  {
    return(
        <div className="Card">
            <div className="row">
                <div className="Avatar-Container">
                  <i className="Avatar material-icons medium">account_circle</i>
                </div>
                <div className="Column">
                    <span className="Name-Block">Akinsola Akolawole John</span> 
                    <button className="viewUser" onClick={this.props.handleClick}>Info</button>
                </div>
            </div>
        </div>
    )
  }
}

export default Card;
