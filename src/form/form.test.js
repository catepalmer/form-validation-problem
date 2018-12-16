import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-enzyme'
import React from 'react'

import Form from './form.component'

Enzyme.configure({ adapter: new Adapter() })

describe('components:Form', () => {
  it('renders the Form component', () => {
    expect(toJson(shallow(<Form />))).toMatchSnapshot()
  })
})
