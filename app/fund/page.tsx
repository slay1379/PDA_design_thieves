"use client"

import { useState, useEffect } from "react"
import "./styles.scss";

export default function ShinhanFundPage() {
  return (
    <div className="fund-page">
      <div className="top-bg-pattern" style={{backgroundImage: 'url(/bg_top.gif)', backgroundRepeat: 'no-repeat', backgroundPosition: 'center top', backgroundSize: 'cover'}}></div>
      {/* 헤더 상단 바 */}
      <header className="top-header">
        <div className="container header-flex">
          <div className="logo">
            <img src="/logo.png" alt="신한투자증권" />
          </div>
          <div className="top-menu">
            <a href="#">로그인</a>
            <span>|</span>
            <a href="#">계좌개설</a>
            <span>|</span>
            <a href="#">ID 등록</a>
            <span>|</span>
            <a href="#">인증센터</a>
            <span>|</span>
            <a href="#">신한Premier</a>
            <span>|</span>
            <a href="#">퇴직연금</a>
            <span>|</span>
            <a href="#">GIB</a>
            <span>|</span>
            <a href="#">Tops Club</a>
            <span>|</span>
            <a href="#">소비자보호포털</a>
            <span>|</span>
            <a href="#">상품공시실</a>
          </div>
        </div>
      </header>
      {/* 상단 네비게이션 바 */}
      <nav className="main-nav">
        <div className="container">
          <ul className="nav-menu">
            <li><a href="#">나의 자산분석</a></li>
            <li><a href="#">자산관리몰</a></li>
            <li><a href="#">연금자산</a></li>
            <li><a href="#">트레이딩</a></li>
            <li><a href="#">투자정보</a></li>
            <li><a href="#">뱅킹·공모주·업무</a></li>
            <li><a href="#">고객센터</a></li>
          </ul>
        </div>
        <div className="container sub-nav">
          <ul>
            <li><a href="#">자산관리몰</a></li>
            <li><a href="#">추천상품/서비스</a></li>
            <li><a href="#">인기 판매 랭킹</a></li>
          </ul>
        </div>
      </nav>
      {/* 메인 컨텐츠 */}
      <main className="main-content">
        <div className="container">
          {/* 중앙정렬 타이틀 */}
          <h1 className="page-title">펀드상세</h1>
          <div className="divider"></div>
          {/* 펀드 상세 제목 및 코드 */}
          <section className="fund-header">
            <div className="header-grid" style={{display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center'}}>
              {/* 왼쪽: 추천 이미지 */}
              <span className="badge recommend"><img src="/bg_badge-theme.png" alt="추천" /></span>
              {/* 오른쪽: 세 행 */}
              <div className="fund-header-right" style={{display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start'}}>
                {/* 1행: badge들 */}
                <div className="fund-badges">
                  <span className="badge">낮은위험</span>
                  <span className="badge">국내채권</span>
                  <span className="badge">수수료미징구</span>
                  <span className="badge">온라인</span>
                  <span className="badge">계열사펀드</span>
                </div>
                {/* 2행: fund-name, fund-code */}
                <div style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                  <span className="fund-name">신한초단기채증권투자신탁 [채권]C-e</span>
                  <span className="fund-code">2138304</span>
                </div>
                {/* 3행: 클래스더보기 */}
                <div>
                  <a href="#" className="class-more">클래스더보기 +</a>
                </div>
              </div>
            </div>
          </section>
          {/* 펀드 정보/수익률 */}
          <section className="fund-info-section">
            <div className="fund-info-grid">
              {/* 왼쪽: 수익률/차트 */}
              <div className="fund-yield-block w-full max-w-[420px]">
                {/* 수익률 탭 */}
                <div className="yield-tabs flex border-b border-gray-200 mb-4">
                  <button className="active text-[#1a2952] font-bold text-base pb-2 border-b-4 border-[#1a2952] mr-8">수익률(1개월)</button>
                  <button className="text-gray-400 font-bold text-base pb-2 border-b-4 border-transparent">수익률(3개월)</button>
                </div>
                {/* 수익률 값 */}
                <div className="yield-value text-[3rem]  text-[#e53935] flex items-baseline mb-2">
                  0.25<span className="unit text-[2rem] font-bold ml-1">%</span>
                </div>
                {/* 차트 */}
                <div className="yield-chart-mock w-full flex justify-center items-end" style={{height: '180px'}}>
                  <AnimatedChart />
                </div>
              </div>
              {/* 오른쪽: 정보 표 */}
              <div className="fund-meta-block space-y-4 bg-white rounded-lg shadow p-4">
                {/* 1행 */}
                <div className="grid grid-cols-2 gap-x-8 py-2 border-b">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500">기준가 <span className="meta-date">(2025.05.23기준)</span></span>
                    <div className="flex justify-between">
                        <span className="text-2xl font-bold text-[#1a237e]">1,028.64</span>
                        <span className="text-base font-bold text-blue-500 align-top">▼ 7.21</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-gray-500">제로인등급/유형</span>
                    <div className="flex justify-between">
                        <span className="stars text-lg text-gray-400">★★★★★</span>
                        <span className="text-base text-blue-800">초단기채권</span>
                    </div>
                  </div>
                </div>
                {/* 2행 */}
                <div className="grid grid-cols-2 gap-x-8 py-[26px] px-0 border-b">
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">펀드총규모</span>
                    <span className="text-3xl font-bold">21,525 <span className="text-base font-normal">억원</span></span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs text-gray-500">클래스규모</span>
                    <span className="text-3xl font-bold">5,108 <span className="text-base font-normal">억원</span></span>
                  </div>
                </div>
                {/* 3행 */}
                <div className="grid grid-cols-2 gap-x-8 py-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between"><span className="text-xs text-gray-500">설정일</span><span>2024.05.24</span></div>
                    <div className="flex justify-between"><span className="text-xs text-gray-500">보수</span><span>0.230%</span></div>
                    <div className="flex justify-between"><span className="text-xs text-gray-500">환매수수료</span><span>없음</span></div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between"><span className="text-xs text-gray-500">운용사</span><span>신한자산운용</span></div>
                    <div className="flex justify-between"><span className="text-xs text-gray-500">선취수수료</span><span>없음</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

// AnimatedChart 컴포넌트 추가
function AnimatedChart() {
  const chartPoints = [
    "0,150", "30,120", "60,135", "90,105", "120,120", "150,90", "180,105", "210,80", "240,90", "270,65", "300,70", "330,50", "360,55", "390,35", "420,40"
  ];
  const [visiblePoints, setVisiblePoints] = useState(1);

  useEffect(() => {
    if (visiblePoints < chartPoints.length) {
      const timer = setTimeout(() => setVisiblePoints(visiblePoints + 1), 40);
      return () => clearTimeout(timer);
    }
  }, [visiblePoints]);

  return (
    <svg width="420" height="160">
      <rect x="0" y="0" width="420" height="160" fill="none" stroke="#e0e0e0" strokeWidth="1" rx="8"/>
      <polyline
        fill="none"
        stroke="#2b7cff"
        strokeWidth="3"
        points={chartPoints.slice(0, visiblePoints).join(" ")}
      />
      <g fontSize="14" fill="#888">
        <text x="40" y="175">2025.04.28</text>
        <text x="180" y="175">2025.05.14</text>
        <text x="340" y="175">2025.05.27</text>
      </g>
    </svg>
  );
}
