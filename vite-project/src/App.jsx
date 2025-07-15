import { useState } from "react"
import PasswordGen from "./PasswordGen"
import "./app.css"

function App() {
  const [value, setValue] = useState(15)
  const[colorCode, setColor] = useState("olive")
  
  const incValue = () => {
    if(value <= 20) {
    setValue(value+1)
    }

  }
   const DecValue = () => {
    if(value > 0)
    setValue(value-1)
  }
  return (
    <>
 <h1>Hello react {value}</h1>
 <button onClick={incValue}>value is Inc{value}</button>
 <button onClick={DecValue}>value is Dec{value}</button>
 <div className="color-container" style={{backgroundColor: colorCode}}>
  <button className="red" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
  <button className="blue" style={{backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
  <button className="pink" style={{backgroundColor: "pink"}} onClick={() => setColor("pink")}>Pink</button>
  <button className="green" style={{backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
 </div>
 <PasswordGen></PasswordGen>
    </>
  )
}

export default App
