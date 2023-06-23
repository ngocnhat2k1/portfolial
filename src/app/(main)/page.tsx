import HireMe from '@/components/HireMe'
import HomePage from './components/HomePage'

export default function Home() {
  return (
    <div className="w-full h-full inline-block z-0 bg-light px-32 pb-16 ">
      <HomePage />
      <HireMe />
    </div>
  )
}
