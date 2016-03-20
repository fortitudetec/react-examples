// jest.unmock('../button.jsx');
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Button from '../button.jsx';

describe('Button', () => {
  it('label defaults to Button', () => {
    var button = <Button />;
    TestUtils.renderIntoDocument(button);
    expect(button.props.label).toEqual("Button");
  });
  
  it('label can be set through label property', () => {
    var button = <Button label='ButtonLabel' />;
    TestUtils.renderIntoDocument(button);
    expect(button.props.label).toEqual("ButtonLabel");
  });
});