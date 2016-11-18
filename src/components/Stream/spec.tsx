import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Stream } from './presenter';

describe('Stream', () => {

    const props = {
        tracks: [{ id: 1, title: 'x' }, { id: 2, title: 'y' }],
    };

    it('shows two elements', () => {
        const element = shallow(<Stream { ...props } />);

        expect(element.find('.track')).to.have.length(2);
    });

});
