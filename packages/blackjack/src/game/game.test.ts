import { Client } from 'boardgame.io/client';
import { MockRandom } from 'boardgame.io/testing';
import { range } from 'lodash';

import { BlackjackGame } from '.';
import { BlackjackState, CardRank } from './model/types';

describe('Blackjack game tests', () => {
  describe('Setup', () => {
    it('sets up a new game', () => {
      const client = Client<BlackjackState>({
        game: BlackjackGame,
        numPlayers: 4
      });

      const state = client.getState();
      const ranks = state?.G.deck.map((card) => card.rank);

      expect(ranks).not.toContain(CardRank.Joker);
      expect(state?.G.deck).toHaveLength(44);

      range(state?.ctx.numPlayers ?? 0).forEach((playerId) => {
        expect(state?.G.hands[playerId]).toHaveLength(2);
      });
    });

    it('shuffles the deck when starting a new game', () => {
      const mockShuffle = jest.fn((cards) => cards);
      const randomPlugin = MockRandom({
        Shuffle: mockShuffle,
      });

      Client<BlackjackState>({
        game: {
          ...BlackjackGame,
          plugins: [randomPlugin],
        },
        numPlayers: 4
      });

      expect(mockShuffle).toHaveBeenCalled();
    });
  });

  describe('After setup', () => {
    it('the players are able to hit', () => {
      const client = Client<BlackjackState>({
        game: BlackjackGame,
      });
        
        client.moves.Hit();
  
        const state = client.getState();
        expect(state?.G.hands[0]).toHaveLength(3);
    });

    it('the players are able to stand', () => {
      const client = Client<BlackjackState>({
        game: BlackjackGame,
      });
        
        client.moves.Stand();
  
        const state = client.getState();
        expect(state?.G.hands[0]).toHaveLength(2);
    });

    xit('the players are able to double down', () => {
      const client = Client<BlackjackState>({
        game: BlackjackGame,
      });
        
        client.moves.DoubleDown();
  
        const state = client.getState();
        expect(state?.G.hands[0]).toHaveLength(3);
    });
  });
});
