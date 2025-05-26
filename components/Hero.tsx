"use client"

import { useState } from "react"

export default function Hero() {
  const [activeTab, setActiveTab] = useState("1개월")
  const [activeCriteria, setActiveCriteria] = useState("판매금액기준")
  const [activeCategory, setActiveCategory] = useState("펀드")

  const tabs = ["1주", "1개월", "3개월", "6개월", "1년"]
  const criteria = ["판매금액기준", "매수고객수 기준"]
  const categories = ["전체", "펀드", "ELS/DLS", "랩(Wrap)"]

  return (
    <section className="relative h-screen min-h-[600px]">
      {/* Hero Background - 전체 화면 덮기 */}
      <div 
        className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ backgroundPosition: 'center top' }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Main Content - 헤더와 겹침 */}
        <div className="flex flex-col items-center text-white text-center pt-40 pb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">인기판매랭킹</h1>
          <p className="text-lg lg:text-xl mb-12">신한투자증권 베스트 상품을 확인해보세요!</p>

          {/* Criteria Pills */}
          <div className="flex space-x-2 mb-12">
            {criteria.map((criterion) => (
              <button
                key={criterion}
                onClick={() => setActiveCriteria(criterion)}
                className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCriteria === criterion
                    ? "bg-white text-[#0078D4] shadow-lg border-0"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {criterion}
              </button>
            ))}
          </div>

          {/* Period Tabs */}
          <div className="flex space-x-8 mb-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm font-medium transition-all duration-200 ${
                  activeTab === tab 
                    ? "text-white font-bold border-b-2 border-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Ranking Cards */}
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {/* 펀드 카드 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#0078D4] text-white p-6 relative min-h-[220px] flex flex-col">
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-30">1</div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">낮은위험</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">해외주식</span>
                  </div>
                  <h3 className="text-lg font-bold mb-auto leading-tight">
                    신한BNPP 미국배당다우존스 증권상장지수<br/>투자신탁[주식-해외]
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm opacity-80 mb-1">판매액</p>
                    <p className="text-3xl font-bold">1,247<span className="text-sm font-normal ml-1">억 원</span></p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 flex gap-2">
                  <button className="flex-1 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center gap-1">
                    <span>☰</span> 상세
                  </button>
                  <button className="flex-1 py-2 text-sm text-[#0078D4] bg-white border border-[#0078D4] rounded hover:bg-blue-50 flex items-center justify-center gap-1">
                    <span>🛒</span> 매수
                  </button>
                </div>
              </div>

              {/* ELS/DLS 카드 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#4A5568] text-white p-6 relative min-h-[220px] flex flex-col">
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-30">1</div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">원금보장</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">해외지수</span>
                  </div>
                  <h3 className="text-lg font-bold mb-auto leading-tight">
                    신한투자증권 제2024-123호 ELS<br/>(KOSPI200, 유로스톡스50 연계)
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm opacity-80 mb-1">판매액</p>
                    <p className="text-3xl font-bold">2,156<span className="text-sm font-normal ml-1">억 원</span></p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4">
                  <button className="w-full py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center gap-1">
                    <span>☰</span> 상품목록
                  </button>
                </div>
              </div>

              {/* 랩 카드 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-[#9333EA] text-white p-6 relative min-h-[220px] flex flex-col">
                  <div className="absolute top-4 right-4 text-6xl font-bold opacity-30">1</div>
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">자문운용형</span>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs">프리미엄</span>
                  </div>
                  <h3 className="text-lg font-bold mb-auto leading-tight">
                    신한 프리미엄 자문운용형 랩어카운트
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm opacity-80 mb-1">판매액</p>
                    <p className="text-3xl font-bold">3,456<span className="text-sm font-normal ml-1">억 원</span></p>
                  </div>
                </div>
                <div className="bg-gray-50 p-4">
                  <button className="w-full py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 flex items-center justify-center gap-1">
                    <span>☰</span> 상세
                  </button>
                </div>
              </div>
            </div>

            {/* Disclaimers */}
            <div className="text-center text-sm text-white/90 space-y-1 mb-6">
              <p>※ 상기 랭킹은 신한투자증권 판매실적 기준이며, 과거 수익률이 미래 수익률을 보장하지 않습니다.</p>
              <p>※ 투자 전 상품설명서를 취급하시기 전에 투자자께서는 본주, 수수료 및 위험관련 등에 관하여 (간이)투자설명서를 반드시 읽어보시기 바랍니다.</p>
              <p>※ 펀드 투자시 원금손실 가능성이 있으며, 운용결과에 따라 손익이 결정됩니다.</p>
            </div>

            {/* Category Tabs */}
            <div className="flex justify-center space-x-8 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`pb-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? "text-white font-bold border-b-2 border-[#0078D4]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 반응형 높이 조정 */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 60vh;
            min-height: 500px;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1279px) {
          section {
            height: 80vh;
            min-height: 600px;
          }
        }
        
        @media (min-width: 1280px) {
          section {
            height: 100vh;
            min-height: 700px;
          }
        }
      `}</style>
    </section>
  )
}