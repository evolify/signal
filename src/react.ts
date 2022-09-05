import { useEffect, useState } from "react"
import { createEffect, createSignal } from "./signal"

export function useSignal<T>(signal: () => T) {
  const [value, setValue] = useState<T>(signal())
  useEffect(() => {
    createEffect(() => {
      setValue(signal())
    })
  }, [])
  return value
}

export function signal<T>(initialValue: T): [() => T, (T) => void, () => T] {
  const [getter, setter] = createSignal(initialValue)
  const useValue = () => useSignal(getter)
  return [getter, setter, useValue]
}
