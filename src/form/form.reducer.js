const initialState = {
    animal: [],
    colour: '',
    email: '',
    errors: [],
    password: '',
    success: false,
    tiger_type: ''
  }
  
  export default function reducer (state = initialState, { payload = {}, type }) {
    const { e, errors, success, value } = payload
  
    switch (type) {
      case 'SUBMIT_FORM':
        return {
          ...state,
          errors,
          success
        }
      case 'UPDATE_ANIMAL':
        return {
          ...state,
          animal: state.animal.includes(value)
            ? [...state.animal].filter(animal => animal !== value)
            : [...state.animal, value]
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