import Footer from '@/components/footer'
import { NavBar } from '@/components/navbar'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <NavBar />
      <main className="container">{children}</main>
      <Footer />
    </div>
  )
}
