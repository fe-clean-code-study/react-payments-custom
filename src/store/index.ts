import { configureStore, createSlice } from '@reduxjs/toolkit';
import { MyCard } from '../types';

interface CardState {
  cards: MyCard[];
}

const initialCard: CardState = {
  cards: [],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState: initialCard,
  reducers: {},
});

export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: cardSlice.reducer,
});

export default store;
