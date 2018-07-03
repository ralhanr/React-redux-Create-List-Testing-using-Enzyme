import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';


let wrapped;
beforeEach(()=> {
  wrapped = mount(
    <Root>
    <CommentBox />
    </Root>
  );
});

afterEach(()=> {
  wrapped.unmount();
})

it('has a comment box and 2 buttons', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(2);

})

describe('tests textarea', () => {

  beforeEach(()=> {
    wrapped.find('textarea').simulate('change', {
      target: {value: 'new comment'}
    });
    wrapped.update();
  })
      it('has a textarea that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
      })

      it('lets the users submit text and then empties the text area', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
      })
})
