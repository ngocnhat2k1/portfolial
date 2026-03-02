import ContactPage from '../components/ContactPage/ContactPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tran Ngoc Nhat – Frontend Team Leader. Available via email (ngocnhat2k1@gmail.com), LinkedIn, or GitHub. Based in Ho Chi Minh City, Vietnam.',
  keywords: [
    'Contact Tran Ngoc Nhat',
    'Hire Frontend Developer',
    'ngocnhat2k1@gmail.com',
    'Frontend Developer HCMC',
  ],
}

const Contact = () => {
  return (
    <>
      <h1 className="sr-only">Contact Tran Ngoc Nhat - Frontend Developer</h1>
      <ContactPage />
    </>
  )
}

export default Contact
