import React from "react";
// import { memo } from "react"


export const Small = React.memo(( {value}) => {

    console.log('me volvi a generar :D')
  return (
    <small>{ value }</small>
  )
})
