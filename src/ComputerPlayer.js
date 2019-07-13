import  PlayerFactory from './PlayerFactory'
import {GRID} from "./config";

const ComputerPlayerFactory = function (enemyGameBoard, name) {
    const computerPlayer = Object.assign(PlayerFactory(enemyGameBoard, name));
    const positionsPlayed = [];
    computerPlayer.play = () => {
        console.log("Computer played");
        let position = Math.floor(Math.random() * ((GRID * GRID)));
        while (positionsPlayed.includes(position)) {
            position = Math.floor(Math.random() * ((GRID * GRID)));
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