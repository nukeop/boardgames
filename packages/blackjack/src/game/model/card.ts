import { CardRank, CardSuit, ICard } from "./types";

export class Card implements ICard {
    suit: CardSuit;
    rank: CardRank;

    constructor(suit: CardSuit, rank: CardRank) {
        this.suit = suit;
        this.rank = rank;
    }

    toString(): string {
        return `${CardRank[this.rank]} of ${CardSuit[this.suit]}`;
    }
}