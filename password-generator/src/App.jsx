import { useCallback, useState,useEffect} from 'react'

function App() {
  const[length,setLength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false);
  const[charAllowed,setCharAllowed]=useState(false);
  const[password,setPassword]=useState("")

  const passwordGenerator =useCallback(()=>{
    let pass=""
    let str="QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm"
    if(numberAllowed)str+="0123456789"
    if(charAllowed)str+="!#$@%^&*?"
    for (let i = 0; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>passwordGenerator</h1>
        <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
          <input 
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3"
              placeholder='Password'
              readOnly />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev)=>!prev);
            }} />
            <label htmlFor="numberInput">numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={()=>{
              setCharAllowed((prev)=>!prev);
            }} />
            <label htmlFor="characterInput">characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
