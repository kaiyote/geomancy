import { createContext } from '@lit-labs/context'
import { type Figure } from './util/Figure'

export const mothersContext = createContext<[Figure, Figure, Figure, Figure]>('mothers')
export const houseContext = createContext<number>('house')
export const houseIndexContext = createContext <number>('house-index')
