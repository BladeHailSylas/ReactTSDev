import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const WritingPlace = () => {
    return(
    <div id="writing-place">
        <label htmlFor="title" className="input-field">
            <input id="title" type="text"></input>
        </label>
        <label htmlFor="content" className="input-field">
            <textarea id="content" placeholder="content"></textarea>
        </label>
        <label htmlFor="password" className="input-field">
            <input id="password" type="text"></input>
        </label>
        <label htmlFor="submit-button" className="input-field">
            <input id="submit-button" type="submit" formMethod='post' value=""></input>
        </label>
    </div>
);}

function App() {
    const [count, setCount] = useState(0)

    return (
    <>
        <div>
        <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p className = "text-4xl font-bold text-blue-500">
            Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        </div>
        <WritingPlace />
    </>
    )
}

export default App
