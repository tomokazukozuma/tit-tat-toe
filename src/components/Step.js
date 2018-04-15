import React from 'react';

export default function Step(props) {
    const moves = props.history.map((history, index) => {
        const desc = index ?
            'Go to move #' + index :
            'Go to game start';
        return (
            <li key={index}>
                <button onClick={() => props.move(index)}>{desc}</button>
            </li>
        );
    });
    return moves
}