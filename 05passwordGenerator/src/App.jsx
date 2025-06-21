import { useCallback, useState, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!{}[]!$%&*#@*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center text-orange-600">
            Password Generator
          </h1>

          {/* Password Output & Copy */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              value={password}
              className="w-full px-4 py-2 text-gray-700 bg-white outline-none"
              placeholder="Generated password will appear here"
              readOnly
              ref={passwordRef}
            />
            <button onClick={copyToClipboard}
              className="bg-orange-600 text-white px-4 py-2 h-full hover:bg-orange-700 transition duration-200"
            >
              Copy
            </button>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Length Slider */}
            <div className="flex items-center justify-between">
              <label className="text-gray-700 font-medium">Length: {length}</label>
              <input
                type="range"
                min={8}
                max={100}
                value={length}
                className="w-2/3 accent-orange-600 cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
            </div>

            {/* Number Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="numberInput"
                defaultChecked={numberAllowed}
                className="accent-orange-600"
                onChange={(e) => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className="text-gray-700">Include Numbers</label>
            </div>

            {/* Character Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="characterInput"
                defaultChecked={characterAllowed}
                className="accent-orange-600"
                onChange={() => {
                  setCharacterAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="characterInput" className="text-gray-700">Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
