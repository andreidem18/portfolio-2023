import { configureStore } from '@reduxjs/toolkit'
import appSlice from './generalSlices/appSlice'
import projectsSlice from '@/components/projects/projects.slice'
// ...

const store = configureStore({
  reducer: {
    app: appSlice,
    projects: projectsSlice,
  },
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
