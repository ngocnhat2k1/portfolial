'use client'

import React from 'react'

// Interface định nghĩa các props cho Terminal Component
export interface ITerminalProps {
  // Tiêu đề của cửa sổ Terminal (ví dụ: biography.md, system_status.json)
  title?: string
  // Lệnh giả lập chạy trên Terminal (ví dụ: cat biography.md)
  command?: string
  // Nội dung bên trong Terminal
  children: React.ReactNode
  // Class CSS bổ sung bên ngoài
  className?: string
}

const Terminal: React.FC<ITerminalProps> = ({
  title = 'bash',
  command,
  children,
  className = '',
}) => {
  return (
    <div
      className={`w-full overflow-hidden border border-[var(--c-border)] bg-[#0e0e0e] shadow-2xl transition-all duration-300 ${className}`}
      style={{
        borderRadius: 'var(--r-xl)', // Sử dụng biến border radius động theo theme
      }}
    >
      {/* Terminal Header Bar */}
      <div className="relative flex items-center justify-between border-b border-[var(--c-border)] bg-[#161616] px-4 py-3 select-none">
        {/* Ba nút điều khiển cửa sổ kiểu macOS (Đỏ, Vàng, Xanh) */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        </div>

        {/* Tiêu đề ở giữa thanh Header */}
        <div className="absolute inset-x-0 mx-auto w-fit text-xs font-mono text-[var(--c-text-muted)] font-medium">
          {title}
        </div>

        {/* Góc phải (trống hoặc có thể hiển thị trạng thái) */}
        <div className="text-[10px] font-mono text-[var(--c-text-muted)] opacity-60">
          zsh
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm leading-relaxed text-[var(--c-text)]">
        {/* Hiển thị câu lệnh giả lập chạy nếu có */}
        {command && (
          <div className="mb-4 flex items-center gap-2 text-xs sm:text-sm text-[var(--c-text-muted)] select-none">
            <span className="text-[var(--c-secondary)] font-bold">ngocnhat ~ %</span>
            <span className="text-[var(--c-text)]">{command}</span>
          </div>
        )}

        {/* Nội dung chính */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}

export default Terminal
