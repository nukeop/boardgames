import { Game } from "boardgame.io";
import { Deck } from "./model/deck";
import { Hand } from "./model/hand";

import { BlackjackState } from "./model/types";

export const BlackjackGame: Game<BlackjackState> = {
  setup: (ctx) => {
    const deck = Deck.getFullDeck();
    deck.cards = ctx.random ? ctx.random.Shuffle(deck.cards) : deck.cards;

    return {
      deck: deck.serialize(),
      playerHand: new Hand().serialize(),
      dealerHand: new Hand().serialize(),
    };
  },
};
