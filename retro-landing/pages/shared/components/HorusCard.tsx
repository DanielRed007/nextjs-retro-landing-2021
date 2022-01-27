import { HomeCard } from "../interfaces/HomeCard";
import styles from "../../../styles/Shared.module.css";

export const HorusCard: React.FC<HomeCard> = ({title, text, cardChange}) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>{title}</h1>
            
            <p className={styles.cardText}>{text}</p>
        </div>
    );
};