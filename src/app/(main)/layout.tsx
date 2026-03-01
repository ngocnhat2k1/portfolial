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
      {/*
        Không có padding trên main – các page tự quản lý padding.
        Home page cần zero padding để fill đúng 100vh.
        Các page khác (about, projects...) tự thêm trong component.
      */}
      <main className="xs:px-8 sm:px-16 md:px-24 lg:px-32 xl:px-40">
        {children}
      </main>
      <Footer />
    </>
  )
}


