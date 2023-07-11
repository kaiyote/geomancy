/* eslint-disable @typescript-eslint/no-floating-promises */
import { expect } from '@open-wc/testing'
import { Figures, add, bulkAdd, getData, rearrange } from './Figure'

describe('figure math', () => {
  describe('add', () => {
    ([
      [['Acquisitio', 'Carcer', 'Fortuna Minor'], [Figures.Acquisitio, Figures.Carcer, Figures.FortunaMinor]],
      [['Puella', 'Rubeus', 'Carcer'], [Figures.Puella, Figures.Rubeus, Figures.Carcer]],
      [['Conjunctio', 'Puer', 'Puella'], [Figures.Conjunctio, Figures.Puer, Figures.Puella]],
      [['Populus', 'Cauda Draconis', 'Cauda Draconis'], [Figures.Populus, Figures.CaudaDraconis, Figures.CaudaDraconis]],
      [['Fortuna Minor', 'Carcer', 'Acquisitio'], [Figures.FortunaMinor, Figures.Carcer, Figures.Acquisitio]],
      [['Puella', 'Cauda Draconis', 'Fortuna Major'], [Figures.Puella, Figures.CaudaDraconis, Figures.FortunaMajor]],
      [['Acquisitio', 'Fortuna Major', 'Conjunctio'], [Figures.Acquisitio, Figures.FortunaMajor, Figures.Conjunctio]],
      [['Via', 'Acquisitio', 'Amissio'], [Figures.Via, Figures.Acquisitio, Figures.Amissio]],
      [['Conjunctio', 'Laetitia', 'Cauda Draconis'], [Figures.Conjunctio, Figures.Laetitia, Figures.CaudaDraconis]],
      [['Carcer', 'Cauda Draconis', 'Caput Draconis'], [Figures.Carcer, Figures.CaudaDraconis, Figures.CaputDraconis]],
      [['Amissio', 'Fortuna Minor', 'Conjunctio'], [Figures.Amissio, Figures.FortunaMinor, Figures.Conjunctio]],
      [['Amissio', 'Cauda Draconis', 'Rubeus'], [Figures.Amissio, Figures.CaudaDraconis, Figures.Rubeus]],
      [['Caput Draconis', 'Conjunctio', 'Tristitia'], [Figures.CaputDraconis, Figures.Conjunctio, Figures.Tristitia]],
      [['Rubeus', 'Tristitia', 'Acquisitio'], [Figures.Rubeus, Figures.Tristitia, Figures.Acquisitio]]
    ] as Array<[string[], Figures[]]>).forEach(([[right, left, res], [rVal, lVal, resVal]]) => {
      it(`${right} + ${left} = ${res}`, () => {
        expect(add(rVal, lVal)).to.equal(resVal)
      })
    })
  })

  describe('rearrange', () => {
    ([
      [['Acquisitio', 'Carcer', 'Puella', 'Rubeus'], ['Conjunctio', 'Puer', 'Populus', 'Cauda Draconis'], [Figures.Acquisitio, Figures.Carcer, Figures.Puella, Figures.Rubeus], [Figures.Conjunctio, Figures.Puer, Figures.Populus, Figures.CaudaDraconis]],
      [['Via', 'Acquisitio', 'Conjunctio', 'Laetitia'], ['Carcer', 'Cauda Draconis', 'Amissio', 'Fortuna Minor'], [Figures.Via, Figures.Acquisitio, Figures.Conjunctio, Figures.Laetitia], [Figures.Carcer, Figures.CaudaDraconis, Figures.Amissio, Figures.FortunaMinor]]
    ] as Array<[string[], string[], [Figures, Figures, Figures, Figures], Figures[]]>).forEach(([before, after, beforeVal, afterVal]) => {
      it(`${before.join(',')} => ${after.join(',')}`, () => {
        expect(rearrange(beforeVal)).to.deep.equal(afterVal)
      })
    })
  })

  describe('bulk add', () => {
    ([
      [['Acquisitio', 'Carcer', 'Puella', 'Rubeus', 'Conjunctio', 'Puer', 'Populus', 'Cauda Draconis'], ['Fortuna Minor', 'Carcer', 'Puella', 'Cauda Draconis'], [Figures.Acquisitio, Figures.Carcer, Figures.Puella, Figures.Rubeus, Figures.Conjunctio, Figures.Puer, Figures.Populus, Figures.CaudaDraconis], [Figures.FortunaMinor, Figures.Carcer, Figures.Puella, Figures.CaudaDraconis]],
      [['Via', 'Acquisitio', 'Conjunctio', 'Laetitia', 'Carcer', 'Cauda Draconis', 'Amissio', 'Fortuna Minor'], ['Amissio', 'Cauda Draconis', 'Caput Draconis', 'Conjunctio'], [Figures.Via, Figures.Acquisitio, Figures.Conjunctio, Figures.Laetitia, Figures.Carcer, Figures.CaudaDraconis, Figures.Amissio, Figures.FortunaMinor], [Figures.Amissio, Figures.CaudaDraconis, Figures.CaputDraconis, Figures.Conjunctio]],
      [['Fortuna Minor', 'Carcer', 'Puella', 'Cauda Draconis'], ['Acquisitio', 'Fortuna Major'], [Figures.FortunaMinor, Figures.Carcer, Figures.Puella, Figures.CaudaDraconis], [Figures.Acquisitio, Figures.FortunaMajor]],
      [['Amissio', 'Cauda Draconis', 'Caput Draconis', 'Conjunctio'], ['Rubeus', 'Tristitia'], [Figures.Amissio, Figures.CaudaDraconis, Figures.CaputDraconis, Figures.Conjunctio], [Figures.Rubeus, Figures.Tristitia]]
    ] as Array<[string[], string[], Figures[], Figures[]]>).forEach(([before, after, beforeVal, afterVal]) => {
      it(`adding ${before.join(',')} gives ${after.join(',')}`, () => {
        expect(bulkAdd(beforeVal)).to.deep.equal(afterVal)
      })
    })
  })

  describe('getData', () => {
    ([
      [Figures.Acquisitio, 'Acquisitio'],
      [Figures.Albus, 'Albus'],
      [Figures.Amissio, 'Amissio'],
      [Figures.CaputDraconis, 'Caput Draconis'],
      [Figures.Carcer, 'Carcer'],
      [Figures.CaudaDraconis, 'Cauda Draconis'],
      [Figures.Conjunctio, 'Conjunctio'],
      [Figures.FortunaMajor, 'Fortuna Major'],
      [Figures.FortunaMinor, 'Fortuna Minor'],
      [Figures.Laetitia, 'Laetitia'],
      [Figures.Populus, 'Populus'],
      [Figures.Puella, 'Puella'],
      [Figures.Puer, 'Puer'],
      [Figures.Rubeus, 'Rubeus'],
      [Figures.Tristitia, 'Tristitia'],
      [Figures.Via, 'Via']
    ] as Array<[Figures, string]>).forEach(([figure, expected]) => {
      it(`maps ${figure} to ${expected} correctly`, () => {
        expect(getData(figure)?.name).to.equal(expected)
      })
    })
  })
})
