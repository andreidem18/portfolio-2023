import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { languages } from '@/translations/languages.type'

type theme = 'dark' | 'light';

// Define a type for the slice state
interface AppState {
  language: languages,
  theme: theme,
}

// Define the initial state using that type
const initialState: AppState = {
  language: 'en',
  theme: 'dark',
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLanguaje: (state, action: PayloadAction<languages> ) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<theme>) => {
      localStorage.setItem('theme', action.payload);
      state.theme = action.payload;
    }
  },
})

export const { setLanguaje, setTheme } = appSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer
