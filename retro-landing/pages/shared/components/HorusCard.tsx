import { Button, Segment } from 'semantic-ui-react';
import { HomeCard } from "../interfaces/HomeCard";
import styles from "../../../styles/Shared.module.css";

export const HorusCard: React.FC<HomeCard> = ({title, text, setCardIndex}) => {

    return (
        <Segment className={styles.card}>
            <h1 className={styles.cardTitle}>{title}</h1>
            
            <div>
                <div className={styles.cardText}>
                    {text}
                </div>
                <div className={styles.cardButton}>
                    <Button onClick={() => setCardIndex()}>Go</Button>
                </div>
            </div>            
        </Segment>
    );
};
  