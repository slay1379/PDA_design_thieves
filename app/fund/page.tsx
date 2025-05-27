"use client"

import { useState } from "react"
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
              <div className="fund-yield-block">
                <div className="yield-tabs">
                  <button className="active">수익률 (1개월)</button>
                  <button>수익률 (3개월)</button>
                </div>
                <div className="yield-value">
                  <span className="percent">0.24</span><span className="unit">%</span>
                </div>
                <div className="yield-chart-mock">
                  {/* 실제 차트 대신 스타일로 대체 */}
                  <svg width="120" height="80">
                    <polyline
                      fill="none"
                      stroke="#2b7cff"
                      strokeWidth="3"
                      points="0,80 10,75 20,70 30,60 40,55 50,50 60,40 70,35 80,30 90,20 100,10 110,5 120,0"
                    />
                  </svg>
                </div>
              </div>
              {/* 오른쪽: 정보 표 */}
              <div className="fund-meta-block">
                <table className="fund-meta-table">
                  <tr>
                    <th>기준가 <span className="meta-date">(2025.05.23기준)</span></th>
                    <th>제로인등급/유형</th>
                    <th>펀드총규모</th>
                    <th>클래스규모</th>
                  </tr>
                  <tr>
                    <td className="meta-strong">1,028.64 <span className="meta-down">▼7.21</span></td>
                    <td><span className="stars">★★★★★</span><span className="meta-type">초단기채권</span></td>
                    <td className="meta-strong">21,525 <span className="meta-unit">억원</span></td>
                    <td className="meta-strong">5,108 <span className="meta-unit">억원</span></td>
                  </tr>
                  <tr>
                    <th>설정일</th>
                    <th>보수</th>
                    <th>판매수수료</th>
                    <th>운용사</th>
                  </tr>
                  <tr>
                    <td>2024.05.24</td>
                    <td>0.230%</td>
                    <td>없음</td>
                    <td>신한자산운용</td>
                  </tr>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
