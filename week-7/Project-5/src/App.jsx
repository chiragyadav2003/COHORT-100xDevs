import { useCallback, useState } from "react"
import ProfileCard from "./components/ProfileCard"

function App() {
  const [userName, setUserName] = useState("")
  const [data, setData] = useState({ name: "", login: ``, imgUrl: "", githubUrl: "" })
  const [submitted, setSubmitted] = useState(false);
  // { name: "Chirag Yadav", login: `chiragYadav2003`, imgUrl: "https://avatars.githubusercontent.com/u/97416399?v=4", githubUrl: "https://github.com/chiragyadav2003" }

  const getInfo = useCallback(async (username) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    const dataReceived = await res.json()
    setData(dataReceived)
    setSubmitted(true);
    console.log(dataReceived)
  }, [])

  const handleSubmit = (e) => {
    console.log("submit")
    e.preventDefault()
    getInfo(userName)
  }

  return (
    <div className="bg-slate-900 min-h-screen text-white p-20 ">

      <div className="bg-black p-7 rounded-full">
        <form onSubmit={handleSubmit}>

          <label className=" text-white text-lg m-2 font-bold " htmlFor="username">Enter Username : </label>

          <input className="text-lg m-6 p-3 rounded-xl font-bold text-black " type="text" id="username" placeholder="enter username" onChange={(e) =>
            setUserName(e.target.value)} />

          <button type="submit" className=" text-white text-lg m-4 p-3 cursor-pointer rounded-xl font-bold bg-yellow-500 " >CLick me</button>

        </form>
      </div>

      {submitted && userName && (
        <ProfileCard imgurl={data.avatar_url} name={data.name} login={data.login}
          githubUrl={`https://github.com/${userName}`} />
      )}

    </div>
  )
}

export default App
