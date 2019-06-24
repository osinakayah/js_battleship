import  PlayerFactory from './PlayerFactory'
import DOMModule from './DOMModule';
import GameBoardFactory from "./GameboardFactory";
import {GRID} from "./config";
const GameModule = function () {

    const playerOneBoard = GameBoardFactory(GRID)
    const playerTwoBoard = GameBoardFactory(GRID);

    const playerOne = PlayerFactory("Computer", playerTwoBoard);
    const playerTwo = PlayerFactory("Human", playerOneBoard);

    playerOne.setTurn(false);
    playerTwo.setTurn(false);


    const start = () => {
        playerOne.setTurn(true);
        DOMModule(playerOne, playerTwo).init();
    }
   return {
        start
   }
}()

export  default GameModule;
