import React from 'react'
import { createContext, useEffect, useMemo, useReducer } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { authReducer, AUTH_INITIAL_STATE } from './reducer'
import { authTypes } from './types'

export const AuthContext = createContext({ ...AUTH_INITIAL_STATE })

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE)

  //TODO: unsub to avoid re-rendered

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        console.log('Error while getting token from storage', e)
      }

      dispatch({ type: authTypes.RESTORE_TOKEN, token: userToken })
    }

    bootstrapAsync()
  }, [])

  const authMethods = useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: authTypes.SIGN_IN, token: 'dummy-auth-token' })
      },
      signOut: () => dispatch({ type: authTypes.SIGN_OUT }),
      signUp: async (data) => {
        dispatch({ type: authTypes.SIGN_IN, token: 'dummy-auth-token' })
      },
    }),
    [],
  )

  return (
    <AuthContext.Provider value={{ authMethods, state }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
