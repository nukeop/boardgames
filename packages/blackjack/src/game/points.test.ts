import { Card } from "./model/card";
import { Hand } from "./model/hand";
import { CardRank, CardSuit } from "./model/types";
import { calculatePoints } from "./points";

describe("Counting points for hands", () => {
  const hands = [
    new Hand([new Card(CardSuit.Clubs, CardRank.Two)]),
    new Hand([
      new Card(CardSuit.Clubs, CardRank.Three),
      new Card(CardSuit.Hearts, CardRank.Four),
    ]),
    new Hand([
      new Card(CardSuit.Clubs, CardRank.Three),
      new Card(CardSuit.Hearts, CardRank.Four),
      new Card(CardSuit.Spades, CardRank.Three),
    ]),
    new Hand([
      new Card(CardSuit.Clubs, CardRank.King),
      new Card(CardSuit.Hearts, CardRank.Two),
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace)
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ace)
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ten)
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ten),
        new Card(CardSuit.Spades, CardRank.Ace)
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Ace)
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Ten),
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Seven),
    ]),
    new Hand([
        new Card(CardSuit.Clubs, CardRank.Ace),
        new Card(CardSuit.Hearts, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Ace),
        new Card(CardSuit.Spades, CardRank.Nine),
    ]),
  ];

  it.each([
    {
      points: 2,
      hand: hands[0],
      contents: hands[0].toString()
    },
    {
      points: 7,
      hand: hands[1],
      contents: hands[1].toString()
    },
    {
      points: 10,
      hand: hands[2],
      contents: hands[2].toString()
    },
    {
      points: 12,
      hand: hands[3],
      contents: hands[3].toString()
    },
    {
      points: 11,
      hand: hands[4],
      contents: hands[4].toString()
    },
    {
      points: 12,
      hand: hands[5],
      contents: hands[5].toString()
    },
    {
      points: 21,
      hand: hands[6],
      contents: hands[6].toString()
    },
    {
      points: 12,
      hand: hands[7],
      contents: hands[7].toString()
    },
    {
      points: 13,
      hand: hands[8],
      contents: hands[8].toString()
    },
    {
      points: 13,
      hand: hands[9],
      contents: hands[9].toString()
    },
    {
      points: 20,
      hand: hands[10],
      contents: hands[10].toString()
    },
    {
      points: 12,
      hand: hands[11],
      contents: hands[11].toString()
    },
  ])("should count $points points for cards: $contents", ({points, hand}) => {
    expect(calculatePoints(hand.cards)).toEqual(points);
  });
});
