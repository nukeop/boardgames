import { calculatePoints } from "../points";
import { CardRank, ICard, IHand } from "./types";

export class Hand implements IHand {
    cards: ICard[];

    constructor(cards: ICard[] = []) {
        this.cards = cards;
    }

    isBlackjack(): boolean {
        return this.cards.length === 2 && this.cards.every((card) => card.rank === CardRank.Ace);
    }
    
    isBust(): boolean {
        return calculatePoints(this.cards) > 21;        
    }

    serialize(): ICard[] {
        return this.cards;
    }

    toString(): string {
        return this.cards.map((card) => card.toString()).join(", ");
    }
}