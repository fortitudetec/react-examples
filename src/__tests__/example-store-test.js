import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Button from '../button.jsx';

jest.unmock('flux');
jest.unmock('../example-store');
jest.unmock("../actions");
jest.unmock('../dispatcher');

import ExampleStore from '../example-store';
import Dispatcher from '../dispatcher';
import {Actions, ButtonClickedAction} from '../actions';

describe('ExampleStore', () => {
  let exampleStore;
  let callback;
  
  beforeEach(() => {
    exampleStore = new ExampleStore();
  });
  
  it("initially has no data", () => {
    expect(exampleStore.data()).toEqual({});
  });
  
  it("sets data to when action is received", () => {
    const data = "data";
    ButtonClickedAction(data);
    expect(exampleStore.data()).toEqual({ data: data });  
  });
  
});
