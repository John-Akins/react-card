import React, {Component} from 'react';
import './App.css';

class InfoCard extends Component {
  render ()  {
    console.log(this.props.openStatus)
    return(
        <div className= {this.props.openStatus === "open" ? "col s12 m7 open" :  "col s12 m7 close"}>
            <div className="card horizontal">
            <div className="card-image">
                <img src="https://lorempixel.com/100/190/nature/6" alt="Serene Scene" />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>John is a Fullstack Software Developer. He likes building impactful solutions and also to tinker with code. At his free time, when he is not coding he enjoys reading productivity books, seeing movies, listening to music too. He enjoys quiet environments</p>
                </div>
            </div>
            </div>
        </div>
    )
  }
}

export default InfoCard;
