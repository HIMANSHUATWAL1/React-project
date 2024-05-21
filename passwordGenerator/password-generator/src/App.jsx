import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  // for length tracking --->
  const [len, setLen] = useState(8);

  // for numtracking in password is present or not--->

  const [numAllowed, setNumAllowed] = useState(false);

  // for character tracking is present or not-->

  const [charAllowed, setCharAllowed] = useState(false);

  // for setting rondom passwords in input feild--->

  const [password, setPassword] = useState("");

  // useRef hook----->

  const passwordRef = useRef(null);

  // for random password generator handling ------>

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[]~`";

    for (let i = 1; i <= len; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [len, numAllowed, charAllowed, setPassword]);

  // here are multiple re-renders in "passGenerator function " so we used useEffect hook for the re-rendering the our password in multiple changes.

  useEffect(() => {
    passGenerator();
  }, [len, numAllowed, charAllowed, passGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    // for user exprience selected password is highlighted
    passwordRef.current?.select();
    // we can give the range for selection of password
    passwordRef.current?.setSelectionRange(0, len);
    // copy to clipboard-->
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
        <h3 className="text-2xl text-center text-white m-2">
          Password generator
        </h3>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-sky-900"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e) => {
                setLen(e.target.value);
              }}
            />
            <label>Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
