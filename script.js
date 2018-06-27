function up(sequence, cube) {
  const order = ['0,0,1', '0,0,0', '1,0,0', '1,0,1', '0,1,1', '0,1,0', '1,1,0', '1,1,1']
  var ordering = {}; // map for efficient lookup of sortIndex
  for (let i in order) {
    ordering[order[i]] = i;
  }

  cube = new Map(Array.from(cube).sort((a, b) => (order.indexOf(a[0]) < order.indexOf(b[0])) ? -1 : (order.indexOf(b[0]) < order.indexOf(a[0])) ? 1 : 0));
  console.log(cube)
  return cube;
}

let arr = [
  {
    cube: 0,
    letter: 0,
    hash: 0
  },
];
let output = '';
const sequence = ['0,0,0', '0,1,0', '1,1,0', '1,0,0', '0,0,1', '0,1,1', '1,1,1', '1,0,1'];
//        (0,1,1)       (1,1,1)
// (0,1,0)       (1,1,0)
//        (0,0,1)       (1,0,1)
// (0,0,0)       (1,0,0)
let text = 'SoloLearn'.split('');
let cube = new Map();
for (let count in sequence) {
  cube.set(sequence[count], text[count]);
}
cube = up(sequence, cube);
for (let count in sequence) {
  output += cube.get(sequence[count]);
}

console.log(output);