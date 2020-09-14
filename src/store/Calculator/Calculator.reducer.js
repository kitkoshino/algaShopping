//retorna o estado (estado inicial da app = estado da primeira execução onde ainda nao tem estado)

export default function (state = 0, action) {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1];

    case 'SUBTRACT':
      return action.payload[0] - action.payload[1];

    default:
      return state;
  }
}
