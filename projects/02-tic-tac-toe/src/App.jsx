import { useState } from "react"

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index);
  }

  return(
    <div className={className} onClick={ handleClick }>
      {children}
    </div>
  );
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  
  const [turn, setTurn] = useState(TURNS.O)

  const updateBoard = (index) => {

    if (board[index] !== null) {
      return
    }
    setTurn( turn === TURNS.X ? TURNS.O : TURNS.X )

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
  }
  
  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_,index)=>{
            return(
              <Square key={index} 
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
 
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App 
