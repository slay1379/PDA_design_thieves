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

        {/* Card Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 펀드 */}
          <div>
            <div className="space-y-0">
              {/* 카테고리 헤더를 첫 번째 카드와 붙임 */}
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-[#0078D4] bg-white px-4 py-2 rounded-t-lg">펀드</h3>
              {rankingData.funds.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`relative w-[308px] h-[285px] pt-[70px] px-[40px] pb-0 border border-gray-200 border-t-4 border-t-[#1598dc] box-border bg-white shadow-sm ${
                    index === 0 ? 'rounded-t-none border-t-0' : ''
                  } ${index === rankingData.funds.slice(0, showMore ? 5 : 3).length - 1 ? 'rounded-b-lg' : 'border-b-0'}`}
                  style={{ listStyle: 'none' }}
                >
                  {/* 랭킹 번호 */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-gray-300">
                    {index + 1}
                  </div>
                  
                  {/* 배지들 */}
                  <div className="flex gap-2 mb-4">
                    {item.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-2 py-1 text-xs rounded border ${
                          badge.color === 'blue' ? 'border-blue-300 text-blue-600' : 'border-red-300 text-red-600'
                        }`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  {/* 상품명 */}
                  <h4 className="font-medium text-gray-900 text-sm mb-4 leading-5">
                    {item.title}
                  </h4>

                  {/* 판매액 */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-1">판매액</div>
                    <div className="text-2xl font-bold text-[#0078D4]">
                      {item.amount}<span className="text-sm font-normal ml-1">억원</span>
                    </div>
                  </div>

                  {/* 버튼들 - 하단 고정 */}
                  <div className="absolute bottom-0 left-0 right-0 flex border-t border-gray-200">
                    <button className="flex-1 py-3 text-sm text-gray-700 bg-white hover:bg-gray-50 border-r border-gray-200">
                      상세
                    </button>
                    <button className="flex-1 py-3 text-sm text-white bg-[#0078D4] hover:bg-[#0056b3]">
                      매수
                    </button>
                  </div>
                </div>
                              ))}
            </div>
          </div>

          {/* ELS·DLS */}
          <div>
            <div className="space-y-0">
              {/* 카테고리 헤더를 첫 번째 카드와 붙임 */}
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-[#1B365D] bg-white px-4 py-2 rounded-t-lg">ELS·DLS</h3>
              {rankingData.els.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`relative w-[308px] h-[285px] pt-[70px] px-[40px] pb-0 border border-gray-200 border-t-4 border-t-[#1B365D] box-border bg-white shadow-sm ${
                    index === 0 ? 'rounded-t-none border-t-0' : ''
                  } ${index === rankingData.els.slice(0, showMore ? 5 : 3).length - 1 ? 'rounded-b-lg' : 'border-b-0'}`}
                  style={{ listStyle: 'none' }}
                >
                  {/* 랭킹 번호 */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-gray-300">
                    {index + 1}
                  </div>
                  
                  {/* 배지들 */}
                  <div className="flex gap-2 mb-4">
                    {item.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-2 py-1 text-xs rounded border ${
                          badge.color === 'blue' ? 'border-blue-300 text-blue-600' : 'border-red-300 text-red-600'
                        }`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  {/* 상품명 */}
                  <h4 className="font-medium text-gray-900 text-sm mb-4 leading-5">
                    {item.title}
                  </h4>

                  {/* 판매액 */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-1">판매액</div>
                    <div className="text-2xl font-bold text-[#1B365D]">
                      {item.amount}<span className="text-sm font-normal ml-1">억원</span>
                    </div>
                  </div>

                  {/* 버튼들 - 하단 고정 */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200">
                    <button className="w-full py-3 text-sm text-gray-700 bg-white hover:bg-gray-50">
                      상품목록
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 랩 Wrap */}
          <div>
            <div className="space-y-0">
              {/* 카테고리 헤더를 첫 번째 카드와 붙임 */}
              <h3 className="text-lg font-semibold text-gray-900 pb-2 border-b-2 border-[#7A6BD0] bg-white px-4 py-2 rounded-t-lg">랩 Wrap</h3>
              {rankingData.wrap.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`relative w-[308px] h-[285px] pt-[70px] px-[40px] pb-0 border border-gray-200 border-t-4 border-t-[#7A6BD0] box-border bg-white shadow-sm ${
                    index === 0 ? 'rounded-t-none border-t-0' : ''
                  } ${index === rankingData.wrap.slice(0, showMore ? 5 : 3).length - 1 ? 'rounded-b-lg' : 'border-b-0'}`}
                  style={{ listStyle: 'none' }}
                >
                  {/* 랭킹 번호 */}
                  <div className="absolute top-4 right-4 text-4xl font-bold text-gray-300">
                    {index + 1}
                  </div>
                  
                  {/* 배지들 */}
                  <div className="flex gap-2 mb-4">
                    {item.badges.map((badge, badgeIndex) => (
                      <span 
                        key={badgeIndex}
                        className={`px-2 py-1 text-xs rounded border ${
                          badge.color === 'purple' ? 'border-purple-300 text-purple-600' : 'border-blue-300 text-blue-600'
                        }`}
                      >
                        {badge.text}
                      </span>
                    ))}
                  </div>

                  {/* 상품명 */}
                  <h4 className="font-medium text-gray-900 text-sm mb-4 leading-5">
                    {item.title}
                  </h4>

                  {/* 판매액 */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-500 mb-1">판매액</div>
                    <div className="text-2xl font-bold text-[#7A6BD0]">
                      {item.amount}<span className="text-sm font-normal ml-1">억원</span>
                    </div>
                  </div>

                  {/* 버튼들 - 하단 고정 */}
                  <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200">
                    <button className="w-full py-3 text-sm text-gray-700 bg-white hover:bg-gray-50">
                      상세
                    </button>
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