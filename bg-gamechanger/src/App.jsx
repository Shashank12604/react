import { useState } from "react"
import Button from "./button.jsx";


function App() {

  const [color, setColor] = useState("olive");

  const handleButtonClick = (color) => {
    setColor(color);
  }
  return (
    <div className="w-full h-screen suration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
            <Button color="red" onClick={() => handleButtonClick("red")}/>
            <Button color="green" onClick={() => handleButtonClick("green")}/>
            <Button color="olive" onClick={() => handleButtonClick("olive")}/>
            <Button color="grey" onClick={() => handleButtonClick("grey")}/>
            <Button color="yellow" text="black" onClick={() => handleButtonClick("yellow")}/>
            <Button color="pink" text="black" onClick={() => handleButtonClick("pink")}/>
            <Button color="purple" text="black" onClick={() => handleButtonClick("purple")}/>
            <Button color="lavender" text="black" onClick={() => handleButtonClick("lavender")}/>
            <Button color="blue" text="black" onClick={() => handleButtonClick("blue")}/>
            <Button color="white" text="black" onClick={() => handleButtonClick("white")}/>
            <Button color="black" onClick={() => handleButtonClick("black")}/>
          </div>
        </div>
    </div>
  )
}

export default App;
