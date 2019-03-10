const initState = {
  caculateType: 'plus'
}

const selectType = (state = initState, action) => {
  switch (action.type) {
    case 'SELECTTYPE':
      return Object.assign({}, state, {caculateType: action.typeName})
    default:
      return state
  }
}
export default selectType
