function updateForm (e) {
  return {
    type: 'UPDATE_FORM',
    payload: {
      e
    }
  }
}
  
function updateAnimals (e) {
  return {
    type: 'UPDATE_ANIMALS',
    payload: {
      value: e.target.value
    }
  }
}
  
export { updateAnimals, updateForm }