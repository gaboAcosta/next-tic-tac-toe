'use client';
import { useState } from 'react';
import checkWinner from './winner'

interface SquareParams {
    value: string | null,
    onSquareClick: any
}
function Square(params: SquareParams) {
    const { value, onSquareClick } = params
    return (
        <button
            className="square"
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

export default function Board () {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState('')
    function reset () {
        setSquares(Array(9).fill(null))
        setXIsNext(true)
        setWinner('')
    }
    function handleClick(i: number) {
        const nextSquares = squares.slice();
        if(nextSquares[i] === null && winner === '') {
            if (xIsNext) {
                nextSquares[i] = "X";
            } else {
                nextSquares[i] = "O";
            }
            setSquares(nextSquares);
            setXIsNext(!xIsNext);
            console.log('click!', nextSquares)
            const newWinner = checkWinner(nextSquares)
            if(newWinner !== 'NONE') {
                setWinner(newWinner)
            }
        }
    }
    const showWinner = winner !== ''
    return (
        <>
            {showWinner && (
                <div>
                    <h1>{winner}</h1>
                    <h3>Winner!</h3>
                </div>
            )}
            <div style={{ display: 'block'}}>
                <div className="board-row">
                    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
                </div>
                <div  className="board-row">
                    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
                </div>
                <div  className="board-row">
                    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
                </div>
            </div>
            <button onClick={() => reset()}>RESET</button>
        </>
    )
}