interface RankingCardProps {
  category: string
  data: any
  color: "blue" | "navy" | "purple"
  rank: number
}

export default function RankingCard({ category, data, color, rank }: RankingCardProps) {
  const colorClasses = {
    blue: {
      stripe: "bg-[#0078D4]",
      text: "text-[#0078D4]",
    },
    navy: {
      stripe: "bg-[#1B365D]",
      text: "text-[#1B365D]",
    },
    purple: {
      stripe: "bg-[#7A6BD0]",
      text: "text-[#7A6BD0]",
    },
  }

  const colors = colorClasses[color]

  return (
    <div className="bg-white rounded-lg shadow-[0_8px_24px_rgba(0,0,0,.15)] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Color Stripe */}
      <div className={`h-1 ${colors.stripe}`}></div>

      <div className="px-6 pt-8 pb-10 relative h-full flex flex-col">
        {/* ① L-모양 번호 (수정됨) */}
        <span className="absolute top-4 right-4 text-xl font-medium text-[#1F1F1F]">
          {rank}
          {/* 세로 꼬리 */}
          <span className="block absolute top-0 -right-2 w-px h-6 bg-[#1F1F1F]"/>
          {/* 가로 라인 */}
          <span className="block absolute -bottom-6 left-0 w-full h-px bg-[#1F1F1F]"/>
        </span>

        {/* Category Title */}
        <div className="text-sm font-semibold text-gray-700 mb-3">{category}</div>

        {/* ② 진한 가로 divider (수정됨) */}
        <div className="w-full h-px bg-[#1F1F1F] mb-4"></div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.badges.map((badge: any, index: number) => (
            <span key={index} className={`px-2 py-1 text-xs rounded border`}>
              {badge.text}
            </span>
          ))}
        </div>

        {/* Product Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 flex-grow">{data.title}</h3>

        {/* Sales Amount */}
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-1">판매액</div>
          <div className="flex items-baseline">
            <span className={`text-3xl font-bold ${colors.text}`}>{data.amount}</span>
            <span className="text-base text-gray-600 ml-1">억 원</span>
          </div>
        </div>

        {/* ④⑤ 새로운 Footer - 전체폭 분할 버튼 (수정됨) */}
        <footer className="flex w-full h-14 bg-white divide-x divide-gray-300 text-sm -mx-6 -mb-10">
          <button className="flex-1 flex items-center justify-center gap-1 hover:bg-gray-50">
            <span>⋯</span> <span>상세</span>
          </button>
          <button className={`flex-1 flex items-center justify-center gap-1 hover:bg-blue-50 ${colors.text}`}>
            <span>⋯</span> <span>매수</span>
          </button>
        </footer>
      </div>
    </div>
  )
}