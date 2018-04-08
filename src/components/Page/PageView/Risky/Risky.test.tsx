import Enzyme, { mount, render, shallow } from 'enzyme';
import enzymeAdapterReact16 from 'enzyme-adapter-react-16';
import React from 'react';
import Risky from './Risky';

Enzyme.configure({ adapter: new enzymeAdapterReact16() });

const getDefaultProps = () => ({});

describe('Risky component', () => {
  it('shallow renders without crashing', () => {
    const {} = getDefaultProps();
    shallow(<Risky />);
  });

  it('shallow snapshot', () => {
    const {} = getDefaultProps();
    const wrapper = shallow(<Risky />);
    expect(wrapper).toMatchSnapshot();
  });

  it('render snapshot', () => {
    const {} = getDefaultProps();
    const wrapper = render(<Risky />);
    expect(wrapper).toMatchSnapshot();
  });
});
