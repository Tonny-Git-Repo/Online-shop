import React, { useContext, useEffect, useState } from 'react'
//import { useAuth0 } from '@auth0/auth0-react'

export interface UserContextValue{}
const UserContext = React.createContext<UserContextValue>({})

export const UserProvider: React.FC = ({ children }) => {
  return (
    <UserContext.Provider value='user context'>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}