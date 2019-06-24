import {VERTICAL, GRID, HORIZONTAL} from "./config";
import CellFactory from './CellFactory'

const ShipFactory = function (length) {
    const positions = [];
    const hitPositions = [];
    const hit = (number) => {
        positions.forEach((cell) => {
            if (cell.position === number) {
                hitPositions.push(CellFactory(number, true));
            }
        });
    }
    const isSunk = () => hitPositions.length === length

    const setVerticalPositions = (startingPosition, length) => {
        for(let i = 0; i < length; i++) {
            positions.push(CellFactory(startingPosition+(i * GRID), false))
        }
        return positions;
    }
    const setHorizontalPositions = (startingPosition, length) => {
        for (let i = 0; i < length; i ++) {
            positions.push(CellFactory(startingPosition + i, false));
        }
        return positions;
    }

    const setPosition = (startingPosition, axis) => {

        if (axis === HORIZONTAL) {
            setHorizontalPositions(startingPosition, length);
        }
        else if (axis === VERTICAL) {
            setVerticalPositions(startingPosition, length);
        }
    }

    return {
        length,
        hit,
        positions,
        isSunk,
        setPosition
    }
};

export default ShipFactory;