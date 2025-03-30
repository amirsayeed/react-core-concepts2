import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] = useState(0);
    const [bowls, setBowls] = useState(6);

    const handleSingle =()=>{
        const score = runs + 1;
        setRuns(score);
    }

    const handleFour =()=>{
        const score = runs + 4;
        setRuns(score);
    }

    const handleSix =()=>{
        const score = runs + 6;
        setRuns(score);
    }

    const handleBowl =()=>{
        const bowlsDone = bowls - 1;
        setBowls(bowlsDone);
        if(bowlsDone<0){
            alert('over completed');
            alert('New Over');
            setBowls(6);
        }
    }
return(
    <div>
        <h3>Player: Bangla Batsman</h3>
        <h1>Score: {runs}</h1>
        {
            runs >= 50 && <p>Your score: 50</p>
        } 
        <button onClick={handleSingle}>Singles: </button>
        <button onClick={handleFour}>Four: </button>
        <button onClick={handleSix}>Six: </button>
        <h3>Bowler: Bangla Bowler</h3>
        <h1>Bowls: {bowls}</h1>
        {
            bowls === 0 && <p>Over finished</p>
        }
        <button onClick={handleBowl}>Bowl</button>
    </div>
)
}