import { useState } from "react";

export default function Team() {
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    const handleReduce = () => {
        const newTeam = team - 1;
        setTeam(newTeam);
    }
    return (
        <div style={{ border: '1px solid yellow', padding: '10px', margin: '10px', borderRadius: '20px' }}>
            <h2>Team Players: {team}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}