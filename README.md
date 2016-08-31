# pokemon-stat-calculator

[![Build Status](https://travis-ci.org/dalphyx/pokemon-stat-calculator.svg?branch=master)](https://travis-ci.org/dalphyx/pokemon-stat-calculator) [![npm package](https://img.shields.io/npm/v/pokemon-stat-calculator.svg)](https://www.npmjs.com/package/pokemon-stat-calculator)

> Calculate [Pokémon](https://en.wikipedia.org/wiki/Pok%C3%A9mon) stats



## Install

```
$ npm install pokemon-stat-calculator --save
```



## Usage

```jsx
const calculator = require('pokemon-stat-calculator')

calculator.calHpStats(3, 78, 249, 50)
// => 170

calculator.calHpStats(31, 1, 252, 100)
// => 1, No.292 Shedinja's HP always be 1.

calculator.calUnhpStats(0, 159, 0, 100)
// => 323

calculator.calUnhpStats(31, 159, 249, 50)
// => 210

let charizardBaseStats = [78, 104, 78, 159, 115, 100]
let 6v = [31, 31, 31, 31, 31, 31]
let 0v = [0, 0, 0, 0, 0, 0]
let emptyEVs = [0, 0, 0, 0, 0, 0]
let fullEVs = [6, 0, 0, 252, 0, 252]
let nature = [1, 1, 1, 1, 1]

calculator.calAllStats(6v, charizardBaseStats, emptyEVs, 50, nature)
// => [153, 124, 98, 179, 135, 120]

calculator.calAllStats(0v, charizardBaseStats, fullEVs, 100, nature)
// => [267, 213, 161, 386, 235, 268]
```


## API

### calHpStats: (iv, baseStats, ev, level)

### calUnhpStats: (iv, baseStats, ev = 0, level = 1, nature = 1)

### calAllStats: (ivs, baseStats, evs, level = 1, nature = [1, 1, 1, 1, 1])


## License

MIT © [dalphyx](https://github.com/dalphyx)
