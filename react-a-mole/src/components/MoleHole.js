import React, { Component } from 'react';

class MoleHole extends Component {

  render(){
    return (
      <div className="gameHole" style={{ display: this.props.context.display }}>
        <div className="gameWhack">
          <div className={"gameMole"} onClick={ this.props.onClick }
            style={{WebkitTransform: this.props.context[this.props.holeNumber]}}>
          </div>
          <div className="gameMound"></div>
        </div>
      </div>
    )
  };
}

export default MoleHole;