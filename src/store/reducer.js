import ACTIONS from './actions';
import initialState from './initialState';

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state?.currentOperand || ''}${payload.digit}`,
      };

    default:
      return state;
  }
}
