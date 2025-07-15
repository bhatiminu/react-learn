import { useState, useCallback, useEffect, useRef } from "react";
import "./password.css";

function PasswordGen() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordRef = useRef(null)

   const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+= "0123456789"
    if(charAllowed)   str+= "!@#$%^&*-_+=[]{}~`"
    for (let i = 1; i < length; i++) {
        let char = Math.floor(Math.random() * str.length +1)
        pass += str.charAt(char)
        setPassword(pass)
    }

   }, [length,numberAllowed,charAllowed,setPassword])

   const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
   }, [password])

 useEffect(() => {passwordGenerator()}, [length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <div>
      <div className="main-wrapper-pass">
        <div className="container-pass">
          <h2>Password generator</h2>
          <div className="pass-input-wrap">
            <input
             type="text" 
            className="input-pass"  
            value={password} 
            placeholder="Password"
            readOnly
            ref={passwordRef}
            />
            <button onClick={copyPasswordToClipBoard}>copy</button>
          </div>

          <div className="pass-condition-wrap">
            <div className="pass-length">
              <input type="range"
              min={6} 
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length:{length} </label>
            </div>
            <div className="checkbox-num">
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id="number-input"
              onChange={() => {setNumberAllowed((prev) => !prev)}}
                />
               <label>Number: </label>
            </div>
            <div className="checkbox-char">
               <input type="checkbox"
              defaultChecked={charAllowed}
              id="char-input"
              onChange={() => {setCharAllowed((prev) => !prev)}}
                />
               <label>Characters: </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PasswordGen;
