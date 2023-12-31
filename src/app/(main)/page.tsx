import HireMe from '@/components/HireMe'
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <div className="w-full h-auto inline-block z-0 bg-light dark:bg-dark dark:text-white transition-colors ">
      <HomePage />
      <HireMe />
    </div>
  )
}
