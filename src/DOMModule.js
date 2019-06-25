import {GRID} from "./config";

const DOMMOdule = function (playerOne, playerTwo) {

    const ONE_HALF = playerOne.enemyGameBoard.container;
    const SECOND_HALF = playerTwo.enemyGameBoard.container;


    const init = () => {
        drawBoard(ONE_HALF);
        drawBoard(SECOND_HALF);

        drawShips(playerOne, ONE_HALF);
        drawShips(playerTwo, SECOND_HALF);

    }

    const attachEvents = (boardContainer) => {
        // Only set the event on the opponent board;

        document.getElementById(boardContainer).addEventListener('click', function (e) {
            const position = (e.target.getAttribute('data-position'));

            if (position) {

                if (playerTwo.getTurn()) {
                    if (playerTwo.play(position)){
                        // SO a player can play again, dont toggle places
                        return;
                    }
                }
                else {
                    if(playerOne.play(position)){
                        return;
                    }
                }
                playerOne.toggleTurn();
                playerTwo.toggleTurn();

                hideShipsBasedOnTurns();
            }

        }, false);

    }

    const createRowElement = () => {
        const el = document.createElement('div');
        el.setAttribute('class', 'row');
        return el;
    }

    const createCellElement = (id, position) => {
        const el = document.createElement('div');
        el.setAttribute('class', 'col-1 box');
        el.setAttribute('id', id);
        el.setAttribute('data-position', parseInt(position));
        return el;
    }

    const drawBoard = (container) => {
        for (let i = 0; i < GRID; i++) {
            const row = createRowElement();
            for (let j = 0; j < GRID; j++) {
                const position = (${i}${j})
                row.append(createCellElement(container + '-' + parseInt(position), position));
            }
            document.getElementById(container).append(row)
        }
        attachEvents(container);
    }


    const drawShips = (player, container) => {

        const { enemyGameBoard } = player;
        enemyGameBoard.getGameBoard().forEach((ship) => {
            document.getElementById(container + '-' + (ship.startingPosition)).innerHTML = <div class="ship ${ship.axis} ${ship.axis}-ship-${ship.ship.length}"></div>;
        });
        hideShipsBasedOnTurns();
    }

    const hideShipsBasedOnTurns = () => {
        if (playerOne.getTurn()) {
            // Hide Player two ships
            const playerTwoBoard = playerOne.enemyGameBoard;
            const playerTwoShipsEl = document.querySelectorAll(#${playerTwoBoard.container} div.ship);
            playerTwoShipsEl.forEach((shipEl) => {
                shipEl.classList.add('hide-ship');
            });


            // Show Player One ships
            const playerOneBoard = playerTwo.enemyGameBoard;
            const playerOneShipsEl = document.querySelectorAll(#${playerOneBoard.container} div.ship);
            playerOneShipsEl.forEach((shipEl) => {
                shipEl.classList.remove('hide-ship');
            });

        }
        else if (playerTwo.getTurn()) {
            // Hide Player one ships
            const playerOneBoard = playerTwo.enemyGameBoard;
            const playerOneShipsEl = document.querySelectorAll(#${playerOneBoard.container} div.ship);
            playerOneShipsEl.forEach((shipEl) => {
                shipEl.classList.add('hide-ship');
            });

            // Show Player two ships
            const playerTwoBoard = playerOne.enemyGameBoard;
            const playerTwoShipsEl = document.querySelectorAll(#${playerTwoBoard.container} div.ship);
            playerTwoShipsEl.forEach((shipEl) => {
                shipEl.classList.remove('hide-ship');
            });
        }
    }

    return {
        init
    }
};

export const renderHitBoard = (boardContainer, position) => {
    document.getElementById(${boardContainer}-${position}).classList.add('hit')
}
export const renderMissBoard = (boardContainer, position) => {
    document.getElementById(${boardContainer}-${position}).classList.add('miss')
}
export default DOMMOdule;
