'use client'

import { decrement, increment } from '../features/counter/counterSlice'
import { useAppDispatch, useAppSelector } from './hooks'

export const Counter = () => {
    const count = useAppSelector((state) => state.counter.value)
    const dispatch = useAppDispatch()

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