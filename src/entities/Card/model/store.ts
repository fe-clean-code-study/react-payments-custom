import { configureStore, createSlice } from '@reduxjs/toolkit';

import { RegisteredCard } from '../types';

export type CardState = RegisteredCard;

interface CardsState {
  cards: CardState[];
}

const initialCard: CardsState = {
  cards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState: initialCard,
  reducers: {
    addCard: (state, actions) => {
      const { card } = actions.payload;
      state.cards.push(card);
    },
    removeCard: (state, actions) => {
      const { id } = actions.payload;
      state.cards = state.cards.filter((card) => card.id !== id);
    },
    addCardName: (state, actions) => {
      const { id, cardAlias } = actions.payload;
      const targetCard = state.cards.find((card) => card.id === id);
      if (targetCard) {
        targetCard.cardAlias = cardAlias;
      }
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const store = configureStore({
  reducer: cardSlice.reducer,
});

export const cardAction = cardSlice.actions;
