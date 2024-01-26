import React from 'react'

function ColorArrayPicker({ array, setColor }) {
    return (
        <div style={{ display: "flex", padding: "10px", backgroundColor: "white", justifyContent: "space-between", borderRadius: "40px", marginTop: "70%", marginLeft: "70px", marginRight: "70px" }}>
            {array.map((color) => {
                return <button onClick={() => {
                    setColor(color)
                }} key={color} style={{ color: color === "black" ? "white" : "black", fontSize: "180%", borderRadius: "20%", margin: "10px", cursor: "pointer", backgroundColor: color }}>{color}</button>
            })}
        </div >
    )
}

export default ColorArrayPicker