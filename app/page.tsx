import Board from './board'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Next JS tic tac toe
      </div>
      <div>
        <Board />
      </div>
    </main>
  )
}
