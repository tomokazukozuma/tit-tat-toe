
import game from './../utils/game'

const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true
}

const reducer = (state = initialState, action) => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (game.calculateWinner(squares) || squares[action.index]) {
        return state;
    }

    switch (action.type) {
        case 'CLICK': {
            squares[action.index] = state.xIsNext ? 'X' : 'O';
            return {
                history: history.concat([
                    {
                        squares: squares
                    }
                ]),
                stepNumber: history.length,
                xIsNext: !state.xIsNext
            }
        }
        case 'MOVE': {
            return {
                history,
                stepNumber: action.stepNumber,
                xIsNext: (action.stepNumber % 2) === 0
            }
        }
        default: {
            return state
        }
    }
}

export default reducer