import {useState} from "react";

let Counter = () => {
    let [number, setNumber] = useState<number>(0)
    let onPlus = () => setNumber(number + 1)
    let onMinus = () => setNumber(number - 1)

    return (
        <div>
            <button onClick={onPlus}>+</button>
            <h1>{number}</h1>
            <button onClick={onMinus}>-</button>
        </div>
    )
}

export default Counter;