import {Card} from "../components/Card";
import {data} from "./data";
import { Inter } from '@next/font/google'
import {useState} from "react";
import styles from "@/components/Card.module.css";






const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    const [counter, setCounter] = useState(0)
    function plusClick() {
        setCounter(counter + 1)
    }

    const minusClick = () => {
        setCounter(counter - 1)
         }
        return (

    <>
        <h2 className={styles.nadpis}>Moje produkty</h2>
      {data.map((item) => <Card {...item}/>)}


    </>
  )
}
