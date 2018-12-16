import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json'
import 'jest-enzyme'
import React from 'react'

import App from './app.component'

Enzyme.configure({ adapter: new Adapter() })

//APP COMPONENT
test('Renders the App component', () => {
  expect(toJson(shallow(<App />))).toMatchSnapshot()
})