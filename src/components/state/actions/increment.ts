export const INCREMENT_TOKEN = 'INCREMENT';

export namespace INCREMENT {
  export interface INCREMENT_PAYLOAD {
    void
  }

  export const ACTION = function increment(payload: INCREMENT_PAYLOAD) {
    return async (dispatch, _getState) => {
      return dispatch({
        type: INCREMENT_TOKEN,
        payload
      });
    }
  };
}
