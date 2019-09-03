import produce from 'immer';


export const INCREMENT = 'COUNTER/INCREMENT'
export const DECREMENT = 'COUNTER/DECREMENT'

export const initialState = { count: 0 };

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case INCREMENT:
        draft.count += 1
        break;
      case DECREMENT:
        draft.count -= 1
        break;
      default:
    }
  });

export default reducer;
