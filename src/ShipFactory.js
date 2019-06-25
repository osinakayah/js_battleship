import {VERTICAL, GRID, HORIZONTAL} from "./config";

const ShipFactory = function (length) {
    const positions = [];
    const hitPositions = [];
    const hit = (number) => {
        for (let i = 0; i < positions.length; i++ ) {
            const cell = positions[i];
            if (cell == number) {
                hitPositions.push(number);
                return true;
            }
        }
        return false;
    }
    const isSunk = () => hitPositions.length === length

    const setVerticalPositions = (startingPosition, length) => {
        for(let i = 0; i < length; i++) {
            positions.push(startingPosition+(i * GRID))
        }
        return positions;
    }
    const setHorizontalPositions = (startingPosition, length) => {
        for (let i = 0; i < length; i ++) {
            positions.push(startingPosition + i);
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