import { Phone, MessageCircle, HelpCircle, Clock, Facebook, Youtube, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      {/* Main Footer Content */}
      <div className="py-8 bg-white">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* Left Side - Contact Info */}
            <div className="flex-1">
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-2">고객지원센터</div>
                <div className="text-4xl font-bold text-[#0078D4] mb-4">1588-0365</div>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>평일오후 AI 상담서비스</div>
                  <div>24시간 목록 상담(신한 SOL증권)</div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="text-sm text-gray-600 space-y-1 mb-6">
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span>• 해외주식상담센터 02-3772-2525</span>
                  <span>• 연금신상담센터 1588-1122</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span>• 해외파생상품 02-3772-4365</span>
                  <span>• 디지털라인센터 02-3772-1010</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span>• 해외사용자 ARS</span>
                  <span>• 아태본 전용센터 02-3772-2220</span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-1">
                  <span>82-2-6255-4510 (무료)</span>
                  <span>• AI머어전용 상담센터</span>
                </div>
                <div>
                  <span>02-3772-1001</span>
                </div>
              </div>
            </div>

            {/* Right Side - Service Icons */}
            <div className="flex items-center space-x-6 lg:ml-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <Phone className="w-7 h-7 text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">원격제어</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <HelpCircle className="w-7 h-7 text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">FAQ</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <MessageCircle className="w-7 h-7 text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">1:1상담</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-white border border-gray-200 rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <Clock className="w-7 h-7 text-gray-600" />
                </div>
                <span className="text-sm text-gray-700">업무안내</span>
              </div>
            </div>
          </div>

          {/* Language and Family Site */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <button className="text-sm text-gray-600 hover:text-[#0078D4]">회사소개</button>
              <button className="text-sm text-gray-600 hover:text-[#0078D4]">EN</button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Family Site</span>
              <button className="text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 ml-6">
                <Facebook className="w-5 h-5 text-gray-400" />
                <div className="w-5 h-5 bg-gray-400 rounded text-white text-xs flex items-center justify-center">b</div>
                <MessageCircle className="w-5 h-5 text-gray-400" />
                <Youtube className="w-5 h-5 text-gray-400" />
                <Instagram className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-4">
            <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4">
              <a href="#" className="hover:text-[#0078D4]">인증센터</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">트래이딩 디스클로저</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">보안센터</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">자금세탁방지</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">전자민원접수</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">금융결제원</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">금융소비자보호교육</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">내부신고센터</a>
            </div>
            <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4 mt-2">
              <a href="#" className="hover:text-[#0078D4]">개인정보처리방침</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">신용정보활용체계</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">약관 및 유의사항</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">보호금융상품등록부</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">금융투자신용등급정보</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">투자권유관리</a>
              <span>•</span>
              <a href="#" className="hover:text-[#0078D4]">사이트맵</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div className="text-xs text-gray-500 space-y-1 flex-1">
              <p>서울특별시 영등포구 여의대로 96 (여의도동, TP Tower) | 대표이사 이상곤 | 사업자등록번호 116-81-36684</p>
              <p>COPYRIGHT©2016 SHINHAN SECURITIES CO., LTD. All Rights Reserved.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 lg:mt-0">
              <div className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold">
                WA<br/>WEBWARD<br/>IT WINNER
              </div>
              <div className="text-blue-600 font-bold text-lg">
                Shinhan
              </div>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-600">
                TOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}