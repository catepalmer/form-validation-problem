import { connect } from 'react-redux'

import Form from './form.component'
import { submitForm, updateAnimals, updateForm } from './form.actions'

const mapDispatchToProps = dispatch => ({
  submitForm: (errors) => dispatch(submitForm(errors)),
  updateAnimals: (e) => dispatch(updateAnimals(e)),
  updateForm: (e) => dispatch(updateForm(e))
})

const mapStateToProps = state => state

export default connect(mapStateToProps, mapDispatchToProps)(Form)