import React from 'react';
import renderer from 'react-test-renderer';
import Home from './components/pages/Home';
import data from './data.json';

describe('Home snapshot', () => {
      test('Home snapshot test', () => {
      const component = renderer.create(<Home />);
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    })
});

const itemNum = 0
describe('Data tests on item '+ itemNum + ' in array', () => {
    test('id contains todo', () => {
        expect(data[itemNum].id).toContain('todo');
    });
    test('object has id property', () => {
        expect(data[itemNum]).toHaveProperty('id');
    });
    test('object has name property', () => {
        expect(data[itemNum]).toHaveProperty('name');
    });
    test('object has completed property', () => {
        expect(data[itemNum]).toHaveProperty('completed');
    });
})



