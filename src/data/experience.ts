import { Localized } from '@/i18n'

// =============================================
// Kinh nghiệm & Học vấn — theo CV
// =============================================
export type ExperienceItem = {
  company: Localized
  role: Localized
  period: Localized
  type: 'work' | 'education'
  highlights: Localized[]
}

export const experiences: ExperienceItem[] = [
  {
    company: { vi: 'Mona Media', en: 'Mona Media' },
    role: {
      vi: 'Frontend Team Lead / Technical Lead',
      en: 'Frontend Team Lead / Technical Lead',
    },
    period: { vi: '09/2023 – Hiện tại', en: 'Sep 2023 – Present' },
    type: 'work',
    highlights: [
      {
        vi: 'Dẫn dắt và quản lý đội frontend 5+ thành viên: phân chia công việc, mentoring, code review và coaching kỹ thuật để đảm bảo chất lượng code và sự phát triển của đội.',
        en: 'Led and managed a frontend team of 5+ members: task assignment, mentoring, code review, and technical coaching to ensure code quality and team growth.',
      },
      {
        vi: 'Đóng vai trò Tech Lead: định hình giải pháp kỹ thuật, chốt công nghệ và kiến trúc cho từng dự án.',
        en: 'Acted as Tech Lead: defined technical solutions, finalized the technology stack and architecture decisions for each project.',
      },
      {
        vi: 'Thiết kế & duy trì kiến trúc frontend cho các nền tảng bán lẻ, thương mại điện tử, ERP và e-learning theo best practices và coding standards.',
        en: 'Designed and maintained frontend architecture for retail, e-commerce, ERP, and e-learning platforms following best practices and coding standards.',
      },
      {
        vi: 'Xây dựng component UI tái sử dụng, mở rộng tốt bằng React.js, Next.js với OOP, Design Patterns và S.O.L.I.D.',
        en: 'Built high-quality, reusable, scalable UI components with React.js, Next.js using OOP, Design Patterns, and S.O.L.I.D principles.',
      },
      {
        vi: 'Tối ưu hiệu năng frontend (tốc độ tải trang, rendering, tương tác API); cải thiện điểm Google Lighthouse.',
        en: 'Optimized frontend performance (page load, rendering efficiency, API interaction); improved Google Lighthouse scores.',
      },
      {
        vi: 'Tích hợp RESTful API, luồng xác thực (JWT, OAuth2) và WebSocket cùng đội backend; thiết lập coding standards, branching strategy và unit/UI testing bằng Jest.',
        en: 'Integrated RESTful APIs, authentication flows (JWT, OAuth2), and WebSocket with backend teams; established coding standards, branching strategy, and unit/UI testing with Jest.',
      },
    ],
  },
  {
    company: {
      vi: 'Đại học Giao thông Vận tải TP.HCM (UTH)',
      en: 'Ho Chi Minh City University of Transport (UTH)',
    },
    role: {
      vi: 'Cử nhân Công nghệ Thông tin',
      en: 'Bachelor of Information Technology',
    },
    period: { vi: '10/2019 – 10/2023', en: 'Oct 2019 – Oct 2023' },
    type: 'education',
    highlights: [
      {
        vi: 'Chuyên ngành: Công nghệ Thông tin — định hướng Web Development.',
        en: 'Major: Information Technology — Specialization in Web Development.',
      },
      {
        vi: 'GPA: 3.2 — Xếp loại: Giỏi.',
        en: 'GPA: 3.2 — Classification: Good.',
      },
    ],
  },
]

// =============================================
// Giải thưởng — theo CV
// =============================================
export type AwardItem = {
  title: Localized
  year: string
  description: Localized
}

export const awards: AwardItem[] = [
  {
    title: {
      vi: 'Nhân viên của năm (2025)',
      en: 'Employee of the Year (2025)',
    },
    year: '2025',
    description: {
      vi: 'Được vinh danh nhờ hiệu suất xuất sắc và những đóng góp kỹ thuật có tác động cao tại Mona Media.',
      en: 'Recognized for exceptional performance and high-impact technical contributions at Mona Media.',
    },
  },
]
