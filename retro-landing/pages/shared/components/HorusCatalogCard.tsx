import { Button, Segment } from 'semantic-ui-react';
import { HomeCatalogCard } from "../interfaces/HomeCatalogCard";
import styles from "../../../styles/Shared.module.css";

export const HorusCatalogCard: React.FC<HomeCatalogCard> = ({title, developer, description, price, image, addToCart}) => {

    return (
        <div style={{margin: "5px 0"}}>
            <Segment className={styles.catalogItem}>
                <h1 className={styles.cardTitle}>{title}</h1>
                
                <div>
                    <div className={styles.cardText}>
                        {developer}
                    </div>
                    <div className={styles.cardText}>
                        {description}
                    </div>
                    <div className={styles.cardText}>
                        {price}
                    </div>
                    <div className={styles.cardText}>
                        {image}
                    </div>
                    <div className={styles.cardButton}>
                        <Button onClick={() => addToCart()}>Add</Button>
                    </div>
                </div>            
            </Segment>
        </div>
    );
};
  