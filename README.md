# signal

> A light weight and fast state manager. Reactive with simple js, no Proxy or defineProperty.

## install
```shell
pnpm add @evolify/signal
```

## usage

You can use it with React, or any javascript.

- simple js:
  ```js
  import {createSignal, createEffect} from "@evolify/signal"

  const [coute, setCount] = createSignal(0)

  createEffect(()=>{
    console.log("count is:", count())
  })

  setCount(count()+1)

  ```
- React  
  You can use it as a global or local state manager, no provider need, just import where you need.
    ```jsx
    // store.js 
    import {signal} from "@evolify/signal"

    const [count, setCount, useCount] = signal(0)

    function increase(){
      setCount(count() + 1)
    }

    function decrease(){
      setCount(count() - 1)
    }

    export {
      useCount,
      incrase,
      decrease
    }

    // Counter.jsx
    import {useCount, incrase, decrease} from "./store"
    function Counter(){
      const count = useCount()

      return (
        <div>
          <button onClick={increase}>+</button>
            <span>{count}</span>
          <button onClick={decrease}>-</button>
        </div>
      )
    }

    // Other.jsx
    import {useCount, incrase, decrease} from "./store"
    function Counter(){
      const count = useCount()

      useEffect(()=>{
        console.log("count is change", count)
      },[count])

      return (
        <div>
          {count}
        </div>
      )
    }

    ```
