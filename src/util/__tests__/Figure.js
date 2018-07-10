/* eslint-env jest */
import { add } from '../Figure'

describe('add', () => {
  it('via + via == populus', () => {
    expect(add([15, 15])).toEqual([0])
  })
})
