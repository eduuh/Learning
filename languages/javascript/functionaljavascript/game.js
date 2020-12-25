var game = {};

game.murderer = '??';
game['weapons'] = [
  { type: 'laser', location: 'lab' },
  { type: 'angry cats' },
  'dish soap',
];

game.name = [];
game.name[0] = 'miss Scarlet';
// we cannot push things to an objects, but we can do push to an array.
game.name.push('Mr. Green');
