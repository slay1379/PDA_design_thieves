"use client"

import { useState } from "react"
import { User, Search, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Top Blue Bar - 중앙 정렬 수정 */}
      <div className="bg-transparent text-white">
        <div className="relative w-[980px] h-[63px] mx-auto flex items-center">
          {/* 로고 - 왼쪽 정렬 */}
          <div className="absolute left-2 flex items-center">
            <Image
              src="/logo.png"
              alt="신한투자증권"
              width={189}
              height={33}
              className="object-contain"
            />
          </div>

          {/* 우측 메뉴들 - 오른쪽 정렬 */}
          <div className="absolute right-2 flex items-center flex-nowrap whitespace-nowrap space-x-3 text-xs font-normal">
            <a href="#" className="hover:text-white/80">로그인</a>
            <a href="#" className="hover:text-white/80">계좌개설</a>
            <a href="#" className="hover:text-white/80">ID 등록</a>
            <a href="#" className="hover:text-white/80">인증센터</a>
            <a href="#" className="hover:text-white/80">신한Premier</a>
            <a href="#" className="hover:text-white/80">퇴직연금</a>
            <a href="#" className="hover:text-white/80">GIB</a>
            <a href="#" className="hover:text-white/80">Tops Club</a>
            <a href="#" className="hover:text-white/80">소비자보호실</a>
            <a href="#" className="hover:text-white/80">상품공시실</a>
          </div>
        </div>
      </div>

      {/* Main GNB - 중앙 정렬 수정 */}
      <div className="absolute inset-x-0 w-full" style={{ top: '63px' }}>
        <div className="relative w-[980px] mx-auto bg-white h-[65px] flex items-center">
          {/* Desktop Navigation - padding-left: 35px 적용 */}
          <nav className="hidden lg:flex items-center w-[945px] pl-[35px] space-x-12">
            <a href="#" className="block w-[91px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              나의 자산분석
            </a>
            <a href="#" className="block w-[75px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              자산관리몰
            </a>
            <a href="#" className="block w-[58px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              연금자산
            </a>
            <a href="#" className="block w-[59px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              트레이딩
            </a>
            <a href="#" className="block w-[58px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              투자정보
            </a>
            <a href="#" className="block w-[116px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              뱅킹/공모주/업무
            </a>
            <a href="#" className="block w-[60px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
              고객센터
            </a>
          </nav>

          {/* Right Icons - 개발자 도구 스타일에 맞춤 */}
          <div className="absolute right-2 flex items-center space-x-0">
            <div className="hidden lg:flex items-center">
              {/* Person 아이콘 - 개발자 도구 스타일 적용 */}
              <button className="relative overflow-hidden block w-[65px] h-[65px] bg-[#1598dc] box-border m-0 p-0 border-0 outline-0 cursor-pointer font-nanumB">
                <span className="block indent-[-9999px]">사용자</span>
                <Image
                  src="/person.png"
                  alt=""
                  width={25}
                  height={25}
                  className="absolute top-5 left-5 z-10 object-contain"
                />
              </button>

              {/* Read Glasses 아이콘 */}
              <button className="relative overflow-hidden block w-[65px] h-[65px] bg-[#1598dc] box-border m-0 p-0 border-0 outline-0 cursor-pointer font-nanumB">
                <span className="block indent-[-9999px]">검색</span>
                <Image
                  src="/read_glases.png"
                  alt=""
                  width={25}
                  height={25}
                  className="absolute top-5 left-5 z-10 object-contain"
                />
              </button>

              {/* List Bar 버튼 */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative overflow-hidden block w-[65px] h-[65px] bg-[#1598dc] box-border m-0 p-0 border-0 outline-0 cursor-pointer font-nanumB"
              >
                <span className="block indent-[-9999px]">{isMobileMenuOpen ? "닫기" : "메뉴"}</span>
                <Image
                  src="/list_bar.png"
                  alt=""
                  width={25}
                  height={25}
                  className="absolute top-5 left-5 z-10 object-contain"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="w-[980px] mx-auto px-4">
              <nav className="py-4 space-y-3">
                <a href="#" className="block w-[91px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  나의 자산분석
                </a>
                <a href="#" className="block w-[75px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  자산관리몰
                </a>
                <a href="#" className="block w-[58px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  연금자산
                </a>
                <a href="#" className="block w-[59px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  트레이딩
                </a>
                <a href="#" className="block w-[58px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  투자정보
                </a>
                <a href="#" className="block w-[116px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  뱅킹/공모주/업무
                </a>
                <a href="#" className="block w-[60px] text-[#333] hover:text-[#0078D4] font-medium text-sm transition-colors relative">
                  고객센터
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Breadcrumb Bar - 중앙 정렬 수정 */}
      <div className="absolute inset-x-0" style={{ top: '128px' }}>
        <div className="w-[980px] mx-auto bg-[#F1F4F8] px-2 h-12 flex items-center justify-between">
          <nav className="flex items-center space-x-2 text-sm text-[#374151]">
            <span className="hover:text-[#0078D4] cursor-pointer">🏠</span>
            <span className="mx-2 text-gray-400">→</span>
            <span className="hover:text-[#0078D4] cursor-pointer">자산관리율</span>
            <span className="mx-2 text-gray-400">→</span>
            <span className="hover:text-[#0078D4] cursor-pointer">추천상품/서비스</span>
            <span className="mx-2 text-gray-400">→</span>
            <div className="flex items-center">
              <span className="text-[#0078D4] font-semibold border-b border-[#0078D4]">인기 판매 랭킹</span>
              <span className="ml-1 text-gray-400">▼</span>
            </div>
          </nav>
          <div className="hidden lg:flex items-center space-x-3 text-gray-500">
            <span className="cursor-pointer hover:text-gray-700">⭐</span>
            <span className="cursor-pointer hover:text-gray-700">🖨️</span>
            <span className="cursor-pointer hover:text-gray-700">↕️</span>
          </div>
        </div>
      </div>
    </header>
  )
}