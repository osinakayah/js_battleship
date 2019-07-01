import  PlayerFactory from './PlayerFactory'
import {GRID} from "./config";

const ComputerPlayerFactory = function (enemyGameBoard, name) {
    const computerPlayer = Object.assign(PlayerFactory(enemyGameBoard, name));
    const positionsPlayed = [];
    computerPlayer.play = () => {

        let position = Math.floor(Math.random() * ((GRID * GRID)+1));
        while (positionsPlayed.includes(position)) {
            position = Math.floor(Math.random() * ((GRID * GRID)+1));
        }
        positionsPlayed.push(position)
        const isHit = computerPlayer.enemyGameBoard.receiveAttack(position)

        if (computerPlayer.enemyGameBoard.isAllShipsSunk()) {
            alert(`${name} Won`);
            return true;
        }
        if (isHit) {
            computerPlayer.play();
        }
        return isHit;
    }

    computerPlayer.toggleTurn = () => {
        computerPlayer.isTurn = !computerPlayer.isTurn;

        if (computerPlayer.isTurn) {
            computerPlayer.play();
        }
    };



    return computerPlayer;
}

export default ComputerPlayerFactory;