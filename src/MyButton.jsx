export default function MyButton({ counter, onClick }) {
    return (
        <>
            <button onClick={onClick}>
                Clicked: {counter} times
            </button>
        </>
    )
}