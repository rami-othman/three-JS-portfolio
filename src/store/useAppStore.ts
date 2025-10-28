import { create } from 'zustand'

export type Stage = 'data' | 'model' | 'deploy'

type UIState = {
  stage: Stage
  projectsOpen: boolean
}

type UIActions = {
  setStage: (s: Stage) => void
  openProjects: () => void
  closeProjects: () => void
  toggleProjects: () => void
}

type AppState = UIState & UIActions

export const useAppStore = create<AppState>((set) => ({
  stage: 'data',
  projectsOpen: false,

  setStage: (s) => set({ stage: s }),
  openProjects: () => set({ projectsOpen: true }),
  closeProjects: () => set({ projectsOpen: false }),
  toggleProjects: () => set((st) => ({ projectsOpen: !st.projectsOpen })),
}))

// Tiny selectors to keep re-renders minimal
export const useStage = () => useAppStore((s) => s.stage)
export const useProjectsOpen = () => useAppStore((s) => s.projectsOpen)
