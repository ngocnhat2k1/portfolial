import Link from 'next/link'
import { CircleText } from '../icons/icons'

const HireMe = () => {
  return (
    <div className="fixed bottom-20 left-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative ">
        <CircleText className="w-[180px] fill-dark animate-spin-slow" />
        <Link
          href="mailto:ngocnhat2k1@gmail.com"
          target="_blank"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto  text-center font-bold text-light  bg-primary rounded-full py-[26px] px-1 ease-in duration-300 text-sm hover:bg-transparent hover:text-primary hover:border-primary border-2 border-primary"
        >
          Connect Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe
