import React from 'react';

// component
import Board from './Board'
import Step from './../containers/Step'
import game from './../utils/game'

class Game extends React.Component {
    render() {
        const winner = game.calculateWinner(this.props.history[this.props.stepNumber].squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.props.xIsNext ? 'X' : 'O');
        }
        
        return (
        <div className="game">
            <div className="game-board">
            <Board
                squares={this.props.history[this.props.stepNumber].squares}
                onClick={i => this.props.click(i)}
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
            <ol>
                <Step
                    history={this.props.history}
                    move={this.props.move}
                />
            </ol>
            
            </div>
        </div>
        );
    };
}

export default Game;