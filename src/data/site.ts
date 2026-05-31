import { Localized } from '@/i18n'

// =============================================
// Nội dung tổng quát của site (song ngữ) — nguồn dữ liệu tập trung
// Cập nhật theo CV: Frontend Technical Leader, 4+ năm kinh nghiệm
// =============================================

export const profile = {
  name: 'Tran Ngoc Nhat',
  nameLocalized: { vi: 'Trần Ngọc Nhật', en: 'Tran Ngoc Nhat' } as Localized,
  title: {
    vi: 'Frontend Technical Leader',
    en: 'Frontend Technical Leader',
  } as Localized,
  handle: 'ngocnhat',
  company: 'Mona Media',
  location: {
    vi: 'Tân Bình, TP. Hồ Chí Minh',
    en: 'Tan Binh, Ho Chi Minh City',
  } as Localized,
  resume: '/resume-v2.pdf',
}

// Hero typewriter
export const heroTyped: Localized[] = [
  {
    vi: 'Biến tầm nhìn thành hiện thực bằng code.',
    en: 'Turning Vision Into Reality With Code.',
  },
  {
    vi: 'Frontend Technical Leader.',
    en: 'Frontend Technical Leader.',
  },
]

export const heroOverview: Localized = {
  vi: 'Frontend Technical Leader với hơn 4 năm kinh nghiệm thiết kế kiến trúc frontend mở rộng và dẫn dắt đội ngũ kỹ thuật. Có thành tích triển khai các nền tảng bán lẻ và doanh nghiệp phức tạp bằng React/Next.js, cùng tư duy sản phẩm mạnh, tập trung vào tối ưu hiệu năng và chất lượng code.',
  en: 'Frontend Technical Leader with 4+ years of experience designing scalable frontend architectures and leading engineering teams. Proven track record delivering complex retail and enterprise platforms with React/Next.js, with a strong Product Mindset focused on performance optimization and code quality.',
}

// Chỉ số nổi bật (CV: 4+ năm, lead 5+ người, e-learning bán 100+ khách)
export const stats: { number: number; suffix: string; text: Localized }[] = [
  {
    number: 4,
    suffix: '+',
    text: { vi: 'Năm kinh nghiệm', en: 'Years of Experience' },
  },
  {
    number: 15,
    suffix: '+',
    text: { vi: 'Dự án đã triển khai', en: 'Projects Delivered' },
  },
  {
    number: 5,
    suffix: '+',
    text: { vi: 'Thành viên dẫn dắt', en: 'Team Members Led' },
  },
  {
    number: 100,
    suffix: '+',
    text: { vi: 'Khách hàng trả phí', en: 'Paying Customers' },
  },
]

// Điều hướng
export const navItems: { id: string; href: string; label: Localized }[] = [
  { id: 'home', href: '#home', label: { vi: 'Trang chủ', en: 'Home' } },
  { id: 'about', href: '#about', label: { vi: 'Giới thiệu', en: 'About' } },
  { id: 'project', href: '#project', label: { vi: 'Dự án', en: 'Projects' } },
  { id: 'contact', href: '#contact', label: { vi: 'Liên hệ', en: 'Contact' } },
]

// Tiêu đề các section
export const sectionTitles = {
  aboutEyebrow: { vi: 'Về tôi', en: 'About Me' } as Localized,
  aboutTyped: [
    { vi: 'Chào mừng đến với hồ sơ của tôi!', en: 'Welcome to my profile!' },
    { vi: 'Tốt hơn mỗi ngày, hoàn thiện hơn!', en: 'Be better, be complete!' },
  ] as Localized[],
  biography: { vi: 'Tiểu sử', en: 'Biography' } as Localized,
  skills: { vi: 'Kỹ năng & Chuyên môn', en: 'Skills & Expertise' } as Localized,
  experience: {
    vi: 'Kinh nghiệm & Học vấn',
    en: 'Experience & Education',
  } as Localized,
  awards: { vi: 'Giải thưởng', en: 'Awards' } as Localized,
  projects: { vi: 'Dự án của tôi', en: 'My Projects' } as Localized,
  contact: { vi: 'Liên hệ', en: 'Get In Touch' } as Localized,
}

// Tiểu sử (About) — theo CV: Tech Lead, 4+ năm, dẫn dắt 5+ người
export const biography: Localized[] = [
  {
    vi: 'Xin chào, tôi là Trần Ngọc Nhật — Frontend Technical Leader tại TP. Hồ Chí Minh. Với hơn 4 năm kinh nghiệm chuyên sâu trong hệ sinh thái React/Next.js, tôi đam mê xây dựng các ứng dụng web hiệu năng cao và dẫn dắt đội ngũ phát triển.',
    en: "Hi, I'm Tran Ngoc Nhat — a Frontend Technical Leader based in Ho Chi Minh City. With 4+ years of hands-on experience in the React/Next.js ecosystem, I'm passionate about building high-performance web applications and leading development teams.",
  },
  {
    vi: 'Tại Mona Media, tôi đảm nhận vai trò Tech Lead: định hình giải pháp kỹ thuật, chốt công nghệ và kiến trúc cho từng dự án, dẫn dắt đội 5+ thành viên qua phân chia công việc, mentoring và code review. Tôi đã xây dựng nền tảng thương mại điện tử, ERP và e-learning theo nguyên tắc OOP, Design Patterns và S.O.L.I.D.',
    en: 'At Mona Media, I act as Tech Lead: defining technical solutions, finalizing the tech stack and architecture for each project, and leading a team of 5+ members through task allocation, mentoring, and code reviews. I have built e-commerce, ERP, and e-learning platforms following OOP, Design Patterns, and S.O.L.I.D principles.',
  },
]

export const biographyQuote: Localized = {
  vi: '"Thiết kế không chỉ là làm cho mọi thứ đẹp mắt — đó là giải quyết vấn đề và tạo ra trải nghiệm trực quan, thú vị cho người dùng."',
  en: '"Design is about more than just making things look pretty — it\'s about solving problems and creating intuitive, enjoyable experiences for users."',
}

// Liên hệ
export const contactInfo: {
  type: 'email' | 'phone' | 'location' | 'linkedin' | 'github'
  label: Localized
  value: string
  href: string | null
}[] = [
  {
    type: 'email',
    label: { vi: 'Email', en: 'Email' },
    value: 'ngocnhat2k1@gmail.com',
    href: 'mailto:ngocnhat2k1@gmail.com',
  },
  {
    type: 'phone',
    label: { vi: 'Điện thoại', en: 'Phone' },
    value: '+84 395 115 641',
    href: 'tel:+84395115641',
  },
  {
    type: 'location',
    label: { vi: 'Địa chỉ', en: 'Location' },
    value: 'Tân Bình, Ho Chi Minh City, Vietnam',
    href: null,
  },
  {
    type: 'linkedin',
    label: { vi: 'LinkedIn', en: 'LinkedIn' },
    value: 'tran-ngoc-nhat-109a06279',
    href: 'https://www.linkedin.com/in/tran-ngoc-nhat-109a06279/',
  },
  {
    type: 'github',
    label: { vi: 'GitHub', en: 'GitHub' },
    value: 'github.com/ngocnhat2k1',
    href: 'https://github.com/ngocnhat2k1',
  },
]

export const socials = {
  github: 'https://github.com/ngocnhat2k1',
  linkedin: 'https://www.linkedin.com/in/tran-ngoc-nhat-109a06279/',
  facebook: 'https://www.facebook.com/ngocnhat2k1',
}

// Các chuỗi UI dùng lại nhiều nơi
export const ui = {
  resume: { vi: 'Tải CV', en: 'Resume' } as Localized,
  downloadResume: { vi: 'Tải CV của tôi', en: 'Download My Resume' } as Localized,
  contactMe: { vi: 'Liên hệ tôi', en: 'Contact Me' } as Localized,
  getInTouch: { vi: 'Liên hệ', en: 'Get in Touch' } as Localized,
  availableForWork: {
    vi: 'Sẵn sàng nhận việc',
    en: 'Available for work',
  } as Localized,
  sendMessage: { vi: 'Gửi tin nhắn', en: 'Send Message' } as Localized,
  sendMeMessage: { vi: 'Gửi tin nhắn cho tôi', en: 'Send me a message' } as Localized,
  yourName: { vi: 'Tên của bạn', en: 'Your name' } as Localized,
  subject: { vi: 'Tiêu đề', en: 'Subject' } as Localized,
  yourMessage: { vi: 'Lời nhắn của bạn...', en: 'Your message...' } as Localized,
  contactIntro: {
    vi: 'Vui lòng liên hệ trực tiếp với tôi qua',
    en: 'Please contact me directly at',
  } as Localized,
  contactOrForm: {
    vi: 'hoặc qua biểu mẫu này.',
    en: 'or through this form.',
  } as Localized,
  contactLead: {
    vi: 'Tôi luôn sẵn sàng cho cơ hội mới, hợp tác hoặc đơn giản là một cuộc trò chuyện thân thiện. Hãy liên hệ qua bất kỳ kênh nào bên dưới.',
    en: "I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out via any channel below.",
  } as Localized,
  knowMore: {
    vi: 'Muốn biết thêm về kinh nghiệm của tôi?',
    en: 'Want to know more about my experience?',
  } as Localized,
  work: { vi: 'Công việc', en: 'Work' } as Localized,
  education: { vi: 'Học vấn', en: 'Education' } as Localized,
  role: { vi: 'Vai trò', en: 'Role' } as Localized,
  copyright: {
    vi: 'Bảo lưu mọi quyền.',
    en: 'All Rights Reserved.',
  } as Localized,
}
