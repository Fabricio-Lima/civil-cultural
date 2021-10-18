import Cookie from 'js-cookie'

import { useState, useEffect, Dispatch, SetStateAction } from 'react'

export function usePersistedState<T>(key: string, initialProps: T): [T, SetStateAction<Dispatch<T>>]
{
  const [state, setState] = useState<T>(() => {
    const cookie = Cookie.get(key)
    return cookie ? JSON.parse(cookie): initialProps
  })

  useEffect(() => {
    Cookie.set(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}