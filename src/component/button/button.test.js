import React from 'react';
import { shallow } from 'enzyme';
import Button from './component';
const labelText = 'add';

test('should test Button component', () => {
  const wrapper = shallow(<Button label={labelText} />);
  expect(wrapper).toMatchSnapshot();
});

test('should test button label', () => {
  const wrapper = shallow(<Button label={labelText} />);
  console.log(wrapper, wrapper.text());
  expect(wrapper.text()).toEqual('add');
  console.log(wrapper, wrapper.text());
});
