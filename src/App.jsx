import { useState } from 'react';
import cofetti from 'canvas-confetti';
import Turns from './components/Turns';
import WinnerModal from './components/WinnerModal';
import { TURNS } from './utils/utils';
import { checkWinner, checkEndGame } from './utils/board';
import './index.css'
import Board from './components/Board';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ? JSON.parse(turnFromStorage) : TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if(board[index] || winner) return
    //Change turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Update board
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    // check winner
    const newWinner = checkWinner(newBoard);
    if(newWinner) {
      cofetti();
      setWinner(newWinner);
    } else if(checkEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <Board board={board} updateBoard={updateBoard}/>
      <Turns turn={turn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
