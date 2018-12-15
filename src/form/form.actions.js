function submitForm (errors) {
    return {
      type: 'SUBMIT_FORM',
      payload: {
        errors,
        success: errors.length === 0
      }
    }
  }
  
  function updateForm (e) {
    return {
      type: 'UPDATE_FORM',
      payload: {
        e
      }
    }
  }
  
  function updateAnimal (e) {
    return {
      type: 'UPDATE_ANIMAL',
      payload: {
        value: e.target.value
      }
    }
  }
  
  export { submitForm, updateAnimal, updateForm }