import { useEffect } from "react"
import { useState } from "react"

function App() {

  const [limit, setLimit] = useState(0)
  const [para, setPara] = useState("")

  const words = ['i', 'happy', 'now', 'church', 'harmony', 'conjuring', 'annabel', 'Chirag', 'illuminati', 'trader', 'aibot', 'generativeai', 'hulk', 'smasher']

  function generatePara(count) {
    let ans = ""
    for (let i = 0; i < count; i++) {
      let indx = Math.floor(Math.random() * words.length)
      let ch = words[indx]
      ans += ch;
      ans += " "
    }
    setPara(ans)
    // console.log(ans.length, ans)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

      <h2>Para Generator</h2>

      <div style={{ display: "flex", margin: "5px", padding: "10px", fontWeight: "bold" }}>

        <input type="number" placeholder="enter number of words"
          onChange={(e) => {
            setLimit(e.target.value)
            // console.log(e.target.value)
          }}
          style={{ padding: "10px", margin: "5px", border: "2px solid black", width: "300px" }} />

        <button onClick={() => {
          // console.log(limit)
          generatePara(limit)
        }} style={{ padding: "10px", margin: "5px", border: "2px solid black" }}>Generate</button>

      </div>


      {para == "" ? null : <div style={{ fontSize: "20px", margin: "20px" }}>{para}</div>}

    </div>
  )
}

export default App
