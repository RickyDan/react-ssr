import { connect } from 'react-redux'
import Hooks from '../components/Hooks'
import { operation } from '../actions'

const mapStateToProps = (state) => {
  return {
    firstNum: state.operate.firstNum,
    secondNum: state.operate.secondNum,
    total: state.operate.total,
    types: state.selectType.caculateType
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    operate: (actionType) => dispatch(operation(actionType))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Hooks)
