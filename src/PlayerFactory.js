const PlayerFactory = function (enemyGameBoard, name) {
    let isTurn = false;
    let isClient = false;
    const getTurn = () => isTurn;
    const setTurn = turn => isTurn = turn;
    const toggleTurn = () => isTurn = !isTurn;

    const play = position => {
        const isHit = enemyGameBoard.receiveAttack(position)
        if (enemyGameBoard.isAllShipsSunk()) {
            alert(`${name} Won`);
            return true;
        }
        return isHit;
    }

    const setClient = (_isClient) => {
        isClient = _isClient;
    }

    const getClient = () => isClient;


  return {
      getTurn,
      setTurn,
      play,
      enemyGameBoard,
      getClient,
      setClient,
      toggleTurn
  }
};

export default PlayerFactory