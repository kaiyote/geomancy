function recombine (figList, element) {
  let index = ['fire', 'air', 'water', 'earth'].indexOf(element.toLowerCase())
  if (index === -1) {
    throw new Error(`'${element}' is not one of 'fire', 'air', 'water', 'earth'`)
  }

  return (getBit(index, figList[0]) << 3) | (getBit(index, figList[1]) << 2) |
    (getBit(index, figList[2]) << 1) | getBit(index, figList[3])
}

function add (figures) {
  let results = []
  for (let i = 0; i < figures.length - 1; i++) results.push(figures[i] ^ figures[++i])
  return results
}

function getBit (position, figure) {
  return (figure >> position) & 1
}

export { recombine, add }
