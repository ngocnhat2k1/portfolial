import Link from 'next/link'
import { FacebookIcon, GithubIcon, LinkedInIcon } from '../icons/icons'

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t-4 border-dark py-4 flex justify-between px-16">
      <div>2023 © All Rights Reserved.</div>
      <div> Built with ♡ by Ngoc Nhat</div>
      <div className="flex justify-between gap-10">
        <Link href={'https://github.com/ngocnhat2k1'}>
          <GithubIcon className="text-[36px]" />
        </Link>
        <Link href={'https://www.linkedin.com/in/tran-ngoc-nhat-109a06279/'}>
          <LinkedInIcon className="text-[36px]" />
        </Link>
        <Link href={'https://www.facebook.com/ngocnhat2k1'}>
          <FacebookIcon className="text-[10px]" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
