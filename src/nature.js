const data = {
  hardy: [1, 1, 1, 1, 1],
  lonely: [1.1, 0.9, 1, 1, 1],
  adamant: [1.1, 1, 0.9, 1, 1],
  naughty: [1.1, 1, 1, 0.9, 1],
  brave: [1.1, 1, 1, 1, 0.9],
  bold: [0.9, 1.1, 1, 1, 1],
  docile: [1, 1, 1, 1, 1],
  impish: [1, 1.1, 0.9, 1, 1],
  lax: [1, 1.1, 1, 0.9, 1],
  relaxed: [1, 1.1, 1, 1, 0.9],
  modest: [0.9, 1, 1.1, 1, 1],
  mild: [1, 0.9, 1.1, 1, 1],
  bashful: [1, 1, 1, 1, 1],
  rash: [1, 1, 1.1, 0.9, 1],
  quiet: [1, 1, 1.1, 1, 0.9],
  calm: [0.9, 1, 1, 1.1, 1],
  gentle: [1, 0.9, 1, 1.1, 1],
  careful: [1, 1, 0.9, 1.1, 1],
  quirky: [1, 1, 1, 1, 1],
  sassy: [1, 1, 1, 1.1, 0.9],
  timid: [0.9, 1, 1, 1, 1.1],
  hasty: [1, 0.9, 1, 1, 1.1],
  jolly: [1, 1, 0.9, 1, 1.1],
  naive: [1, 1, 1, 0.9, 1.1],
  serious: [1, 1, 1, 1, 1]
}

/**
 * @param  {String} nature Pokémon nature
 * @return {Array}
 */
function getNatureValue (nature) {
  if (typeof nature === 'string') {
    nature = nature.toLowerCase()
    if (data[nature]) {
      return data[nature]
    } else {
      throw new Error('The nature is a invalid Pokémon nature.')
    }
  }
}

exports.data = data
exports.names = Object.keys(data)
exports.getNatureValue = getNatureValue
