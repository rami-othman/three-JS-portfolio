import Scene from '@/components/3d/Scene'
import { HUD } from '@/components/ui/HUD'
import ProjectsModal from '@/components/ui/ProjectsModal'

export default function Home() {
  return (
    <div className="w-screen h-screen relative bg-[#0c0d10] text-white">
      <HUD />
      <Scene />
      <ProjectsModal />
    </div>
  )
}
