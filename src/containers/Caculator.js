import { connect } from 'react-redux'
import Caculator from '../components/Caculator'
import { changeNum } from '../actions'

const mapStateToProps = (state) => (
  {
    firstNum: state.operate.firstNum,
    secondNum: state.operate.secondNum,
  }
)

const mapDispatchToProps = (dispatch) => {
  return {
    selectNum: (name, value) => dispatch(changeNum(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Caculator)
