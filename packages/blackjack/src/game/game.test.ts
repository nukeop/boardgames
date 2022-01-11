import { Client } from "boardgame.io/client";
import { MockRandom } from "boardgame.io/testing";

import { BlackjackGame } from ".";
import { Deck } from "./model/deck";
import { BlackjackState, CardRank } from "./model/types";

describe("Blackjack game object tests", () => {
  it("sets up a new game", () => {
    const client = Client<BlackjackState>({
      game: BlackjackGame
    });

    const state = client.getState();
    const ranks = state?.G.deck.map((card) => card.rank);

    expect(ranks).not.toContain(CardRank.Joker);
    expect(state?.G.deck).toHaveLength(52);
    expect(state?.G.playerHand).toHaveLength(0);
    expect(state?.G.dealerHand).toHaveLength(0);
  });

  it("shuffles the deck when starting a new game", () => {
    const mockShuffle = jest.fn();
    const randomPlugin = MockRandom({
      Shuffle: mockShuffle,
    });
    
    Client<BlackjackState>({
      game: {
        ...BlackjackGame,
        plugins: [randomPlugin],
      },
    });

    expect(mockShuffle).toHaveBeenCalled();
  })
});
