import  PlayerFactory from './PlayerFactory'
import  ComputerPlayer from './ComputerPlayer'
import DOMModule from './DOMModule';
import GameBoardFactory from "./GameboardFactory";
const GameModule = function () {



    const playerOneBoard = GameBoardFactory('player-one');
    const playerTwoBoard = GameBoardFactory('player-two');



    const playerOne = ComputerPlayer(playerTwoBoard, "Player One");
    // const playerOne = PlayerFactory(playerTwoBoard, "Player One");
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