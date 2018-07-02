import React from 'react'
import {shallow} from 'enzyme'

import WidgetRow from './WidgetRow'
import './WidgetRow.css'

describe('(Component) WidgetRow', () => {
  it('should render the component', () => {
    const wrapper = shallow(
      <WidgetRow label={'Demo'}>
        <div>sample</div>
      </WidgetRow>
    )

    expect(wrapper.equals(
        <div className='widget-wrapper'>
          <div className='widget-label'>Demo</div>
          <div>sample</div>
      </div>
    )).toEqual(true)
  })
})