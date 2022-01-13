import { Game, Move } from "boardgame.io";
import { noop } from "lodash";

import { Deck } from "./model/deck";
import { BlackjackState } from "./model/types";
import { calculatePoints } from "./points";

export const Hit: Move<BlackjackState> = (G, ctx) => {
    const deck = new Deck(G.deck);
      G.hands[ctx.currentPlayer].push(deck.deal());
      G.deck = deck.serialize();
}

export const Stand = noop;

export const EndIf: Game<BlackjackState>['endIf'] = (G, ctx) => {
}