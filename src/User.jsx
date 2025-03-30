import './App.css'
export default function User({ user }) {
    const { name, email } = user;
    // console.log(user);
    return (
        <div className="box">
            <h3>Name: {name} </h3>
            <p>Email: {email} </p>
        </div>
    );
}