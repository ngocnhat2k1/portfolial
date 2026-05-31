import { Localized } from '@/i18n'

// =============================================
// Kỹ năng — cập nhật đầy đủ theo CV (6 nhóm)
// =============================================
export type SkillGroup = {
  iconKey: 'code' | 'react' | 'database' | 'network' | 'paint' | 'tools'
  title: Localized
  label: Localized
  description: string // danh sách công nghệ — giữ nguyên tên kỹ thuật cho cả 2 ngôn ngữ
}

export const skillGroups: SkillGroup[] = [
  {
    iconKey: 'code',
    title: {
      vi: 'Ngôn ngữ & Kiến trúc',
      en: 'Languages & Architecture',
    },
    label: { vi: 'Nền tảng', en: 'Core' },
    description:
      'JavaScript (ES6+), TypeScript, HTML5, CSS3 (SCSS/SASS), OOP, Design Patterns, S.O.L.I.D',
  },
  {
    iconKey: 'react',
    title: { vi: 'Frameworks', en: 'Frameworks' },
    label: { vi: 'Thư viện', en: 'Libraries' },
    description: 'Next.js (App/Pages Router), React.js, Vite',
  },
  {
    iconKey: 'database',
    title: { vi: 'State & Dữ liệu', en: 'State & Data' },
    label: { vi: 'Trạng thái', en: 'State' },
    description: 'TanStack Query, Zustand, Redux Toolkit, GraphQL (Apollo)',
  },
  {
    iconKey: 'network',
    title: { vi: 'API & Realtime', en: 'API & Realtime' },
    label: { vi: 'Kết nối', en: 'Networking' },
    description: 'RESTful, GraphQL, JWT, OAuth2, Auth flows, WebSocket / Socket.IO',
  },
  {
    iconKey: 'paint',
    title: { vi: 'UI / UX', en: 'UI / UX' },
    label: { vi: 'Giao diện', en: 'Styling' },
    description:
      'Tailwind CSS, MUI, Ant Design, Framer Motion / GSAP, Mobile-first, Web Performance',
  },
  {
    iconKey: 'tools',
    title: { vi: 'Công cụ & Quy trình', en: 'Tools & Process' },
    label: { vi: 'Hệ sinh thái', en: 'Ecosystem' },
    description:
      'Jest, Git (GitHub/GitLab/Bitbucket), Jira, Figma, Docker, CI/CD, Agile/Scrum',
  },
]
