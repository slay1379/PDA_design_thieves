"use client"

import { useState } from "react"
import { Search, User, Menu, Home, Star, Printer, Share2, ChevronUp } from "lucide-react"
import "./styles.scss";

export default function ShinhanELSPage() {
  

  return (<div className="fund-page">
  
    <div className="top-bg-pattern"></div>

    {/* <!-- 헤더 상단 바 --> */}
    <header className="top-header">
        <div className="container header-flex">
            <div className="logo">
                <img src="images/shinhan-logo.png" alt="신한투자증권"/>
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
            <div className="header-icons">
                <a href="#"><i className="fas fa-user"></i></a>
                <a href="#"><i className="fas fa-search"></i></a>
            </div>
        </div>
    </header>

    {/* <!-- 상단 네비게이션 바 --> */}
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

    {/* <!-- 메인 컨텐츠 --> */}
    <main className="main-content">
        <div className="container">
            {/* <!-- 중앙정렬 타이틀 --> */}
            <h1 className="page-title">펀드상세</h1>
            <div className="divider"></div>

            {/* <!-- 펀드 상세 제목 및 코드 --> */}
            <section className="fund-header">
                <span className="badge recommend"><i className="fas fa-award"></i> 추천</span>
                <div className="fund-title-row">
                    
                    <div className="fund-badges">
                        <span className="badge">낮은위험</span>
                        <span className="badge">국내채권</span>
                        <span className="badge">수수료미징구</span>
                        <span className="badge">온라인</span>
                        <span className="badge">계열사펀드</span>
                    </div>
                </div>
                <div className="fund-title-main">
                    <span className="fund-name">신한초단기채증권투자신탁 [채권]C-e</span>
                    <span className="fund-code">2138304</span>
                    <a href="#" className="search-icon"><i className="fas fa-search"></i></a>
                    <a href="#" className="class-more">클래스더보기 +</a>
                    <span className="fund-type">초단기채권</span>
                </div>
            </section>

            {/* <!-- 펀드 정보/수익률 --> */}
            <section className="fund-info-section">
                <div className="fund-info-grid">
                    {/* <!-- 왼쪽: 수익률/차트 --> */}
                    <div className="fund-yield-block">
                        <div className="yield-tabs">
                            <button className="active">수익률 (1개월)</button>
                            <button>수익률 (3개월)</button>
                        </div>
                        <div className="yield-value">
                            <span className="percent">0.24</span><span className="unit">%</span>
                        </div>
                        <canvas id="fundChart"></canvas>
                    </div>
                    {/* <!-- 오른쪽: 정보 표 --> */}
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

    {/* <!-- 오른쪽 고정 사이드 메뉴 --> */}
    <aside className="side-menu">
        <div className="side-circle">
            <i className="fas fa-headset"></i>
            <span>투자상담문의</span>
        </div>
        <div className="side-circle">
            <i className="fas fa-history"></i>
            <span>오늘 본 펀드</span>
        </div>
        <div className="side-circle">
            <i className="fas fa-star"></i>
            <span>관심펀드</span>
        </div>
        <button className="side-circle top-btn">
            <i className="fas fa-arrow-up"></i>
        </button>
    </aside>

    </div>
    )
}
