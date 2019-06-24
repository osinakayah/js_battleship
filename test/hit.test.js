import CellFactory from '../src/CellFactory';

test('An unhit cell factory in game board', function(){
    const cellPosition = CellFactory(0, false);
    expect(cellPosition).not.toBeUndefined();

    expect(cellPosition).toHaveProperty('position');
    expect(cellPosition).toHaveProperty('position', 0);

    expect(cellPosition).toHaveProperty('isHit');
    expect(cellPosition).toHaveProperty('isHit', false);
});

test('A hit cell factory in game board', function() {
    const cellPosition = CellFactory(0, true);
    expect(cellPosition).not.toBeUndefined();

    expect(cellPosition).toHaveProperty('position');
    expect(cellPosition).toHaveProperty('position', 0);

    expect(cellPosition).toHaveProperty('isHit');
    expect(cellPosition).toHaveProperty('isHit', true);
});
