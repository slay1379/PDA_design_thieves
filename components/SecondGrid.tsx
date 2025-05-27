"use client"

import { useState } from "react"
import { rankingData } from "@/data/ranking"

export default function SecondGrid() {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="bg-white py-16">
      <div className="overflow-hidden w-[980px] mx-auto">
        {/* Section Title */}
        <div className="flex items-center mb-8">
          <div className="w-1 h-6 bg-[#0078D4] mr-3"></div>
          <h2 className="text-2xl font-bold text-gray-900">판매금액기준</h2>
        </div>

        {/* Card Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 펀드 */}
          <div className="border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* 카테고리 헤더 */}
            <h3 className="w-full h-[46px] pl-[30px] text-[21px] font-semibold leading-[46px] text-[#1598dc] border-b-4 border-[#1598dc] bg-white">펀드</h3>
            
            {/* 카드들 */}
            <div className="space-y-0">
              {rankingData.funds.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`relative w-full h-[285px] pt-[70px] px-[40px] pb-0 box-border bg-white ${
                    index < rankingData.funds.slice(0, showMore ? 5 : 3).length - 1 ? 'border-b border-gray-200' : ''
                  }`}
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
                  <div className="absolute bottom-6 left-10 right-10 flex gap-1">
                    <button 
                      className="text-center text-black bg-white border border-gray-400 inline-block relative overflow-visible m-0 whitespace-nowrap align-middle box-content"
                      style={{
                        width: '80px',
                        height: '26px',
                        lineHeight: '26px',
                        padding: '1px 8px 0 8px',
                        fontSize: '14px',
                        borderRadius: '2px',
                        fontFamily: 'nanumB, 돋움, Dotum, 굴림, Gulim'
                      }}
                    >
                      상세
                    </button>
                    <button 
                      className="text-center text-white bg-[#0078D4] border border-[#0078D4] inline-block relative overflow-visible m-0 whitespace-nowrap align-middle box-content hover:bg-[#0056b3]"
                      style={{
                        width: '80px',
                        height: '26px',
                        lineHeight: '26px',
                        padding: '1px 8px 0 8px',
                        fontSize: '14px',
                        borderRadius: '2px',
                        fontFamily: 'nanumB, 돋움, Dotum, 굴림, Gulim'
                      }}
                    >
                      매수
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ELS·DLS */}
          <div className="border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* 카테고리 헤더 */}
            <h3 className="w-full h-[46px] pl-[30px] text-[21px] font-semibold leading-[46px] text-[#587cc5] border-b-4 border-[#587cc5] bg-white">ELS·DLS</h3>
            
            {/* 카드들 */}
            <div className="space-y-0">
              {rankingData.els.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`relative w-full h-[285px] pt-[70px] px-[40px] pb-0 box-border bg-white ${
                    index < rankingData.els.slice(0, showMore ? 5 : 3).length - 1 ? 'border-b border-gray-200' : ''
                  }`}
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
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <button 
                      className="text-center text-black bg-white border border-gray-400 inline-block relative overflow-visible m-0 whitespace-nowrap align-middle box-content"
                      style={{
                        width: '120px',
                        height: '26px',
                        lineHeight: '26px',
                        padding: '1px 8px 0 8px',
                        fontSize: '14px',
                        borderRadius: '2px',
                        fontFamily: 'nanumB, 돋움, Dotum, 굴림, Gulim'
                      }}
                    >
                      상품목록
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 랩 Wrap */}
          <div className="border border-gray-200 bg-white shadow-sm overflow-hidden">
            {/* 카테고리 헤더 */}
            <h3 className="w-full h-[46px] pl-[30px] text-[21px] font-semibold leading-[46px] text-[#896cbc] border-b-4 border-[#896cbc] bg-white">랩 Wrap</h3>
            
            {/* 카드들 */}
            <div className="space-y-0">
              {rankingData.wrap.slice(0, showMore ? 5 : 3).map((item, index) => (
                <div 
                  key={index} 
                  className={`relative w-full h-[285px] pt-[70px] px-[40px] pb-0 box-border bg-white ${
                    index < rankingData.wrap.slice(0, showMore ? 5 : 3).length - 1 ? 'border-b border-gray-200' : ''
                  }`}
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
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <button 
                      className="text-center text-black bg-white border border-gray-400 inline-block relative overflow-visible m-0 whitespace-nowrap align-middle box-content"
                      style={{
                        width: '120px',
                        height: '26px',
                        lineHeight: '26px',
                        padding: '1px 8px 0 8px',
                        fontSize: '14px',
                        borderRadius: '2px',
                        fontFamily: 'nanumB, 돋움, Dotum, 굴림, Gulim'
                      }}
                    >
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