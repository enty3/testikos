import Link from "next/link";
import styles from "./navbar.module.css"

export function Navbar (){
    return(

        <>

            <ul>
                <li>
                    <Link href="/" >fakealza</Link>
                </li>
                <li>
                    <Link href="/pocitadlo">pocitadlo</Link>
                </li>

            </ul>

        </>

    )
}