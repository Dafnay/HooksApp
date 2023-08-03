import { useLayoutEffect, useRef, useState } from "react"


export const Episode = ({episode, name}) => {


  const pRef = useRef()
  const [boxSize, setboxSize] = useState({width: 0, height: 0})


  useLayoutEffect(() => {
    const {height , width} = pRef.current.getBoundingClientRect();

    setboxSize({height , width});
  
  }, [name])


  return (
    <>
    <blockquote className="blockquote text-end"
    style={{display: 'flex'}}>

        <p ref={pRef} className="mb-1">{episode}</p>
        <footer className="blockquote-footer">{name}</footer>
    </blockquote>

    <code>{JSON.stringify(boxSize)}</code>
    </>
  )
}
 