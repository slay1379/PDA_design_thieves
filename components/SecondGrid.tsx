"use client"

import { useState } from "react"
import { rankingData } from "@/data/ranking"

export default function SecondGrid() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="bg-white py-16">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center mb-8">
          <div className="w-1 h-6 bg-[#0078D4] mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-900">판매금액기준</h2>
        </div>

        {/* Ranking Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 펀드 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#0078D4]">펀드</h3>
            <div className="space-y-4">
              {rankingData.funds.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded">
                  <div className="text-lg font-bold text-[#0078D4] min-w-[24px]">{index + 1}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">{item.title}</h4>
                    <div className="text-sm text-[#0078D4] font-semibold">{item.amount}억 원</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ELS·DLS */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#1B365D]">ELS·DLS</h3>
            <div className="space-y-4">
              {rankingData.els.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded">
                  <div className="text-lg font-bold text-[#1B365D] min-w-[24px]">{index + 1}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">{item.title}</h4>
                    <div className="text-sm text-[#1B365D] font-semibold">{item.amount}억 원</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 랩 Wrap */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b-2 border-[#7A6BD0]">랩 Wrap</h3>
            <div className="space-y-4">
              {rankingData.wrap.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded">
                  <div className="text-lg font-bold text-[#7A6BD0] min-w-[24px]">{index + 1}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">{item.title}</h4>
                    <div className="text-sm text-[#7A6BD0] font-semibold">{item.amount}억 원</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button onClick={() => setShowMore(!showMore)} className="text-[#0078D4] hover:text-[#0057A5] font-medium">
            {showMore ? "접기 ▲" : "더보기 ▼"}
          </button>
        </div>
      </div>
    </section>
  )
}
