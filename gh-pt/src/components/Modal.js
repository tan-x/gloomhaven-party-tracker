import React from "react";
import '../style/Card.css';

export default class Modal extends React.Component {
  render() {
      if(!this.props.show) {
          return null;
      }
    return (
        <div className="modal">
            <div className="modal-dimmer">
                <button className="modal-close" onClick={this.props.onclose}>&#10006;</button>
                {this.props.children}
            </div>
        </div>
    )
  }
}