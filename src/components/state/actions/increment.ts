export const INCREMENT_TOKEN = 'INCREMENT';

export namespace INCREMENT {
  export interface IncrementPayload {
    void;
  }

  export const ACTION = function increment (payload: IncrementPayload) {
    return async (dispatch, _getState) => {
      return dispatch({
        type: INCREMENT_TOKEN,
        payload
      });
    };
  };
}
