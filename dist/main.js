/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ComputerPlayer.js":
/*!*******************************!*\
  !*** ./src/ComputerPlayer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerFactory */ \"./src/PlayerFactory.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n\n\n\nconst ComputerPlayerFactory = function (enemyGameBoard, name) {\n    const computerPlayer = Object.assign(Object(_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(enemyGameBoard, name));\n    const positionsPlayed = [];\n    computerPlayer.play = () => {\n\n        let position = Math.floor(Math.random() * ((_config__WEBPACK_IMPORTED_MODULE_1__[\"GRID\"] * _config__WEBPACK_IMPORTED_MODULE_1__[\"GRID\"])+1));\n        while (positionsPlayed.includes(position)) {\n            position = Math.floor(Math.random() * ((_config__WEBPACK_IMPORTED_MODULE_1__[\"GRID\"] * _config__WEBPACK_IMPORTED_MODULE_1__[\"GRID\"])+1));\n        }\n        positionsPlayed.push(position)\n        const isHit = computerPlayer.enemyGameBoard.receiveAttack(position)\n\n        if (computerPlayer.enemyGameBoard.isAllShipsSunk()) {\n            alert(`${name} Won`);\n            return true;\n        }\n        if (isHit) {\n            computerPlayer.play();\n        }\n        return isHit;\n    }\n\n    computerPlayer.toggleTurn = () => {\n        computerPlayer.isTurn = !computerPlayer.isTurn;\n\n        if (computerPlayer.isTurn) {\n            computerPlayer.play();\n        }\n    };\n\n\n\n    return computerPlayer;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComputerPlayerFactory);\n\n//# sourceURL=webpack:///./src/ComputerPlayer.js?");

/***/ }),

/***/ "./src/DOMModule.js":
/*!**************************!*\
  !*** ./src/DOMModule.js ***!
  \**************************/
/*! exports provided: renderHitBoard, renderMissBoard, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderHitBoard\", function() { return renderHitBoard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMissBoard\", function() { return renderMissBoard; });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n\n\n\nconst DOMMOdule = function (playerOne, playerTwo) {\n\n    const ONE_HALF = playerOne.enemyGameBoard.container;\n    const SECOND_HALF = playerTwo.enemyGameBoard.container;\n\n\n    const init = () => {\n        drawBoard(ONE_HALF);\n        drawBoard(SECOND_HALF);\n\n        drawShips(playerOne, ONE_HALF);\n        drawShips(playerTwo, SECOND_HALF);\n\n    }\n\n    const attachEvents = (boardContainer) => {\n        // Only set the event on the opponent board;\n\n        document.getElementById(boardContainer).addEventListener('click', function (e) {\n\n            if (playerTwo.getTurn()) {\n                const position = (e.target.getAttribute('data-position'));\n                if (playerTwo.play(position) && position){\n                    // SO a player can play again, dont toggle places\n                    return;\n                }\n                playerOne.toggleTurn();\n                playerTwo.toggleTurn();\n                hideShipsBasedOnTurns();\n            }\n            else if (playerOne.getTurn()) {\n                const position = (e.target.getAttribute('data-position'));\n                if (playerOne.play(position) && position){\n                    // SO a player can play again, dont toggle places\n                    return;\n                }\n                playerOne.toggleTurn();\n                playerTwo.toggleTurn();\n                hideShipsBasedOnTurns();\n            }\n\n        }, false);\n\n    }\n\n    const createRowElement = () => {\n        const el = document.createElement('div');\n        el.setAttribute('class', 'row');\n        return el;\n    }\n\n    const createCellElement = (id, position) => {\n        const el = document.createElement('div');\n        el.setAttribute('class', 'col-1 box');\n        el.setAttribute('id', id);\n        el.setAttribute('data-position', parseInt(position));\n        return el;\n    }\n\n\n    const drawBoard = (container) => {\n        for (let i = 0; i < _config__WEBPACK_IMPORTED_MODULE_0__[\"GRID\"]; i++) {\n            const row = createRowElement();\n            for (let j = 0; j < _config__WEBPACK_IMPORTED_MODULE_0__[\"GRID\"]; j++) {\n                const position = (`${i}${j}`)\n                row.append(createCellElement(container + '-' + parseInt(position), position));\n            }\n            document.getElementById(container).append(row)\n        }\n        attachEvents(container);\n    }\n\n\n    const drawShips = (player, container) => {\n\n        const { enemyGameBoard } = player;\n        enemyGameBoard.getGameBoard().forEach((ship) => {\n            document.getElementById(container + '-' + (ship.startingPosition)).innerHTML = `<div class=\"ship ${ship.axis} ${ship.axis}-ship-${ship.ship.length}\"></div>`;\n        });\n        hideShipsBasedOnTurns();\n    }\n\n    const hideShipsBasedOnTurns = () => {\n        if (playerOne.getTurn()) {\n            // Hide Player two ships\n            const playerTwoBoard = playerOne.enemyGameBoard;\n            const playerTwoShipsEl = document.querySelectorAll(`#${playerTwoBoard.container} div.ship`);\n            playerTwoShipsEl.forEach((shipEl) => {\n                shipEl.classList.add('hide-ship');\n            });\n\n\n            // Show Player One ships\n            const playerOneBoard = playerTwo.enemyGameBoard;\n            const playerOneShipsEl = document.querySelectorAll(`#${playerOneBoard.container} div.ship`);\n            playerOneShipsEl.forEach((shipEl) => {\n                shipEl.classList.remove('hide-ship');\n            });\n\n        }\n        else if (playerTwo.getTurn()) {\n            // Hide Player one ships\n            const playerOneBoard = playerTwo.enemyGameBoard;\n            const playerOneShipsEl = document.querySelectorAll(`#${playerOneBoard.container} div.ship`);\n            playerOneShipsEl.forEach((shipEl) => {\n                shipEl.classList.add('hide-ship');\n            });\n\n            // Show Player two ships\n            const playerTwoBoard = playerOne.enemyGameBoard;\n            const playerTwoShipsEl = document.querySelectorAll(`#${playerTwoBoard.container} div.ship`);\n            playerTwoShipsEl.forEach((shipEl) => {\n                shipEl.classList.remove('hide-ship');\n            });\n        }\n    }\n\n    return {\n        init\n    }\n};\n\nconst renderHitBoard = (boardContainer, position) => {\n\n    document.getElementById(`${boardContainer}-${position}`).classList.add('hit')\n}\nconst renderMissBoard = (boardContainer, position) => {\n\n    document.getElementById(`${boardContainer}-${position}`).classList.add('miss')\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DOMMOdule);\n\n//# sourceURL=webpack:///./src/DOMModule.js?");

/***/ }),

/***/ "./src/GameModule.js":
/*!***************************!*\
  !*** ./src/GameModule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _PlayerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerFactory */ \"./src/PlayerFactory.js\");\n/* harmony import */ var _ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComputerPlayer */ \"./src/ComputerPlayer.js\");\n/* harmony import */ var _DOMModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMModule */ \"./src/DOMModule.js\");\n/* harmony import */ var _GameboardFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GameboardFactory */ \"./src/GameboardFactory.js\");\n\n\n\n\nconst GameModule = function () {\n\n\n\n    const playerOneBoard = Object(_GameboardFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('player-one');\n    const playerTwoBoard = Object(_GameboardFactory__WEBPACK_IMPORTED_MODULE_3__[\"default\"])('player-two');\n\n\n\n    const playerOne = Object(_ComputerPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(playerTwoBoard, \"Player One\");\n    // const playerOne = PlayerFactory(playerTwoBoard, \"Player One\");\n    const playerTwo = Object(_PlayerFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(playerOneBoard, \"Player Two\");\n\n    const domModule = Object(_DOMModule__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(playerOne, playerTwo);\n\n    playerTwo.setClient(true);\n\n    playerOne.setTurn(false);\n    playerTwo.setTurn(false);\n\n\n    const start = () => {\n        playerTwo.setTurn(true);\n        domModule.init();\n\n    }\n    return {\n        start\n    }\n}()\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameModule);\n\n//# sourceURL=webpack:///./src/GameModule.js?");

/***/ }),

/***/ "./src/GameboardFactory.js":
/*!*********************************!*\
  !*** ./src/GameboardFactory.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipFactory */ \"./src/ShipFactory.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n/* harmony import */ var _DOMModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMModule */ \"./src/DOMModule.js\");\n\n\n\n\nconst GameBoardFactory = function (container) {\n    const gameBoard = [];\n    const addShipToGameBoard = (ship, startingPosition, axis) => {\n        ship.setPosition(startingPosition, axis);\n        gameBoard.push({startingPosition, ship, axis});\n    }\n    const createShips = () => {\n        const smallShip1 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n        addShipToGameBoard(smallShip1, 17, _config__WEBPACK_IMPORTED_MODULE_1__[\"VERTICAL\"])\n        const smallShip2 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n        addShipToGameBoard(smallShip2, 52, _config__WEBPACK_IMPORTED_MODULE_1__[\"HORIZONTAL\"])\n        const smallShip3 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n        addShipToGameBoard(smallShip3, 70, _config__WEBPACK_IMPORTED_MODULE_1__[\"HORIZONTAL\"])\n        const smallShip4 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(1);\n        addShipToGameBoard(smallShip4, 94, _config__WEBPACK_IMPORTED_MODULE_1__[\"HORIZONTAL\"])\n\n\n\n        const mediumShip1 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n        addShipToGameBoard(mediumShip1, 39, _config__WEBPACK_IMPORTED_MODULE_1__[\"VERTICAL\"])\n        const mediumShip2 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n        addShipToGameBoard(mediumShip2, 44, _config__WEBPACK_IMPORTED_MODULE_1__[\"VERTICAL\"])\n        const mediumShip3 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(2);\n        addShipToGameBoard(mediumShip3, 90, _config__WEBPACK_IMPORTED_MODULE_1__[\"HORIZONTAL\"])\n\n\n\n        const bigShip1 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n        addShipToGameBoard(bigShip1, 30, _config__WEBPACK_IMPORTED_MODULE_1__[\"VERTICAL\"])\n        const bigShip2 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n        addShipToGameBoard(bigShip2, 73, _config__WEBPACK_IMPORTED_MODULE_1__[\"HORIZONTAL\"])\n        const bigShip3 = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(3);\n        addShipToGameBoard(bigShip3, 77, _config__WEBPACK_IMPORTED_MODULE_1__[\"HORIZONTAL\"])\n\n        return [smallShip1, smallShip2, smallShip3, smallShip4, mediumShip1, mediumShip2, mediumShip3, bigShip1, bigShip2, bigShip3]\n    }\n\n    const ships = createShips();\n\n    const receiveAttack = (position) => {\n\n        for (let i = 0; i < ships.length; i ++) {\n            const ship = ships[i];\n            if (ship.hit(position)) {\n                Object(_DOMModule__WEBPACK_IMPORTED_MODULE_2__[\"renderHitBoard\"])(container, position);\n                return true;\n            }\n        }\n\n        Object(_DOMModule__WEBPACK_IMPORTED_MODULE_2__[\"renderMissBoard\"])(container, position);\n        return false\n    }\n\n    const getShips = () => ships\n    const getGameBoard = () => gameBoard;\n\n    const isAllShipsSunk = () => {\n        const numberOfShips = gameBoard.length;\n        let numberOfShipsSank = 0\n        for (let i = 0; i < ships.length; i ++) {\n            const ship = ships[i];\n            if (ship.isSunk()) {\n                numberOfShipsSank++;\n            }\n        }\n\n        return numberOfShips === numberOfShipsSank;\n    }\n\n    return {\n        getShips,\n        receiveAttack,\n        getGameBoard,\n        container,\n        isAllShipsSunk,\n        gameBoard\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameBoardFactory);\n\n\n//# sourceURL=webpack:///./src/GameboardFactory.js?");

/***/ }),

/***/ "./src/PlayerFactory.js":
/*!******************************!*\
  !*** ./src/PlayerFactory.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst PlayerFactory = function (enemyGameBoard, name) {\n    let isTurn = false;\n    let isClient = false;\n    const getTurn = () => isTurn;\n    const setTurn = turn => isTurn = turn;\n    const toggleTurn = () => isTurn = !isTurn;\n\n    const play = position => {\n        const isHit = enemyGameBoard.receiveAttack(position)\n        if (enemyGameBoard.isAllShipsSunk()) {\n            alert(`${name} Won`);\n            return true;\n        }\n        return isHit;\n    }\n\n    const setClient = (_isClient) => {\n        isClient = _isClient;\n    }\n\n    const setGameBoard = (_setGameBoard) => enemyGameBoard = _setGameBoard;\n    const getGameBoard = () => enemyGameBoard\n\n    const getClient = () => isClient;\n\n\n  return {\n      getTurn,\n      setTurn,\n      play,\n      enemyGameBoard,\n      getClient,\n      setClient,\n      toggleTurn,\n      setGameBoard,\n      getGameBoard,\n      isTurn\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PlayerFactory);\n\n//# sourceURL=webpack:///./src/PlayerFactory.js?");

/***/ }),

/***/ "./src/ShipFactory.js":
/*!****************************!*\
  !*** ./src/ShipFactory.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config/index.js\");\n\n\nconst ShipFactory = function (length) {\n    const positions = [];\n    const hitPositions = [];\n    const hit = (number) => {\n        for (let i = 0; i < positions.length; i++ ) {\n            const cell = positions[i];\n            if (cell == number) {\n                hitPositions.push(number);\n                return true;\n            }\n        }\n        return false;\n    }\n    const isSunk = () => hitPositions.length === length\n\n    const setVerticalPositions = (startingPosition, length) => {\n        for(let i = 0; i < length; i++) {\n            positions.push(startingPosition+(i * _config__WEBPACK_IMPORTED_MODULE_0__[\"GRID\"]))\n        }\n        return positions;\n    }\n    const setHorizontalPositions = (startingPosition, length) => {\n        for (let i = 0; i < length; i ++) {\n            positions.push(startingPosition + i);\n        }\n        return positions;\n    }\n\n    const setPosition = (startingPosition, axis) => {\n\n        if (axis === _config__WEBPACK_IMPORTED_MODULE_0__[\"HORIZONTAL\"]) {\n            setHorizontalPositions(startingPosition, length);\n        }\n        else if (axis === _config__WEBPACK_IMPORTED_MODULE_0__[\"VERTICAL\"]) {\n            setVerticalPositions(startingPosition, length);\n        }\n    }\n\n    return {\n        length,\n        hit,\n        positions,\n        isSunk,\n        setPosition\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShipFactory);\n\n//# sourceURL=webpack:///./src/ShipFactory.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: VERTICAL, HORIZONTAL, GRID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VERTICAL\", function() { return VERTICAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HORIZONTAL\", function() { return HORIZONTAL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GRID\", function() { return GRID; });\nconst VERTICAL = 'vertical';\nconst HORIZONTAL ='horizontal';\nconst GRID = 10\n\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameModule */ \"./src/GameModule.js\");\n\n\n\n_GameModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"].start();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });