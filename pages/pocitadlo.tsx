import {useState} from "react";
import styles from "@/components/pocitadlo.module.css";

export default function Pocitadlo() {
    const [counter, setCounter] = useState(0)

    function plusClick() {
        setCounter(counter + 1)
    }

    const minusClick = () => {
        setCounter(counter - 1)
    }

    return (

        <>
        <div className={styles.obal}>
        <p>{counter}</p>
    <button onClick={minusClick}>-</button>
    <button onClick={plusClick}>+</button>
        </div>
</>
)
}

