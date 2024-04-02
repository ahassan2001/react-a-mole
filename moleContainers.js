import { useState } from 'react'
import MoleContainer from './MoleContainer'

function App(){
    let [score, setScore] = useState(0)

    const createMoleHill = () => {
        let hills = []
        for (let i = 0; i < 9; i++) {
            hills.push(
                <MoleContainer
                key=""
                setScore={setScore}
                score={score} />
            )
        }
    
        return (
            <div>
                {hills}
            </div>
        )
    }

    return (
        <div className="App">
            <h1>React-a-Mole!</h1>
            {score}
            {createMoleHill()}
        </div>
    )
}

export default App

import {useEffect} from 'react'
import moleImg from // Well...wherever you stored your moleImg.

function Mole(props){
    useEffect(() => {
        // Feel free to adjust this number as you see fit.
        // It is your game to tune!
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}}
            src={moleImg}
            onClick={props.handleClick} />
        </div>
    )
}
