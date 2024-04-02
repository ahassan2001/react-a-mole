import React, { Component } from 'react';

class GameOver extends Component {

  render(){
    return (
      <div className="gameGameOver" style={{ display: this.props.context.state.gameOver }}>
        <h1 className="gameGameOverHeader" >GAME OVER!</h1>
        <p className="gameYouScored">You scored { this.props.context.state.score }/15</p>
      </div>
    )
  };
}

export default GameOver;