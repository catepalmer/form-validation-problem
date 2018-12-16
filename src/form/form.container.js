import { connect } from 'react-redux'

import Form from './form.component'
import { updateAnimals, updateForm } from './form.actions'

function mapDispatchToProps(dispatch) {
  return {
    updateAnimals: (e) => dispatch(updateAnimals(e)),
    updateForm: (e) => dispatch(updateForm(e))
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)