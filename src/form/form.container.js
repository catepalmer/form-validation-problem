import { connect } from 'react-redux'

import Form from './form.component'
import { submitForm, updateAnimals, updateForm } from './form.actions'

//Dispatch actions to the reducer when the following functions are called from the Form component
const mapDispatchToProps = dispatch => ({
  submitForm: (errors) => dispatch(submitForm(errors)),
  updateAnimals: (e) => dispatch(updateAnimals(e)),
  updateForm: (e) => dispatch(updateForm(e))
})

//Map Redux state to props
const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(Form)