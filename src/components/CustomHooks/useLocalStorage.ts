import { useState, useEffect } from 'react'

function getLocalStorageValue(key:string, newValue:string) {
  console.log('called', key, newValue)
  const storedValue = JSON.parse(localStorage.getItem(key) as string)
  console.log(storedValue)
  if (storedValue) return storedValue

  return newValue
}
export default function useLocalStorage(key:string, newValue:string) {
  const [localValue, setLocalValue] = useState(() =>
    getLocalStorageValue(key, newValue),
  )
  console.log(localValue, newValue)
  useEffect(() => {
    console.log('useEffet')
    localStorage.setItem(key, JSON.stringify(localValue))
  }, [localValue])

  return [localValue, setLocalValue]
}
