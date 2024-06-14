export default function Winner ({winner, resetGame}) {
    if (winner === null) return;
    const winnerText = winner ? 'El ganador es: ' + winner : 'Empate';

    const handleReset = () => {
        resetGame();
    }

    return (
        <section>
                {(
                <section className="winner">
                    <div className="text">
                    <h2>{winnerText}</h2>
                    <footer>
                        <button onClick={handleReset}>Empezar de nuevo</button>
                    </footer>
                    </div>
                </section>
            )}
        </section>
    )
}