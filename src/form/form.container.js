import { connect } from 'react-redux'

import Form from './form.component'
import { submitForm, updateAnimal, updateForm } from './form.actions'

function mapDispatchToProps(dispatch) {
  return {
    dispatchSubmitForm: (errors) => dispatch(submitForm(errors)),
    updateAnimal: (e) => dispatch(updateAnimal(e)),
    updateForm: (e) => dispatch(updateForm(e))
  }
}

function mapStateToProps(state) {
  return state
}

function mergeProps(propsFromState, propsFromDispatch) {
  return {
    submitForm: propsFromDispatch.dispatchSubmitForm(propsFromState.errors)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Form)