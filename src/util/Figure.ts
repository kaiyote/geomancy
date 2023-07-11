import { type Figure as Figure_, Figures as Figures_ } from '../data'

export type Figure = number

export const enum Figures {
  Populus = 0,
  Laetitia = 1,
  Rubeus = 2,
  FortunaMinor = 3,
  Albus = 4,
  Amissio = 5,
  Conjunctio = 6,
  CaudaDraconis = 7,
  Tristitia = 8,
  Carcer = 9,
  Acquisitio = 10,
  Puella = 11,
  FortunaMajor = 12,
  Puer = 13,
  CaputDraconis = 14,
  Via = 15
}

export function rearrange (figList: [Figure, Figure, Figure, Figure]): [Figure, Figure, Figure, Figure] {
  return [0, 1, 2, 3].map(e => getBit(e, figList[0]) | (getBit(e, figList[1]) << 1) | (getBit(e, figList[2]) << 2) | (getBit(e, figList[3]) << 3)) as [Figure, Figure, Figure, Figure]
}

export function add (right: Figure, left: Figure): Figure {
  return right ^ left
}

export function bulkAdd (figures: Figure[]): Figure[] {
  const results = []
  for (let i = 0; i < figures.length - 1; i++) results.push(figures[i] ^ figures[++i])
  return results
}

export function getData (figure: Figures): Figure_ | undefined {
  return Figures_.find(f => f.value === figure)
}

export function getBit (position: number, figure: Figure): 0 | 1 {
  return ((figure >> position) & 1) as 0 | 1
}
