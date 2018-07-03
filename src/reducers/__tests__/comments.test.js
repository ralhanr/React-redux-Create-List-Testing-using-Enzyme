import { SAVE_COMMENT } from 'actions/types';
import commentsReducer from 'reducers/comments';

it('handles actions of save comment type', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
const newState = commentsReducer([], action);
expect(newState).toEqual(['New Comment']);
})

it('handles actions of unknown types', () => {
  const action = {
    type: 'random',
    payload: 'New Comment'
  }
  const newState = commentsReducer([], action);
  expect (newState).toEqual([]);
})
