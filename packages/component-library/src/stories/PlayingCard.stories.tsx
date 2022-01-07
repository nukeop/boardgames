import { CardSuit, PlayingCard } from "../components";
import styles from './styles.scss';


export default {
    title: 'Components/PlayingCard',
    component: PlayingCard
}

export const AllSuitsAndRanks = () => <div className={styles['story-list']}>
    {
        Object.values(CardSuit).map(suit => ([
            "A", "K", "Q", "J",
            "2", "3", "4", "5",
            "6", "7", "8", "9", "10"
        ] as const).map(rank => {
            return <PlayingCard
                key={`${suit}-${rank}`}
                rank={rank}
                suit={suit} />;
        }))
    }
</div>;