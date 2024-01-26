import { useEffect } from "react"
import { useState } from "react"
// import ColorPicker from "./components/ColorPicker"
import ColorArrayPicker from "./components/ColorArrayPicker"

function App() {
  const [color, setColor] = useState("black")

  const colorArray = ["red", "yellow", "black", "purple", "green", "blue", "white"]

  useEffect(() => {
    document.body.style = `background: ${color}`
  }, [color])

  return (
    <div >
      {/* <ColorPicker color={color} setColor={setColor} /> */}
      <ColorArrayPicker array={colorArray} setColor={setColor} />
    </div>
  )
}

export default App
