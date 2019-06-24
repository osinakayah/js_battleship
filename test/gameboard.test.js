import GameboardFactory from '../src/GameboardFactory';
import { GRID } from "../src/config";

test("Create empty gameboard", function () {
    const  gameboard = GameboardFactory();
    expect(gameboard.getShips().length).toBeGreaterThan(0)
});

test("Receive attack for small ships", function(){
    const  gameboard = GameboardFactory();
    const ship = gameboard.getShips()[0];
    gameboard.receiveAttack(17);
    expect(ship.isSunk()).toBeTruthy();
});

test("Receive attack for big ships", function(){
    const  gameboard = GameboardFactory();
    const ship = gameboard.getShips()[8];

    gameboard.receiveAttack(73);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(74);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(75);
    expect(ship.isSunk()).toBeTruthy();
});

test("Receive attack for medium ships", function(){
    const  gameboard = GameboardFactory();
    const ship = gameboard.getShips()[6];

    gameboard.receiveAttack(90);
    expect(ship.isSunk()).toBeFalsy();
    gameboard.receiveAttack(91);
    expect(ship.isSunk()).toBeTruthy();
});
