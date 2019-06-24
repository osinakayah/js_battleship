import ShipFactory from './ShipFactory'
import {VERTICAL, HORIZONTAL } from "./config";

const GameBoardFactory = function () {
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
        ships.forEach((ship)=> {
            ship.hit(position);
        });
    }

    const getShips = () => ships
    const getGameBoard = () => gameBoard

    return {
        getShips,
        receiveAttack,
        getGameBoard
    }
}

export default  GameBoardFactory
