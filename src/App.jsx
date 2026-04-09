import { useState } from 'react'

const apps = [
  // 생활 생산성 (2026 먼저)
  {
    id: 2,
    emoji: '🌠',
    title: '카드뉴스 자동화 시스템',
    year: '2026',
    category: 'life',
    description: '밈 및 카드뉴스 제작을 위한 React 기반 웹 앱 · 이미지 배경 제거 및 압축 파일 처리 기능 포함',
    tags: ['React', 'Claude Code', 'Vercel'],
    color: '#F5F3FF',
    url: 'https://cardnews-app-pi.vercel.app/',
  },
  {
    id: 3,
    emoji: '💍',
    title: '인터랙티브 모바일 청첩장',
    year: '2026',
    category: 'life',
    description: '반려묘 퍼스널컬러 브랜딩 + RSVP 자동화, 풀스택 바이브코딩으로 기성 플랫폼 이상의 UI 구현',
    tags: ['Lovable', 'v0.dev', 'Claude', 'Supabase'],
    color: '#FFF7ED',
    url: 'https://wedding-invitation-mj.vercel.app/',
  },
  {
    id: 4,
    emoji: '👊',
    title: '펀칭 이미지 메이커',
    year: '2026',
    category: 'life',
    description: 'SNS 유행 펀칭 효과를 커스텀하고 고해상도로 저장할 수 있는 모바일 최적화 웹 툴',
    tags: ['React', 'Canvas API', 'Vercel'],
    color: '#F0FDF4',
    url: 'https://punching-image-maker-mj.vercel.app/',
  },
  {
    id: 1,
    emoji: '🗓️',
    title: '맞춤형 일정 관리 웹앱',
    year: '2025',
    category: 'life',
    description: '구글 Gemini로 나만의 업무 루틴에 최적화된 일정 관리 웹 앱 직접 개발 및 배포',
    tags: ['Gemini', 'Google Sheets', 'Vercel'],
    color: '#FFF1F2',
    url: 'https://daily-roadmap-todos-d92u.vercel.app/',
  },
  // 업무 생산성 (2026 먼저)
  {
    id: 5,
    emoji: '📩',
    title: '기자실 이메일 자동 전달 시스템',
    year: '2026',
    category: 'work',
    description: '매일 수신하는 대용량 첨부파일을 정규식으로 파싱해 기자실에 자동 전달하는 자동화 시스템',
    tags: ['Google Apps Script', 'Gmail API', 'Google Sheets'],
    color: '#FFFBEB',
    url: 'https://script.google.com/macros/s/AKfycbzPIMT833V8qo_eah5FMIiEkXQBHCCohwCNBrnqw2TG-6nIlzlF5zmgBaE8ndKB9Ahv/exec',
  },
  {
    id: 6,
    emoji: '📋',
    title: '작업물 기록 자동화',
    year: '2026',
    category: 'work',
    format: 'sheet',
    description: '영상 제작 요청·진행률 실시간 트래킹 및 SUMPRODUCT 기반 월간 성과 자동 집계 시스템',
    tags: ['Google Apps Script', 'Google Sheets'],
    color: '#ECFDF5',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSVH9KmqZJASA-8X5Wn96xsiej5Dfa8fmiREQjtp0Jo6ITB69YxepTB5E9PduXyr2kdlRqtlEphTXrg/pubhtml',
  },
  {
    id: 8,
    emoji: '✈️',
    title: '체계적인 여행 플래너',
    year: '2025',
    category: 'work',
    format: 'sheet',
    description: '실시간 환율 연동 + 동행자 실시간 협업을 위해 설계된 올인원 여행 관리 솔루션',
    tags: ['Google Sheets', '실시간 환율 API'],
    color: '#F0F9FF',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQcCdXDdM6t1_uv9gqKfRJWzOSeY6MmIAbS1Ok6UegO8ci9ruHhPNPwsj6CBLGmgo0QGmiS246wMXMs/pubhtml',
  },
  {
    id: 7,
    emoji: '📈',
    title: '글로벌 경제지표 트래커',
    year: '2025',
    category: 'work',
    format: 'sheet',
    description: '실시간 API 연동으로 거시경제 지표와 개인 자산을 한눈에 보는 올인원 트래킹 시트',
    tags: ['Google Sheets', 'API 연동'],
    color: '#EFF6FF',
    url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxq-mX6ACRv7pWKgkqThk_6VAHuoknBBS-J_7LgyQwk1hO4ocWaEg1I1bztW2gcBb0MF2hQbxv__mp/pubhtml',
  },
]

const FILTERS = [
  { id: 'all', label: '전체', count: apps.length },
  { id: 'life', label: '🏠 생활 생산성', count: apps.filter(a => a.category === 'life').length },
  { id: 'work', label: '💼 업무 생산성', count: apps.filter(a => a.category === 'work').length },
]

function AppCard({ app }) {
  const isSheet = app.format === 'sheet'

  return (
    <div className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col
      ${isSheet
        ? 'border border-dashed border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/60'
        : 'border border-gray-100 hover:shadow-lg hover:shadow-gray-200/60'
      }`}
    >
      {/* thumbnail */}
      <div
        className="h-36 flex items-center justify-center text-5xl select-none relative"
        style={{ backgroundColor: app.color }}
      >
        {app.emoji}
        {isSheet && (
          <span className="absolute top-3 right-3 text-[10px] font-medium bg-white/80 text-emerald-600 px-2 py-0.5 rounded-full border border-emerald-100">
            스프레드시트
          </span>
        )}
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm font-semibold text-gray-900 leading-snug">
            {app.title}
          </h3>
          <span className="shrink-0 text-[11px] text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded-full border border-gray-100">
            {app.year}
          </span>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed flex-1">
          {app.description}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {app.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                isSheet
                  ? 'bg-emerald-50 text-emerald-600'
                  : 'bg-indigo-50 text-indigo-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* link */}
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-xs font-medium transition-colors mt-1 ${
            isSheet
              ? 'text-emerald-600 hover:text-emerald-900'
              : 'text-indigo-600 hover:text-indigo-900'
          }`}
        >
          {isSheet ? '시트 열기' : '열어보기'}
          <span className="group-hover:translate-x-0.5 transition-transform inline-block">
            →
          </span>
        </a>
      </div>
    </div>
  )
}

export default function App() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? apps : apps.filter(a => a.category === active)

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans">

      {/* header */}
      <header className="max-w-3xl mx-auto px-6 pt-20 pb-14 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-indigo-500 bg-indigo-50 px-3 py-1.5 rounded-full mb-8 border border-indigo-100">
          🧪 AI 바이브코딩 실험실
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 tracking-tight mb-4">
          minjaja_lab
        </h1>

        <p className="text-gray-500 text-base sm:text-lg mb-10 leading-relaxed">
          일과 일상을 더 편하게 만들기 위해<br />
          AI와 함께 만들고 실험한 것들
        </p>

        <div className="flex items-center justify-center gap-3 flex-wrap">
          <a
            href="https://www.instagram.com/minjaja.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white px-5 py-2.5 rounded-full font-medium transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @minjaja.pdf
          </a>
          <a
            href="https://www.instagram.com/min_jaja_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white px-5 py-2.5 rounded-full font-medium transition-opacity hover:opacity-80"
            style={{ background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @min_jaja_
          </a>
        </div>
      </header>

      {/* filter */}
      <div className="flex justify-center gap-2 px-6 mb-10 flex-wrap">
        {FILTERS.map(f => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`text-sm px-4 py-2 rounded-full font-medium transition-all flex items-center gap-1.5 ${
              active === f.id
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-white border border-gray-200 text-gray-600 hover:border-indigo-200 hover:text-indigo-600'
            }`}
          >
            {f.label}
            <span className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono ${
              active === f.id
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-100 text-gray-400'
            }`}>
              {f.count}
            </span>
          </button>
        ))}
      </div>

      {/* grid */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(app => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>

        <p className="text-center text-xs text-gray-400 mt-16 font-mono">
          계속 실험 중 🧪 · minjaja_lab © 2026
        </p>
      </main>
    </div>
  )
}
