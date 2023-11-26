import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/redux/store'
import { tagsData } from '@/data/projects.data'

// Define a type for the slice state
interface ProjectsState {
  filter: typeof tagsData[number];
}

// Define the initial state using that type
const initialState: ProjectsState = {
  filter: 'all',
}

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<typeof tagsData[number]> ) => {
      state.filter = action.payload;
    }
  },
})

export const { setFilter } = projectsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectProjects = (state: RootState) => state.projects;

export default projectsSlice.reducer
