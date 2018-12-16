function getErrors (props) {
  const errors = []
  const { animals, colour, email, password, tigerType } = props
  
  //If there are fewer than 2 animals in the animals array, add an 'animals' error to the errors array
  if (animals.length < 2) errors.push('animals')
  //If there are no colours selected, add a 'colour' error to the errors array
  if (colour.length < 1) errors.push('colour')
  //If the email given does not follow the correct format, add an 'email' error to the errors array
  if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) errors.push('email')
  //If the password given is fewer than 8 characters, add a 'password' error to the errors array
  if (password.length < 8) errors.push('password')
  //If 'tiger' is selected as an animal and no tiger type is given, add a 'tigerType error to the errors array
  if (animals.includes('tiger') && tigerType.length < 1) errors.push('tigerType')
  
  return errors
}
  

function isError (value, errors) {
  //If the errors array includes the value passed, return 'error'
  if(errors.includes(value)) return 'error'
}
  

function errorMessage (errorType) {
  //Check each error type to see if it's in the errors array, and return the appropriate error message if it is
  return (errorType === 'animals') ? 'Please select two or more animals.' :
         (errorType === 'colour') ? 'Please select a colour.' :
         (errorType === 'email') ? 'Please enter a valid email address.' :
         (errorType === 'password') ? 'Password must be at least 8 characters.' :
         (errorType === 'tigerType') ? 'Please specify the type of tiger.' : ''
}
  

export { errorMessage, getErrors, isError }