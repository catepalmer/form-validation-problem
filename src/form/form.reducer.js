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
      case 'SUBMIT_FORM':
        return {
          ...state,
          errors,
          success
        }
      case 'UPDATE_ANIMALS':
        return {
          ...state,
          animals: state.animals.includes(value)
            ? [...state.animals].filter(animal => animal !== value)
            : [...state.animals, value]
        }
      case 'UPDATE_FORM':
        return {
          ...state,
          [e.target.name]: e.target.value
        }
      default:
        return state
    }
  }

  export { initialState, reducer }