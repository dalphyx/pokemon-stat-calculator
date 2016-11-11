import pokemonBaseStats from 'pokemon-base-stats'
import test from 'ava'
import main from '../src'

test('Calculate HP stats', t => {
  t.is(main.calHpStats(31, 78, 0, 100), 297)
  t.is(main.calHpStats(31, 78, 0, 50), 153)
  t.is(main.calHpStats(31, 78, 249, 50), 184)
  t.is(main.calHpStats(3, 78, 249, 50), 170)

  // Test No.292 Shedinja
  t.is(main.calHpStats(31, 1, 252, 100), 1)
})

test('Calculate Unhp stats', t => {
  t.is(main.calUnhpStats(31, 159, 0, 100), 354)
  t.is(main.calUnhpStats(31, 159, 0, 50), 179)
  t.is(main.calUnhpStats(0, 159, 0, 100), 323)
  t.is(main.calUnhpStats(31, 159, 249, 50), 210)
})

test('Calculate all stats', t => {
  let charizardBase = pokemonBaseStats.getById({ id: 6, forme: 'megaY' })
  let charizard6v = [31, 31, 31, 31, 31, 31]
  let charizardIVBad = [2, 2, 2, 2, 2, 2]
  let emptyEVs = [0, 0, 0, 0, 0, 0]
  let fullEVs = [6, 0, 0, 252, 0, 252]

  t.deepEqual(main.calAllStats(charizard6v, charizardBase, emptyEVs, 50), [153, 124, 98, 179, 135, 120])
  t.deepEqual(main.calAllStats(charizardIVBad, charizardBase, emptyEVs, 50), [139, 110, 84, 165, 121, 106])
  t.deepEqual(main.calAllStats(charizard6v, charizardBase, fullEVs, 100), [298, 244, 192, 417, 266, 299])
  t.deepEqual(main.calAllStats(charizardIVBad, charizardBase, fullEVs, 50), [139, 110, 84, 196, 121, 137])
  t.deepEqual(main.calAllStats(charizard6v, charizardBase, fullEVs, 100, 'timid'), [298, 219, 192, 417, 266, 328])
})
