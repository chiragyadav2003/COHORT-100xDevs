
function ColorPicker({ setColor }) {
    return (
        <div style={{ display: "flex", padding: "20px", backgroundColor: "grey", justifyContent: "space-between" }}>

            <button onClick={() => {
                setColor("red")
            }} style={{ background: "red", fontSize: "180%", borderRadius: "20%", margin: "10px", cursor: "pointer" }}>Red</button>

            <button onClick={() => {
                setColor("black")
            }} style={{ background: "black", fontSize: "180%", borderRadius: "20%", color: "white", margin: "10px", cursor: "pointer" }}>Black</button>

            <button onClick={() => {
                setColor("white")
            }} style={{ background: "white", fontSize: "180%", borderRadius: "20%", margin: "10px", cursor: "pointer" }}>White</button>

            <button onClick={() => {
                setColor("blue")
            }} style={{ background: "blue", fontSize: "180%", borderRadius: "20%", margin: "10px", cursor: "pointer" }}>Blue</button>

            <button onClick={() => {
                setColor("pink")
            }} style={{ background: "pink", fontSize: "180%", borderRadius: "20%", margin: "10px", cursor: "pointer" }}>Pink</button>

            <button onClick={() => {
                setColor("yellow")
            }} style={{ background: "yellow", fontSize: "180%", borderRadius: "20%", margin: "10px", cursor: "pointer" }}>Yellow</button>

        </div>
    )
}

export default ColorPicker