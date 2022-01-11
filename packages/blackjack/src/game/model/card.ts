import { CardRank, CardSuit, ICard } from "./types";

export class Card implements ICard {
    constructor(suit: CardSuit, rank: CardRank) {
        this.suit = suit;
        this.rank = rank;
    }
    suit: CardSuit;
    rank: CardRank;
}