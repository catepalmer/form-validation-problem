function getErrors (e, state) {
    e.preventDefault()
  
    const { password, email, colour, animal, tiger_type } = state
    const errors = []
  
    if (password.length < 8) errors.push('password')
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) errors.push('email')
    if (!colour.length) errors.push('colour')
    if (animal.length < 2) errors.push('animal')
    if (animal.includes("tiger") && !tiger_type.length) errors.push('tiger')
  
    return errors
  }
  
  function isError (value, errors) {
    //provide error class to an element type
    return errors.includes(value)
      ? 'error'
      : ''
  }
  
  function errorMessage(errorType) {
    //switch to translate error types into error messages
    switch (errorType) {
      case 'password': return 'Password must be at least 8 characters long.'
      case 'email': return 'Email is invalid.'
      case 'colour': return 'Please select a colour.'
      case 'animal': return 'You must select 2 or more animal types.'
      case 'tiger': return 'Please specify the type of Tiger.'
      default: return
    }
  }
  
  export { errorMessage, getErrors, isError }