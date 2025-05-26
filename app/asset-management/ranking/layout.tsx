// app/ranking/layout.tsx

import type { ReactNode } from 'react'

export default function RankingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>; // 혹은 공통 Header/Footer 포함 가능
}
