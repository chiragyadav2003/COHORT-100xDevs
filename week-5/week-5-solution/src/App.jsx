import Card1v1 from "./components/level-1/Card1v1"
import Card1v2 from "./components/level-1/Card1v2"


function App() {

  return (
    <>
      <h1>Business card</h1>
      {/* <Card1v1 /> */}
      <Card1v2 name={"Lokeshwar Singh"} description={"TA in 100xdevs"} interestArray={["gaming", "coding", "running"]} />
      <Card1v2 name={"Chirag yadav"} description={"Student in 100xDevs COHORT2.0"}
        interestArray={["Gaming", "Cricket", "Programming"]} linkedinLink={"https://www.linkedin.com/in/chirag-yadav-53924922a/"} twitterLink="https://twitter.com/chirag_yadav121" />
    </>
  )
}

export default App
