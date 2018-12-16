const initialState = {
    animals: [],
    colour: '',
    email: '',
    password: '',
    tigerType: ''
  }
  
  export default function reducer (state = initialState, { payload = {}, type }) {
    const { e, value } = payload
  
    switch (type) {
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