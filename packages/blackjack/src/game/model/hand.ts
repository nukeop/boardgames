import { ICard, IHand } from "./types";

export class Hand implements IHand {
    cards: ICard[];

    constructor() {
        this.cards = [];
    }

    static fromCards(cards: ICard[]): IHand {
        const hand = new Hand();
        hand.cards = cards;
        return hand;
    }

    serialize(): ICard[] {
        return this.cards;
    }
}