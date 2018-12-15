import React from 'react'

import './form.css'
import { submitForm, updateAnimal, updateForm } from './form.actions'
import { errorMessage, getErrors, isError } from './form.utilities'


function handleSubmit () {
    const errors = getErrors()
    submitForm(errors)
  }

export default function Form(errors, success) {

  if (success) return <h1>Thanks! Your information has been successfully submitted</h1>

  return (
    <form method='post' action='' onSubmit={e => {
      e.preventDefault()
      return handleSubmit}}>
      
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

        <p className={isError('animal', errors)}>
          <span className="label">
            Animal
          </span>

          <label htmlFor='bear'>
            <input type='checkbox' name='animal' value='bear' id='bear' onChange={updateAnimal} />
            Bear
          </label>

          <label htmlFor='tiger'>
            <input type='checkbox' name='animal' value='tiger' id='tiger' onChange={updateAnimal} />
            Tiger
          </label>

          <label htmlFor='snake'>
            <input type='checkbox' name='animal' value='snake' id='snake' onChange={updateAnimal} />
            Snake
          </label>

          <label htmlFor='donkey'>
            <input type='checkbox' name='animal' value='donkey' id='donkey' onChange={updateAnimal} />
            Donkey
          </label>

        </p>

        <p className={isError('tiger', errors)}>
          <label className='label' htmlFor='tiger_type'>
            Type of tiger
          </label>
          <input type='text' name='tiger_type' id='tiger_type' onChange={updateForm} />
        </p>
      </fieldset>
      {errors.length > 0 && <span id="errorMessages">
        {errors.map((error, i) => <p key={i} className="error">
          {errorMessage(error)}
        </p>)}
      </span>}

      <fieldset>
        <p>
          <input type='submit' value='Create account' />
        </p>
      </fieldset>

    </form>
  )
}





// export default function Form(success) {
//   const [errors, setErrors] = useState([])


//   if (success) return <h1>Thanks! Your information has been successfully submitted</h1>

//   return (
//     <form method='post' action='' onSubmit={e => handleSubmit(e, getErrors())}>
//       <h1>Fill out this awesome form</h1>

//       <fieldset>
//         <h3>Your details</h3>

//         <p className={isError('email', errors)}>
//           <label className='label' htmlFor='email'>
//             Email
//           </label>
//           <input type='text' id='email' name='email' onChange={updateForm} />
//         </p>

//         <p className={isError('password', errors)}>
//           <label className='label' htmlFor='password'>
//             Password
//           </label>
//           <input type='password' id='password' name='password' onChange={updateForm} />
//         </p>
//       </fieldset>

//       <fieldset>
//         <h3>Your animal</h3>
//         <p className={isError('colour', errors)}>
//           <label className='label' htmlFor='colour'>
//             Colour
//           </label>
//           <select name='colour' id='colour' onChange={updateForm}>
//             <option value=''>Choose colour</option>
//             <option value='blue'>Blue</option>
//             <option value='green'>Green</option>
//             <option value='red'>Red</option>
//             <option value='black'>Black</option>
//             <option value='brown'>Brown</option>
//           </select>
//         </p>

//         <p className={isError('animal', errors)}>
//           <span className="label">
//             Animal
//           </span>

//           <label htmlFor='bear'>
//             <input type='checkbox' name='animal' value='bear' id='bear' onChange={updateAnimal} />
//             Bear
//           </label>

//           <label htmlFor='tiger'>
//             <input type='checkbox' name='animal' value='tiger' id='tiger' onChange={updateAnimal} />
//             Tiger
//           </label>

//           <label htmlFor='snake'>
//             <input type='checkbox' name='animal' value='snake' id='snake' onChange={updateAnimal} />
//             Snake
//           </label>

//           <label htmlFor='donkey'>
//             <input type='checkbox' name='animal' value='donkey' id='donkey' onChange={updateAnimal} />
//             Donkey
//           </label>

//         </p>

//         <p className={isError('tiger', errors)}>
//           <label className='label' htmlFor='tiger_type'>
//             Type of tiger
//           </label>
//           <input type='text' name='tiger_type' id='tiger_type' onChange={updateForm} />
//         </p>
//       </fieldset>
//       {errors.length > 0 && <span id="errorMessages">
//         {errors.map((error, i) => <p key={i} className="error">
//           {errorMessage(error)}
//         </p>)}
//       </span>}

//       <fieldset>
//         <p>
//           <input type='submit' value='Create account' />
//         </p>
//       </fieldset>

//     </form>
//   )
// }