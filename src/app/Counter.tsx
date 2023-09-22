'use client'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

export const Counter = () => {
    const count = useSelector((state: any) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <div>count: {count}</div>
            <button
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </>
    ) 
}