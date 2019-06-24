import ShipFactory from '../src/ShipFactory';
import CellFactory from '../src/CellFactory';

import {VERTICAL, HORIZONTAL } from '../src/config';
test('Created a ship HORIZONTAL object', () => {
    const ship = ShipFactory(2);
    expect(ship).not.toBeUndefined();

    expect(ship).toHaveProperty('length', 2);
    expect(ship).toHaveProperty('positions');
    expect(ship.positions).toEqual([])

    ship.setPosition(17, HORIZONTAL);

    expect(ship.positions).toEqual([CellFactory(17, false), CellFactory(18, false)])

    expect(ship.positions.length).toBe(2)

    expect(ship.hit).toBeInstanceOf(Function);
});

test('Created a ship VERTICAL object', function() {
    const ship = ShipFactory(3);
    expect(ship).not.toBeUndefined();

    expect(ship).toHaveProperty('length', 3);
    expect(ship).toHaveProperty('positions');
    expect(ship.positions).toEqual([])
    ship.setPosition(0, VERTICAL);
    expect(ship.positions).toEqual([CellFactory(0, false),CellFactory(10, false),CellFactory(20, false)])
    expect(ship.positions.length).toBe(3)

    expect(ship.hit).toBeInstanceOf(Function);
});

test('Hit a ship', function() {
    const ship = ShipFactory(3);
    ship.setPosition(0, VERTICAL);
    ship.hit(0);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit(10);
    ship.hit(20);
    expect(ship.isSunk()).toBeTruthy();
});

test('Set Ship Position', function () {
    const ship = ShipFactory(1);
    ship.setPosition(17, HORIZONTAL);
    expect(ship.positions.length).toBe(1)
})