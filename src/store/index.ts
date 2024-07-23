import { configureStore, createSlice } from '@reduxjs/toolkit';
import { MyCard } from '../types';

export type CardState = MyCard & { id: string };

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
      console.log(card);
      state.cards.push(card);
    },
  },
});

export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: cardSlice.reducer,
});

export const { addCard } = cardSlice.actions;

export default store;
