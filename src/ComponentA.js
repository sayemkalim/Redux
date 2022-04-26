import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ComponentA = () => {
 
    const {c}=useSelector(state=>state.custom)
 
    const dispatch=useDispatch()



    const add=()=>{
        dispatch({
            type:"increment"
        })

    }
   
    const incrementbyValue=()=>{
        dispatch({
            type:"incrementbyValue",
            payload:100,
        })

    }
    const sub=()=>{
        dispatch({
            type:"decrement"
        })

    }
  return (
      <>
  
    <h2> For ComponentA : {c}</h2>
    <button onClick={add}>Increment</button>
    <button onClick={sub}>Decrement</button>
    <button onClick={incrementbyValue}>incrementbyValue</button>
      </>
  
  )
}

export default ComponentA