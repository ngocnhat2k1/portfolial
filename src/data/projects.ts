import { Localized } from '@/i18n'

// =============================================
// Dự án — dữ liệu song ngữ, làm giàu theo CV (role, period, metric)
// =============================================
export type IProject = {
  title: string
  description: Localized
  tech: string[]
  link?: string
  category: Localized
  role?: Localized
  period?: string
  metric?: Localized // điểm nhấn định lượng
  preview?: string
  mobilePreview?: string
}

const cat = {
  ecommerce: { vi: 'Thương mại điện tử', en: 'E-Commerce' } as Localized,
  erp: { vi: 'ERP Dashboard', en: 'ERP Dashboard' } as Localized,
  elearning: { vi: 'E-Learning', en: 'E-Learning' } as Localized,
  booking: { vi: 'Hệ thống đặt vé', en: 'Booking System' } as Localized,
  corporate: { vi: 'Doanh nghiệp', en: 'Corporate' } as Localized,
}

const leadRole: Localized = { vi: 'Frontend Lead', en: 'Frontend Lead' }

export const projects: IProject[] = [
  {
    title: 'HydraShop',
    category: cat.ecommerce,
    role: leadRole,
    period: '09/2025 – 01/2026',
    description: {
      vi: 'Nền tảng thương mại điện tử thời trang hiệu năng cao (Startup thuộc Hydra Studio – MONA GROUP JSC). Dẫn dắt phân chia công việc, review code, đề xuất giải pháp kỹ thuật; xây dựng catalog, giỏ hàng và luồng thanh toán, tối ưu trải nghiệm tối giản & tốc độ.',
      en: 'High-performance fashion e-commerce platform (Startup by Hydra Studio – MONA GROUP JSC). Led task allocation, code reviews, and technical solutions; built product catalog, cart, and checkout flows with a minimalist, high-performance experience.',
    },
    metric: { vi: 'Trải nghiệm tối giản, tốc độ cao', en: 'Minimalist, high-performance UX' },
    tech: ['Next.js', 'TypeScript', 'TanStack Query', 'GraphQL', 'TailwindCSS'],
    link: 'https://hydrashop.vn',
    preview: '/projects/hydrashop.png',
    mobilePreview: '/projects/hydrashop_mobile.png',
  },
  {
    title: 'Bachlong Mobile',
    category: cat.ecommerce,
    role: leadRole,
    period: '06/2024 – 11/2024',
    description: {
      vi: 'Hệ thống thương mại điện tử di động & điện máy quy mô lớn, phục vụ hàng nghìn người dùng mỗi ngày. Dẫn dắt lập kế hoạch & phát triển, chốt stack Next.js + TanStack Query, review toàn bộ code; trực tiếp làm module catalog, tìm kiếm và thanh toán với SEO & Lighthouse tối ưu.',
      en: 'Large-scale mobile & electronics e-commerce system serving thousands of daily users. Led planning & development, finalized the Next.js + TanStack Query stack, reviewed all code; personally delivered catalog, search, and checkout modules with optimized SEO and Lighthouse.',
    },
    metric: { vi: 'Hàng nghìn người dùng/ngày', en: 'Thousands of daily users' },
    tech: ['Next.js', 'TypeScript', 'TanStack Query', 'GraphQL', 'Zustand'],
    link: 'https://bachlongmobile.com',
    preview: '/projects/bachlongmobile.png',
    mobilePreview: '/projects/bachlongmobile_mobile.png',
  },
  {
    title: 'Cinestar',
    category: cat.booking,
    role: leadRole,
    period: '12/2023 – 04/2024',
    description: {
      vi: 'Hệ thống đặt vé xem phim trực tuyến — nền tảng giao dịch lớn, realtime, đòi hỏi độ tin cậy và hiệu năng cao. Trực tiếp xử lý các tính năng cốt lõi: logic đặt vé & chọn ghế với state phức tạp, tích hợp thanh toán và khóa ghế realtime; dẫn dắt đội hoàn thiện các module còn lại.',
      en: 'Online cinema ticket booking system — a transaction-heavy, real-time platform requiring high reliability and performance. Personally handled core features: ticket booking & seat selection with complex state, payment integration, and real-time seat-locking; led the team on the remaining modules.',
    },
    metric: { vi: 'Realtime seat-locking & thanh toán', en: 'Real-time seat-locking & payments' },
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS', 'Zustand'],
    link: 'https://cinestar.com.vn',
    preview: '/projects/cinestar.png',
    mobilePreview: '/projects/cinestar_mobile.png',
  },
  {
    title: 'Mona SkillHub',
    category: cat.erp,
    role: leadRole,
    period: '03/2025 – 06/2025',
    description: {
      vi: 'Nền tảng đào tạo & tự học nội bộ của Mona Media. Dẫn dắt phát triển Admin Dashboard quản lý nội dung và người dùng; định hình kiến trúc UI, review code và triển khai hiệu ứng/animation nâng cao bằng GSAP.',
      en: 'Internal teaching & self-learning platform of Mona Media. Led the development of a comprehensive Admin Dashboard for content and user management; defined the UI architecture, reviewed team code, and implemented advanced transitions/animations with GSAP.',
    },
    metric: { vi: 'Admin Dashboard + GSAP', en: 'Admin Dashboard + GSAP' },
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'GSAP', 'Socket.IO'],
    link: 'https://skillhub.mona.academy',
    preview: '/projects/skillhub.png',
    mobilePreview: '/projects/skillhub_mobile.png',
  },
  {
    title: 'Khanh Hung Academy',
    category: cat.elearning,
    role: leadRole,
    period: '02/2024 – Hiện tại',
    description: {
      vi: 'Hệ thống E-learning hoàn chỉnh để bán & vận hành khóa học trực tuyến — từ website học viên đến admin dashboard với thông báo realtime qua Socket.IO. Nền tảng đã được bán cho hơn 100+ khách hàng trả phí, tạo doanh thu ổn định.',
      en: 'A complete E-learning system to sell & deliver online courses — from the learner website to the admin dashboard with real-time notifications via Socket.IO. The platform has been sold to 100+ paying customers, generating stable revenue.',
    },
    metric: { vi: '100+ khách hàng trả phí', en: '100+ paying customers' },
    tech: ['Next.js', 'TypeScript', 'Socket.IO', 'TanStack Query', 'SCSS'],
    link: 'https://khanhhung.academy/learn',
    preview: '/projects/khanhhung.png',
    mobilePreview: '/projects/khanhhung_mobile.png',
  },
  {
    title: 'Kim Thanh',
    category: cat.ecommerce,
    description: {
      vi: 'Giải pháp thương mại điện tử phụ tùng xe máy với catalog sản phẩm, quản lý danh mục và luồng thanh toán tinh gọn cho chuỗi phụ tùng ô tô – xe máy.',
      en: 'Motorcycle parts retail e-commerce solution with product catalog, category management, and a streamlined checkout flow for an automotive parts chain.',
    },
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'TanStack Query'],
    link: 'https://kimthanh.com.vn',
    preview: '/projects/kimthanh.png',
    mobilePreview: '/projects/kimthanh_mobile.png',
  },
  {
    title: 'Sieu Thi Nghe Nhin',
    category: cat.ecommerce,
    description: {
      vi: 'Nền tảng thương mại điện tử điện tử tiêu dùng với dải sản phẩm rộng, bộ lọc nâng cao và hiệu năng tối ưu cho cửa hàng đa ngành hàng.',
      en: 'Consumer electronics e-commerce platform with a wide product range, advanced filtering, and optimized performance for a multi-category store.',
    },
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'GraphQL', 'TanStack Query'],
    link: 'https://sieuthinghenhin.vn',
    preview: '/projects/sieuthinghenhin.png',
    mobilePreview: '/projects/sieuthinghenhin_mobile.png',
  },
  {
    title: 'Sophie Distributor',
    category: cat.ecommerce,
    description: {
      vi: 'Nền tảng phân phối mỹ phẩm & làm đẹp cao cấp với trang trưng bày sản phẩm, cổng nhà phân phối và chức năng thương mại điện tử cho thương hiệu quốc tế.',
      en: 'Premium beauty & cosmetics distribution platform with product showcase, distributor portal, and e-commerce functionality for an international brand.',
    },
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'REST API', 'Zustand'],
    link: 'https://sophiedistributor.com',
    preview: '/projects/sophiedistributor.png',
    mobilePreview: '/projects/sophiedistributor_mobile.png',
  },
  {
    title: 'Nhathuoc Pharceco',
    category: cat.ecommerce,
    description: {
      vi: 'Nền tảng thương mại điện tử dược phẩm với quản lý sản phẩm, xử lý đơn thuốc và đặt hàng trực tuyến cho chuỗi nhà thuốc.',
      en: 'Pharmaceutical e-commerce platform with product management, prescription handling, and online ordering for a pharmacy chain.',
    },
    tech: ['Next.js', 'TypeScript', 'GraphQL', 'TailwindCSS', 'TanStack Query'],
    link: 'https://nhathuocpharceco.monaweb.dev',
    preview: '/projects/nhathuocpharceco.png',
    mobilePreview: '/projects/nhathuocpharceco_mobile.png',
  },
  {
    title: 'Labee',
    category: cat.ecommerce,
    description: {
      vi: 'Nền tảng web hiện đại và toàn diện cho Labee.',
      en: 'Modern and comprehensive web platform for Labee.',
    },
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://labee.vn',
    preview: '/projects/labee.png',
    mobilePreview: '/projects/labee_mobile.png',
  },
  {
    title: 'Inwine',
    category: cat.ecommerce,
    description: {
      vi: 'Nền tảng thương mại điện tử và phân phối rượu vang cao cấp.',
      en: 'Premium wine e-commerce and distribution platform.',
    },
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://inwine.vn',
    preview: '/projects/inwine.png',
    mobilePreview: '/projects/inwine_mobile.png',
  },
  {
    title: 'Wiisnt',
    category: cat.corporate,
    description: {
      vi: 'Nền tảng kết nối chuyên gia với các cơ hội việc làm.',
      en: 'Innovative platform matching professionals with opportunities.',
    },
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://wiisnt.vn',
    preview: '/projects/wiisnt.png',
    mobilePreview: '/projects/wiisnt_mobile.png',
  },
  {
    title: 'Yến Đảo Cần Giờ',
    category: cat.ecommerce,
    description: {
      vi: 'Website thương mại điện tử sản phẩm yến sào cao cấp từ Cần Giờ.',
      en: 'E-commerce site for premium bird nest products from Can Gio.',
    },
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://yendaocangio.com',
    preview: '/projects/yendaocangio.png',
    mobilePreview: '/projects/yendaocangio_mobile.png',
  },
  {
    title: 'Tuấn Kiệt Academy',
    category: cat.elearning,
    description: {
      vi: 'Nền tảng giáo dục cung cấp các khóa học và chương trình đào tạo đa dạng.',
      en: 'Educational platform offering diverse courses and training programs.',
    },
    tech: ['Next.js', 'React', 'TailwindCSS'],
    link: 'https://tuankiet.academy',
    preview: '/projects/tuankiet.png',
    mobilePreview: '/projects/tuankiet_mobile.png',
  },
]
