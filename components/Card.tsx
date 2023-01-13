import styles from "./Card.module.css"


interface CardProps {
    name: string;
    price: string;
    category: string;
    brand: string;
    description: string;
}

export const Card = (props: CardProps) => {
    return (
        <div className={styles.cardobal}>
            <h2 className={styles.name}>{props.name}</h2>
            <h5 className={styles.brand}>{props.brand}</h5>
            <h5 className={styles.category}>{props.category}</h5>
            <h2 className={styles.price}>{props.price}</h2>
            <section className={styles.description}>{props.description}</section>
        </div>
    )
}