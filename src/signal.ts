let listener: Function | undefined
export function createSignal<T>(initialValue: T): [() => T, (v: T) => any] {
  let value = initialValue
  const listeners: Array<Function> = []
  function getter() {
    if (listener && !listeners.includes(listener)) {
      listeners.push(listener)
    }
    return value
  }
  function setter(newValue: T) {
    value = newValue
    listeners.forEach(t => t())
  }
  return [getter, setter]
}

export function createEffect(func) {
  listener = func
  func()
  listener = undefined
}
