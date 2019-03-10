const initState = {
  firstNum: 0,
  secondNum: 0,
  total: 0
}

const operate = (state = initState, action) => {
  switch (action.type) {
    case 'PLUS':
      state.total = state.firstNum + state.secondNum
      return Object.assign({}, state, state.total)
    case 'REDUCE':
      state.total = state.firstNum - state.secondNum
      return Object.assign({}, state, state.total)
    case 'MULTIPLY':
      state.total = state.firstNum * state.secondNum
      return Object.assign({}, state, state.total)
    case 'DIVIDE':
      state.total = state.firstNum / state.secondNum
      return Object.assign({}, state, state.total)
    case 'CHANGENUM':
      state[action.name] = action.value
      return Object.assign({}, state)
    default:
      return state
  }
}

export default operate
