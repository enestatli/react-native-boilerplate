import { authTypes } from './types'

export const AUTH_INITIAL_STATE = {
  isLoading: true,
  isSignout: false,
  userToken: null,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case authTypes.RESTORE_TOKEN:
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      }
    case authTypes.SIGN_IN:
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      }
    case authTypes.SIGN_OUT:
      return {
        ...state,
        isSignout: true,
        userToken: null,
      }
  }
}

export { authReducer }
