import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-enzyme'
import React from 'react'

import { updateAnimals, updateForm } from './form.actions'
import Form from './form.component'
import { initialState, reducer } from './form.reducer'
import { errorMessage, getErrors, isError } from './form.utilities'

Enzyme.configure({ adapter: new Adapter() })


//INITIALISATION
test('Test suite working', () => {
  expect(true).toBe(true)
})

test('initialState is as expected', () => {
  const expectedState = {
      errors: [],
      success: false
  }
  const wrapper = shallow(<Form />)
  const actualState = wrapper.instance().state

  expect(actualState).toEqual(expectedState)
})


//FORM COMPONENT
test('Renders the Form component', () => {
  expect(toJson(shallow(<Form />))).toMatchSnapshot()
})


//ACTIONS
test('Produces the correct action when the form is updated', () => {
  const testEvent = {
    target: {
      name: 'colour',
      value: 'blue'
    }
  }
  expect(updateForm(testEvent)).toMatchObject({
    type: 'UPDATE_FORM',
    payload: {
      e: testEvent
    }
  })
})


test('Produces the correct action when an animal is selected', () => {
  const testEvent = {
    target: {
      value: 'snake'
    }
  }
  expect(updateAnimals(testEvent)).toMatchObject({
    type: 'UPDATE_ANIMALS',
    payload: {
      value: testEvent.target.value
    }
  })
})


//REDUCER

//type: none
test('If no action type is received, reducer defaults to the initialState', () => {
  expect(reducer(undefined, {})).toBe(initialState)
})

test('Reducer handles an unknown action type by returning the state unchanged', () => {
  const state = 'state'
  expect(reducer(state, {})).toBe(state)
})

//type: 'UPDATE_ANIMALS'
test('Reducer handles selection of an animal by appending animal type to the animals array', () => {
  const testState = {
    animals: []
  }
  const testEvent = {
    target: {
      value: 'snake'
    }
  }
  expect(reducer(testState, updateAnimals(testEvent))).toMatchObject({
    animals: ['snake']
  })
})

test('Reducer handles deselection of an animal by removing animal type from the animals array', () => {
  const testState = {
    animals: ['bear', 'tiger']
  }
  const testEvent = {
    target: {
      value: 'bear'
    }
  }
  expect(reducer(testState, updateAnimals(testEvent))).toMatchObject({
    animals: ['tiger']
  })
})

//type: 'UPDATE_FORM'
test('Reducer updates colour value when a colour is selected', () => {
  const testState = {
    colour: ''
  }
  const testEvent = {
    target: {
      name: 'colour',
      value: 'green'
    }
  }
  expect(reducer(testState, updateForm(testEvent))).toMatchObject({
    colour: 'green'
  })
})

test('Reducer replaces previous colour value when a new colour is selected', () => {
  const testState = {
    colour: 'blue'
  }
  const testEvent = {
    target: {
      name: 'colour',
      value: 'red'
    }
  }
  expect(reducer(testState, updateForm(testEvent))).toMatchObject({
    colour: 'red'
  })
})

test('Reducer updates a string value field', () => {
  const testState = {
    email: ''
  }
  const testEvent = {
    target: {
      name: 'email',
      value: 'user@test.com'
    }
  }
  expect(reducer(testState, updateForm(testEvent))).toMatchObject({
    email: 'user@test.com'
  })
})


//UTILITIES

//errorMessage
test('errorMessage returns an error message according to the error type', () => {
  const testErrorType = 'password'
  expect(errorMessage(testErrorType)).toBe('Password length must be eight or more characters.')
})

test('errorMessage returns an empty string if there is no error type provided', () => {
  expect(errorMessage()).toBe('')
})


//getErrors
test('getErrors returns an array of errors including animals when fewer than two animals are selected', () => {
  const testProps = {
    animals: ['snake'],
    colour: 'blue',
    email: 'user@test.com',
    password: 'something',
    tigerType: ''
  }
  expect(getErrors(testProps)).toEqual(['animals'])
})

test('getErrors returns an array of errors including colour when no colour is selected', () => {
  const testProps = {
    animals: ['snake', 'bear'],
    colour: '',
    email: 'user@test.com',
    password: 'something',
    tigerType: ''
  }
  expect(getErrors(testProps)).toEqual(['colour'])
})

test('getErrors returns an array of errors including email when email format is incorrect', () => {
  const testProps = {
    animals: ['snake', 'bear'],
    colour: 'red',
    email: 'user@test',
    password: 'something',
    tigerType: ''
  }
  expect(getErrors(testProps)).toEqual(['email'])
})

test('getErrors returns an array of errors including password when password contains fewer than 8 character', () => {
  const testProps = {
    animals: ['snake', 'bear'],
    colour: 'red',
    email: 'user@test.com',
    password: 'hi',
    tigerType: ''
  }
  expect(getErrors(testProps)).toEqual(['password'])
})

test('getErrors returns an array of errors including tigerType when no tiger type is provided and tiger is selected as an animal', () => {
  const testProps = {
    animals: ['bear', 'tiger'],
    colour: 'brown',
    email: 'user@test.com',
    password: 'something',
    tigerType: ''
  }
  expect(getErrors(testProps)).toEqual(['tigerType'])
})

test('getErrors returns an array including multiple error types when there is more than one error', () => {
  const testProps = {
    animals: ['tiger'],
    colour: 'brown',
    email: 'user@test.com',
    password: 'something',
    tigerType: ''
  }
  expect(getErrors(testProps)).toEqual(['animals', 'tigerType'])
})

test('getErrors returns an empty array when there are no errors', () => {
  const testProps = {
    animals: ['tiger', 'snake'],
    colour: 'brown',
    email: 'user@test.com',
    password: 'something',
    tigerType: 'large'
  }
  expect(getErrors(testProps)).toEqual([])
})


//isError
test('isError returns "error" when the value passed is included in the errors array', () => {
  const testValue = 'animals'
  const testErrors = ['animals', 'colour', 'tigerType']
  expect(isError(testValue, testErrors)).toEqual('error')
})

test('isError returns an empty string when the value passed is not included in the errors array', () => {
  const testValue = 'email'
  const testErrors = ['animals', 'colour', 'tigerType']
  expect(isError(testValue, testErrors)).toEqual('')
})
