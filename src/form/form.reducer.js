import { SUBMIT_FORM, UPDATE_ANIMALS, UPDATE_FORM } from './form.constants'

//Initial state
const initialState = {
    animals: [],
    colour: '',
    email: '',
    errors: [],
    password: '',
    success: false,
    tigerType: ''
  }
  
function reducer (state = initialState, { payload = {}, type }) {
    const { e, errors, success, value } = payload
  
    switch (type) {
      case SUBMIT_FORM:
        return {
          //Return a copy of state plus the errors array and success value passed in
          ...state,
          errors,
          success
        }
      case UPDATE_ANIMALS:
        return {
          //Return a copy of state and then remove checked animal from animals array if it is in state already; otherwise add animal to state
          ...state,
          animals: state.animals.find(animal => animal === value)
            ? [...state.animals].filter(animal => animal !== value)
            : [...state.animals, value]
        }
      case UPDATE_FORM:
        return {
          //Return a copy of state and then set the property that matches the event target name to the value inputted
          ...state,
          [e.target.name]: e.target.value
        }
      default:
        //When there is no action type, default to exisiting state
        return state
    }
  }

  export { initialState, reducer }