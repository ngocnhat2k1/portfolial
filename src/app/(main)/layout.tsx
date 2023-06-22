import Footer from '@/components/footer'
import { NavBar } from '@/components/navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main className="grow pt-[--header-desktop] mx-10">{children}</main>
      <Footer />
    </>
  )
}
