import { connect } from 'react-redux'
import SelectType from '../components/SelectType'
import { selectType } from '../actions'

const mapStateToProps = (state) => (
  {
    caculateType: state.caculateType
  }
)

const mapDispatchToProps = dispatch => (
  {
    selectType: (typeName) => dispatch(selectType(typeName))
  }
)
export default connect(mapStateToProps, mapDispatchToProps)(SelectType)
