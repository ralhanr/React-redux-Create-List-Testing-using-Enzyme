import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;

const initialState = {
  comments: ['Comment 1', 'Comment 2']
}

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
    <CommentList />
    </Root>
  )
})

it('creates an LI for every comment', () => {
expect(wrapped.find('li').length).toEqual(2);
})

it('shows the text for each comment', () => {
  expect(wrapped.render().text()).toContain('Comment 1');
  expect(wrapped.render().text()).toContain('Comment 2');
})
