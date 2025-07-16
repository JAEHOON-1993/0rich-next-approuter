import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 p-4">
      <div className="max-w-md mx-auto pt-8 pb-16">
        {/* 프로필 섹션 */}
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-black rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg overflow-hidden">
            <Image
              src="/logo.png"
              alt="0rich.com 로고"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">0rich.com</h1>
          <p className="text-white/90 text-sm mb-4">
            금융, 사업 분야에 특화된 영리치 (영앤리치) 도메인 판매
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
            <p className="text-lg font-semibold mb-2">
              💎 0rich.com 도메인 판매
            </p>
            <p className="text-sm opacity-90">
              영리치 (영앤리치) 발음의 금융, 사업, 재테크 특화 도메인입니다.
              한국에서 마지막 남은 S급 금융 특화 도메인을 미리 선점하세요.
              <br />
              <br />한 번 팔리면 다시 이 도메인을 선점할 수 없습니다. 이
              도메인을 취득하고 한국의 젊은 부자들을 위한 커뮤니티를 구축하세요.
            </p>
          </div>
        </div>

        {/* 연락처 링크 버튼들 */}
        <div className="space-y-4">
          {/* 이메일 */}
          <a
            href="mailto:supixlim@gmail.com"
            className="block w-full bg-white/95 hover:bg-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📧</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">이메일 문의</p>
                <p className="text-gray-600 text-sm">supixlim@gmail.com</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a>

          {/* 전화번호 */}
          {/* <a
            href="tel:+82-10-0000-0000"
            className="block w-full bg-white/95 hover:bg-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">📞</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">전화 상담</p>
                <p className="text-gray-600 text-sm">010-0000-0000</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a> */}

          {/* 카카오톡 */}
          <a
            href="https://open.kakao.com/me/gptman"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white/95 hover:bg-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">💬</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">카카오톡 상담</p>
                <p className="text-gray-600 text-sm">빠른 상담 가능</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a>

          {/* 텔레그램 */}
          <a
            href="https://t.me/kevinhan1987"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white/95 hover:bg-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">✈️</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">Telegram</p>
                <p className="text-gray-600 text-sm">International Inquiries</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a>

          {/* 링크드인 */}
          {/* <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white/95 hover:bg-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">💼</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">링크드인</p>
                <p className="text-gray-600 text-sm">비즈니스 네트워킹</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a> */}

          {/* 웹사이트 */}
          {/* <a
            href="https://0rich.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-white/95 hover:bg-white rounded-xl p-4 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">🌐</span>
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">웹사이트 방문</p>
                <p className="text-gray-600 text-sm">0rich.com</p>
              </div>
              <span className="text-gray-400">→</span>
            </div>
          </a> */}
        </div>

        {/* 하단 정보 */}
        <div className="text-center mt-8 text-white/80">
          <p className="text-sm mb-2">
            🚀 영리치 도메인으로 금융 특화 도메인을 선점하세요!
          </p>
          <p className="text-xs opacity-70">© 2025 0rich.com Domain Sales</p>
        </div>
      </div>
    </div>
  );
}
