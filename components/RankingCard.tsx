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
      button: "border-[#0078D4] text-[#0078D4] hover:bg-[#0078D4] hover:text-white",
    },
    navy: {
      stripe: "bg-[#1B365D]",
      text: "text-[#1B365D]",
      button: "border-[#1B365D] text-[#1B365D] hover:bg-[#1B365D] hover:text-white",
    },
    purple: {
      stripe: "bg-[#7A6BD0]",
      text: "text-[#7A6BD0]",
      button: "border-[#7A6BD0] text-[#7A6BD0] hover:bg-[#7A6BD0] hover:text-white",
    },
  }

  const colors = colorClasses[color]

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      {/* Color Stripe */}
      <div className={`h-1 ${colors.stripe}`}></div>

      <div className="p-6 relative h-full flex flex-col">
        {/* Rank Number */}
        <div className="absolute top-2 right-4 text-4xl font-bold text-[#6E7681]">{rank}</div>

        {/* Category Title */}
        <div className="text-sm font-semibold text-gray-700 mb-3">{category}</div>

        {/* Badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.badges.map((badge: any, index: number) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs rounded border ${
                badge.color === "blue"
                  ? "border-[#0078D4] text-[#0078D4]"
                  : badge.color === "red"
                    ? "border-red-500 text-red-500"
                    : "border-[#7A6BD0] text-[#7A6BD0]"
              }`}
            >
              {badge.text}
            </span>
          ))}
        </div>

        {/* Product Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2 flex-grow">{data.title}</h3>

        {/* Divider */}
        <div className="border-t border-gray-200 my-4"></div>

        {/* Sales Amount */}
        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-1">판매액</div>
          <div className="flex items-baseline">
            <span className={`text-3xl font-bold ${colors.text}`}>{data.amount}</span>
            <span className="text-base text-gray-600 ml-1">억 원</span>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="border-t border-gray-200 -mx-6 -mb-6">
          <div className="p-4 bg-white h-11 flex">
            {category === "ELS·DLS" ? (
              <button className={`flex-1 py-2 px-4 border rounded transition-colors ${colors.button}`}>상품목록</button>
            ) : (
              <div className="flex w-full space-x-2">
                <button className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded hover:bg-gray-50 transition-colors">
                  상세
                </button>
                <button className={`flex-1 py-2 px-4 border rounded transition-colors ${colors.button}`}>매수</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
