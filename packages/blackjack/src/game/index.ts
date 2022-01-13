import { Game } from 'boardgame.io';
import { Deck } from './model/deck';
import { Hand } from './model/hand';

import { BlackjackState } from './model/types';
import { Hit, Stand, EndIf } from './moves';

export const BlackjackGame: Game<BlackjackState> = {
  setup: (ctx) => {
    const deck = Deck.getFullDeck();
    deck.cards = ctx.random ? ctx.random.Shuffle(deck.cards) : deck.cards;

    const hands: BlackjackState['hands'] = {};
    ctx.playOrder.forEach((playerId) => {
      hands[playerId] = new Hand([deck.deal(), deck.deal()]).serialize();
    });

    return {
      deck: deck.serialize(),
      hands
    };
  },
  moves: {
    Hit,
    Stand
  },
  endIf: EndIf
};
