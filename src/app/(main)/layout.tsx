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
      <main className="grow pt-[--header-desktop] mx-1 p-1 pb-16 xs:px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40 ">
        {children}
      </main>
      <Footer />
    </>
  )
}
