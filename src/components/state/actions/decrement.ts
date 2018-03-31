export const DECREMENT_TOKEN = 'DECREMENT';

export namespace DECREMENT {
  interface DECREMENT_PAYLOAD {
    void
  }

  export const ACTION = function decrement(payload: DECREMENT_PAYLOAD) {
    return async (dispatch, _getState) => {
      return dispatch({
        type: DECREMENT_TOKEN,
        payload
      });
    }
  };
}
