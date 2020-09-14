//action creator, retorna a action
export function sum (a,b) {
  return {
    type: 'SUM',
    payload: [a, b]
  }
}

export function sbutract (a,b) {
  return {
    type: 'SUBTRACT',
    payload: [a, b]
  }
}