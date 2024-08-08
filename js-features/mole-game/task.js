(() => {
    let wins = 0;
    let losses = 0;


    const updateScore = () => {
        document.getElementById('dead').textContent = wins;
        document.getElementById('lost').textContent = losses;
    };

    const checkWinOrLose = () => {
        if (wins === 10) {
            alert('Вы победили!');
            resetGame();
        } else if (losses === 5) {
            alert('Вы проиграли :( Попробуйте ещё раз!');
            resetGame();
        }
    };

    const handleHoleClick = (event) => {
        if (event.target.classList.contains('hole_has-mole')) {
            wins++;
            event.target.classList.remove('hole_has-mole');
        } else {
            losses++;
        }
        updateScore();
        checkWinOrLose();
    };

    const resetGame = () => {
        wins = 0;
        losses = 0;
        updateScore();
    };

    const getHole = (index) => {
        return document.getElementById(`hole${index}`);
    };

    for (let i = 1; i <= 9; i++) {
        getHole(i).addEventListener('click', handleHoleClick);
    }
})();