import { memo } from 'react'
import { useProjectsOpen, useAppStore } from '@/store/useAppStore'

export default memo(function ProjectsModal() {
  const open = useProjectsOpen()
  const closeProjects = useAppStore((s) => s.closeProjects)
  if (!open) return null

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={closeProjects} />
      <div className="relative z-10 w-[min(90vw,720px)] max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 bg-[#101216] text-white shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-semibold">Projects</h3>
          <button onClick={closeProjects} className="px-2 py-1 rounded bg-white/10 hover:bg-white/15">Close</button>
        </div>
        <div className="p-4 text-sm text-white/80">Placeholder — real cards come next.</div>
      </div>
    </div>
  )
})
