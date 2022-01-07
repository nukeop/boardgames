import cx from "classnames";

import { Card } from ".."
import { CardSuit, CardRank } from "../types";
import { getPipsLayout } from "./layout";

import styles from "./PlayingCard.module.scss";

type PlayingCardProps = {
    rank: CardRank;
    suit: CardSuit;
    isFaceUp?: boolean;
    onClick?: React.MouseEventHandler;
}

const mapSuitToColor = (suit: string) => {
    switch (suit) {
        case CardSuit.Clubs:
        case CardSuit.Spades:
            return "black";
        case CardSuit.Diamonds:
        case CardSuit.Hearts:
            return "red";
        default:
            return "";
    }
}

const isFaceCard = (rank: CardRank) => {
    return rank === "A" || rank === "J" || rank === "Q" || rank === "K";
}

const mapRankToPicture = (rank: CardRank) => {
    switch (rank) {
        case "A":
            return "A";
        case "J":
            return "J";
        case "Q":
            return "Q";
        case "K":
            return "K";
        default:
            return rank;
    }
}

type PipProps = {
    suit: CardSuit;
    large?: boolean;
}

const Pip: React.FC<PipProps> = ({ suit, large }) => <div
    className={cx(
        styles['pip'],
        styles[suit],
        { [styles.large]: large }
    )}
/>;

export const LargePip: React.FC<PipProps> = ({ suit }) => <Pip suit={suit} large />;

export const PlayingCard: React.FC<PlayingCardProps> = ({
    rank,
    suit,
    isFaceUp = true,
    onClick
}) => {
    return <Card
        className={cx(styles['playing-card'], styles[mapSuitToColor(suit)])}
    >
        <div className={cx(styles['rank'], styles['left'])}>
            {rank}
            <Pip suit={suit} />
        </div>

        {
            isFaceCard(rank)
                ? <div className={styles['picture']}>
                    {mapRankToPicture(rank)}
                </div>
                : <div className={styles['pips']}>
                    {getPipsLayout(rank, suit)}
                </div>
        }

        <div className={cx(styles['rank'], styles['right'])}>
            {rank}
            <Pip suit={suit} />
        </div>
    </Card>;
};