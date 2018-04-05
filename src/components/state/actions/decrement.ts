export const DECREMENT_TOKEN = 'DECREMENT';

export namespace DECREMENT {
  interface DecrementPayload {
    void;
  }

  export const ACTION = function decrement (payload: DecrementPayload) {
    return async (dispatch, _getState) => {
      return dispatch({
        type: DECREMENT_TOKEN,
        payload
      });
    };
  };
}
