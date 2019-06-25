import  PlayerFactory from './PlayerFactory'
import DOMModule from './DOMModule';
import GameBoardFactory from "./GameboardFactory";
const GameModule = function () {



    const playerOneBoard = GameBoardFactory('player-one');
    const playerTwoBoard = GameBoardFactory('player-two');



    const playerOne = PlayerFactory(playerTwoBoard, "Player One");
    const playerTwo = PlayerFactory(playerOneBoard, "Player Two");

    const domModule = DOMModule(playerOne, playerTwo);

    playerTwo.setClient(true);

    playerOne.setTurn(false);
    playerTwo.setTurn(false);


    const start = () => {
        playerTwo.setTurn(true);
        domModule.init();

    }
    return {
        start
    }
}()

export  default GameModule;