import { useEffect } from "react";
import { useState } from "react";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data));
    }, [])
    return (
        <div className="box">
            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div >
    );
}