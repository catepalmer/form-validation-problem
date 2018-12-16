import React from 'react'

import './form.css'
import { errorMessage, getErrors, isError } from './form.utilities'


class Form extends React.Component {

  //Handle the form submission by preventing an attempt to post to the server, retrieving the errors array from props, and calling the submitForm function from props with the errors array as an argument
  handleSubmit (props, e) {
    e.preventDefault()
    const errors = getErrors(props)
    this.props.submitForm(errors)
  }

  render() {
    const { errors, success, updateAnimals, updateForm } = this.props

    //If the success value is set to true, return the success message
    if (success) return <h1>Thanks! Your information has been successfully submitted</h1>

    //If the success value is set to false, return the form
    return (
      <form method='post' action='' onSubmit={this.handleSubmit.bind(this, this.props)}>
        <h1>Fill out this awesome form</h1>

          <fieldset>
            <h3>Your details</h3>

            <p className={isError('email', errors)}>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input type='text' id='email' name='email' onChange={updateForm} />
            </p>

            <p className={isError('password', errors)}>
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input type='password' id='password' name='password' onChange={updateForm} />
            </p>
          </fieldset>

          <fieldset>
            <h3>Your animal</h3>
              <p className={isError('colour', errors)}>
                <label className='label' htmlFor='colour'>
                  Colour
                </label>
                <select name='colour' id='colour' onChange={updateForm}>
                  <option value=''>Choose colour</option>
                  <option value='blue'>Blue</option>
                  <option value='green'>Green</option>
                  <option value='red'>Red</option>
                  <option value='black'>Black</option>
                  <option value='brown'>Brown</option>
                </select>
              </p>

              <p className={isError('animals', errors)}>
                <span className='label'>
                  Animal
                </span>

                <label htmlFor='bear'>
                  <input type='checkbox' name='animals' value='bear' id='bear'  onChange={updateAnimals}/>
                    Bear
                </label>

                <label htmlFor='tiger'>
                  <input type='checkbox' name='animals' value='tiger' id='tiger'  onChange={updateAnimals}/>
                    Tiger
                </label>

                <label htmlFor='snake'>
                  <input type='checkbox' name='animals' value='snake' id='snake'  onChange={updateAnimals}/>
                    Snake
                </label>

                <label htmlFor='donkey'>
                  <input type='checkbox' name='animals' value='donkey' id='donkey'  onChange={updateAnimals}/>
                    Donkey
                </label>

              </p>

              <p className={isError('tigerType', errors)}>
                <label className='label' htmlFor='tigerType'>
                  Type of tiger
                </label>
                <input type='text' name='tigerType' id='tigerType' onChange={updateForm} />
              </p>
            </fieldset>
            {/* If there are errors in the errors array, display the error messages */}
            {(errors.length > 0 && <span id='errorMessages'>
                {errors.map((error, i) => <p key={i} className='error'>{errorMessage(error)}</p>)}
            </span>)}

          <fieldset>
            <p>
              <input type='submit' value='Create account' />
            </p>
          </fieldset>

      </form>
    )
  }
}

export default Form