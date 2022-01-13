import { range } from "lodash";

import { enumValues } from "../../utils";
import { Hand } from "./hand";
import { CardRank, CardSuit, ICard, IDeck, IHand } from "./types";

export class Deck implements IDeck {
  cards: ICard[];

  constructor(cards: ICard[] = []) {
    this.cards = cards;
  }

  deal(): ICard {
    const card = this.cards.shift();
    if (!card) {
      throw new Error("No more cards");
    }
    return card;
  }

  dealHand(numCards: number): IHand {
    return new Hand(range(numCards).map(() => this.deal()));
  }

  static getFullDeck(): IDeck {
    const ranks = enumValues(CardRank).filter(
        (rank) => rank !== CardRank.Joker
    );

    return new Deck(
        enumValues(CardSuit)
        .map((suit) =>
          ranks.map((rank) => ({
            suit,
            rank,
          }))
        )
        .flat()
    );
  }

  serialize(): ICard[] {
    return this.cards;
  }
}
