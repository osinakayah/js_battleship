import ShipFactory from './ShipFactory'
import {VERTICAL, HORIZONTAL } from "./config";
import {renderHitBoard, renderMissBoard} from './DOMModule'

const GameBoardFactory = function (container) {
    const gameBoard = [];
    const addShipToGameBoard = (ship, startingPosition, axis) => {
        ship.setPosition(startingPosition, axis);
        gameBoard.push({startingPosition, ship, axis});
    }
    const createShips = () => {
        const smallShip1 = ShipFactory(1);
        addShipToGameBoard(smallShip1, 17, VERTICAL)
        const smallShip2 = ShipFactory(1);
        addShipToGameBoard(smallShip2, 52, HORIZONTAL)
        const smallShip3 = ShipFactory(1);
        addShipToGameBoard(smallShip3, 70, HORIZONTAL)
        const smallShip4 = ShipFactory(1);
        addShipToGameBoard(smallShip4, 94, HORIZONTAL)



        const mediumShip1 = ShipFactory(2);
        addShipToGameBoard(mediumShip1, 39, VERTICAL)
        const mediumShip2 = ShipFactory(2);
        addShipToGameBoard(mediumShip2, 44, VERTICAL)
        const mediumShip3 = ShipFactory(2);
        addShipToGameBoard(mediumShip3, 90, HORIZONTAL)



        const bigShip1 = ShipFactory(3);
        addShipToGameBoard(bigShip1, 30, VERTICAL)
        const bigShip2 = ShipFactory(3);
        addShipToGameBoard(bigShip2, 73, HORIZONTAL)
        const bigShip3 = ShipFactory(3);
        addShipToGameBoard(bigShip3, 77, HORIZONTAL)

        return [smallShip1, smallShip2, smallShip3, smallShip4, mediumShip1, mediumShip2, mediumShip3, bigShip1, bigShip2, bigShip3]
    }

    const ships = createShips();

    const receiveAttack = (position) => {

        for (let i = 0; i < ships.length; i ++) {
            const ship = ships[i];
            if (ship.hit(position)) {
                renderHitBoard(container, position);
                return true;
            }
        }

        renderMissBoard(container, position);
        return false
    }

    const getShips = () => ships
    const getGameBoard = () => gameBoard;

    const isAllShipsSunk = () => {
        const numberOfShips = gameBoard.length;
        let numberOfShipsSank = 0
        for (let i = 0; i < ships.length; i ++) {
            const ship = ships[i];
            if (ship.isSunk()) {
                numberOfShipsSank++;
            }
        }

        return numberOfShips === numberOfShipsSank;
    }

    return {
        getShips,
        receiveAttack,
        getGameBoard,
        container,
        isAllShipsSunk,
        gameBoard
    }
}

export default  GameBoardFactory
