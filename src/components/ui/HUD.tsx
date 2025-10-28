import { memo } from 'react'
import { motion } from 'framer-motion'
import { Stage, useStage, useAppStore } from '@/store/useAppStore'

const tabs: { key: Stage; label: string }[] = [
  { key: 'data', label: 'Data' },
  { key: 'model', label: 'Model' },
  { key: 'deploy', label: 'Deploy' },
]

export const HUD = memo(function HUD() {
  const stage = useStage()
  const setStage = useAppStore((s) => s.setStage)
  const openProjects = useAppStore((s) => s.openProjects)

  const index = tabs.findIndex((t) => t.key === stage)

  return (
    <>
      <div className="absolute top-4 left-4 z-20 select-none">
        <div className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 backdrop-blur text-white">
          <div className="text-sm font-semibold">Rami Othman — AI Engineer × Flutter</div>
          <div className="text-xs opacity-80">Interactive 3D Lab Desk • R3F</div>
        </div>
      </div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-[340px] bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-1 text-white">
          <motion.div
            className="absolute top-1 bottom-1 rounded-xl bg-white/15"
            initial={false}
            animate={{ left: `${(index * 100) / 3}%`, width: '33.33%' }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          />
          <div className="grid grid-cols-3 relative">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setStage(t.key)}
                className={`relative z-10 py-2 text-sm font-medium rounded-xl ${stage === t.key ? 'text-white' : 'text-white/70'}`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={openProjects}
          className="px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition"
        >
          Projects
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs z-20 px-3 py-1 rounded-full border border-white/10 bg-white/5">
        Drag to orbit
      </div>
    </>
  )
})
