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
        <div className="absolute inset-0 bg-black/15"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        {/* Main Content - 상단 여백 확보, 투명도 조정 */}
        <div className="flex flex-col pt-[256px] text-center text-white/95">
          <h1 className="relative text-[36px] font-semibold leading-[36px] mb-[20px] text-center text-white z-10">인기판매랭킹</h1>
          <p className="text-lg lg:text-xl mb-12">신한투자증권 베스트 상품을 확인해보세요!</p>

          {/* Controls Layout - 좌우 분할 */}
          <div className="w-full max-w-[980px] mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 mb-6">

            {/* Left Side - Criteria Pills */}
            <div className="flex space-x-1">
              {criteria.map((criterion, index) => (
                <button
                  key={criterion}
                  onClick={() => setActiveCriteria(criterion)}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-200 ${activeCriteria === criterion
                    ? "bg-white text-black font-bold shadow-lg"
                    : "border border-white text-white/90 bg-transparent hover:bg-white/10"
                    }`}
                >
                  {criterion}
                </button>
              ))}
            </div>

            {/* Right Side - Period Tabs in gray pill */}
            <div className="bg-white/20 rounded-full px-10 py-2 backdrop-blur-sm">
              <div className="flex space-x-10 text-sm tracking-wide">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-1 transition-all duration-200 ${activeTab === tab
                      ? "text-white font-bold"
                      : "text-white/70 hover:text-white"
                      }`}
                  >
                    {activeTab === tab && (
                      <>
                        <span className="absolute -left-3 top-0 text-white">✓</span>
                        <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-white"></span>
                      </>
                    )}
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Ranking Cards */}
          <div className="max-w-[1200px] mx-auto px-4 w-full">
            <div className="flex justify-center gap-6 mb-8">
              {/* 펀드 카드 */}
              <div className="w-[310px] bg-white shadow-xl overflow-hidden">
                <div className="bg-[#1598dc] text-white relative h-[289px] p-[20px] box-border flex flex-col">
                  {/* 작은 숫자 1 */}
                  <div className="absolute top-4 right-4 text-3xl font-bold text-gray-800/30">1</div>

                  {/* 카테고리 헤더 */}
                  <p className="text-base font-semibold leading-4 pb-[15px] mb-4 text-left">
                    펀드
                  </p>
                  {/* 얇은 가로 라인 */}
                  <div className="w-full h-px bg-white/20 mb-4"></div>

                  <div className="flex gap-2 mb-4">
                    <span className="border border-white/40 px-2 py-1 rounded text-xs">낮은위험</span>
                    <span className="border border-white/40 px-2 py-1 rounded text-xs">국내주식</span>
                  </div>
                  <h3 className="text-[21px] font-medium leading-[26px] mb-6 text-left">
                    신한초단기채증권투자신탁<br />[채권]C-e
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm opacity-80 mb-1 text-left">판매액</p>
                    <p className="text-3xl font-bold text-left">719<span className="text-sm font-normal ml-1">억원</span></p>
                  </div>
                </div>
                {/* 전체 흰색 footer */}
                <footer className="flex w-full h-14 bg-white divide-x divide-gray-300 text-sm text-gray-700">
                  <button className="flex-1 flex items-center justify-center gap-1 hover:bg-gray-50 text-gray-700">
                    <span>⋯</span> <span>상세</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 hover:bg-blue-50 text-[#1598dc]">
                    <span>⋯</span> <span>매수</span>
                  </button>
                </footer>
              </div>

              {/* ELS/DLS 카드 */}
              <div className="w-[310px] bg-white shadow-xl overflow-hidden">
                <div className="bg-[#587cc5] text-white relative h-[289px] p-[20px] box-border flex flex-col">
                  {/* 작은 숫자 1 */}
                  <div className="absolute top-4 right-4 text-3xl font-bold text-gray-800/30">1</div>

                  {/* 카테고리 헤더 */}
                  <p className="text-base font-semibold leading-4 pb-[15px] mb-4 text-left">
                    ELS/DLS
                  </p>
                  {/* 얇은 가로 라인 */}
                  <div className="w-full h-px bg-white/20 mb-4"></div>

                  <div className="flex gap-2 mb-4">
                    <span className="border border-white/40 px-2 py-1 rounded text-xs">원금보장</span>
                    <span className="border border-white/40 px-2 py-1 rounded text-xs">해외지수</span>
                  </div>
                  <h3 className="text-[21px] font-medium leading-[26px] mb-6 text-left">
                    EURO STOXX 50, 코스피<br />200, S&P 500
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm opacity-80 mb-1 text-left">판매액</p>
                    <p className="text-3xl font-bold text-left">279<span className="text-sm font-normal ml-1">억원</span></p>
                  </div>
                </div>
                {/* 전체 흰색 footer */}
                <footer className="flex w-full h-14 bg-white text-sm">
                  <button className="w-full flex items-center justify-center gap-1 hover:bg-gray-50 text-gray-700">
                    <span>⋯</span> <span>상품목록</span>
                  </button>
                </footer>
              </div>

              {/* 랩 카드 */}
              <div className="w-[310px] bg-white shadow-xl overflow-hidden">
                <div className="bg-[#896cbc] text-white relative h-[289px] p-[20px] box-border flex flex-col">
                  {/* 작은 숫자 1 */}
                  <div className="absolute top-4 right-4 text-3xl font-bold text-gray-800/30">1</div>

                  {/* 카테고리 헤더 */}
                  <p className="text-base font-semibold leading-4 pb-[15px] mb-4 text-left">
                    랩(Wrap)
                  </p>
                  {/* 얇은 가로 라인 */}
                  <div className="w-full h-px bg-white/20 mb-4"></div>

                  <div className="flex gap-2 mb-4">
                    <span className="border border-white/40 px-2 py-1 rounded text-xs">대출운용형</span>
                    <span className="border border-white/40 px-2 py-1 rounded text-xs">자문운용형</span>
                  </div>
                  <h3 className="text-[21px] font-medium leading-[26px] mb-6 text-left">
                    프로PB랩 마스터후취형
                  </h3>
                  <div className="mt-auto">
                    <p className="text-sm opacity-80 mb-1 text-left">판매액</p>
                    <p className="text-3xl font-bold text-left">61<span className="text-sm font-normal ml-1">억원</span></p>
                  </div>
                </div>
                {/* 전체 흰색 footer */}
                <footer className="flex w-full h-14 bg-white text-sm">
                  <button className="w-full flex items-center justify-center gap-1 hover:bg-gray-50 text-gray-700">
                    <span>⋯</span> <span>상세</span>
                  </button>
                </footer>
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
                  className={`pb-2 text-sm font-medium transition-all duration-200 ${activeCategory === category
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
          
          .bg-white\\/20 {
            overflow-x: auto;
            white-space: nowrap;
          }
          
          .bg-white\\/20 > div {
            display: inline-flex;
            min-width: max-content;
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