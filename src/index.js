const natures = require('./nature')

/**
 * @param  {Number} iv          Pokémon HP IV(Individual Values)
 * @param  {Number} baseStats   Pokémon base stats
 * @param  {Number} ev          Pokémon HP EV(Effort Values) from 0 ~ 255
 * @param  {Number} level       Pokémon level from 1 ~ 100
 * @return {Number}
 */

function calHpStats (iv, baseStats, ev, level) {
  // No.292 Shedinja's HP always be 1.
  if (baseStats === 1) {
    return 1
  }

  let result = Math.floor((iv + baseStats * 2 + ev / 4) * level / 100 + 10 + level)
  return result
}

/**
 * @param  {Number} iv          Pokémon IV(Individual Values)
 * @param  {Number} baseStats   Pokémon base stats
 * @param  {Number} ev          Pokémon EV(Effort Values) from 0 ~ 255
 * @param  {Number} level       Pokémon level from 1 ~ 100
 * @param  {Number} nature      Pokémon nature
 * @return {Number}
 */
function calUnhpStats (iv, baseStats, ev = 0, level = 1, nature = 1) {
  let baseResult = Math.floor(((iv + baseStats * 2 + ev / 4) * level / 100 + 5))
  let result = Math.floor(baseResult * nature)
  return result
}

/**
 * @param  {Array}         ivs          Pokémon IVs(Individual Values)
 * @param  {Array}         baseStats    Pokémon base stats
 * @param  {Array}         evs          Pokémon EVs(Effort Values) from 0 ~ 255, the sum of EVs <= 510
 * @param  {Number}        level        Pokémon level from 1 ~ 100
 * @param  {Array|String}  nature       Pokémon nature
 * @return {Array}
 */
function calAllStats (ivs, baseStats, evs, level = 1, nature = [1, 1, 1, 1, 1]) {
  let stats = []

  stats.push(calHpStats(ivs[0], baseStats[0], evs[0], level))

  if (typeof nature === 'string') {
    nature = natures.getNatureValue(nature)
  }

  for (let i = 1; i < 6; i++) {
    stats.push(calUnhpStats(ivs[i], baseStats[i], evs[i], level, nature[i - 1]))
  }

  return stats
}

exports.getNatureNames = natures.names
exports.getNatureValue = natures.getNatureValue
exports.getNatureDatas = natures.data
exports.calHpStats = calHpStats
exports.calUnhpStats = calUnhpStats
exports.calAllStats = calAllStats
