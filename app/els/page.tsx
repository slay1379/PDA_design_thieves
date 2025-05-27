"use client"

import { useState } from "react"
import { Search, User, Menu, Home, Star, Printer, Share2, ChevronUp } from "lucide-react"
import Image from 'next/image';

export default function ShinhanELSPage() {
  const [searchType, setSearchType] = useState("전체")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const handleProductSelect = (productId: string) => {
    setSelectedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const elsProducts = [
    {
      id: "USD26508",
      name: "공모ELS USD26508호",
      tags: ["매출증가형", "원금보호형"],
      underlyingAssets: "EURO STOXX 50, NIKKEI225, S&P 500",
      couponRate: "7.70%",
      knockInBarrier: "-100.00%",
      observationPeriod: "매거듭 스텝다운 형 (85-85-85-80-75-50, 노낙인)",
      duration: "3.0년",
      subscriptionPeriod: "매 6개월마다 조기상환기회",
      startDate: "2025.05.23",
      endDate: "2025.05.27",
      maturityDate: "2025.05.30",
      finalDate: "2025.05.28",
    },
    {
      id: "USD26506",
      name: "공모ELS USD26506호",
      tags: ["매출증가형", "원금보호형"],
      underlyingAssets: "AMAZON COM INC, Meta Platforms Inc, NVIDIA Corp",
      couponRate: "11.00%",
      knockInBarrier: "-100.00%",
      observationPeriod: "수익배리어 스텝다운 형 (78-78-78-78-75-75-75-75-70-70-70-60,40 KI)",
      duration: "3.0년",
      subscriptionPeriod: "매 6개월마다 조기상환기회",
      startDate: "2025.05.22",
      endDate: "2025.05.27",
      maturityDate: "2025.05.30",
      finalDate: "2025.05.28",
    },
    {
      id: "USD26503",
      name: "공모ELS USD26503호",
      tags: ["매출증가형", "원금보호형"],
      underlyingAssets: "EURO STOXX 50, 코스피 200, S&P 500",
      couponRate: "7.20%",
      knockInBarrier: "-100.00%",
      observationPeriod: "수익배리어 스텝다운 형 (95-95-95-92-92-91-91-88-88-88-85, 노낙인)",
      duration: "3.0년",
      subscriptionPeriod: "매 6개월마다 조기상환기회",
      startDate: "2025.05.22",
      endDate: "2025.05.27",
      maturityDate: "2025.05.30",
      finalDate: "2025.05.28",
    },
    {
      id: "USD26501",
      name: "공모ELS USD26501호",
      tags: ["매출증가형", "원금보호형"],
      underlyingAssets: "EURO STOXX 50, 코스피 200, S&P 500",
      couponRate: "7.02%",
      knockInBarrier: "-100.00%",
      observationPeriod: "수익배리어 스텝다운 형 (95-95-95-92-92-87-87-85, 노낙인)",
      duration: "3.0년",
      subscriptionPeriod: "매 6개월마다 조기상환기회",
      startDate: "2025.05.22",
      endDate: "2025.05.27",
      maturityDate: "2025.05.30",
      finalDate: "2025.05.28",
    },
    {
      id: "USD26498",
      name: "공모ELS USD26498호",
      tags: ["매출증가형", "원금보호형"],
      underlyingAssets: "EURO STOXX 50, 코스피 200, S&P 500",
      couponRate: "9.10%",
      knockInBarrier: "-100.00%",
      observationPeriod: "스텝다운 형 (85-85-85-80-75-65, 노낙인)",
      duration: "3.0년",
      subscriptionPeriod: "매 6개월마다 조기상환기회",
      startDate: "2025.05.22",
      endDate: "2025.05.27",
      maturityDate: "2025.05.30",
      finalDate: "2025.05.28",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          {/* Top Navigation */}
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <div className="flex space-x-4">
              <span className="cursor-pointer hover:text-gray-800">로그인</span>
              <span className="cursor-pointer hover:text-gray-800">계좌개설</span>
              <span className="cursor-pointer hover:text-gray-800">모바일</span>
              <span className="cursor-pointer hover:text-gray-800">인증센터</span>
              <span className="cursor-pointer hover:text-gray-800">신한Premier</span>
              <span className="cursor-pointer hover:text-gray-800">법인고객</span>
              <span className="cursor-pointer hover:text-gray-800">CIB</span>
              <span className="cursor-pointer hover:text-gray-800">Tops Club</span>
              <span className="cursor-pointer hover:text-gray-800">신한경영컨설팅</span>
              <span className="cursor-pointer hover:text-gray-800">상품공시실</span>
            </div>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              {/* <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
              </div> */}
              
              <img src="/logo.png" alt='신한투자증권'/>
             


              <nav className="flex space-x-8 text-gray-700 font-medium">
                <span className="cursor-pointer hover:text-blue-600">나의자산현황</span>
                <span className="cursor-pointer hover:text-blue-600">자산관리솔</span>
                <span className="cursor-pointer hover:text-blue-600">연금자산</span>
                <span className="cursor-pointer hover:text-blue-600">트레이딩</span>
                <span className="cursor-pointer hover:text-blue-600">투자정보</span>
                <span className="cursor-pointer hover:text-blue-600">뱅킹/공모주/연금</span>
                <span className="cursor-pointer hover:text-blue-600">고객센터</span>
              </nav>
            </div>

            <div className="flex items-center space-x-2">
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors">
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <span className="cursor-pointer hover:text-gray-800">자산관리솔</span>
            <span>&gt;</span>
            <span className="cursor-pointer hover:text-gray-800">ELS/DLS</span>
            <span>&gt;</span>
            <span className="text-gray-900 font-medium">청약중인 상품</span>
            <div className="ml-auto flex items-center space-x-2">
              <Star className="w-4 h-4 cursor-pointer hover:text-yellow-500" />
              <Printer className="w-4 h-4 cursor-pointer hover:text-gray-800" />
              <Share2 className="w-4 h-4 cursor-pointer hover:text-gray-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">청약중인 상품</h1>

        {/* Tab Navigation */}
        <div className="flex mb-8">
          <button className="px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 font-medium">전체상품</button>
          <button className="px-6 py-3 bg-gray-100 border border-gray-300 text-gray-600 hover:bg-gray-200 transition-colors">
            청약잔량정보
          </button>
        </div>

        {/* Search Section */}
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <div className="flex items-center space-x-8 mb-4">
            <span className="font-medium text-gray-700 min-w-fit">구분</span>
            <div className="flex space-x-6">
              {["전체", "ELS/ELB", "DLS/DLB", "개인일반투자자 청약가능"].map((type) => (
                <label key={type} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="searchType"
                    value={type}
                    checked={searchType === type}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="text-blue-600"
                  />
                  <span className="text-gray-700">{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700 min-w-fit">상품명</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder=""
            />
            <button className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors font-medium">
              검색
            </button>
          </div>

          <div className="mt-4 text-sm text-blue-600">
            <span className="font-medium">• 숙지사항 :</span> 개인 일반투자자의 경우 ELS/DLS 청약 후 최소 2영업일 동안
            숙려기간을 가져야 하며, 숙려기간 종료 후 청약 철회권을 동의 철회 없이 행사 시 해당 청약이 완료됩니다. 상품
            별 숙려기간, 청약기간 별도안내(시행 대상자는 신규 청약고객, 이해관계인 청약 제한 등을 확인)
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mb-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50 transition-colors">
            <span>비교하기</span>
          </button>
          <div className="flex space-x-4">
            <button className="text-blue-600 hover:underline font-medium">자세히보기</button>
            <button className="text-gray-600 hover:underline">카드보기 보기</button>
          </div>
        </div>

        {/* Products Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1200px]">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 whitespace-nowrap">선택</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">상품명</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">기초자산</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    <div>특정조건</div>
                    <div>충족시</div>
                    <div>(세전, %)</div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">
                    {/* <div>조건미충족시</div> */}
                    <div style={{ whiteSpace: 'nowrap' }}>조건미충족시</div>
                    <div>(원대손실형)</div>
                  </th>
                  {/* <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">상품유형</th> */}
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">상품유형</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">만기</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">청약기간</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-gray-700">숙려기간</th>
                </tr>
              </thead>
              <tbody>
                {elsProducts.map((product, index) => (
                  <tr key={product.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        checked={selectedProducts.includes(product.id)}
                        onChange={() => handleProductSelect(product.id)}
                        className="rounded border-gray-300"
                      />
                    </td>
                    {/* <td className="px-4 py-4">
                      <div className="flex flex-col">
                        <div className="flex space-x-1 mb-2">
                          {product.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-2 py-1 text-xs rounded font-medium ${
                                tag === "매출증가형"
                                  ? "bg-red-100 text-red-600 border border-red-200"
                                  : "bg-blue-100 text-blue-600 border border-blue-200"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="font-medium text-blue-600 hover:underline cursor-pointer">{product.name}</span>
                      </div>
                    </td> */}
                    <td className="px-4 py-4">
                  <div className="flex flex-col">
                    <div className="flex space-x-1 mb-2">
                      {product.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 py-1 rounded font-medium whitespace-nowrap text-[10px] ${
                            tag === "매출증가형"
                              ? "bg-red-100 text-red-600 border border-red-200"
                              : "bg-blue-100 text-blue-600 border border-blue-200"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="font-medium text-blue-600 hover:underline cursor-pointer">{product.name}</span>
                  </div>
                </td>

                    <td className="px-4 py-4">
                      <div className="text-sm text-gray-700 table-content-multiline">{product.underlyingAssets}</div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="font-medium text-lg">{product.couponRate}</span>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <span className="text-red-600 font-medium">{product.knockInBarrier}</span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="text-sm table-content-multiline max-w-xs">{product.observationPeriod}</div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="text-sm">
                        <div className="font-medium">{product.duration}</div>
                        <div className="text-gray-600 mt-1">{product.subscriptionPeriod}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      <div className="font-medium">{product.startDate} ~</div>
                      <div className="mt-1">{product.endDate}</div>
                    </td>
                    <td className="px-4 py-4 text-center text-sm">
                      <div className="font-medium">{product.maturityDate} ~</div>
                      <div className="mt-1">{product.finalDate}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notice Section */}
        <div className="mt-12 mb-8">
          <div className="notice-box">
            <ul className="notice-list">
              <li>이 안내문은 청약의 권유를 목적으로 하지 않으며, 청약의 권유는 (예비 · 간이)투자설명서에 따릅니다.</li>
              <li>
                당사는 이 금융투자상품에 관하여 충분히 설명할 의무가 있으며, 투자자는 투자에 앞서 그러한 설명을 충분히
                들으시기 바랍니다.
              </li>
              <li className="bold">
                이 금융투자상품은 자산가치 변동, 환율변동, 신용등급 하락 등에 따라 투자원금의 손실(0~100%)이 발생할 수
                있으며, 그 손실은 투자자에게 귀속됩니다.
              </li>
              <li className="bold">
                투자자는 금융투자상품에 대하여 충분한 설명을 받을 권리가 있으며, 투자 전 상품설명서 및 약관을 반드시
                읽어보시기 바랍니다.
              </li>
              <li className="bold">이 금융상품은 예금자보호법에 따라 보호되지 않습니다.</li>
              <li>ELS/DLS는 파생결합증권으로서 기초자산의 성과에 연동하여 수익구조가 결정되는 상품입니다.</li>
              <li>중도상환 시 시장상황에 따라 투자원금보다 낮은 금액으로 상환될 수 있습니다.</li>
              <li>
                발행회사의 신용위험에 노출되어 있어 발행회사의 파산, 부도 등의 경우 투자원금 전액 손실이 가능합니다.
              </li>
              <li>해외 기초자산에 투자하는 상품의 경우 환율변동 위험이 있습니다.</li>
              <li>
                청약 전 투자설명서, 간이투자설명서를 반드시 읽어보시고 상품의 구조와 위험요인을 충분히 이해하신 후
                투자결정을 하시기 바랍니다.
              </li>
              <li>과거의 운용실적이 미래의 수익률을 보장하지 않습니다.</li>
              <li>투자자는 해당 금융투자상품에 대해 금융상품판매업자로부터 충분한 설명을 들을 권리가 있습니다.</li>
            </ul>
            <p className="authInfo">※신한투자증권 준법감시인 심사필 제24-1271호(2024년 07월01일 - 2025년 07월 01일)</p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="fixed bottom-8 right-8">
          <button className="bg-gray-600 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors">
            <ChevronUp className="w-5 h-5" />
            <div className="text-xs mt-1 font-medium">TOP</div>
          </button>
        </div>
      </main>
    </div>
  )
}
