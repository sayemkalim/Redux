import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
const ComponentB = () => {

  const {c}=useSelector(state=>state.custom)



  return (
    <h2> For ComponentB: {c}</h2>
  )
}

export default ComponentB