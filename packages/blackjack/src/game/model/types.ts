export enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades,
};

export enum CardRank {
    Joker,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace,
};

export interface ICard {
    suit: CardSuit;
    rank: CardRank;
}

export interface ICardCollection {
    cards: ICard[];
    serialize(): ICard[];
}

export interface IHand extends ICardCollection {};

export interface IDeck extends ICardCollection {
    deal: () => ICard;
    dealHand: (numCards: number) => IHand;
}

export interface BlackjackState {
    deck: ICard[];
    playerHand: ICard[];
    dealerHand: ICard[];
};