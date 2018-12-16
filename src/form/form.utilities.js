function getErrors (props) {
  const errors = []
  const { animals, colour, email, password, tigerType } = props
  
  if (animals.length < 2) errors.push('animals')
  if (colour.length < 1) errors.push('colour')
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) errors.push('email')
  if (password.length < 8) errors.push('password')
  if (animals.includes('tiger') && tigerType.length < 1) errors.push('tigerType')
  
  return errors
}
  

function isError (value, errors) {
  if( errors.includes(value)) return 'error'
}
  

function errorMessage (errorType) {

  return (errorType === 'animals') ? 'Please select two or more animals.' :
         (errorType === 'colour') ? 'Please select a colour.' :
         (errorType === 'email') ? 'Please enter a valid email address.' :
         (errorType === 'password') ? 'Password must be at least 8 characters.' :
         (errorType === 'tigerType') ? 'Please specify the type of tiger.' : ''
}
  

export { errorMessage, getErrors, isError }