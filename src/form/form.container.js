import { connect } from 'react-redux'

import Form from './form.component'
import { submitForm, updateAnimals, updateForm } from './form.actions'

function mapDispatchToProps(dispatch) {
  return {
    submitForm: (errors) => dispatch(submitForm(errors)),
    updateAnimals: (e) => dispatch(updateAnimals(e)),
    updateForm: (e) => dispatch(updateForm(e))
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)