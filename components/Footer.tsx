import { Phone, MessageCircle, HelpCircle, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      {/* Service Icons Bar */}
      <div className="h-30 bg-gray-50 border-b">
        <div className="max-w-[1320px] mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-3xl font-bold text-[#0078D4] mr-8">1588-0365</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="w-18 h-18 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <Phone className="w-6 h-6 text-[#0078D4]" />
                </div>
                <span className="text-xs text-gray-600">원격제어</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-18 h-18 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <HelpCircle className="w-6 h-6 text-[#0078D4]" />
                </div>
                <span className="text-xs text-gray-600">FAQ</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-18 h-18 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <MessageCircle className="w-6 h-6 text-[#0078D4]" />
                </div>
                <span className="text-xs text-gray-600">1:1상담</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-18 h-18 bg-white rounded-lg shadow-sm flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6 text-[#0078D4]" />
                </div>
                <span className="text-xs text-gray-600">업무안내</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Row */}
      <div className="py-4 border-b">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4">
            <a href="#" className="hover:text-[#0078D4]">
              회사소개
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#0078D4]">
              EN
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#0078D4]">
              인증센터
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#0078D4]">
              개인정보처리방침
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#0078D4]">
              이용약관
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#0078D4]">
              고객정보취급방침
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Row */}
      <div className="py-6">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-xs text-gray-500 space-y-1">
              <p>서울특별시 영등포구 여의대로 70 (여의도동) 신한투자증권주식회사</p>
              <p>대표이사 : 이상곤 | 사업자등록번호 : 116-81-36684</p>
              <p>Copyright © Shinhan Investment Corp. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="w-16 h-8 bg-gray-300 rounded flex items-center justify-center text-xs">WA Award</div>
              <div className="w-20 h-8 bg-gray-300 rounded flex items-center justify-center text-xs">One Shinhan</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
