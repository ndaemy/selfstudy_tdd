import React from 'react'
import { render } from '@testing-library/react'
import Profile from './Profile'

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username='yuyaebean' name='유예빈' />)
    expect(utils.container).toMatchSnapshot()
  })
  it('shows the props correctly', function () {
    const utils = render(<Profile username='yuyaebean' name='유예빈' />)
    utils.getByText('yuyaebean')
    utils.getByText('(유예빈)')
    utils.getByText(/유/)
  })
})
