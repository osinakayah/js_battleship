import {GRID} from "./config";

const DOMMOdule = function (playerOne, playerTwo,) {
    const ENEMY_HALF = 'enemy-half';
    const HUMAN_HALF = 'human-half';

    const playerTwoBoard = playerOne.enemyGameBoard;
    const playerOneBoard = playerTwo.enemyGameBoard;

    const init = () => {
        drawBoard(ENEMY_HALF);
        drawBoard(HUMAN_HALF);

        drawShips(playerOneBoard, HUMAN_HALF);
        drawShips(playerTwoBoard, ENEMY_HALF);

        attachEvents();

    }

    const attachEvents = () => {
        // Only set the event on the opponent board;
        document.getElementById(ENEMY_HALF).addEventListener('click', function (e) {
            const position = (e.target.getAttribute('data-position'));
            if (position) {
                if (playerTwo.getTurn()) {
                    playerTwo.play(position);
                }
                else {
                    playerOne.play(position);
                }
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
    }


    const drawShips = (gameBoard, container) => {
        gameBoard.getGameBoard().forEach((ship) => {
            document.getElementById(container + '-' + (ship.startingPosition)).innerHTML = <div draggable="true" class="ship ${ship.axis} ${ship.axis}-ship-${ship.ship.length}"></div>;
        });
    }
    return {
        init
    }
};

export default DOMMOdule;
