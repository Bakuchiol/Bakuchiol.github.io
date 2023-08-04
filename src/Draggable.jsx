import React, { useEffect, useState } from 'react'

function Draggable(props) {
    // states
    const [drag, setDrag] = useState(false)
    const [xPosition, setXPosition] = useState(0)
    const [yPosition, setYPosition] = useState(0)
    const [mousePosition, setMousePosition] = useState({})


    const mouseDown = ({mouseX, mouseY}) => {
        setMousePosition({ mouseX, mouseY});
        setDrag(true)
    };

    useEffect(() => {
        const mouseMove = (e) => {
            setXPosition(xPosition + e.mouseX - mousePosition.x);
            setYPosition(yPosition + e.mouseY - mousePosition.y);
        }
        if(drag){
            window.addEventListener('mousemove', mouseMove)
        }
        return () => window.removeEventListener('mousemove', mouseMove);
    }, [drag, mousePosition]);

    useEffect(() => {
        const mouseUp = () => setDrag(false);
        window.addEventListener('mouseup', mouseUp);
        return () => window.addEventListener('mouseup', mouseUp);
    }, [])

  return (
    <div onMouseDown={mouseDown}>
      {props.children}
    </div>
  )
}

export default Draggable
