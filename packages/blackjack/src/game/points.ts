import { CardRank, ICard } from "./model/types";

const rankToPoints = (rank: CardRank): number => {
    switch (rank) {
        case CardRank.Two:
            return 2;
        case CardRank.Three:
            return 3;
        case CardRank.Four:
            return 4;
        case CardRank.Five:
            return 5;
        case CardRank.Six:
            return 6;
        case CardRank.Seven:
            return 7;
        case CardRank.Eight:
            return 8;
        case CardRank.Nine:
            return 9;
        case CardRank.Ten:
            return 10;
        case CardRank.Jack:
            return 10;
        case CardRank.Queen:
            return 10;
        case CardRank.King:
            return 10;
        case CardRank.Ace:
            return 11;
        default:
            return 0;
    }
}

export const calculatePoints = (cards: ICard[]): number => {
    const aces = cards.filter((card) => card.rank === CardRank.Ace);
    const nonAces = cards.filter((card) => card.rank !== CardRank.Ace);

    let total = nonAces.reduce((total, card) => total + rankToPoints(card.rank), 0);
    total += aces.length * 11;
    let acesSpent = aces.length;

    while(acesSpent > 0 && total > 21) {
        total -= 10;
        acesSpent--;
    }

    return total;
}