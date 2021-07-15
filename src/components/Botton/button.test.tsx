import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './button';

const defaultProps = {
  onClick: jest.fn()
}

test('testButton', () => {
  const btnDom = render(<Button>Test Button</Button>);
  const ele = btnDom.queryByText('Test Button');
  // 默认jest提供的match不全，因此引入jest-dom的toBeInTheDocument
  // expect(ele).toBeTruthy()
  expect(ele).toBeInTheDocument();
})

describe('test button component', () => {
  // test default button
  it('test default button', () => {
    const btnDom = render(<Button {...defaultProps}>Default Button</Button>);
    const ele = btnDom.getByText('Default Button');
    // button是否存在
    expect(ele).toBeInTheDocument();
    // dom属性是否是BUTTON
    expect(ele.tagName).toEqual('BUTTON');
    expect(ele).toHaveClass('btn btn-default');
    // 模拟点击
    fireEvent.click(ele);
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
})