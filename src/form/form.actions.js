import { SUBMIT_FORM, UPDATE_ANIMALS, UPDATE_FORM } from './form.constants'

function submitForm (errors) {
  return {
    //Return an action with a payload including the received errors array and a success value of true if there are no errors, or false if there are errors
    type: SUBMIT_FORM,
    payload: {
      errors,
      success: errors.length === 0
    }
  }
}

function updateForm (e) {
  return {
    //Return an action with a payload of the event passed
    type: UPDATE_FORM,
    payload: {
      e
    }
  }
}
  
function updateAnimals (e) {
  return {
    //Return an action with a payload of a value property set to the event target value
    type: UPDATE_ANIMALS,
    payload: {
      value: e.target.value
    }
  }
}
  
export { submitForm, updateAnimals, updateForm }